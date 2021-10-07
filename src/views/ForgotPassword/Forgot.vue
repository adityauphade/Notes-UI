<template>
  <div class="outer-page">
    <div class="CreateAccountBox">
      <form>
        <img width="110" src="@/assets/Fundoo-logo.png" alt="" />
        <h2>Forgot Password</h2>
        <div class="email">
          <div class="emailInput">
            <div class="input-box">
              <input type="email" id="email" placeholder=" " />
              <label for="email">Email</label>
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

}
</script>

<style lang="scss" scoped>
@import '@/Global.scss';
@import '../Login/Login.scss';
</style>