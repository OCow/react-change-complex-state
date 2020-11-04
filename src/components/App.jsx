import React from "react";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });

  function onChangeInput(event) {
    //destructure event.target object 
    const {value, name} = event.target; 
    
    setFullName((prevValue) => {
      if(name === "fName") {
        return {
          firstName: value, 
          lastName: prevValue.lastName 
        };
        } else if(name === "lName") {
          return {
            firstName: prevValue.firstName, 
            lastName: value 
          };
        }
      }
    ); 
  }

  return (
    <div className="container">
      <h1>Hello {fullName.firstName} {fullName.lastName}</h1>
      <form>
        <input onChange={onChangeInput} name="fName" value={fullName.firstName} placeholder="First Name" />
        <input onChange={onChangeInput} name="lName" value={fullName.lastName} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
