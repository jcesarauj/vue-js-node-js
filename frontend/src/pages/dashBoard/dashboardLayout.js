import TopNav from "@/components/layout/topNav/index.vue";
import TopNavMobile from "@/components/layout/topNavMobile/index.vue";
import ContentFooter from "@/components/layout/footer/index.vue";
import DashboardContent from "./content";
import MobileMenu from "@/components/layout/menuMobile/index.vue";

export default {  
  components: {
    TopNav,
    TopNavMobile,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {        
      if (this.$sidebar.showSidebar) 
      {
        this.$sidebar.displaySidebar(false);
      }
    },
    logout(){
      this.$emit('logout-click')
    }
  }
};