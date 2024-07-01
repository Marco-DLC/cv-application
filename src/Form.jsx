import React, { useState } from "react";

export default function Form() {
  const [genInfo, setGenInfo] = useState({
    userName: "",
    userEmail: "",
    userPhoneNum: "",
  });

  const [educationalInfo, setEducationalInfo] = useState({
    schoolName: "",
    studyTitle: "",
    studyDate: "",
  });

  const [careerInfo, setCareerInfo] = useState({
    companyName: "",
    jobTitle: "",
    jobDesc: "",
    startDate: "",
    endDate: "",
  });

  return (
    <div className="cv-form">
      <form>
        <h1>CV Application</h1>
        <Field title="General Information">
          <Input
            label="Full Name"
            value={genInfo.userName}
            onChange={(e) =>
              setGenInfo({ ...genInfo, userName: e.target.value })
            }
          />
          <Input
            label="Email Address"
            value={genInfo.userEmail}
            onChange={(e) =>
              setGenInfo({ ...genInfo, userEmail: e.target.value })
            }
          />
          <Input
            label="Phone Number"
            value={genInfo.userPhoneNum}
            onChange={(e) =>
              setGenInfo({ ...genInfo, userPhoneNum: e.target.value })
            }
          />
        </Field>

        <Field title="Education Experience">
          <Input
            label="School Name"
            value={educationalInfo.schoolName}
            onChange={(e) =>
              setEducationalInfo({
                ...educationalInfo,
                schoolName: e.target.value,
              })
            }
          />
          <Input
            label="Title of Study"
            value={educationalInfo.studyTitle}
            onChange={(e) =>
              setEducationalInfo({
                ...educationalInfo,
                studyTitle: e.target.value,
              })
            }
          />
          <Input
            label="Date of Study"
            value={educationalInfo.studyDate}
            onChange={(e) =>
              setEducationalInfo({
                ...educationalInfo,
                studyDate: e.target.value,
              })
            }
          />
        </Field>

        <Field title="Career Experience">
          <Input
            label="Company Name"
            value={careerInfo.companyName}
            onChange={(e) =>
              setCareerInfo({ ...careerInfo, companyName: e.target.value })
            }
          />
          <Input
            label="Job Title"
            value={careerInfo.jobTitle}
            onChange={(e) =>
              setCareerInfo({ ...careerInfo, jobTitle: e.target.value })
            }
          />
          <Input
            label="Job Responsibilities"
            value={careerInfo.jobDesc}
            onChange={(e) =>
              setCareerInfo({ ...careerInfo, jobDesc: e.target.value })
            }
          />
          <Input
            label="Start Date"
            value={careerInfo.startDate}
            onChange={(e) =>
              setCareerInfo({ ...careerInfo, startDate: e.target.value })
            }
          />
          <Input
            label="End Date"
            value={careerInfo.endDate}
            onChange={(e) =>
              setCareerInfo({ ...careerInfo, endDate: e.target.value })
            }
          />
        </Field>
      </form>
    </div>
  );
}

function Field({ children, title }) {
  return (
    <div className="form-field">
      <h2>{title}</h2>
      <fieldset>{children}</fieldset>
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
