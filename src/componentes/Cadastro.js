import React from 'react'

const Cadastro = () => {
    return (
        <div className="marginLeft">
            <div className="w3-content">

                <div className="w3-center w3-xxxlarge w3-padding w3-text-white"> Faça Seu Cadastro </div>
                <hr className="w3-center" />

                <form>
                    <div className="fixoCadastro">
                        <div className="rolavelCadastro">
                            <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                <legend className="login-legend w3-center w3-xxlarge">Dados De Login</legend>

                                <div className="w3-half w3-padding w3-section">
                                    <label>Email: </label><br />
                                    <input className="nes-input w3-animate-input w3-large w3-text-orange" type="email" name="email" placeholder="Digite Seu Email" required />
                                </div>

                                <div className="w3-half w3-padding w3-section">
                                    <label>Senha: </label><br />
                                    <input className="nes-input w3-animate-input w3-large w3-text-orange" type="password" name="email" placeholder="Digite Sua Senha" required />
                                </div>
                            </fieldset>


                            <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                <legend className="login-legend w3-center w3-xxlarge">Dados Cadastrais</legend>

                                <div className="w3-half w3-padding w3-section">
                                    <label>Nome: </label><br />
                                    <input className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="nome" placeholder="Digite Seu Nome" required />
                                </div>

                                <div className="w3-half w3-padding w3-section">
                                    <label>Data Nascimento: </label><br />
                                    <input className="nes-input w3-animate-input w3-large w3-text-orange" type="date" name="nascimento" required />
                                </div>

                                <div className="w3-half w3-padding w3-section">
                                    <label>CPF: </label><br />
                                    <input className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="cpf" placeholder="Digite Seu CPF" required />
                                </div>

                                <div className="w3-half w3-padding w3-section">
                                    <label>Celular: </label><br />
                                    <input className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="celular" placeholder="Digite Seu Celular" required />
                                </div>
                            </fieldset>


                            <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                                <legend className="login-legend w3-center w3-xxlarge">Dados De Entrega</legend>

                                <div className="w3-half w3-padding w3-section">
                                    <label>CEP: </label><br />
                                    <input className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="cep" placeholder="Digite Seu CEP" required />
                                </div>

                                <div className="w3-half w3-padding w3-section">
                                    <label>Rua: </label><br />
                                    <input className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="rua" placeholder="Digite Sua Rua" required />
                                </div>

                                <div className="w3-half w3-padding w3-section">
                                    <label>Bairro: </label><br />
                                    <input className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="cpf" placeholder="Digite Seu Bairro" required />
                                </div>

                                <div className="w3-half w3-padding w3-section">
                                    <label>Número: </label><br />
                                    <input className="nes-input w3-animate-input w3-large w3-text-orange" type="text" name="numero" placeholder="Digite Número Da Casa" required />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="w3-center">
                        <button className="w3-margin-top w3-padding nes-btn bit-font buttonCadastro" type="submit"> ENVIAR! </button>
                    </div>
                </form >
            </div >
        </div >

    )
}

export default Cadastro
