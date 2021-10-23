import React from 'react';
import { Formik, Field, Form } from 'formik';
import Api from '../services/Api'


const Contato = () => {

    function onSubmit(values) {
        Api.post('mail', values)
        console.log('dados', values);
    }

    return (
        <div className="marginLeft">
            <Formik
                onSubmit={onSubmit}
                initialValues={{
                    nome: '',
                    email: '',
                    assunto: '',
                    mensagem: '',
                }}
                render={() => (

                    <div className="w3-content">

                        <div className="w3-center w3-xxxlarge w3-padding w3-text-white">
                            Entre em contato conosco
                        </div>

                        <hr className="w3-center" />

                        <div className="w3-center w3-margin-top">
                            <i className="nes-icon gmail is-large"></i>
                        </div>

                        <Form className="w3-center w3-padding-64">

                            <Field className="nes-input is-dark w3-large  w3-animate-input Label w3-text-orange w3-animate-left" name="nome" type="text" placeholder="Nome" />
                            <Field className="nes-input is-dark w3-margin-top w3-large w3-animate-input Label w3-text-orange w3-animate-right" name="email" type="email" placeholder="Email" />
                            <Field className="nes-input is-dark w3-margin-top w3-large w3-animate-input Label w3-text-orange w3-animate-left" name="assunto" type="text" placeholder="Assunto" />
                            <Field className="nes-input is-dark w3-margin-top Label Msg w3-text-orange w3-animate-right" name="mensagem" type="text" placeholder="Mensagem" />
                            <button className="w3-margin-top nes-btn bit-font Label" type="submit"> ENVIAR! </button>

                            <div className="w3-padding-top-32 w3-center">
                                <a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer" className="nes-icon facebook is-medium w3-padding"> </a>
                                <a href="https://www.whatsapp.com/?lang=pt_br" target="_blank" rel="noreferrer" className="nes-icon whatsapp is-medium w3-padding"> </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="nes-icon instagram is-medium"> </a>
                            </div>

                        </Form>
                    </div>
                )}
            />
        </div>
    )
}

export default Contato