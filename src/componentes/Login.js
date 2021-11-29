import React from 'react'
import api from '../services/Api';
import { Component } from 'react'
import { BiUserCircle } from 'react-icons/bi';
import { decodeToken } from "react-jwt";

class Login extends Component {

    state = {
        logado: [],
        nameUser: []
    }

    async componentDidMount() {

        var logado
        const userID = await api.get('/login')
        console.log('TOKEN da Sessão: ' + userID.data)
        const user = await api.get('/cliente')

        const decodedToken = decodeToken(userID.data);
        console.log('Sessão utilizada: ' + decodedToken);

        if (userID.data != null || user.data != null) {
            logado = true
            console.log('Logado');
            var nameUser = user.data[0].nome.split(' ')[0];
        } else {
            logado = false
            console.log('NÃO Logado');
        }

        this.setState({ logado, nameUser })

    }
    render() {

        const { logado } = this.state;
        const { nameUser } = this.state;

        return (

            <div>

                {logado ? (
                    <div>
                        <i className="w3-xxlarge w3-text-blue"><BiUserCircle /></i>
                        <p className="bit-font w3-tiny">Usuário<br /><hr className="zerandoHr" />{nameUser}</p>
                    </div>
                ) : (
                    <div>
                        <i className="w3-xxlarge"><BiUserCircle /></i>
                        <p className="bit-font w3-tiny">Login<br /><hr className="zerandoHr" />Cadastro</p>
                    </div>

                )}

            </div>
        )
    }
}

export default Login
