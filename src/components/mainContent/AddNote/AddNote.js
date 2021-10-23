import IconList from "../IconList/Icon.vue";
import authFunctions from "@/services/auth-axios.js";

export default {
  name: "AddNote",

  data() {
    return {
      expand: true,
      note: {
        title: "",
        body: "",
        isArchived: false,
        colour: "",
        isDeleted: false,
      },
    };
  },

  components: {
    IconList,
  },

  methods: {
    onAddNote() {
      this.expand = !this.expand;
      this.$emit("newNoteAdded", this.note);
      authFunctions.addNote(this.note);
      //RESET VALUES
      this.note.title = "";
      this.note.body = "";
      this.note.isArchived = false;
      this.note.colour = "";
      this.note.isDeleted = false;
      
      // location.reload();
    },
    noteColor(color) {
      return {
        background: color,
      };
    },
    updatedColor(e) {
      console.log("THIS IS THE UPDATED COLOR => ", e);
      this.note.colour = e;
    },
  },
};
