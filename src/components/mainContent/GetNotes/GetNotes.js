import IconList from "../IconList/Icon.vue";
import authFunctions from "@/services/auth-axios.js";

export default {
  name: "GetNotes",
  data() {
    return {
      notesData: Array,
    };
  },
  components: {
    IconList,
  },
  created() {
    authFunctions.getNotes().then((value) => {
      this.notesData = value.data;
    });
  },
  methods: {
    EditNote(){
      console.log('Edit Notes')
    }
  }
};
