import axios from "axios"

let authAxios = {
    async loginUser(data){
        await axios.post("/NotesApp/Login", data)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    },
}

export default authAxios
