import React, { useState } from 'react'

const AddProducts = () => {
    const [productData, setProductData] = useState({ name: "", description: "", image: "", price: "" });
    console.log(productData, "productData")
    function handleChange(event) {
        // console.log(event.target.value)
        // console.log(event.target.name)
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }
    function handleSubmit(event) {
        event.preventDefault();

        if (productData.name && productData.description && productData.image && productData.price) {
            var array = JSON.parse(localStorage.getItem("products")) || [];
            array.push(productData);
            localStorage.setItem("products", JSON.stringify(array))
            alert('Got all data')
            setProductData({ name: "", description: "", image: "", price: "" })
        } else {
            alert("All fields are mandtory!")
        }

    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input value={productData.name} type='text' name='name' onChange={handleChange} placeholder='Type the name of product' /><br />
                <label>Description</label><br />
                <input value={productData.description} type='text' name='description' onChange={handleChange} placeholder='Type the description of product' /><br />
                <label>Image</label><br />
                <input value={productData.image} type='text' name='image' onChange={handleChange} placeholder='Type the url of product image' /><br />
                <label>Price</label><br />
                <input value={productData.price} type='number' name='price' onChange={handleChange} placeholder='Type the price of product' /><br />
                <input type='submit' value="Add Product" />
            </form>
        </div>
    )
}

export default AddProducts