import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AvoidAuth = ({children}) => {
    let location = useLocation();
    let user = useSelector((state) => state.identity.user);
    if(user){
        return <Navigate to="/" state={{from: location}} replace />
    }
    return children;
}

export default AvoidAuth;