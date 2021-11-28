import React from 'react'
import ReactDom from 'react-dom'
import { Formik, Field, Form } from 'formik';
import api from '../services/Api'
import './Modal.css'
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert'


const Style = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    marginLeft: 120,
}

function Modal({ abrir, fechar }) {

    const alert = useAlert()
    async function onSubmit(values) {

        var confereLogin = await api.post('login', values)

        if (confereLogin.data != null) {
            alert.show('Usuário logado com sucesso🙂🎃', {
                type: 'success'
            })
            setTimeout(() => {
                window.location.replace('/')
            }, 3000);
        } else {
            alert.show('Erro ao logar😞', {
                type: 'error'
            })
        }

    }


    if (!abrir) return null

    async function Logado() {
        const userID = await api.get('/login')
        console.log(userID.data)
        if (userID.data != null) { window.location.replace('/Cliente') }
    }
    Logado()
    return ReactDom.createPortal(
        <>

            <div style={Style}>
                <Formik
                    onSubmit={onSubmit}
                    initialValues={{
                        email: '',
                        senha: '',
                    }}
                >
                    {({ isValid }) => (
                        <div className="tamanhoModal w3-gray w3-content w3-animate-left">

                            <div className="w3-black w3-cell-row w3-padding">
                                <div className="bit-font w3-xlarge w3-center w3-cell">Login/Cadastro</div>
                                <button onClick={fechar} className="nes-btn bit-font w3-cell">X</button>
                            </div>
                            <Form>
                                <div className="nes-container w3-container">

                                    <div className="w3-center">

                                        <p className="bit-font w3-large w3-center">Login</p>
                                        <Field className="nes-input w3-animate-input w3-large w3-text-orange" name="email" type="email" placeholder="Email" required />
                                        <Field className="nes-input w3-animate-input w3-margin-top w3-large w3-text-orange" name="senha" type="password" placeholder="Senha" required />
                                        <button className="w3-margin-top nes-btn bit-font button w3-margin-bottom" type="submit" disabled={!isValid} > Entrar! </button>
                                    </div>

                                    <div className="w3-right">

                                        <Link to="Cadastro" onClick={fechar} className="w3-margin-top bit-font w3-tiny"> Cadastrar! </Link>

                                    </div>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </>,
        document.getElementById('portal')
    )
};

export default Modal