import React from 'react';
import burgerLogo from "../../assets/images/logo.svg";
import "./Logo.css"
const logo = (props) => (
    <div className="Logo" >
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
)

export default logo;