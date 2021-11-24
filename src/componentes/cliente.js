import React from 'react'

const Cliente = () => {
    return (
        <div className="marginLeft">
            <div className="w3-content">
                <div className="w3-center w3-xxxlarge w3-padding w3-text-white"> Bem Vindo Rafael </div>
                <hr className="w3-center" />
                <fieldset className="w3-text-white w3-large w3-padding w3-row my-fieldset w3-gray">
                    <legend className="login-legend w3-center w3-xxlarge">Dados Do Usuário</legend>
                    <div className="w3-third w3-padding w3-section">
                        <label>Nome: </label><br />
                        <p className="nes-input tamanhoFonte w3-text-black">Rafael Prado</p>
                    </div>
                    <div className="w3-third w3-padding w3-section">
                        <label>Data Nascimento: </label><br />
                        <p className="nes-input tamanhoFonte w3-text-black">17/07/2000</p>
                    </div>
                    <div className="w3-third w3-padding w3-section">
                        <label>CPF: </label><br />
                        <p className="nes-input tamanhoFonte w3-text-black">768.441.450-04</p>
                    </div>
                    <div className="w3-third w3-padding w3-section">
                        <label>Celular: </label><br />
                        <p className="nes-input tamanhoFonte w3-text-black">(34) 95399-9223</p>
                    </div>
                    <div className="w3-third w3-padding w3-section">
                        <label>CEP: </label><br />
                        <p className="nes-input tamanhoFonte w3-text-black">38402-098</p>
                    </div>
                    <div className="w3-third w3-padding w3-section">
                        <label>Email: </label><br />
                        <p className="nes-input tamanhoFonte w3-text-black">Rafael_Profeta@hotmail.com</p>
                    </div>
                    <div className="w3-third w3-padding w3-section">
                        <label>Rua: </label><br />
                        <p className="nes-input tamanhoFonte w3-text-black">Av.Joaquim Nabuco</p>
                    </div>
                    <div className="w3-third w3-padding w3-section">
                        <label>Bairro: </label><br />
                        <p className="nes-input tamanhoFonte w3-text-black">Minas Gerais</p>
                    </div>
                    <div className="w3-third w3-padding w3-section">
                        <label>Número: </label><br />
                        <p className="nes-input tamanhoFonte w3-text-black">246</p>
                    </div>
                </fieldset >
                <div className="w3-right">
                    <button className="w3-margin-top w3-padding w3-margin-right nes-btn bit-font" type="submit"> Editar </button>
                    <button className="w3-margin-top w3-padding nes-btn bit-font" type="submit"> Salvar </button>
                </div>
            </div >
        </div>

    )
}

export default Cliente
