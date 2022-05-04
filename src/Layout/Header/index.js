import React from "react";
import Main from "../../Components/Main";
import Navbar from "../../Components/Navbar";
import './style.scss';

const Header = ({}) => {
    return (
        <header className="header container-fluid">
           <Navbar />
           <Main />
        </header>
    )
}

export default Header;