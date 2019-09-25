import { mapState, mapActions } from "vuex";
import statusCode from 'http-status-codes'

export default {
    computed: {
        ...mapState("Register", ["register"]),
        progressPass() {
            return Math.min(100, this.register.password.length * 10)
        },
        colorPass() {
            return ['error', 'warning', 'success'][Math.floor(this.progressPass / 40)]
        },
        progressConfirmPass() {
            return Math.min(100, this.register.confirmPassword.length * 10)
        },
        colorConfirmPass() {
            return ['error', 'warning', 'success'][Math.floor(this.progressConfirmPass / 40)]
        }
    },
    methods: {
        ...mapActions("Register", ["setRegister"]),
        submit() {
            this.register.loadingRegister = true;            
            if (this.$refs.form.validate()) {
                this.setRegister(this.register).catch(error => {
                    console.log(error);
                    console.log(error.response.status);
                    /*if (error.response.status == statusCode.NOT_FOUND) {
                        notify.notify(this.$notify, 'Login ou senha inválidos', 2);
                    }*/
                    this.register.loadingRegister = false;   
                });
            }
            this.register.loadingRegister = false;            
        }
    }
}