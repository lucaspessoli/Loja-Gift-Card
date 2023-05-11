import {useEffect, useState} from 'react';
import Navegation from '../Nave/Navegation';
import axios from 'axios';


function Store(){

    function ExibirGiftCards(){
        axios.get("http://localhost:5000/users")
            .then((response)=>{
                console.log(response.data);
            })
    }

    return(
        <div>
            <Navegation />
            <div className="welcome">
                <h1>BEM VINDO!</h1>
                <hr />
                <img src="https://www.pngkit.com/png/full/238-2385610_free-gift-cards.png" width={300} alt=""/>
                <div>
                    <hr />
                    <h1>ENCONTRE O SEU GIFT CARD</h1>
                </div>
            </div>
            <div className="exploreCards">
                <p>Aqui conterá lista com os gift cards disponiveis</p>
            </div>
            <div className="checkCards">
                    <p>INFORMAÇÕES GIFT CARD SELECIONADO</p>
                </div>
            
        </div>
    )
}

export default Store