import { Outlet } from "react-router-dom";
import Header from "./Header";


const Layout = (props) => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout;