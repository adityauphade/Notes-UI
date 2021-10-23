export default{
    name: "nav",
    data(){
        return{
            isToggled: false,
            firstName: '',
            lastName: ''
        }
    },
    created(){
        let user = JSON.parse(localStorage.getItem("login-data"));
        this.firstName = user.fname
        this.lastName = user.lname
    },
    methods: {
        logout(){
            localStorage.removeItem('login-data')
            this.$router.push("/Login");
        }
    }
}