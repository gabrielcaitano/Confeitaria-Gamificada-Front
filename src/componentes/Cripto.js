import React from 'react'
import ReactDom from 'react-dom'

const Style = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    marginLeft: 120,
}

function Cripto({ abrir, fechar }) {

    if (!abrir) return null

    return ReactDom.createPortal(
        <>

            <div style={Style}>


                <div className="tamanhoCripto w3-gray w3-content w3-animate-left">

                    <div className="w3-black w3-cell-row w3-padding">
                        <div className="bit-font w3-xlarge w3-center w3-cell">Criptomoedas</div>
                        <button onClick={fechar} className="nes-btn bit-font w3-cell">X</button>
                    </div>

                </div>


            </div>
        </>,
        document.getElementById('teste')
    )
};

export default Cripto