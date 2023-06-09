import { useState } from "react"

export const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(isLoggedIn, "isLoggedIn")
    return (
        <div>
            <h1>Login</h1>
            {
                isLoggedIn ?
                    <div>
                        <h1>Welcome, User!</h1>
                        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    </div> :
                    <button onClick={() => setIsLoggedIn(true)}>Click to login</button>
            }
        </div>
    )
}