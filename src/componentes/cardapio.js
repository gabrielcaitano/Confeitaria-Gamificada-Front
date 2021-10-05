import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Cupcakes from './categorias/Cupcakes';
import Bolos from './categorias/Bolos';
import Bebidas from './categorias/Bebidas';

const Cardapio = () => {

    return (
        <Tabs>
            <div className="marginLeft">
                <div className="w3-content box">

                    <div className="w3-center w3-xxxlarge w3-padding w3-text-white">
                        Bem Vindo Ao Cardápio
                    </div>
                    <hr className="w3-center" />

                    <TabList>
                        <div className="w3-row w3-center w3-border w3-border-dark-grey w3-black w3-margin-bottom menuProdutos menuProdutosHover w3-animate-right">
                            <Tab className="w3-col s4 Evento w3-padding-large w3-hover-orange div w3-large bit-font">Cupcakes</Tab>
                            <Tab className="w3-col s4 Evento w3-padding-large w3-hover-orange div w3-large bit-font">Bolos/Tortas</Tab>
                            <Tab className="w3-col s4 Evento w3-padding-large w3-hover-orange div w3-large bit-font">Bebidas</Tab>
                        </div>
                    </TabList>

                    <div className="fixo w3-animate-left">
                        <div className="rolavel">

                            <TabPanel className="w3-container corFundo">
                                <Cupcakes />
                            </TabPanel>

                            <TabPanel className="w3-container corFundo">
                                <Bolos />
                            </TabPanel>

                            <TabPanel className="w3-container corFundo">
                                <Bebidas />
                            </TabPanel>

                        </div>
                    </div>
                </div>
            </div>
        </Tabs >
    )
}


export default Cardapio