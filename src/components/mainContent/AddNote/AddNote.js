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
        colour: '',
        isDeleted: false
      },
    };
  },

  components: {
    IconList,
  },

  methods: {
    onAddNote() {
      this.expand=!this.expand;
      this.$emit('newNoteAdded', this.note)
      authFunctions.addNote(this.note);
      console.log(this.note)
      // location.reload();
    },
    noteColor(color){
      return {
        'background': color,
      }
    },
    updatedColor(e){
      console.log('THIS IS THE UPDATED COLOR => ', e)
      this.note.colour = e;
    }
  },
};
