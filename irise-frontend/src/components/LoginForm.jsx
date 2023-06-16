import { useDebugValue, useState } from "react";

const LoginForm = () => {
    const [userData, setUserData] = useState({ email: 'test@gmail.com', password: '' });
    console.log(userData, "- userdata")

    function handleChange(event) {
        // console.log(event.target.value, "event.target.value")
        // console.log(event.target.name, "event.target.name ")
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        // check conditions
        if (userData.email && userData.password) {
            alert("Got it..")
            // call backend and send data
            setUserData({ email: '', password: '' })
        } else {
            alert("All fields Required!")
        }

    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email : </label><br />
                <input value={userData.email} name='email' onChange={handleChange} type="email" placeholder="Type your email.." /><br />
                <label>Password : </label><br />
                <input value={userData.password} name='password' onChange={handleChange} type="password" placeholder="Type your password.." /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm;