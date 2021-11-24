import React from 'react';
import { Formik, Field, Form } from 'formik';
import Api from '../services/Api'
import Schema from '../Schema';
import './Cliente'

function Cadastro() {

    async function onSubmit(values, setSubmitting) {
        const notf = await Api.post('cadastro', values)
        //console.log(notf.data);

        setTimeout(() => {
            alert(notf.data);
            setSubmitting(false);
        }, 500);

        setTimeout(() => {
            if(notf.data === 'USUÁRIO CADASTRADO😊\nSeja Bem vindo(a) a Pumpkitty, você ja está pronto para realizar suas compras! 🧁🧁🧁'){
                window.location.replace('/');
            }else{
                window.location.replace('/Cadastro'); //Ou pode apenas limpar o formulario!
            }
        }, 1000);
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
                validationSchema={Schema}
                validateOnMount
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
                    numero: '',

                }}
            >
                {({ setFieldValue, errors, isValid, touched, isSubmitting, handleReset, dirty }) => (
                    <div className="w3-content">
                        <div className="w3-center w3-xxxlarge w3-padding w3-text-white"> Faça Seu Cadastro </div>
                        <hr className="w3-center" />
                        <Form>
                            <div className="fixoCadastro">
                                <div className="rolavelCadastro">
                                    <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                        <legend className="login-legend w3-center w3-xxlarge">Dados De Login</legend>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="email">Email: </label><br />
                                            <Field id="email" className="nes-input w3-animate-input w3-large w3-text-black" type="email" name="email" placeholder="Digite Seu Email" />
                                            <br />
                                            {errors.email && touched.email && (
                                                <span className="w3-text-red w3-padding">{errors.email}</span>
                                            )}
                                        </div>
                                        <div>

                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="senha">Senha: </label><br />
                                            <Field id="senha" className="nes-input w3-animate-input w3-large w3-text-black" type="password" name="senha" placeholder="Digite Sua Senha" />
                                            <br />
                                            {errors.senha && touched.senha && (
                                                <span className="w3-text-red w3-padding">{errors.senha}</span>
                                            )}
                                        </div>
                                    </fieldset>


                                    <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                        <legend className="login-legend w3-center w3-xxlarge">Dados Cadastrais</legend>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="nome">Nome: </label><br />
                                            <Field id="nome" className="nes-input w3-animate-input w3-large w3-text-black" type="text" name="nome" placeholder="Digite Seu Nome" />
                                            <br />
                                            {errors.nome && touched.nome && (
                                                <span className="w3-text-red w3-padding">{errors.nome}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="nascimento">Data Nascimento: </label><br />
                                            <Field id="nascimento" className="nes-input w3-animate-input w3-large w3-text-black" name="nascimento" placeholder="Digite Sua Data De Nascimento" />
                                            <br />
                                            {errors.nascimento && touched.nascimento && (
                                                <span className="w3-text-red w3-padding">{errors.nascimento}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="cpf">CPF: </label><br />
                                            <Field id="cpf" className="nes-input w3-animate-input w3-large w3-text-black" type="text" name="cpf" placeholder="Digite Seu CPF" />
                                            <br />
                                            {errors.cpf && touched.cpf && (
                                                <span className="w3-text-red w3-padding">{errors.cpf}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="celular">Celular: </label><br />
                                            <Field id="celular" className="nes-input w3-animate-input w3-large w3-text-black" type="text" name="celular" placeholder="Digite Seu Celular" />
                                            <br />
                                            {errors.celular && touched.celular && (
                                                <span className="w3-text-red w3-padding">{errors.celular}</span>
                                            )}
                                        </div>
                                    </fieldset>


                                    <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                        <legend className="login-legend w3-center w3-xxlarge">Dados De Entrega</legend>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="cep">CEP: </label><br />
                                            <Field id="cep" onBlur={(ev) => cliqueCep(ev, setFieldValue)} className="nes-input w3-animate-input w3-large w3-text-black" type="text" name="cep" placeholder="Digite Seu CEP" />
                                            <br />
                                            {errors.cep && touched.cep && (
                                                <span className="w3-text-red w3-padding">{errors.cep}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="logradouro">Rua: </label><br />
                                            <Field id="logradouro" className="nes-input w3-animate-input w3-large w3-text-black" type="text" name="logradouro" placeholder="Digite Sua Rua" />
                                            <br />
                                            {errors.logradouro && touched.logradouro && (
                                                <span className="w3-text-red w3-padding">{errors.logradouro}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="bairro">Bairro: </label><br />
                                            <Field id="bairro" className="nes-input w3-animate-input w3-large w3-text-black" type="text" name="bairro" placeholder="Digite Seu Bairro" />
                                            <br />
                                            {errors.bairro && touched.bairro && (
                                                <span className="w3-text-red w3-padding">{errors.bairro}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="numero">Número: </label><br />
                                            <Field id="numero" className="nes-input w3-animate-input w3-large w3-text-black" type="text" name="numero" placeholder="Digite Número Da Casa" />
                                            <br />
                                            {errors.numero && touched.numero && (
                                                <span className="w3-text-red w3-padding">{errors.numero}</span>
                                            )}
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="w3-center">
                                <div className="w3-twothird w3-container">
                                    <button className="w3-margin-top w3-padding nes-btn bit-font buttonCadastro" disabled={!isValid} type="submit"> ENVIAR! </button>
                                </div>
                                <div className="w3-third w3-container">
                                    <button className="w3-margin-top w3-padding nes-btn bit-font buttonLimpar" onClick={handleReset} disabled={!dirty || isSubmitting}>LIMPAR!</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>

    );
}

export default Cadastro;