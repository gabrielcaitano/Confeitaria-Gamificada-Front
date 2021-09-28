import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



import Cupcake1 from '../imagens/cupcake_1.jpg'



const Cardapio = () => {


    return (
        <Tabs>
            <div className="marginLeft">
                <div className="w3-content box">

                    <div className="w3-center w3-xxxlarge w3-padding w3-text-white">
                        Bem Vindo Ao Cardapio
                    </div>
                    <hr className="w3-center" />

                    <TabList>
                        <div className="w3-row w3-center w3-border w3-border-dark-grey w3-black w3-margin-bottom menuProdutos menuProdutosHover">
                            <Tab className="w3-col s4 Evento w3-padding-large w3-hover-orange div w3-large bit-font">Cupcakes</Tab>
                            <Tab className="w3-col s4 Evento w3-padding-large w3-hover-orange div w3-large bit-font">Bolos/Tortas</Tab>
                            <Tab className="w3-col s4 Evento w3-padding-large w3-hover-orange div w3-large bit-font">Bebidas</Tab>
                        </div>
                    </TabList>

                    <div className="fixo">
                        <div className="rolavel">
                            <TabPanel className="w3-container corFundo">

                                <div className="w3-row-padding w3-margin-top">
                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão Branco" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake1<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>

                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Baguete" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake2<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Hambúrguer" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake3<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Batata Frita" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake4<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pizza Calabresa" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake5<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </TabPanel>




                            <TabPanel className="w3-container corFundo">

                                <div className="w3-row-padding w3-margin-top">
                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão Branco" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake10<span className="w3-right w3-tag w3-round">R$10,00/un.</span></p>

                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Baguete" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake2<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Hambúrguer" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake3<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Batata Frita" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake4<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pizza Calabresa" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake5<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>



                            <TabPanel className="w3-container corFundo">

                                <div className="w3-row-padding w3-margin-top">
                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão Branco" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake115<span className="w3-right w3-tag w3-round">R$20,00/un.</span></p>

                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Baguete" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake2<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Hambúrguer" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake3<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Batata Frita" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake4<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pizza Calabresa" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake5<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-third">
                                        <div className="w3-card w3-margin">
                                            <div className="w3container">
                                                <img src={Cupcake1} alt="Pão De Forma" className="imagem" />
                                                <div className="overlay w3-pale-red">
                                                    <div className="descricao">Descrição Do Produto</div>
                                                </div>
                                            </div>
                                            <div className="w3-container w3-padding">
                                                <p>Cupcake6<span className="w3-right w3-tag w3-round">R$00,00/un.</span></p>
                                                <div><button className="w3-center w3-button w3-orange w3-hover-blue w3-round-large ajusteBT">Comprar</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>




                        </div>
                    </div>
                </div>
            </div>
        </Tabs >

    )
}


export default Cardapio
