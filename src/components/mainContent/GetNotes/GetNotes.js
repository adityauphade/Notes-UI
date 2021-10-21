import IconList from "../IconList/Icon.vue";
import EditNote from "../EditNote/EditNote.vue";
import authFunctions from "@/services/auth-axios.js";

export default {
  name: "GetNotes",
  data() {
    return {
      // color: String,
      notesData: Array,
      openEdit: false,
      selectedNote: {}
    };
  },
  components: {
    IconList, EditNote
  },
  created() {
    authFunctions.getNotes().then((value) => {
      this.notesData = value.data;
    });
  },
  methods: {
    openNote(note){
      this.openEdit = true
      this.selectedNote=note;
      console.log(this.selectedNote)
    },
    noteColor(color){
      return {
        'background': color,
      }
    }
  }
};
