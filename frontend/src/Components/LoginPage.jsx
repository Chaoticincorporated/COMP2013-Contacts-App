import {Link}from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
export default function LoginPage(){
    const navigate =useNavigate();

    //states
    const [loginData, setLoginData] = useState({
        name: "",
        password: ""
    })
    const [postResponse, setPostResponse] = useState("");

    //handlers
    const handleOnChangeLogin = (e)=> {
        setLoginData((prevData) => {
            return{...prevData, [e.target.name]: e.target.value};
        })
    }
    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/", loginData);
            setPostResponse(response.data.message);
            if (response.status === 201)
            {
                navigate("/contacts");
                Cookies.set("jwt-authorization", response.data.token);
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleOnSubmitLogin = (e) => {
        e.preventDefault()
        handleLogin()
        setLoginData({
        name: "",
        password: ""
    })
    }

    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleOnSubmitLogin}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                name="name"
                id="name"
                value={loginData.name}
                onChange={handleOnChangeLogin}
                placeholder="Enter name"
                required
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                name="password"
                id="password"
                value={loginData.password}
                onChange={handleOnChangeLogin}
                placeholder="Enter password"
                required
            />
            <br />
            <button>Login</button>
        </form>
        <p>{postResponse}</p>
        <Link to="/register">Go to Register</Link>
    </div>
    )
}
