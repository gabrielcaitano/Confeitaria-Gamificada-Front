import React from 'react'
import { Component } from 'react'
import api from '../services/Api'
import { RiLogoutCircleLine } from 'react-icons/ri';
class Deslogar extends Component {

    state = {
        logado: []
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        api.get('/logout')
        setTimeout(() => {
            window.location.replace('/');
        }, 500);
    }

    async componentDidMount() {

        var logado
        const userID = await api.get('/login')

        if (userID.data != null) {
            logado = true
            console.log('Logado');
        } else {
            logado = false
            console.log('NÃO Logado');
        }

        this.setState({ logado })


    }

    render() {

        const { logado } = this.state;

        return (
            <div>
                {logado ? (
                    <button onClick={this.handleClick} className="w3-bar-item w3-button w3-hover-orange">
                        <i className="w3-xxlarge w3-text-red"><RiLogoutCircleLine /></i>
                        <p className="bit-font w3-tiny">Deslogar</p>
                    </button>
                ) : (
                    <div></div>

                )}
            </div>
        )
    }
}

export default Deslogar
