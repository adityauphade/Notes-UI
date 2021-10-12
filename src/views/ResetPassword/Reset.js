import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import authFunctions from '@/services/auth-axios.js'


export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        password: "",
        confirmpwd: "",
      },
    };
  },

  validations() {
    return {
      form: {
        password: {
          required,
          min: minLength(6),
        },
        confirmpwd: {
          required,
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
        console.log(this.$route.params.token)
        authFunctions.updatePassword( this.$route.params.token, {password: this.form.password})
      }
    },
  },
};
