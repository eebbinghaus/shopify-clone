import React, { useState, useEffect } from "react";
import Axios from "axios";

const Product = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [descrip, setDescrip] = useState("");
    const [products, setProducts] = useState([]);

    const handleSubmit = () => {
        Axios.post("http://localhost:3001/api/products", {
            name: name,
            price: price,
            description: descrip,
        });
        console.log(name);
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/api/products")
            .then((res) => {
                console.log("page refresh");
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3001/api/products/${id}`)
            .then(() => {
                return Axios.get("http://localhost:3001/api/products");
            })
            .then((res) => {
                setProducts(res.data);
            });
    };

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Create a new Product</h2>
                    <p>Name:</p>
                    <input
                        type="text"
                        placeholder="Enter name ..."
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <p>Price:</p>
                    <input
                        type="text"
                        placeholder="Enter price ..."
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                    <p>Description:</p>
                    <input
                        type="text"
                        placeholder="Enter description ..."
                        onChange={(e) => {
                            setDescrip(e.target.value);
                        }}
                    />
                    <br />
                    <button type="submit">Add Product</button>
                </form>
            </div>
            <div className="list-container">
                <h2>List of Products</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Phone Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, _) => {
                            return (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDelete(product._id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Product;
