<template>
  <div class="outer-page">
    <div class="CreateAccountBox">
      <form>
        <img width="110" src="@/assets/Fundoo-logo.png" alt="" />
        <h2>Account Recovery</h2>
        <h3>Enter your Email id</h3>
        <div class="email">
          <div class="emailInput">
            <div class="input-box">
              <input
                :class="[v$.form.email.$error ? 'error' : '']"
                type="text"
                id="email"
                placeholder=" "
                v-model="form.email"
              />
              <label for="email">Email</label>
            </div>
          </div>
          <small :class="[v$.form.email.$error ? 'error' : 'hide']"
            ><i class="bi bi-exclamation-circle-fill"></i>
            {{
              v$.form.email.$error ? v$.form.email.$errors[0].$message : ""
            }}</small
          >
        </div>

        <div class="form-buttons">
          <button @click="onSubmit" type="button" class="solid" id="reset">
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script type="module" src="./Forgot.js"></script>

<style lang="scss" scoped>
@import "@/Global.scss";
@import "../Login/Login.scss";
@import "../ResetPassword/Reset.scss";
@import "./Forgot.scss";
</style>
