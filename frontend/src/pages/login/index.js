import { mapState, mapActions } from "vuex";
import notify from "@/components/layout/notifications/index.js";
import statusCode from 'http-status-codes'

export default {
    computed: {
        ...mapState("Login", ["credentials"])
    },
    methods: {
        ...mapActions("Login", ["setCredentials"]),
        submit() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    var credentials = {
                        user: {
                            username: this.credentials.user.username,
                            password: this.credentials.user.password
                        }
                    };

                    this.setCredentials(credentials).catch(error => {
                        if (error.response.status == statusCode.NOT_FOUND) {
                            notify.notify(this.$notify, 'Login ou senha inválidos', 2);
                        }
                    });
                }
            });
        }
    }
};