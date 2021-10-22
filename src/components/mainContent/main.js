import AddNote from "./AddNote/AddNote.vue";
import GetNotes from "./GetNotes/GetNotes.vue";
import authFunctions from "@/services/auth-axios.js";

export default {
  name: "main",
  components: {
    AddNote,
    GetNotes,
  },
  data() {
    return {
      expand: true,
      newNote: {},
      notesArray: [{}],
      isAdded: true,
    };
  },
  methods: {
    newNoteAdded(e) {
      console.log(e);
      this.newNote = e;
      authFunctions.addNote(this.newNote);
      this.isAdded = !this.isAdded;
    },
  },
};
