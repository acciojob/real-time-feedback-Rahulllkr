
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const handleForm = (e) => {
    e.preventDefault()
    setName("")
    setEmail("")
    setPassword("")
    if(name === ""){
      return 
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={handleForm}>
          <label>Name:</label>
          <input onChange={(e) => setName(e.target.value)} type="text" value={name} required/>
          <label>Email:</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} required/>
          <label>Password:</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password"  value={password} required/>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
