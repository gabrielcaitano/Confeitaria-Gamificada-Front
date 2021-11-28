import React, { useState } from 'react'
import { FaHome, FaShoppingBasket, FaGamepad, FaBitcoin } from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Modal from './Modal.js';
import Login from '../componentes/Login'
import Deslogar from './Deslogar.js';
import Cripto from './Cripto.js';


const Menu = () => {

  const [aberto, setAberto] = useState(false)

  const [open, setOpen] = useState(false)

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
      <Link to="NyanNyan" className="w3-bar-item w3-button w3-hover-orange">
        <i className="w3-xxlarge"><FaGamepad /></i>
        <p className="bit-font w3-tiny">Nyan Nyann</p>
      </Link>
      <Link to="Contato" className="w3-bar-item w3-button w3-hover-orange">
        <i className="w3-xxlarge"><BiPhone /></i>
        <p className="bit-font w3-tiny">Contato</p>
      </Link>

      <div>
        <button onClick={() => setOpen(true)} className="w3-bar-item w3-button w3-hover-orange">
          <i className="w3-xxlarge"><FaBitcoin /></i>
          <p className="bit-font w3-tiny">Cripto</p>
        </button>
      </div>
      <Cripto className="back-drop" abrir={open} fechar={() => setOpen(false)} />

      <div>
        <button onClick={() => setAberto(true)} className="w3-bar-item w3-button w3-hover-orange">
          <Login />
        </button>
      </div >
      <Modal className="back-drop" abrir={aberto} fechar={() => setAberto(false)} />

      <Deslogar />

    </nav >

  )

}

export default Menu