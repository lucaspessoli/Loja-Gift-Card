import {useEffect, useState} from "react";
// import {ReactRouterBrowser as Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';

function Navegation(){
    return(
        <header>
            <nav className="nav-bar">
                <Link to="/" className="logo">CARD STORE</Link>
                {/* <a classname="logo"><Link to="/">CARD STORE</Link></a> */}
                <ul className="nav-list">
                <Link to="/register" style={{textDecoration: "none"}}><li>Registrar/Entrar</li></Link>
                <Link to="/cart" style={{textDecoration: "none"}}><li>CARRINHO</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navegation