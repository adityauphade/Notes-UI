import Nav from '@/components/NavBar/nav.vue'
import SideNav from '@/components/sideNav/nav.vue'
import DashboardContent from '@/components/mainContent/main.vue'

export default {
  components: {
    Nav,
    SideNav,
    DashboardContent
  },
  data(){
    return{
      sidebarToggle: true,
    }
  }
}