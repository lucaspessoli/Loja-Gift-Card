import {useEffect, useState} from "react";
import {ReactRouterBrowser as Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";

function Navegation(){
    return(
        <body>
            <header>
                <nav>
                    <a classname=""><Link to="/">CARD-STORE</Link></a>
                    <ul className="nav-lista">
                    <Link to="/register"><li>Registrar</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                    <Link to="/loja"><li>LOJA</li></Link>
                    </ul>
                </nav>
            </header>
        </body>
    )
}

export default Navegation