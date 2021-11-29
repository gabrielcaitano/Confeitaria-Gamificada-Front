import React from 'react';
import { Formik, Field, Form } from 'formik';
import Api from '../services/Api'
import Schema from '../Schema';
import { useAlert } from 'react-alert'
import './Cliente'
import InputMask from 'react-input-mask';
function Cadastro() {

    const alert = useAlert()

    async function onSubmit(values) {
        const notf = await Api.post('cadastro', values)
        console.log(notf.data)
        console.log(values)
        setTimeout(() => {
            if (notf.data != null) {
                alert.show('Você ja está pronto para realizar suas compras🧁', {
                    title: "USUÁRIO CADASTRADO COM SUCESSO😊🎃",
                    timeout: 3000
                })

                setTimeout(() => {
                    window.location.replace('/');
                }, 3000);

            } else {
                alert.show('Seu usuário ja está cadastrado!', {
                    title: "ERRO AO CADASTRAR🙁",
                    timeout: 4000
                })
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
    const CustomInput = props => (
        <InputMask {...props}>{inputProps => <Field {...inputProps} />}</InputMask>
    );
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
                {({ setFieldValue, errors, isSubmitting, handleReset, dirty }) => (
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
                                            {errors.email && (
                                                <span className="w3-text-red w3-padding">{errors.email}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="senha">Senha: </label><br />
                                            <Field id="senha" className="nes-input w3-animate-input w3-large w3-text-black" type="password" name="senha" placeholder="Digite Sua Senha" />
                                            <br />
                                            {errors.senha && (
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
                                            {errors.nome && (
                                                <span className="w3-text-red w3-padding">{errors.nome}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="nascimento">Data Nascimento: </label><br />
                                            <Field type="date" id="nascimento" className="nes-input w3-animate-input w3-large w3-text-black" name="nascimento" placeholder="Digite Sua Data De Nascimento" />
                                            <br />
                                            {errors.nascimento && (
                                                <span className="w3-text-red w3-padding">{errors.nascimento}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="cpf">CPF: </label><br />
                                            <Field id="cpf" type="text" name="cpf" >{() =>
                                                <CustomInput
                                                    className="nes-input w3-animate-input w3-large w3-text-black"
                                                    placeholder="Digite Seu Cpf"
                                                    mask="999.999.999-99"
                                                    name="cpf"
                                                    onChange={(e) => {
                                                        const values = e.target.value || "";


                                                        setFieldValue("cpf", values);
                                                    }}
                                                />
                                            }

                                            </Field>
                                            <br />
                                            {errors.cpf && (
                                                <span className="w3-text-red w3-padding">{errors.cpf}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="celular">Celular: </label><br />
                                            <Field id="celular" type="text" name="celular" >{() =>
                                                <CustomInput
                                                    className="nes-input w3-animate-input w3-large w3-text-black"
                                                    placeholder="Digite Seu Celular"
                                                    mask="+55 (34) 99999-9999"
                                                    name="celular"
                                                    onChange={(e) => {
                                                        const values = e.target.value || "";


                                                        setFieldValue("celular", values);
                                                    }}
                                                />
                                            }
                                            </Field>
                                            <br />
                                            {errors.celular && (
                                                <span className="w3-text-red w3-padding">{errors.celular}</span>
                                            )}
                                        </div>
                                    </fieldset>


                                    <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                        <legend className="login-legend w3-center w3-xxlarge">Dados De Entrega</legend>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="cep">CEP: </label><br />
                                            <Field className="nes-input w3-animate-input w3-large w3-text-black" placeholder="Digite Seu CEP" id="cep" onBlur={(ev) => cliqueCep(ev, setFieldValue)} type="text" name="cep" />

                                            <br />
                                            {errors.cep && (
                                                <span className="w3-text-red w3-padding">{errors.cep}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="logradouro">Rua: </label><br />
                                            <Field id="logradouro" className="nes-input w3-animate-input w3-large w3-text-black" type="text" name="logradouro" placeholder="Digite Sua Rua" />
                                            <br />
                                            {errors.logradouro && (
                                                <span className="w3-text-red w3-padding">{errors.logradouro}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="bairro">Bairro: </label><br />
                                            <Field id="bairro" className="nes-input w3-animate-input w3-large w3-text-black" type="text" name="bairro" placeholder="Digite Seu Bairro" />
                                            <br />
                                            {errors.bairro && (
                                                <span className="w3-text-red w3-padding">{errors.bairro}</span>
                                            )}
                                        </div>

                                        <div className="w3-half w3-padding w3-section">
                                            <label htmlFor="numero">Número: </label><br />
                                            <Field id="numero" className="nes-input w3-animate-input w3-large w3-text-black" type="text" name="numero" placeholder="Digite Número Da Casa" />
                                            <br />
                                            {errors.numero && (
                                                <span className="w3-text-red w3-padding">{errors.numero}</span>
                                            )}
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="w3-center">
                                <div className="w3-twothird w3-container">
                                    <button className="w3-margin-top w3-padding nes-btn bit-font buttonCadastro" disabled={!dirty || isSubmitting} type="submit"> ENVIAR! </button>
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