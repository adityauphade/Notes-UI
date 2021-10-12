import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import authFunctions from '@/services/auth-axios.js'

export default {
  setup () {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
    
  validations() {
    return {
      form: {
        email: {
           required, email 
        },
        password: {
            required, 
            min: minLength(3)
        },
      },
    }
  },

  methods: {
    async onLogin(){
      this.v$.$validate()
      if(this.v$.$error){
        console.log(this.v$)
      }
      else{
        authFunctions.loginUser(this.form)
        console.log("SUCCESS")
      }
    }
  }
  
}