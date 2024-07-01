import React, { useState } from "react";

export default function Form() {
  const [genInfo, setGenInfo] = useState({
    userName: { label: "Full Name", value: "" },
    userEmail: { label: "Email Address", value: "" },
    userPhoneNum: { label: "Phone Number", value: "" },
  });

  const [educationalInfo, setEducationalInfo] = useState({
    schoolName: { label: "School Name", value: "" },
    studyTitle: { label: "Title of Study", value: "" },
    studyDate: { label: "Date of Study", value: "" },
  });

  const [careerInfo, setCareerInfo] = useState({
    companyName: { label: "Company Name", value: "" },
    jobTitle: { label: "Job Title", value: "" },
    jobDesc: { label: "Job Responsibilities", value: "" },
    startDate: { label: "Start Date", value: "" },
    endDate: { label: "End Date", value: "" },
  });

  return (
    <div className="cv-form">
      <form>
        <h1>CV Application</h1>
        <Field title="General Information" info={genInfo}>
          <Input
            label="Full Name"
            value={genInfo.userName.value}
            onChange={(e) =>
              setGenInfo({
                ...genInfo,
                userName: { label: "Full Name", value: e.target.value },
              })
            }
          />
          <Input
            label="Email Address"
            value={genInfo.userEmail.value}
            onChange={(e) =>
              setGenInfo({
                ...genInfo,
                userEmail: { label: "Email Address", value: e.target.value },
              })
            }
          />
          <Input
            label="Phone Number"
            value={genInfo.userPhoneNum.value}
            onChange={(e) =>
              setGenInfo({
                ...genInfo,
                userPhoneNum: { label: "Phone Number", value: e.target.value },
              })
            }
          />
        </Field>

        <Field
          title="Education Experience"
          info={educationalInfo}
        >
          <Input
            label="School Name"
            value={educationalInfo.schoolName.value}
            onChange={(e) =>
              setEducationalInfo({
                ...educationalInfo,
                schoolName: { label: "School Name", value: e.target.value },
              })
            }
          />
          <Input
            label="Title of Study"
            value={educationalInfo.studyTitle.value}
            onChange={(e) =>
              setEducationalInfo({
                ...educationalInfo,
                studyTitle: { label: "Title of Study", value: e.target.value },
              })
            }
          />
          <Input
            label="Date of Study"
            value={educationalInfo.studyDate.value}
            onChange={(e) =>
              setEducationalInfo({
                ...educationalInfo,
                studyDate: { label: "Date of Study", value: e.target.value },
              })
            }
          />
        </Field>

        <Field
          title="Career Experience"
          info={careerInfo}
        >
          <Input
            label="Company Name"
            value={careerInfo.companyName.value}
            onChange={(e) =>
              setCareerInfo({
                ...careerInfo,
                companyName: { label: "Company Name", value: e.target.value },
              })
            }
          />
          <Input
            label="Job Title"
            value={careerInfo.jobTitle.value}
            onChange={(e) =>
              setCareerInfo({
                ...careerInfo,
                jobTitle: { label: "Job Title", value: e.target.value },
              })
            }
          />
          <Input
            label="Job Responsibilities"
            value={careerInfo.jobDesc.value}
            onChange={(e) =>
              setCareerInfo({
                ...careerInfo,
                jobDesc: {
                  label: "Job Responsibilities",
                  value: e.target.value,
                },
              })
            }
          />
          <Input
            label="Start Date"
            value={careerInfo.startDate.value}
            onChange={(e) =>
              setCareerInfo({
                ...careerInfo,
                startDate: { label: "Start Date", value: e.target.value },
              })
            }
          />
          <Input
            label="End Date"
            value={careerInfo.endDate.value}
            onChange={(e) =>
              setCareerInfo({
                ...careerInfo,
                endDate: { label: "End Date", value: e.target.value },
              })
            }
          />
        </Field>
      </form>
    </div>
  );
}

function Field({ children, title, info }) {
  const [isActive, setIsActive] = useState(true);
  function handleButton() {
    setIsActive(!isActive);
  }

  return (
    <div className="form-field">
      <h2>{title}</h2>
      <fieldset className={isActive ? "" : "display-none"}>{children}</fieldset>
      {!isActive && <SubmittedField info={info} />}

      <Button onClick={handleButton} text={isActive ? "Submit" : "Edit"} />
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <>
      <label>{label}: </label>
      <input value={value} onChange={onChange}></input>
    </>
  );
}

function Button({ text, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}

function SubmittedField({ info }) {
  return (
    <div className="submitted-field">
      {Object.entries(info).map(([key, { label, value }]) => (
        <p key={key}>
          <strong>{label}:</strong> {value}
        </p>
      ))}
    </div>
  );
}
