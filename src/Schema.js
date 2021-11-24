import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
Yup.setLocale(pt);
export default Yup.object().shape({
    email: Yup.string("teste").email().required(),
    senha: Yup.string().min(6).max(12).required(),
    nome: Yup.string().min(8).max(35).required(),
    nascimento: Yup.number().required().positive().integer(),
    cpf: Yup.number().min(2).max(30).required(),
    celular: Yup.number().min(2).max(30).required(),
    cep: Yup.number().required(),
    logradouro: Yup.string().required(),
    bairro: Yup.string().min(2).max(30).required(),
    numero: Yup.number().required().positive().integer(),
})