import React, { useState } from "react";
import FormData from "./FormData";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName
    }
    const allFormData = [...submittedData, formData]
    setSubmittedData(allFormData)
    setFirstName("");
    setLastName("");
  }

  function renderAllFormData() {
    return submittedData.map((data, index) => {
      return (
        <FormData key={index} lastName={data.lastName} firstName={data.firstName} />
      )
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {renderAllFormData()}
      </ul>
    </div>
  );
}

export default Form;
