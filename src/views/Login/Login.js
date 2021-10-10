import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

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
            min: minLength(6)
        },
      },
    }
  },

  methods: {
    onLogin(){
      this.v$.$validate()
      if(this.v$.$error){
        console.log(this.v$)
      }
      else{
        console.log("SUCCESS")
        //connect to db
        //check if there is a login value => if yes; dashboard 
      }
      // console.log(email)
    }
  }
  
}