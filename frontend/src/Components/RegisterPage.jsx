import UserForm from "./UserForm";
import { useState } from "react";
import axios from "axios";
export default function RegisterPage(){
    //states
    const [userData, setUserData] = useState({
        name: "",
        password: ""
    })
    const [postResponse, setPostResponse] = useState("");

    //handlers
    const handleOnUserChange = (e)=> {
        setUserData((prevData) => {
            return{...prevData, [e.target.name]: e.target.value};
        })
    }
    const handleRegister = async () => {
        try {
            const response= await axios.post("http://localhost:3000/register", userData);
            setPostResponse(response.data.message)
        } catch (err) {
            console.log(err)
        }
    }
    const handleOnUserSubmit = (e) => {
        e.preventDefault()
        handleRegister()
        setUserData({
        name: "",
        password: ""
    })
    }
    return (
        <div>
            <UserForm 
                userData={userData}
                postResponse={postResponse}
                handleOnUserChange={handleOnUserChange}
                handleOnUserSubmit={handleOnUserSubmit}
                currentPage="Register"
                nextPage=""
            />
        </div>
    )
}