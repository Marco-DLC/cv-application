import React, { useState } from "react";

export default function Form() {
  const [genInfo, setGenInfo] = useState({
    userName: "",
    userEmail: "",
    userPhoneNum: "",
  });

  return (
    <div className="cv-form">
      <form>
        <Field title="General Information">
          <Input
            label="Full Name"
            value={genInfo.userName}
            onChange={(e) =>
              setGenInfo({ ...genInfo, userName: e.target.value })
            }
          ></Input>
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
