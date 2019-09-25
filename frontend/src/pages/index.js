import Login from "@/pages/login/index.vue";
import DashBoard from "@/pages/dashBoard/dashboardLayout";
import { mapState, mapActions } from "vuex";

export default {  
  components:{
    Login,
    DashBoard
  },
  computed:{
    ...mapState("Login", ["credentials"])   
  },
  mounted(){
    this.checkAuth();
  },
  methods: {
    ...mapActions("Login", ["checkAuth", "logout"]),
    checkAuthEmit() {
      this.checkAuth();
    },
    logoutEmit(){
      this.logout();
    }
  }
};