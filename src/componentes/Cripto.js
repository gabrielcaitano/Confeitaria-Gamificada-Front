import React from 'react'
import { Formik, Field, Form } from 'formik';

const Style = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    marginLeft: 120,
}

function Cripto({ abrir, fechar }) {

    function onSubmit(values) {


    }


    if (!abrir) return null
    var Btcbrl
    var Btcbusd
    var Dogebtc
    return (

        <div className="marginLeft">
            <div style={Style}>
                <Formik
                    onSubmit={onSubmit}
                    initialValues={{
                        moeda: 'inicial',
                    }}
                >
                    {({ isValid }) => (
                        <div className="tamanhoModal w3-gray w3-content w3-animate-left">

                            <div className="w3-black w3-cell-row w3-padding">
                                <div className="bit-font w3-xlarge w3-center w3-cell">Criptomoedas</div>
                                <button onClick={fechar} className="nes-btn bit-font w3-cell">X</button>
                            </div>

                            <div className="nes-container w3-container">

                                <div className="w3-center">

                                    <p className="bit-font w3-large w3-center">Pesquise Sua Moeda</p>
                                    <div className="nes-container">
                                        <p className="title">Aqui Vai O Resultado Do Socket</p>
                                        <p>DASDDDDDDDDDDDDDDD</p>
                                    </div>
                                    <Form>
                                        <div className="nes-select w3-margin-top">

                                            <Field as="select" name="moeda" required>
                                                <option value='inicial' disabled hidden>Selecione Sua Moeda</option>
                                                <option value={Dogebtc}>Dogebtc</option>
                                                <option value={Btcbusd}>Btcbusd</option>
                                                <option value={Btcbrl}>Btcbrl</option>
                                            </Field>

                                        </div>
                                        <div className="w3-margin-top">
                                            <button className="nes-btn bit-font buttonModalCripto w3-margin-bottom w3-margin-right" type="submit" >Pesquisar</button>
                                            <button className="nes-btn bit-font buttonModalCripto w3-margin-bottom">Parar</button>
                                        </div>
                                    </Form>
                                </div>
                            </div>

                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Cripto
