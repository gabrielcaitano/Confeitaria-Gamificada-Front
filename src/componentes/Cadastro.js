import React from 'react'

const Cadastro = () => {
    return (
        <div class="w3-content">
            <div class="w3-padding-32 w3-content w3-text-grey">

                <h2 class="w3-text-white w3-center w3-jumbo">Cadastro</h2>
                <hr class="w3-opacity w3-center" />

                <form action="cadastro.php" method="POST" />

                <fieldset class="w3-text-white w3-large w3-padding w3-row">
                    <legend>Dados De Login</legend>

                    <div class="w3-half w3-padding w3-section">
                        <label>Usuário:</label><br />
                        <input class="w3-input w3-border w3-margin-bottom w3-animate-input w3-hide-small"
                            type="text" name="usuario" placeholder="Digite Seu Usuário" required />
                    </div>

                    <div class="w3-half w3-padding w3-section">
                        <label>Senha:</label><br />
                        <input class="w3-input w3-border w3-margin-bottom w3-animate-input w3-hide-small"
                            type="password" name="senha" placeholder="Digite Sua Senha" required />
                    </div>
                </fieldset>
            </div>

        </div>

    )
}

export default Cadastro
