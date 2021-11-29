import React from 'react'
import { Formik, Field, Form } from 'formik';
import Api from '../services/Api'

import { withAlert } from "react-alert";
class Cliente extends React.Component {

    state = {
        nomeCliente: [],
        dataCliente: [],
        cpfCliente: [],
        celularCliente: [],
        cepCliente: [],
        emailCliente: [],
        ruaCliente: [],
        bairroCliente: [],
        numeroCliente: [],
        nameUser: []
    }

    async componentDidMount() {
        const dadosCliente = await Api.get('cliente')
        const cliente = dadosCliente.data[0]
        var nameUser = cliente.nome.split(' ')[0];
        console.log(cliente)

        this.setState({ nomeCliente: cliente.nome, dataCliente: cliente.dataNasc, cpfCliente: cliente.cpf, celularCliente: cliente.celular, cepCliente: cliente.cep, emailCliente: cliente.email, ruaCliente: cliente.rua, bairroCliente: cliente.bairro, numeroCliente: cliente.numero, nameUser })
    }

    constructor(props) {
        super(props);
        this.state = { disabled: true }
    }
    quandoClicar() {
        this.setState({ disabled: !this.state.disabled })
    }

    render() {
        const alert = this.props.alert;



        async function onSubmit(values) {
            var notf = await Api.post('/attCliente', values)
            if (notf.data != null) {
                alert.show('DADOS ALTERADOS COM SUCESSO😊🎃', {
                    timeout: 3000
                })

                setTimeout(() => {
                    window.location.replace('/Cliente');
                }, 3000);

            } else {
                alert.show('ERRO AO ALTERAR OS DADOS 🙁', {
                    timeout: 4000
                })
            }
        }

        function setAction() {
            Api.get('/delcliente')
            Api.get('/logout')
            setTimeout(() => {
                window.location.replace('/');
            }, 500);
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

        const { nomeCliente, dataCliente, cpfCliente, celularCliente, cepCliente, emailCliente, ruaCliente, bairroCliente, numeroCliente, nameUser } = this.state;

        return (
            <div className="marginLeft">
                <Formik
                    onSubmit={onSubmit}
                    initialValues={{
                        cep: '',
                        logradouro: '',
                        bairro: '',
                        numero: ''
                    }}
                >
                    {({ setFieldValue, errors, isSubmitting, dirty }) => (
                        <div className="w3-content">
                            <div className="w3-center w3-xxxlarge w3-padding w3-text-white"> Bem Vindo {nameUser}  </div>
                            <hr className="w3-center" />
                            <Form>
                                <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                    <legend className="login-legend w3-center w3-xxlarge">Dados Do Usuário</legend>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Nome: </label><br />
                                        <Field id="nome" value={nomeCliente} className="nes-input tamanhoFonte w3-text-black" type="text" disabled />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Data Nascimento: </label><br />
                                        <Field value={dataCliente} className="nes-input tamanhoFonte w3-text-black" type="text" disabled />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>CPF: </label><br />
                                        <Field value={cpfCliente} className="nes-input tamanhoFonte w3-text-black" type="text" disabled />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Celular: </label><br />
                                        <Field value={celularCliente} className="nes-input tamanhoFonte w3-text-black" type="text" disabled />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>CEP: </label><br />
                                        <Field placeholder={cepCliente} className="nes-input tamanhoFonte w3-text-black" type="text" id="cep" name="cep" onBlur={(ev) => cliqueCep(ev, setFieldValue)} disabled={(this.state.disabled) ? "disabled" : ""} required />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Email: </label><br />
                                        <Field value={emailCliente} className="nes-input tamanhoFonte w3-text-black" type="text" disabled />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Rua: </label><br />
                                        <Field placeholder={ruaCliente} className="nes-input tamanhoFonte w3-text-black" type="text" name="logradouro" disabled={(this.state.disabled) ? "disabled" : ""} required />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Bairro: </label><br />
                                        <Field placeholder={bairroCliente} className="nes-input tamanhoFonte w3-text-black" type="text" name="bairro" disabled={(this.state.disabled) ? "disabled" : ""} required />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Número: </label><br />
                                        <Field placeholder={numeroCliente} className="nes-input tamanhoFonte w3-text-black" type="text" name="numero" disabled={(this.state.disabled) ? "disabled" : ""} required />
                                        {errors.cep && (
                                            <span className="w3-text-red w3-padding">{errors.numero}</span>
                                        )}
                                    </div>
                                </fieldset >
                                <div className="w3-container">

                                    <button className="w3-margin-top w3-padding nes-btn bit-font is-error"
                                        onClick={() => {
                                            alert.show("Tem Certeza Que Deseja Apagar Conta Permanentemente?", {
                                                title: "Apagar Conta!",
                                                actions: [
                                                    {

                                                        copy: "Apagar Conta",
                                                        onClick: () => setAction()()
                                                    }
                                                ]
                                            });
                                        }}
                                    >
                                        Deletar Conta
                                    </button>

                                    <button className="w3-margin-top w3-padding nes-btn bit-font w3-right" type="submit" disabled={!dirty || isSubmitting}> Salvar </button>
                                    <button className="w3-margin-top w3-padding w3-margin-right nes-btn bit-font w3-right" type="button" onClick={this.quandoClicar.bind(this)}> Editar </button>
                                </div>
                            </Form>
                        </div >

                    )}
                </Formik>
            </div>
        );
    }
};

export default withAlert()(Cliente)