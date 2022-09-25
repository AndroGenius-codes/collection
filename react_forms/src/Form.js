import {React, useState} from "react";
import SignUp from "./SignUp";
import SignupSucessful from "./SignupSucessful"

const Form = () => {
    const [submitted, setSubmitted] = useState(false);

    const submitForm = () => {
        setSubmitted(true);
      }
      return(
        <>
        <div>
            {!submitted ? <SignUp submitForm={submitForm} /> : <SignupSucessful /> 
            }
        </div>
        </>
      )
};

export default Form;