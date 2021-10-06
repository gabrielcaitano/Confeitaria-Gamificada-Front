import React from 'react'
import Nyan from '../imagens/Nyan.png'

const NyanNyan = () => {
    return (
        <div className="marginLeft">
            <div className="w3-content w3-center">
                <div className="w3-center w3-xxxlarge w3-text-white"> Demonstração Do Jogo </div>
                <hr className="w3-center" />
                <img src={Nyan} alt="Demonstração" className="imagemDemo" />
            </div>
        </div>
    )
}

export default NyanNyan
