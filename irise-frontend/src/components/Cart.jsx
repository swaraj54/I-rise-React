import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]); // 3 step . step 6
    const router = useNavigate();
    console.log(cartProducts, "cartProducts")
    useEffect(() => {
        // console.log("Inside cart")
        const products = JSON.parse(localStorage.getItem("products")) // 1 step
        // console.log(products)
        setCartProducts(products) // 2 step
    }, [])

    function buyProduct() {
        // alert("Inside funcion")
        localStorage.removeItem("products") // 4 step - removing from browser
        setCartProducts([]) // step 5 - removing from component state
        router('/')
        alert("Congracts, Products will deliver soon.")
    }

    return (
        <div>
            <h1>Cart</h1>
            <button onClick={buyProduct}>Buy Products</button>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {cartProducts && cartProducts.map((pro) => (
                    <div style={{ width: "23%", height: "400px", border: '1px solid black' }}>
                        <img style={{ width: '80%', height: '200px', paddingTop: '25px' }} src={pro.image} />
                        <h3>{pro.title}</h3>
                        <h3>{pro.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart