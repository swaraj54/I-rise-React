import { useState } from "react"

export const Greeting = () => {
    const [isLogged, setIsLogged] = useState(false);

    if (isLogged) {
        return (
            <div>
                isLogged is true
            </div>
        )
    } else {
        return (
            <div>
                isLogged is false
            </div>
        )
    }
}