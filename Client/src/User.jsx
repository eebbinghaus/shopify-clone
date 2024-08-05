import React, { useState, useEffect } from "react";
import Axios from "axios";

const User = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [users, setUsers] = useState([]);

    const handleSubmit = () => {
        Axios.post("http://localhost:3001/api/users", {
            username: name,
            email: email,
            phone: phone,
        });
        console.log(name);
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/api/users")
            .then((res) => {
                console.log("page refresh");
                console.log(res.data);
                setUsers(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3001/api/users/${id}`);
    };

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Create a new User</h2>
                    <p>Name:</p>
                    <input
                        type="text"
                        placeholder="Enter name ..."
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <p>Email:</p>
                    <input
                        type="text"
                        placeholder="Enter email ..."
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <p>Phone:</p>
                    <input
                        type="text"
                        placeholder="Enter phone number ..."
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                    <br />
                    <button type="submit">Add User</button>
                </form>
            </div>
            <div className="list-container">
                <h2>List of Users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, _) => {
                            return (
                                <tr key={user._id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDelete(user._id)
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

export default User;
