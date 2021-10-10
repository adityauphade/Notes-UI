<template>
  <div class="outer-page">
    <div class="CreateAccountBox">
      <form>
        <img width="110" src="@/assets/Fundoo-logo.png" alt="" />
        <h2>Sign In</h2>
        <h3>Use your Google Account</h3>
        <div class="email">
          <div class="emailInput">
            <div class="input-box">
              <input type="text" id="email" placeholder=" " />
              <label for="email">Email</label>
            </div>
          </div>
          <small></small>
        </div>

        <div class="password">
          <div class="pwdInput">
            <div class="input-box">
              <input type="text" id="pwd" placeholder=" " />
              <label for="pwd">Password</label>
            </div>
          </div>
          <div class="password-footer">
            <small></small>
            <button type="transparent" id="forget-password">
              <a href="">Forget password?</a>
            </button>
          </div>
        </div>
        <div class="form-buttons">
          <button type="transparent" id="sign-in">Sign in instead</button>
          <button type="solid" id="sign-up">Next</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss" scoped>
@import "@/Global.scss";
@import "./Login.scss";
</style>
