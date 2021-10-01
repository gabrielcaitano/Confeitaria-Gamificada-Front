import React from 'react';

const Contato = () => {
    return (
        <div className="marginLeft">
            <div className="w3-content">

                <div className="w3-center w3-xxxlarge w3-padding w3-text-white">
                    Entre em contato conosco
                </div>

                <hr className="w3-center" />

                <div className="w3-center w3-margin-top">
                    <i className="nes-icon gmail is-large"></i>
                </div>

                <div className="w3-center w3-padding-64">

                    <input className="nes-input is-dark w3-large  w3-animate-input Label w3-text-orange w3-animate-left" type="text" placeholder="Nome" />
                    <input className="nes-input is-dark w3-margin-top w3-large w3-animate-input Label w3-text-orange w3-animate-right" type="email" placeholder="Email" />
                    <input className="nes-input is-dark w3-margin-top w3-large w3-animate-input Label w3-text-orange w3-animate-left" type="text" placeholder="Assunto" />
                    <textarea className="nes-input is-dark w3-margin-top Label Msg w3-text-orange w3-animate-right" type="text" placeholder="Mensagem" />
                    <button className="w3-margin-top nes-btn bit-font Label button" type="submit w3-animate-left"> ENVIAR! </button>

                    <div className="w3-padding-top-32 w3-center">
                        <a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer" className="nes-icon facebook is-medium w3-padding"> </a>
                        <a href="https://www.whatsapp.com/?lang=pt_br" target="_blank" rel="noreferrer" className="nes-icon whatsapp is-medium w3-padding"> </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="nes-icon instagram is-medium"> </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contato