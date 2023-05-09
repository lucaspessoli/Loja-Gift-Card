import {useEffect, useState} from "react";
// import {ReactRouterBrowser as Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';

function Navegation(){
    return(
        <body>
            <header>
                <nav className="nav-bar">
                    <Link to="/" className="logo"><a>CARD STORE</a></Link>
                    {/* <a classname="logo"><Link to="/">CARD STORE</Link></a> */}
                    <ul className="nav-list">
                    <Link to="/register" style={{textDecoration: "none"}}><li>Registrar</li></Link>
                    <Link to="/login" style={{textDecoration: "none"}}><li>Login</li></Link>
                    <Link to="/loja" style={{textDecoration: "none"}}><li>LOJA</li></Link>
                    </ul>
                </nav>
            </header>
        </body>
    )
}

export default Navegation