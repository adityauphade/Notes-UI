import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

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
        //connect to db
        //check if there is a login value => if yes; dashboard
      }
      // console.log(confirmpwd)
    },
  },
};
