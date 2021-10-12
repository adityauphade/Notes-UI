import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs, helpers } from "@vuelidate/validators";
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
          min: helpers.withMessage('Atleast 3 characters long', minLength(3)),
        },
        confirmpwd: {
          required,
          sameAsPassword: helpers.withMessage('Both values should match', sameAs(this.form.password))
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
