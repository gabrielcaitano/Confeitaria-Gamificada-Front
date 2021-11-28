import React from 'react'
import api from '../../services/Api'
import { Component } from 'react'
import Bolo1 from '../../imagens/produtos/Bolos e Tortas/Bolo1.jpg'
import Bolo2 from '../../imagens/produtos/Bolos e Tortas/Bolo2.jpg'
import Bolo3 from '../../imagens/produtos/Bolos e Tortas/Bolo3.jpg'
import Bolo4 from '../../imagens/produtos/Bolos e Tortas/Bolo4.jpg'
import Torta1 from '../../imagens/produtos/Bolos e Tortas/Torta1.jpg'
import Torta2 from '../../imagens/produtos/Bolos e Tortas/Torta2.jpg'
import Torta3 from '../../imagens/produtos/Bolos e Tortas/Torta3.jpg'
import Torta4 from '../../imagens/produtos/Bolos e Tortas/Torta4.jpg'
import Torta5 from '../../imagens/produtos/Bolos e Tortas/Torta5.jpg'

class Bolos extends Component {

    state = {
        produtos: []
    }

    async componentDidMount() {
        const response = await api.post('/produto', {
            categoria: 2
        });
        this.setState({ produtos: response.data })
    }
    render() {

        const { produtos } = this.state;

        return (
            <div className="w3-row-padding w3-margin-top  boxProduto">
                {console.log(produtos)}
                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bolo1} alt="Pão Branco" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Barba Negra<span className="w3-right w3-tag w3-round">R$10,00/un.</span></p>

                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Torta1} alt="Baguete" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bolo2<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bolo2} alt="Hambúrguer" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bolo3<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Torta2} alt="Batata Frita" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bolo4<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bolo3} alt="Pizza Calabresa" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bolo5<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Torta3} alt="Pão De Forma" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bolo6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Bolo4} alt="Pão De Forma" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bolo7<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Torta4} alt="Pão De Forma" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bolo8<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>

                <div className="w3-third">
                    <div className="w3-card w3-margin">
                        <div className="w3container">
                            <img src={Torta5} alt="Pão De Forma" className="imagem" />
                            <div className="overlay w3-pale-red">
                                <div className="descricao">Descrição Do Produto</div>
                            </div>
                        </div>
                        <div className="w3-container w3-padding">
                            <p>Bolo9<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                            <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bolos
