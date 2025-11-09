
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [nameError,setNameError] = useState("")
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")

  useEffect(() => {

    if(name === ""){
      setNameError("Name is required")
    }else{
      setNameError("")
    }
  },[name])

  useEffect(() => {
    if(!email.includes("@")){
      setEmailError("Invalid email formate")
    }else{
      setEmailError("")
    }
  },[email])

  useEffect(() => {
    if(password === ""){
      setPasswordError("Password is required")
    }else if(password.length <= 6){
      setPasswordError("Password must be atleast 6 character")
    }else{
      setPasswordError("")
    }
  },[password])

  const handleForm = (e) => {
    e.preventDefault()
    if(!nameError && !emailError && !password){
      alert("Form submited successfully")
    }
    setName("")
    setEmail("")
    setPassword("")
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={handleForm}>

          <label>Name:</label>
          <input id="name" onChange={(e) => setName(e.target.value)} type="text" value={name} required/>
          {nameError && <p className="error-message">{nameError}</p>}

          <label>Email:</label>
          <input id="email" onChange={(e) => setEmail(e.target.value)} type="email" value={email} required/>
          {emailError  && <p className="error-message">{emailError}</p>}

          <label>Password:</label>
          <input id="password" onChange={(e) => setPassword(e.target.value)} minLength={6} type="password"  value={password} required/>
          {passwordError && <p className="error-message">{passwordError}</p>}
          
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
