<template>
  <div class="outer-page">
    <div class="CreateAccountBox">
      <form>
        <img width="110" src="@/assets/Fundoo-logo.png" alt="" />
        <h2>Reset Password</h2>
        <div class="password">
          <div class="pwdInput">
            <div class="input-box">
              <input
                :class="[v$.form.password.$error ? 'error' : '']"
                type="text"
                id="password"
                placeholder=" "
                v-model="form.password"
              />
              <label for="password">Password</label>
            </div>
            <small v-if="v$.form.password.$error"
              ><i class="bi bi-exclamation-circle-fill"></i>
              {{ v$.form.password.$errors[0].$message }}</small
            >
          </div>
        </div>

        <div class="password">
          <div class="pwdInput">
            <div class="input-box">
              <input
                :class="[v$.form.confirmpwd.$error ? 'error' : '']"
                type="text"
                id="confirmpwd"
                placeholder=" "
                v-model="form.confirmpwd"
              />
              <label for="confirmpwd">Confirm</label>
            </div>
            <small v-if="v$.form.confirmpwd.$error"
              ><i class="bi bi-exclamation-circle-fill"></i>
              {{ v$.form.confirmpwd.$errors[0].$message }}</small
            >
          </div>
        </div>
        <div class="form-buttons">
          <!-- <button type="transparent" id="sign-in">Sign in instead</button> -->
          <button @click="onSubmit" class="solid" type="button" id="reset">Change Password</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script type='module' src='./Reset.js'></script>

<style lang="scss" scoped>
@import "@/Global.scss";
@import "./Reset.scss";
@import "../Login/Login.scss";
</style>
