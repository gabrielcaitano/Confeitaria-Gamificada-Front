import React from 'react'
import './App.css';
import './w3.css';
import 'nes.css/css/nes.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './componentes/Menu.js';
import Home from './componentes/Home.js';
import Contato from './componentes/Contato.js';
import Cliente from './componentes/Cliente.js';

import Sobre from './componentes/Sobre.js';
import Cardapio from './componentes/Cardapio.js';
import Carrinho from './componentes/Carrinho.js';
import Cadastro from './componentes/Cadastro.js';
import NyanNyan from './componentes/NyanNyan.js';



function App() {
  return (

    <BrowserRouter>
      <div className="bg">
        <Menu />
        <Route path='/' exact component={Home} />
        <Route path='/Sobre' component={Sobre} />
        <Route path='/Contato' component={Contato} />
        <Route path='/Cardapio' component={Cardapio} />
        <Route path='/Carrinho' component={Carrinho} />
        <Route path='/Cadastro' component={Cadastro} />
        <Route path='/NyanNyan' component={NyanNyan} />
        <Route path='/Cliente' component={Cliente} />
      </div>
    </BrowserRouter>

  );
}

export default App;


