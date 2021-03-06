import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
  alpha,
} from "@vuelidate/validators";
import authFunctions from "@/services/auth-axios.js";

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
            alpha: helpers.withMessage("Should contain only alphabets", alpha),
            min: helpers.withMessage("Atleast 3 characters long", minLength(3)),
          },
          lname: {
            required,
            alpha: helpers.withMessage("Should contain only alphabets", alpha),
            min: helpers.withMessage("Atleast 3 characters long", minLength(3)),
          },
        },
        email: {
          required,
          email,
        },
        password: {
          required,
          min: helpers.withMessage("Atleast 3 characters long", minLength(3)),
        },
        confirmpwd: {
          required,
          sameAsPassword: helpers.withMessage(
            "Both values should match",
            sameAs(this.form.password)
          ),
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
        let newUser = {
          fname: this.form.name.fname,
          lname: this.form.name.fname,
          email: this.form.email,
          password: this.form.password,
        };
        authFunctions.addUser(newUser) && this.$router.push("/Login");
      }
    },

    hidePassword() {
      var x = document.getElementById("password");
      var y = document.getElementById("confirmpwd");
      if (x.type === "password") {
        x.type = y.type = "text";
      } else {
        x.type = y.type = "password";
      }
    },
  },
};
