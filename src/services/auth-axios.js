import axios from "axios";

let authAxios = {
  async loginUser(data) {
    await axios
      .post("/NotesApp/Login", data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
  async getVerificationMail(data) {
    axios
      .post("/NotesApp/ForgotPassword", data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
  async updatePassword(token, data) {
    axios
      .patch(`/NotesApp/ResetPassword/${token}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
  async addUser(newUserData) {
    axios
      .post("/NotesApp/Signup", newUserData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  },
};

export default authAxios;
