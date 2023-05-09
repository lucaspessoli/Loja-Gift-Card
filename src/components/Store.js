import {useEffect, useState} from 'react';
import Navegation from '../Nave/Navegation';


function Store(){

    return(
        <div>
            <Navegation />
            <div className="welcome">
                <h1>BEM VINDO!</h1>
                <img src="https://www.pngkit.com/png/full/238-2385610_free-gift-cards.png" width={300}/>
            </div>
        </div>
    )
}

export default Store