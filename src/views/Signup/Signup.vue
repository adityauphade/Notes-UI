<template>
  <div class="outer-page">
    <div class="CreateAccountBox">
      <div class="mainContent">
        <form>
          <img
            width="110"
            src="@/assets/Fundoo-logo.png"
            alt=""
          />
          <h2>Create your Google Account</h2>

          <div class="name">
            <div class="nameInput">
              <div class="input-box">
                <input type="text" id="firstName" placeholder=" " />
                <label for="firstName">First Name</label>
              </div>
              <div class="input-box">
                <input type="text" id="lastName" placeholder=" " />
                <label for="lastName">Last Name</label>
              </div>
            </div>
            <small></small>
          </div>

          <div class="username">
            <div class="unameInput">
              <div class="input-box">
                <input type="text" id="userName" placeholder=" " />
                <label for="userName">Username</label>
              </div>
            </div>
            <small>You can use letters, numbers & periods</small>
          </div>

          <div class="password">
            <div class="pwdInput">
              <div class="input-box">
                <input type="text" id="pwd1" placeholder=" " />
                <label for="pwd1">Password</label>
              </div>
              <div class="input-box">
                <input type="text" id="pwd2" placeholder=" " />
                <label for="pwd2">Confirm</label>
              </div>
            </div>
            <small
              >Use 8 or more characters with a mix of letters, numbers &
              symbols</small
            >
            <div class="password-checkbox">
              <input type="checkbox" name="showPwd" id="showPwd" />
              <label for="showPwd">Show Password</label>
            </div>
          </div>
          <div class="form-buttons">
            <button type="transparent" id="sign-in">Sign in instead</button>
            <button type="solid" id="sign-up">Next</button>
          </div>
        </form>
      </div>
      <div class="sideContent">
        <img
          src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
          alt=""
        />
        <p>One account. All of Google working for you.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      Name: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/Global.scss";
@import "./Signup.scss";
</style>
