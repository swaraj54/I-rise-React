import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PracticeGetProduct = () => {
    const [products, setProducts] = useState([]);
    const [isLoadingTrue, setIsLoadingTrue] = useState(false);
    console.log(products, "- products")
    const router = useNavigate();

    useEffect(() => {
        async function getData() {
            setIsLoadingTrue(true);
            const response = await axios.get("https://fakestoreapi.com/products");
            // console.log("response - ", response.data)
            setProducts(response.data)
            setIsLoadingTrue(false);
        }
        getData();
    }, [])

    function singlePage(id) {
        // alert(id)
        router(`/single-product/${id}`)
    }

    return (
        <div>
            <h1>All Products</h1>
            {isLoadingTrue ? <h1>Loading...</h1> :
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-around" }}>
                    {products.map((product) => (
                        <div onClick={() => singlePage(product.id)} style={{ width: '23%', border: '1px solid black', marginBottom: '25px', height: '400px', cursor: 'pointer' }} key={product.id}>
                            <img style={{ width: '60%', height: '200px', marginTop: '20px' }} src={product.image} />
                            <h3 style={{ height: '80px' }}>Name : {product.title}</h3>
                            <h3>Price : {product.price}</h3>
                        </div>
                    ))}
                </div>
            }

        </div>
    )
}

export default PracticeGetProduct