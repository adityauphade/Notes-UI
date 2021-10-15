import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import authFunctions from "@/services/auth-axios.js";

export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: helpers.withMessage("Atleast 3 characters long", minLength(3)),
        },
      },
    };
  },

  methods: {
    async onLogin() {
      this.v$.$validate();
      if (this.v$.$error) {
        console.log(this.v$);
      } else {
        // localStorage.setItem('login-data', JSON.stringify(this.form))
        authFunctions.loginUser(this.form) && this.$router.push("/Notes");
        console.log("SUCCESS");
      }
    },
  },
};
