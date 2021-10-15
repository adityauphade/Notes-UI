// import axios from 'axios';
import IconList from '../IconList/Icon.vue'
import authFunctions from "@/services/auth-axios.js";

export default{
    name: "GetNotes",
    data(){
        return{
            notes:[
                {
                    title: 'Title',
                    body: 'body'
                },
                {
                    title: 'Title',
                    body: 'body'
                },
                {
                    title: 'Title',
                    body: 'body'
                },
                {
                    title: 'Title',
                    body: 'body'
                },
                {
                    title: 'Title',
                    body: 'body'
                },
                {
                    title: 'Title',
                    body: 'body'
                },
                {
                    title: 'Title',
                    body: 'body'
                },
                {
                    title: 'Title',
                    body: 'body'
                },
                {
                    title: 'Title',
                    body: 'body'
                },
                {
                    title: 'Title',
                    body: 'body'
                },
            ]
        }
    },
    components: {
        IconList,
    },
    async created(){
        let notesData = await authFunctions.getNotes()
        console.log('THIS IS XXXXXXXXXXXXXXX', notesData)
    },
}