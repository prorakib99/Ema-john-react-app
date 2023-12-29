import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoaderTriangle from "../Animation/Animation";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    console.log(location);

    if(loading){
        return <LoaderTriangle></LoaderTriangle>
    }    

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;