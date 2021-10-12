import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import authFunctions from '@/services/auth-axios.js'

export default {
  setup () {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      form: {
        email: '',
      },
    }
  },
    
  validations() {
    return {
      form: {
        email: {
           required, email 
        },
      },
    }
  },

  methods: {
    onSubmit(){
      this.v$.$validate()
      if(this.v$.$error){
        console.log(this.v$)
      }
      else{
        authFunctions.getVerificationMail(this.form)
        console.log("SUCCESS")
      }
    }
  }
  
}