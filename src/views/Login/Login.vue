<template>
  <div class="outer-login">
    <div class="CreateAccountBox">
      <form>
        <img
            width="110"
            src="@/assets/Fundoo-logo.png"
            alt=""
          />
        <h2>Sign In</h2>
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
          <small
            >Use 8 or more characters with a mix of letters, numbers &
            symbols</small
          ><br><br>
          <button type="transparent" id="forget-password">Forget password?</button>
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
@import '@/Global.scss';
@import "./Login.scss";
</style>
