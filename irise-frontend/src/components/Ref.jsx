import React, { useEffect, useRef } from 'react';
function Ref() {
    let ref = useRef(0);


    useEffect(() => {
        console.log("Printing on every render..")
    });

    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }

    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    );
}

export default Ref;