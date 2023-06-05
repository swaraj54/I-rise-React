import { useState } from "react";

const Mens = () => {
    const [number, setNumber] = useState(9876);
    const [isLiked, setIsLiked] = useState(true);
    // console.log(number, "number")

    function counter() {
        setNumber((prevState) => prevState + 1)
    }

    function decrement() {
        setNumber((prevState) => prevState - 1)
    }

    function like() {
        setIsLiked(false)
        alert("Liked")
    }
    return (
        <div>
            <h1>Mens</h1>
            <h3>Counter : {number}</h3>
            <button onClick={counter} >+ </button>
            <button onClick={decrement}>-</button>
            {isLiked ? <h2>Not Liked!</h2> : <h2>Liked</h2>}
            <button onClick={like}>Like</button>
        </div>
    )
}

export default Mens;