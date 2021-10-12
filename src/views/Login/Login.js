import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import axios from "axios"

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
        console.log("SUCCESS")
        await axios.post("/NotesApp/Login", this.form)
        .then(res => {
          console.log(res);
          // window.location.href = '#dashboard = AS LOGGED IN SUCCESSFULLY'; 
        }).catch(err => console.error(err))
      }
    }
  }
  
}