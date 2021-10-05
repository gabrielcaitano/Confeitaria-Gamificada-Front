import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
import { Link } from 'react-router-dom';


const Style = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    marginLeft: 120,
}

function Modal({ abrir, fechar }) {
    if (!abrir) return null

    return ReactDom.createPortal(
        <>

            <div style={Style}>
                <div className="tamanhoModal w3-gray w3-content w3-animate-left">

                    <div className="w3-black w3-cell-row w3-padding">
                        <div className="bit-font w3-xlarge w3-center w3-cell teste">Login/Cadastro</div>
                        <button onClick={fechar} className="nes-btn bit-font w3-cell">X</button>
                    </div>
                    <form>
                        <div className="nes-container w3-container">

                            <div className="w3-center">

                                <p className="bit-font w3-large w3-center">Login</p>
                                <input className="nes-input w3-animate-input w3-large w3-text-orange" type="email" placeholder="Email" />
                                <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="password" placeholder="Senha" />
                                <button className="w3-margin-top nes-btn bit-font button w3-margin-bottom" type="submit" > Entrar! </button>

                            </div>

                            <div className="w3-right">

                                <Link to="Cadastro" onClick={fechar} className="w3-margin-top bit-font w3-tiny"> Cadastrar! </Link>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default Modal