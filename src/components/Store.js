import {useEffect, useState} from 'react';
import Navegation from '../Nave/Navegation';
import axios from 'axios';


function Store(){

    function ExibirGiftCards(){
        axios.get("http://localhost:5000/GiftCards")
            .then((response)=>{
                console.log(response.data);
            })
    }

    return(
        <div>
            <Navegation />
            <div className="welcome">
                <h1>BEM VINDO!</h1>
                <img src="https://www.pngkit.com/png/full/238-2385610_free-gift-cards.png" width={300} alt=""/>
                <div>
                    <button onClick={ExibirGiftCards}>BUSCA</button>
                </div>
            </div>
        </div>
    )
}

export default Store