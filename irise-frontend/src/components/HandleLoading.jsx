import React, { useState } from 'react'

const HandleLoading = () => {
    const [message, setMessage] = useState("Hello World");
    const [isDataShow, setIsDataShow] = useState(false);
    const [isLoadingShow, setIsLoadingShow] = useState(false);

    function stateHandling() {
        setIsLoadingShow(true)
        setTimeout(() => {
            // calling backend api 
            alert("Hii")
            setIsDataShow(true);
        }, 5000);
    }
    return (
        <div>
            <h1>Handle Loading</h1>
            {/* {isDataShow && <h2>{message}</h2>} */}
            {isDataShow && <h2>{message}</h2>}
            {!isDataShow && isLoadingShow && <h2>Loading..</h2>}

            <button onClick={stateHandling}>Click to Message!</button>
        </div>
    )
}

export default HandleLoading