import IconList from "../IconList/Icon.vue";
import authFunctions from "@/services/auth-axios.js";

export default {
  name: "AddNote",

  data() {
    return {
      expand: true,
      note: {
        title: '',
        body: '',
        isArchived: false,
      },
    };
  },

  components: {
    IconList,
  },

  methods: {
    onAddNote() {
      this.expand=!this.expand;
      // this.$emit('AddNoteToggled')
      console.log(this.note)
      authFunctions.addNote(this.note)    
      location.reload();
    },
  },
};
