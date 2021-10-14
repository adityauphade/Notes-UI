import AddNote from './AddNote/AddNote.vue'
import GetNotes from './GetNotes/GetNotes.vue'

export default{
    name: "main",
    components:{
        AddNote,
        GetNotes
    },
    data(){
        return{
            expand: true,
        }
    }
}