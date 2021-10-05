import React, { useState } from 'react'
import { FaHome, FaShoppingBasket, FaGamepad } from 'react-icons/fa';
import { BiBookHeart, BiUserCircle, BiPhone } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Relogio from './Relogio';
import Modal from './Modal';



const Menu = () => {

  const [aberto, setAberto] = useState(false)
  return (


    <nav className="w3-sidebar w3-bar-block w3-center div">

      <Link to="/" className="w3-bar-item w3-button w3-hover-orange">
        <i className="w3-xxlarge"><FaHome /></i>
        <p className="bit-font w3-tiny">Home</p>
      </Link>
      <Link to="Cardapio" className="w3-bar-item w3-button w3-hover-orange">
        <i className="w3-xxlarge"><FaShoppingBasket /></i>
        <p className="bit-font w3-tiny">Produtos</p>
      </Link>
      <Link to="Galeria" className="w3-bar-item w3-button w3-hover-orange">
        <i className="w3-xxlarge"><FaGamepad /></i>
        <p className="bit-font w3-tiny">Nyan Nyann</p>
      </Link>
      <Link to="Contato" className="w3-bar-item w3-button w3-hover-orange">
        <i className="w3-xxlarge"><BiPhone /></i>
        <p className="bit-font w3-tiny">Contato</p>
      </Link>
      <Link to="Sobre" className="w3-bar-item w3-button w3-hover-orange">
        <i className="w3-xxlarge"><BiBookHeart /></i>
        <p className="bit-font w3-tiny">Sobre</p>
      </Link>
      <button onClick={() => setAberto(true)} className="w3-bar-item w3-button w3-hover-orange">
        <i className="w3-xxlarge"><BiUserCircle /></i>
        <p className="bit-font w3-tiny">Login<br /><hr className="zerandoHr" />Cadastro</p>
      </button>
      <Modal className="back-drop" abrir={aberto} fechar={() => setAberto(false)} />
      <Relogio />

    </nav>

  )
}

export default Menu