import { Link } from "react-router-dom";

export default function UnauthorizedPage(){
    return (
        <div>
            <h1>NO</h1>
            <Link to="/">Go back to Login</Link>
        </div>
    )
}