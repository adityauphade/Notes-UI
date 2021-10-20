import authFunctions from "@/services/auth-axios.js";

export default {
  name: "Icon",
  data() {
    return {
      isToggled: false,
    };
  },
  props: {
    id: String,
  },
  methods: {
    ArchiveNote() {
      if (this.id) {
        let user = JSON.parse(localStorage.getItem("login-data"));
        console.log(user.token);
        console.log("This is the id of the Note: ", this.id);
        authFunctions
          .archiveNote(this.id, user.token)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else {
        console.log("id is NOT present");
      }
    },
    DeleteNote() {
      if (this.id) {
        let user = JSON.parse(localStorage.getItem("login-data"));
        authFunctions
          .deleteNote(this.id, user.token)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else {
        console.log("id is NOT present");
      }
    },
    changeColor() {
      console.log(this.isToggled);
      console.log("bhaya");
      
    },
  },
};
