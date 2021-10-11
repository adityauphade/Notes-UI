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
          min: minLength(6),
        },
        confirmpwd: {
          required,
          sameAsPassword: sameAs(this.form.password)
        },
      },
    };
  },

  methods: {
    onLogin() {
      this.v$.$validate();
      if (this.v$.$error) {
        console.log(this.v$);
      } else {
        console.log("SUCCESS");
        let data = {
          fname: "Bhaya",
          lname: "Patani",
          email: "bhaya@patanigmail.com",
          password: "IloveMOmos",
        };
        axios
          .post("http://localhost:3000/NotesApp/Signup", data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.error(err));
        //connect to db
        //check if there is a login value => if yes; dashboard
      }
    },
  },
};
