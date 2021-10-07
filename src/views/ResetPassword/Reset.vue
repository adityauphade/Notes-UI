<template>
  <div class="outer-page">
    <div class="CreateAccountBox">
      <form>
        <img width="110" src="@/assets/Fundoo-logo.png" alt="" />
        <h2>Reset Password</h2>
        <div class="password">
          <div class="pwdInput">
            <div class="input-box">
              <input type="password" id="password" placeholder=" " />
              <label for="password">Password</label>
            </div>
          </div>
          <small></small>
        </div>

        <div class="password">
          <div class="pwdInput">
            <div class="input-box">
              <input type="password" id="confirmPwd" placeholder=" " />
              <label for="confirmPwd">Confirm</label>
            </div>
          </div>
          <small></small>
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
  name: "Reset",
};
</script>

<style lang="scss" scoped>
@import "@/Global.scss";
@import "../Login/Login.scss";
</style>
