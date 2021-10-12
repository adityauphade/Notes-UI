import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import axios from "axios";

export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        name: {
          fname: "",
          lname: "",
        },
        email: "",
        password: "",
        confirmpwd: "",
      },
    };
  },

  validations() {
    return {
      form: {
        name: {
          fname: { 
            required,
          },
          lname: { 
            required,
          },
        },
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(3),
        },
        confirmpwd: {
          required,
          sameAsPassword: sameAs(this.form.password)
        },
      },
    };
  },

  methods: {
    onSubmit() {
      this.v$.$validate();
      if (this.v$.$error) {
        console.log(this.v$);
      } else {
        console.log("SUCCESS");
        let data = {
          fname: this.form.name.fname,
          lname: this.form.name.fname,
          email: this.form.email,
          password: this.form.password,
        };
        axios
          .post("http://localhost:3000/NotesApp/Signup", data)
          .then((res) => {
            console.log(res);
            this.$router.push('/Login')
          })
          .catch((err) => console.error(err));
        
      }
    },
    hidePassword(){
      var x = document.getElementById('password')
      var y = document.getElementById('confirmpwd')
      if(x.type === 'password'){
        x.type = y.type  = 'text'
      }else{x.type = y.type = 'password'}
    }
  },
};
