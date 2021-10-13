import Nav from '@/components/NavBar/nav.vue'
import SideNav from '@/components/sideNav/nav.vue'

export default {
  components: {
    Nav,
    SideNav,
  },
  data(){
    return{
      sidebarToggle: true,
    }
  }
}