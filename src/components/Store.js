import {useEffect, useState} from 'react';
import Navegation from '../Nave/Navegation';
import axios from 'axios';

function Store(){
    const [db, SetDb] = useState();
    const [visivel, setVisivel] = useState(false);

    useEffect((handle)=>{
        axios.get("http://localhost:5000/giftcard")
        .then((response)=>{
            const data = response.data
            SetDb(data);
            setVisivel(true);
        })
    }, [])

    function debugTest(){
        setVisivel(true);
        console.log(db.steam.image) //Teste
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

            { visivel ? (
            <div>
                <div className="exploreCards">
                    <button className="buttonCard"><img src={db.steam.image} height={100} width={100}/></button>
                    <button className="buttonCard"><img src={db.ifood.image} height={100} width={100}/></button>
                    <button className="buttonCard"><img src={db.playstore.image} height={100} width={100}/></button>
                    <button className="buttonCard"><img src={db.playstation.image} height={100} width={100}/></button>
                    <button className="buttonCard"><img src={db.xbox.image} height={100} width={100}/></button>
                </div>
                <div className="checkCards">
                        <p>INFORMAÇÕES GIFT CARD SELECIONADO</p>
                </div>
                <div>
                    <button onClick={debugTest}>debug Button</button>
                </div>
            </div>            
            ) : (
                null
            )
            }
        </div>
    )
}

export default Store