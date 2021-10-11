import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import axios from "axios";
// import axios from "axios"


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
        axios.patch(`http://localhost:3000/NotesApp/ResetPassword/${this.$route.params.token}`, {password: this.form.password})
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
      }
    },
  },
};
