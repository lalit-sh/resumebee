import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({children}) => {
    let location = useLocation();
    let user = useSelector((state) => state.identity.user);
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace />
    }
    return children;
}

export default RequireAuth;