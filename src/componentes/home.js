import React from 'react'
import LogoGato from '../imagens/logoConfeitaria_01.png'
import { Link } from "react-router-dom"


const home = () => {
    return (
        <div className="marginLeft">
            <div className="w3-content w3-center">
                <img className="tamanhoimgHome centralizarHome w3-padding-top-32" src={LogoGato} alt="Confeitaria João e Maria" />
                <div className="w3-center w3-xxxlarge w3-padding w3-text-white">
                </div>
                <div>
                    <Link to="Cardapio" className="nes-btn bit-font w3-center w3-xlarge w3-padding-right-32">Cardápio</Link>
                </div>
            </div>
        </div>
    )
}

export default home
