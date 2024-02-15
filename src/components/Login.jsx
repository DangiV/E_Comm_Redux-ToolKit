import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
    const nevigate = useNavigate()
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    // handle change function start here 
    const HandleChange = (e) => {
        const { name, value } = e.target;

        setUserData((oldVal) => ({
            ...oldVal,
            [name]: value
        }))
    }

    // handle submit function start here
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', userData);
            const authToken = response.data.token;

            // Securely store the JWT token in local storage
            localStorage.setItem('authToken', authToken);

            toast.success('Login successfully!');
            // Redirect the user to the home page 
            nevigate('/');
        } catch (error) {
            console.log('Login failed:', error);
            toast.error('Plz check your credential');
        }
    }

    return (
        <>
            <form onSubmit={HandleSubmit}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        id="username"
                        name='username'
                        value={userData.username}
                        onChange={HandleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputpassword1" className="form-label">
                        password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name='password'
                        value={userData.password}
                        onChange={HandleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    )
}

export default Login
