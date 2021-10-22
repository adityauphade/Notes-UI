import IconList from "../IconList/Icon.vue";

export default {
  name: "AddNote",

  data() {
    return {
      expand: true,
      note: {
        title: '',
        body: '',
        isArchived: false,
        colour: ''
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
      console.log(this.note)
      location.reload();
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
