import axios from 'axios'
const LOGIN_URL = process.env.API_URL + 'api/authenticate/v1/authenticate'

const setCredentials = async ({ commit }, credentials) => {
    try {
        var response = await axios.post(LOGIN_URL, { user: credentials.user.username, pass: credentials.user.password })
        localStorage.setItem('access_token', response.data.access_token);
        credentials.authorized = {
            success: true,
            message: "Sucesso ao realizar o login"
        };
        commit('LOGIN', credentials);
    }
    catch(ex){
        credentials.authorized = {
            success: false,
            message: "Login e senha inválidos"
        };
        commit('LOGIN', credentials);
        throw ex;
    }
}


const logout = ({ commit }) => {
    localStorage.removeItem("access_token");
    commit('SET_SUCCESS', false);
}

const checkAuth = ({ commit }) => {
    var jwt = localStorage.getItem("access_token");
    var success = false;
    //Verificar se o token é valido na api
    if (jwt && jwt != "") {
        axios.defaults.headers.common["authorization"] = jwt;
        success = true;
    }
    commit('SET_SUCCESS', success);
}


export default {
    setCredentials,
    logout,
    checkAuth
}