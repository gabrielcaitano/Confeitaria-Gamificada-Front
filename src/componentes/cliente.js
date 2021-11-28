import React from 'react'
import { Formik, Field, Form } from 'formik';
import Schema from '../Schema';
import Api from '../services/Api'

class Cliente extends React.Component {

    state = {
        dadosCliente: []
    }

    async componentDidMount() {
        const dadosCliente = await Api.get('cliente')
        const cliente = dadosCliente.data

        this.setState({ dadosCliente: cliente })
    }

    constructor(props) {
        super(props);
        this.state = { disabled: true }
        this.handleClick = this.handleClick.bind(this);
    }
    quandoClicar() {
        this.setState({ disabled: !this.state.disabled })
    }

    handleClick() {
        var result = window.confirm('Você realmente deseja excluir sua conta permanentemente?😞 ')
        if (result === true) {
            Api.get('/delcliente')
            Api.get('/logout')
            setTimeout(() => {
                window.location.replace('/');
            }, 500);
        }
    }
    render() {
        function onSubmit(values) {
            //Api.post('login', values)
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
        var bruninhajequiti
        //const { dadosCliente } = this.state;

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
                            <div className="w3-center w3-xxxlarge w3-padding w3-text-white"> Bem Vindo XXX </div>
                            <hr className="w3-center" />
                            <Form>
                                <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                    <legend className="login-legend w3-center w3-xxlarge">Dados Do Usuário</legend>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Nome: </label><br />
                                        <Field id="nome" value={bruninhajequiti} className="nes-input tamanhoFonte w3-text-black" type="text" name="nome" disabled />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Data Nascimento: </label><br />
                                        <Field value={bruninhajequiti} className="nes-input tamanhoFonte w3-text-black" type="text" name="nascimento" disabled />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>CPF: </label><br />
                                        <Field value={bruninhajequiti} className="nes-input tamanhoFonte w3-text-black" type="text" name="cpf" disabled />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Celular: </label><br />
                                        <Field value={bruninhajequiti} className="nes-input tamanhoFonte w3-text-black" type="text" name="celular" disabled={(this.state.disabled) ? "disabled" : ""} />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>CEP: </label><br />
                                        <Field value={bruninhajequiti} className="nes-input tamanhoFonte w3-text-black" type="text" id="cep" name="cep" onBlur={(ev) => cliqueCep(ev, setFieldValue)} disabled={(this.state.disabled) ? "disabled" : ""} />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Email: </label><br />
                                        <Field value={bruninhajequiti} className="nes-input tamanhoFonte w3-text-black" type="text" name="email" disabled />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Rua: </label><br />
                                        <Field value={bruninhajequiti} className="nes-input tamanhoFonte w3-text-black" type="text" name="logradouro" disabled={(this.state.disabled) ? "disabled" : ""} />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Bairro: </label><br />
                                        <Field value={bruninhajequiti} className="nes-input tamanhoFonte w3-text-black" type="text" name="bairro" disabled={(this.state.disabled) ? "disabled" : ""} />
                                    </div>
                                    <div className="w3-third w3-padding w3-section">
                                        <label>Número: </label><br />
                                        <Field value={bruninhajequiti} className="nes-input tamanhoFonte w3-text-black" type="text" name="numero" disabled={(this.state.disabled) ? "disabled" : ""} />
                                    </div>
                                </fieldset >
                                <div className="w3-container">
                                    <button onClick={this.handleClick} className="w3-margin-top w3-padding nes-btn bit-font is-error"> Deletar Conta </button>
                                    <button className="w3-margin-top w3-padding nes-btn bit-font w3-right" disabled={!isValid} type="submit"> Salvar </button>
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

export default Cliente