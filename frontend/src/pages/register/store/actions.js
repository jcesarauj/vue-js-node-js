import axios from 'axios'
const URL = process.env.API_URL + '/api/register/v1'

const setRegister = async ({ commit }, register) => {
    try {
        var response = await axios.post(URL, 
            { user: credentials.user.username, 
              pass: credentials.user.password })        
        
        commit('REGISTER', register);
    }
    catch(ex){
        commit('REGISTER', register);
        throw ex;
    }
}

export default {
    setRegister    
}