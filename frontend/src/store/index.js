import Vue from 'vue'
import Vuex from 'vuex'
import Login from '@/pages/login/store/index'
import Register from '@/pages/register/store/index'

Vue.use(Vuex)

const modules = {
    Login,
    Register
}

export default new Vuex.Store({
    modules
})