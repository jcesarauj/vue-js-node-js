import { Masks } from '../../../common/index.js'

export default {
    register: {
        loadingRegister: false,
        tooltipShow: false,
        validRegister: false,
        phoneMask: Masks.PHONE_MASK,
        cnpjMask: Masks.CNPJ_MASK,
        cpfMask: Masks.CPF_MASK,
        cepMask: Masks.CEP_MASK,
        valid: false,

        id:0,
        profission: 1,
        protetic: 1,
        personType: true,
        descodonto: true,
        companyName: "",
        companyNameRules: [
            v => !!v || 'Informe a razão social',
        ],
        name: "",
        nameRules: [
            v => !!v || 'Informe o nome',
        ],
        cnpj: "",
        cnpjRules: [
            v => !!v || 'Informe o cnpj',
        ],
        ie: "",
        ieRules: [
            v => !!v || 'Informe o ie',
        ],
        cpf: "",
        cpfRules: [
            v => !!v || 'Informe o cpf',
        ],
        rg: "",
        rgRules: [
            v => !!v || 'Informe o rg',
        ],
        phone: "",
        phoneRules: [
            v => !!v || 'Informe o telefone',
        ],
        email: "",
        emailRules: [
            v => !!v || 'Informe o e-mail',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail inválido'
        ],
        address: "",
        addressRules: [
            v => !!v || 'Informe o telefone',
        ],
        neighborhood: "",
        neighborhoodRules: [
            v => !!v || 'Informe o bairro',
        ],
        zipCode: "",
        zipCodeRules: [
            v => !!v || 'Informe o cep',
        ],
        state: 1,
        stateRules: [
            v => !!v || 'Informe o estado',
        ],
        city: 1,
        cityRules: [
            v => !!v || 'Informe a cidade',
        ],
        login: "",
        loginRules: [
            v => !!v || 'Informe o login',
        ],
        password: "",
        passwordRules: [
            v => !!v || 'Informe a senha',
        ],
        confirmPassword: "",
        confirmPasswordRules: [
            v => !!v || 'Confirme a senha',
        ]
    }
}