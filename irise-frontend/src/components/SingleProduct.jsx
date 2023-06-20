import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    // console.log(id, "- id");
    console.log(product, "- product");

    useEffect(() => {
        async function getSingleProductData() {
            const res = await axios.get('https://fakestoreapi.com/products')
            const allProducts = res.data;
            const pro = allProducts.find((product) => product.id == id)
            // console.log(pro, "- pro")
            setProduct(pro);
        }
        getSingleProductData()
    }, [])



    return (
        <div>
            {product.title ? <div style={{ width: '90%', margin: 'auto', border: '2px solid black', height: '500px', display: 'flex' }}>

                <div style={{ width: '50%', paddingTop: '40px' }}>
                    <img style={{ width: "60%", height: '400px' }} src={product.image} />
                </div>
                <div>
                    <h1> Product Name : {product.title}</h1>
                    <h1>Price : {product.price} Rs.</h1>
                    <button>Add to Cart</button>
                </div>

            </div> : <h1>Loading...</h1>}

        </div>
    )
}

export default SingleProduct