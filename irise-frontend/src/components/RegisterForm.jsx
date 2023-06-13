import React, { useState } from 'react'

const RegisterForm = () => {
    const [userData, setUserData] = useState({ name: '', email: '', password: '', confirmPassword: "" });
    console.log(userData, "userData")

    function handleChange(event) {
        // console.log("Function called")
        // console.log(event.target.name, "- event.target.name")
        // console.log(event.target.value, "- event.target.value")\
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    function kuchbhi(event) {
        event.preventDefault();
        // Data validation
        // console.log(userData.name, "name here ")
        if (userData.name && userData.email && userData.password && userData.confirmPassword) {
            if (userData.password.length >= 8 && userData.confirmPassword.length >= 8) {
                if (userData.password === userData.confirmPassword) {
                    // call backend api and pass the data
                    alert("Data Submitted to backend!")
                    setUserData({ name: '', email: '', password: '', confirmPassword: "" });
                } else {
                    alert("Pass and confirm pass not matched!")
                }
            } else {
                alert("Password and Confirm pass must be more than or equal to 8 digits.")
            }
        } else {
            alert("Something is missing, Please fill the all details..")
        }


    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={kuchbhi}>
                <label>Name</label><br />
                <input value={userData.name} type='text' name='name' onChange={handleChange} placeholder='Type your name..' /><br />
                <label>Email </label><br />
                <input value={userData.email} type='email' name='email' onChange={handleChange} placeholder='Type your email..' /><br />
                <label>Password</label><br />
                <input value={userData.password} type='password' name='password' onChange={handleChange} placeholder='Type your password..' /><br />
                <label>Confirm Password</label><br />
                <input value={userData.confirmPassword} type='password' name='confirmPassword' onChange={handleChange} placeholder='Type your confirm password..' /><br />
                <input type='submit' value='Sign Up' /><br />
            </form>
        </div>
    )
}

export default RegisterForm