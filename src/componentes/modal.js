import React from 'react'
import ReactDom from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Modal.css'



const Style = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',

}

function Modal({ abrir, fechar }) {
    if (!abrir) return null

    return ReactDom.createPortal(
        <>

            <div style={Style}>
                <div className="tamanhoModal w3-gray w3-content w3-animate-left">
                    <div className="fixoModal">
                        <div className="rolavelModal">
                            <div className="w3-black w3-cell-row w3-padding">
                                <div className="bit-font w3-xlarge w3-center w3-cell">Login/Cadastro</div>
                                <button onClick={fechar} className="nes-btn bit-font w3-cell">X</button>
                            </div>
                            <div className="nes-container">


                                <Tabs>
                                    <div className="w3-center">

                                        <TabPanel>
                                            <p className="bit-font w3-large w3-center">Login</p>
                                            <input className="nes-input w3-animate-input w3-large w3-text-orange" type="email" placeholder="Email" />
                                            <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="password" placeholder="Senha" />
                                        </TabPanel>

                                        <TabPanel>
                                            <p className="bit-font w3-large w3-center">Cadastro</p>
                                            <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="text" placeholder="Nome" />
                                            <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="text" placeholder="Sobrenome" />
                                            <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="text" placeholder="Senha" />
                                            <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="text" placeholder="CPF" />
                                            <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="text" placeholder="Email" />
                                            <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="text" placeholder="Celular" />
                                            <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="text" placeholder="CEP" />
                                            <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="text" placeholder="Rua" />
                                            <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="text" placeholder="Número" />
                                            <input className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" type="text" placeholder="Bairro" />

                                        </TabPanel>
                                        <TabList>

                                            <Tab><button className="w3-margin-top nes-btn bit-font button" type="submit" > Entrar! </button></Tab>
                                            <Tab><button className="w3-margin-top nes-btn bit-font button" type="submit" > Cadastro! </button></Tab>

                                        </TabList>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default Modal