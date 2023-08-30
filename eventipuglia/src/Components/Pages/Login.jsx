import React, { useState } from "react"
import NavBar from '../NavBar/NavBar'





function Login(){

    const [loginFormData, setLoginFormData] = useState({})
    const [registerFormData, setRegisterFormData ] = useState({})
    const [avatar, setAvatar] = useState(null)
    
    const [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
//Login 
  const handleLogin = async(e)=>{
    e.preventDefault()
    try {
        const response = await fetch('http://localhost:6060/login/authors', {
            method: "POST",
            body: JSON.stringify(loginFormData),
            headers: {"Content-Type":"application/json"}
        })
            
        return await response.json()
    } catch (error) {
        console.log(error.json());
        alert("")
    }
  }

  const uploadAvatar = async (file)=>{
    const avatarFile = new FormData()
    avatarFile.append('avatar', file)
    try {
        const response = await fetch('http://localhost:6060/authors/cloudUpload', {
            method: "POST",
            body: avatarFile
        })
            
        return await response.json()
    } catch (error) {
        console.log(error);
    }
  }
  // Registrazione 
  const handleRegister = async(e)=>{
    e.preventDefault()

    try {
        const uploadAvatarImage = await uploadAvatar(avatar)
            const formDataWithAvatar ={
                ...registerFormData,
                avatar: uploadAvatarImage.avatar}

        const response = await fetch('http://localhost:6060/register/authors', {
            method: "POST",
            body: JSON.stringify(formDataWithAvatar),
            headers: {"Content-Type":"application/json"}
        })
            
        return await response.json()
    } catch (error) {
        console.log(error.json());
        alert("")
    }
  }

  const onChangeHandleFile = (e) =>{
    setAvatar(e.target.files[0])
  }
  
  return(
    <>
    <NavBar />
  {
    authMode !== "signin" && ( <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleRegister}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Registrati</h3>
        <div className="text-center">
          Not registered yet?{" "}
          <span className="link-primary" onClick={changeAuthMode}>
            Sign Up
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Nome</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Nome"
            onChange={(e)=>setRegisterFormData({
                ...registerFormData,
                name:e.target.value})}
          />
        </div>
        <div className="form-group mt-3">
          <label>Cognome</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Cognome"
            onChange={(e)=>setRegisterFormData({
                ...registerFormData,
                surname:e.target.value})}
          />
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            onChange={(e)=>setRegisterFormData({
                ...registerFormData,
                email:e.target.value})}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Password"
            onChange={(e)=>setRegisterFormData({
                ...registerFormData,
                password:e.target.value})}
          />
        </div>
        <div className="form-group mt-3">
          <label>Avatar</label>
          <input
            type="file"
            className="form-control mt-1"
            placeholder="Avatar"
            onChange={onChangeHandleFile}
          />
        </div>
        <div className="form-group mt-3">
          <label>Data di Nascita</label>
          <input
            type="date"
            className="form-control mt-1"
            placeholder="Date"
            onChange={(e)=>setRegisterFormData({
                ...registerFormData,
                dob:e.target.value})}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Registrati
          </button>
        </div>
       
      </div>
    </form>
  </div>
  )
  }
  {
    authMode === "signin" && (
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e)=>setLoginFormData({
                ...loginFormData,
                email:e.target.value
            })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e)=>setLoginFormData({
                ...loginFormData,
                password:e.target.value
            })}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Accedi
            </button>
          </div>
          
        </div>
      </form>
    </div>

    )
  }
  </>
  )
  
}
export default Login