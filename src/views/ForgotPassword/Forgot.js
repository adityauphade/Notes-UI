import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

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
        console.log("SUCCESS")
        //connect to db
        //check if there is a login value => if yes; dashboard 
      }
      // console.log(email)
    }
  }
  
}