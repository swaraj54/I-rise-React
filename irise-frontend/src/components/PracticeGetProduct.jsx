import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PracticeGetProduct = () => {
    const [products, setProducts] = useState([]);
    console.log(products, "- products")

    useEffect(() => {
        async function getData() {
            const response = await axios.get("https://fakestoreapi.com/products");
            // console.log("response - ", response.data)
            setProducts(response.data)
        }
        getData();
    }, [])

    return (
        <div>
            <h1>PracticeGetProduct</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-around" }}>
                {products.map((product) => (
                    <div style={{ width: '23%', border: '1px solid black', marginBottom: '25px', height: '400px' }} key={product}>
                        <img style={{ width: '60%', height: '200px', marginTop: '20px' }} src={product.image} />
                        <h3 style={{height: '80px'}}>Name : {product.title}</h3>
                        <h3>Price : {product.price}</h3>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PracticeGetProduct