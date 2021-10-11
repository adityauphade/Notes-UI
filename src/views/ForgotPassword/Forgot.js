import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import axios from 'axios';

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
        axios.post('http://localhost:3000/NotesApp/ForgotPassword', this.form)
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
      }
      // console.log(email)
    }
  }
  
}