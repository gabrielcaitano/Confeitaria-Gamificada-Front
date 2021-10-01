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
import Cliente from './componentes/Cliente';



function App() {
  return (

    <BrowserRouter>
      <div className="bg">
        <Menu />
        <Route path='/' exact component={Home} />
        <Route path='/Galeria' component={Cliente} />
        <Route path='/Sobre' component={Sobre} />
        <Route path='/Contato' component={Contato} />
        <Route path='/Cardapio' component={Cardapio} />
        <Route path='/Carrinho' component={Carrinho} />
      </div>
    </BrowserRouter>

  );
}

export default App;


