import React from "react";
import{ useState, useEffect } from "react"
import Validation from "./Validation";
import avatar from "./avatar.png"


const SignUp =({submitForm}) => {
    const [forms, setForms] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    
      });
      /*validation*/
      const [errors, setErrors] = useState({});
      /*check if form is submitted or not */
      const [correctData, setCorrectData] = useState(false);
    
    
    
      const handleSubmit = e => {
        e.preventDefault();
        setErrors(Validation(forms));
        setCorrectData(true);
    
      }  
      
      useEffect(() => {
        if(Object.keys(errors).length === 0 && correctData) {
          submitForm(true);
        }
      })
    
     const  handleChange = e => {
        e.preventDefault();
        setForms ({...forms, [e.target.name] : e.target.value,});
      }
    
    
      return (
      <>    
        <div style={{fontFamily:"roboto, serif"}} className="wrapper flex h-screen  items-center justify-center bg-gray-500">
          <div className="form-wrapper items-center flex justify-center w-full max-w-m">
            <form className="bg-white w-full md:w-1/3 shadow-md rounded-lg c px-8 pt-10 pb-8 mb-4"
            onSubmit={handleSubmit} noValidate >
              <div className="font-bold justify-center flex mt-2">
                 <img className="h-24 w-24 rounded-xl"
                  src={avatar} alt="avatar" />
              </div>
              <h1 className="font-bold justify-center items-center  flex my-2  text-blue-400 justify-center">CREATE ACCOUNT</h1>
    
              <div className=" flex-wrap justify-center  justify-center flex-col flex mt-3 -mx-3 mb-6">
                  <div className="w-full  px-3 mb-3 ">
                    <label className="block uppercase tracking-wide text-xs text-gray-600 text-sm font-medium mb-1"
                      htmlFor="grid-first-name">First Name:</label>
                    <input 
                      type="text"
                      className="block bg-gray-200 shadow appearance-none border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                      placeholder="First Name"
                      name="firstName"
                      value={forms.firstName}
                      onChange={handleChange}
                      noValidate
                      />
                      {errors.firstName && <p className="text-red-400">{errors.firstName}</p>}
                  </div>
    
                  <div className="LastName w-full  px-3 mb-3 ">
                    <label className="block uppercase tracking-wide text-xs text-gray-600 text-sm font-medium mb-1"
                      htmlFor="grid-last-name">Last Name:</label>
                    <input
                      type="text"
                      className="block bg-gray-200 shadow appearance-none border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" 
                      id="grid-last-name"
                      placeholder="Last Name"
                      name="lastName"
                      value={forms.lastName}
                      onChange={handleChange}
                      noValidate
                      />
                      {errors.lastName && <p className="text-red-400">{errors.lastName}</p>}
                  </div>
                  <div className="w-full  px-3 mb-3 ">
                    <label className="block uppercase tracking-wide text-xs text-gray-600 text-sm font-medium mb-1" 
                    htmlFor="grid-email">Email:</label>
                    <input
                      type="email"
                      className="block bg-gray-200 shadow appearance-none border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" 
                      id="grid-email"
                      placeholder="Email"
                      name="email"
                      value={forms.email}
                      onChange={handleChange}
                      noValidate
                      />
                      {errors.email && <p className="text-red-400">{errors.email}</p>}
                  </div>
                  <div className="w-full  px-3 mb-3 ">
                    <label className="block uppercase tracking-wide text-xs text-gray-600 text-sm font-medium mb-1"
                    htmlFor="grid-password">Password:</label>
                    <input
                      type="password"
                      className="block bg-gray-200 shadow appearance-none border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" 
                      id="grid-password"
                      placeholder="password"
                      name="password"
                      value={forms.password}
                      onChange={handleChange}
                      noValidate
                      />
                      {errors.password && <p className="text-red-400">{errors.password}</p>}
                  </div>
                   <button type="submit"
                   className="w-full mt-3 py-2 rounded bg-blue-500 text-gray-100 focus:outline-none">Create Account</button>
              </div>
                   <a href="/login" className="text-sm float-left font-light text-opacity-100 underline mt-1 mb-6 hover:text-blue-600 ">Already have an account?</a>
                   <a href="/paasword_recovery" className="text-sm  float-right font-light text-opacity-100 underline mt-1 mb-6 hover:text-blue-600">Recover password</a>
            </form>
          </div>
        </div>
      </>
      );
    
}

export default SignUp;