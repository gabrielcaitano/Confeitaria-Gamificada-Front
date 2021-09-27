import './App.css';
import './w3.css';
import 'nes.css/css/nes.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './componentes/menu.js';
import Home from './componentes/home';
import Contato from './componentes/contato';


import Sobre from './componentes/sobre';
import Cardapio from './componentes/cardapio';
import Carrinho from './componentes/carrinho';
import Cliente from './componentes/cliente';



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


