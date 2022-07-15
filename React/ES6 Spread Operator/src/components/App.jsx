import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    //below 3 sets of code are working the same

    /*if (name === "fName") {
      setContact((prevValue) => {
        return { fName: value, lName: prevValue.lName, email: prevValue.email };
      });
    } else if (name === "lName") {
      setContact((prevValue) => {
        return { fName: prevValue.fName, lName: value, email: prevValue.email };
      });
    } else {
      setContact((prevValue) => {
        return { fName: prevValue.fName, lName: prevValue.lName, email: value };
      });
    }*/

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

    //short form of above code
    //setContact((prevValue) => ({ ...prevValue, [name]: value }));
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
