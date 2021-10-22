import IconList from "../IconList/Icon.vue";
import authFunctions from "@/services/auth-axios.js";

export default {
  name: "EditNote",

  data() {
    return {
      note: {
        title: "",
        body: "",
        isArchived: false,
        colour: ''
      },
    };
  },

  props: {
    openEdit: Boolean,
    selectedNote: Object,
  },

  watch: {
    openEdit(){
      this.note = this.selectedNote;
      console.log(this.selectedNote);
      console.log(this.note);
    }
  },

  components: {
    IconList,
  },

  methods: {
    onEditNote() {
      //API call to edit note => pass a new object
      console.log(this.note)
      authFunctions
          .editNote(this.note)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      this.$emit("editClosed");
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
  }
};
