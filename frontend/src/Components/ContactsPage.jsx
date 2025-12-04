import Cookies from "js-cookie";
import ContactsApp from "./ContactsApp";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode} from "jwt-decode";
export default function ContactsPage(){
    const navigate =useNavigate();
    const [currentUser] = useState(()=>{
        const jwtToken = Cookies.get("jwt-authorization");
        if (!jwtToken)
        {
            return "";
        }
        try{
            const decodedToken = jwtDecode(jwtToken);
            return decodedToken.name;
        }catch{
            return "";
        }
    });
    useEffect(()=>{
        if (!currentUser)
        {
            navigate("/unauthorized");
        }
    })
    return(
        <div>
            <h1>Welcome {currentUser}</h1>
            <ContactsApp/>
        </div>
    )
}