import React from 'react'
import api from '../../services/Api'
import { Component } from 'react'
import Bebida1 from '../../imagens/produtos/Bebidas/Bebida1.jpg'
import Bebida2 from '../../imagens/produtos/Bebidas/Bebida2.jpg'
import Bebida3 from '../../imagens/produtos/Bebidas/Bebida3.jpg'
import Bebida4 from '../../imagens/produtos/Bebidas/Bebida4.jpg'
import Bebida5 from '../../imagens/produtos/Bebidas/Bebida5.jpg'
import Bebida6 from '../../imagens/produtos/Bebidas/Bebida6.jpg'
import Bebida7 from '../../imagens/produtos/Bebidas/Bebida7.jpg'
import Bebida8 from '../../imagens/produtos/Bebidas/Bebida8.jpg'
import Bebida9 from '../../imagens/produtos/Bebidas/Bebida9.jpg'



class Bebidas extends Component {

    state = {
        produtos: []
    }

    async componentDidMount() {
        const response = await api.post('/produto', {
            categoria: 1
        });
        this.setState({ produtos: response.data })
    }
    render() {

        const { produtos } = this.state;


        return (
            <div className="w3-row-padding w3-margin-top">
                {console.log(produtos)}
                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bebida1} alt="Pão Branco" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bebida1<span className="w3-right w3-tag w3-round">R$20,00/un.</span></p>

                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bebida2} alt="Baguete" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bebida2<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bebida3} alt="Hambúrguer" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bebida3<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bebida4} alt="Batata Frita" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bebida4<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bebida5} alt="Pizza Calabresa" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bebida5<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bebida6} alt="Pão De Forma" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bebida6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bebida7} alt="Pão De Forma" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bebida7<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bebida8} alt="Pão De Forma" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bebida8<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bebida9} alt="Pão De Forma" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bebida9<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bebidas
