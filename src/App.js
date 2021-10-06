import React from 'react'
import './App.css';
import './w3.css';
import 'nes.css/css/nes.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './componentes/Menu.js';
import Home from './componentes/Home';
import Contato from './componentes/Contato';


import Sobre from './componentes/Sobre';
import Cardapio from './componentes/Cardapio';
import Carrinho from './componentes/Carrinho';
import Cadastro from './componentes/Cadastro';
import NyanNyan from './componentes/NyanNyan';



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
      </div>
    </BrowserRouter>

  );
}

export default App;


