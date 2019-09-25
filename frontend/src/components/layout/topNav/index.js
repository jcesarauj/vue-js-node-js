export default {
    computed: {
      routeName() {
        const { name } = this.$route;        
        return this.capitalizeFirstLetter(name);
      }
    },
    data() {
      return {
        activeNotifications: false
      };
    },
    methods: {
      logout(){
        this.$emit('logout-click')
      },
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      toggleNotificationDropDown() {
        this.activeNotifications = !this.activeNotifications;
      },
      closeDropDown() {
        this.activeNotifications = false;
      },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      }
    }
  };