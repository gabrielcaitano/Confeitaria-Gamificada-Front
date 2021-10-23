import React from 'react';
import { Formik, Field, Form } from 'formik';
import Api from '../services/Api'

function Cadastro() {

    function onSubmit(values) {
        Api.post('cadastro', values)
        console.log('dados', values);
    }

    function cliqueCep(ev, setFieldValue) {
        const { value } = ev.target;

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setFieldValue('logradouro', data.logradouro);
                setFieldValue('bairro', data.bairro);
            });
    }

    return (
        <div className="marginLeft">
            <Formik
                onSubmit={onSubmit}
                initialValues={{
                    email: '',
                    senha: '',
                    nome: '',
                    nascimento: '',
                    cpf: '',
                    celular: '',
                    cep: '',
                    logradouro: '',
                    bairro: '',

                }}
                render={({ setFieldValue }) => (
                    <div className="w3-content">
                        <div className="w3-center w3-xxxlarge w3-padding w3-text-white"> Faça Seu Cadastro </div>
                        <hr className="w3-center" />
                        <Form>
                            <div className="fixoCadastro">
                                <div className="rolavelCadastro">
                                    <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                        <legend className="login-legend w3-center w3-xxlarge">Dados De Login</legend>

                                        <div className="w3-half w3-padding w3-section">
                                            <label>Email: </label><br />
                                            <Field className="nes-input w3-animate-input w3-large w3-text-orange" type="email" name="email" placeholder="Digite Seu Email" required />
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label>Senha: </label><br />
                                            <Field className="nes-input w3-animate-input w3-large w3-text-orange" type="password" name="senha" placeholder="Digite Sua Senha" required />
                                        </div>
                                    </fieldset>


                                    <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                        <legend className="login-legend w3-center w3-xxlarge">Dados Cadastrais</legend>

                                        <div className="w3-half w3-padding w3-section">
                                            <label>Nome: </label><br />
                                            <Field className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="nome" placeholder="Digite Seu Nome" required />
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label>Data Nascimento: </label><br />
                                            <Field className="nes-input w3-animate-input w3-large w3-text-orange" type="date" name="nascimento" required />
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label>CPF: </label><br />
                                            <Field className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="cpf" placeholder="Digite Seu CPF" required />
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label>Celular: </label><br />
                                            <Field className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="celular" placeholder="Digite Seu Celular" required />
                                        </div>
                                    </fieldset>


                                    <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                        <legend className="login-legend w3-center w3-xxlarge">Dados De Entrega</legend>

                                        <div className="w3-half w3-padding w3-section">
                                            <label>CEP: </label><br />
                                            <Field onBlur={(ev) => cliqueCep(ev, setFieldValue)} className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="cep" placeholder="Digite Seu CEP" required />
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label>Rua: </label><br />
                                            <Field className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="logradouro" placeholder="Digite Sua Rua" required />
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label>Bairro: </label><br />
                                            <Field className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="bairro" placeholder="Digite Seu Bairro" required />
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label>Número: </label><br />
                                            <Field className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="numero" placeholder="Digite Número Da Casa" required />
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="w3-center">
                                <button className="w3-margin-top w3-padding nes-btn bit-font buttonCadastro" type="submit"> ENVIAR! </button>
                            </div>
                        </Form>
                    </div>
                )}
            />
        </div>

    );
}

export default Cadastro;