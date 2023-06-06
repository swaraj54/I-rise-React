import { useEffect, useState } from "react"

const Women = () => {

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    //Type 1
    // useEffect(() => {
    //     console.log("Code executed inside useEffect.")
    // })
    // Type 2
    // useEffect(()=> {
    //     console.log("Code executed inside useEffect for type 2.")
    // } , [])
    // Type 3
    // useEffect(()=> {
    //     console.log("Code executed inside useEffect for type 3.")
    // }, [counter])
    //tYPE 4
    useEffect(() => {
        console.log("Code executed inside useEffect for type 4.")
    }, [counter, counter2])

    function increment() {
        setCounter((prevState) => prevState + 1)
    }

    function increment2() {
        setCounter2((prevState) => prevState + 1)
    }

    return (
        <div>
            <h2>Women</h2>
            <h3>Counter 1  : {counter}</h3>
            <button onClick={increment}>+</button>
            <h3>Counter 2  : {counter2}</h3>
            <button onClick={increment2}>+</button>
        </div>
    )
}

export default Women
