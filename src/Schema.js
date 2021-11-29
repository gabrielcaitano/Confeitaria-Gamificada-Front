import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
Yup.setLocale(pt);
export default Yup.object().shape({
    email: Yup.string().min(10).max(45).email().required(),
    senha: Yup.string().min(6).max(15).required(),
    nome: Yup.string().min(12).max(45).required(),
    nascimento: Yup.string().required(),
    cpf: Yup.string().required(),
    celular: Yup.string().required(),
    cep: Yup.string().max(8).min(8).required(),
    logradouro: Yup.string().max(45).required(),
    bairro: Yup.string().max(25).required(),
    numero: Yup.number().required().positive().integer(),
})

