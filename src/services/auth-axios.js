import axios from "axios";

let authAxios = {
  async loginUser(data) {
    await axios
      .post("/NotesApp/Login", data)
      .then((res) => {
        console.log(res);
        //storing the login data in local storage
        localStorage.setItem("login-data", JSON.stringify(res.data));
      })
      .catch((err) => console.error(err));
  },
  async getVerificationMail(data) {
    await axios
      .post("/NotesApp/ForgotPassword", data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
  async updatePassword(token, data) {
    await axios
      .patch(`/NotesApp/ResetPassword/${token}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
  async addUser(newUserData) {
    await axios
      .post("/NotesApp/Signup", newUserData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  },
  async getNotes() {
    let user = JSON.parse(localStorage.getItem("login-data"));
    return await axios.get("/NotesApp/Note", {
      headers: { "x-access-token": user.token },
    });
  },
  async addNote(newNoteData) {
    let user = JSON.parse(localStorage.getItem("login-data"));
    await axios
      .post ("/NotesApp/AddNote", {
        headers: { "x-access-token": user.token },
        body: { newNoteData },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
};

export default authAxios;
