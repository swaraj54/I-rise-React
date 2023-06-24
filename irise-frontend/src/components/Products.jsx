import React, { useEffect, useState } from 'react'

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    console.log(allProducts, "allProducts")
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("products"));
        setAllProducts(data)
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <div style={{ display: 'flex', justifyContent: "space-around", flexWrap: "wrap" }}>
                {allProducts && allProducts.map((product) => (
                    <div style={{ border: "2px solid black", width: "30%", marginBottom: "20px", height: "300px" }}>
                        <img style={{ height: "200px" }} src={product.image} alt='Product Image' />
                        <h3> Name : {product.name}</h3>
                        <h4> Price :  {product.price}</h4>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Products