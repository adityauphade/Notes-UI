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
          <small v-if="v$.form.email.$error"
            ><i class="bi bi-exclamation-circle-fill"></i>
            {{ v$.form.email.$errors[0].$message }}</small
          >
        </div>

        <div class="password">
          <div class="pwdInput">
            <div class="input-box">
              <input
                :class="[v$.form.password.$error ? 'error' : '']"
                type="password"
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
          <div class="password-footer">
            <!-- <button @click="this.$router.push({ path: 'ForgotPassword' })" type="transparent" id="forget-password">Forget password?</button> -->
          </div>
        </div>
        <div class="form-buttons">
          <button @click="window.location.href='/signup'" type="transparent" id="sign-up">Sign up instead?</button>
          <button @click="onLogin" type="solid" id="sign-in">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script type="module" src="./Login.js"></script>

<style lang="scss" scoped>
@import "@/Global.scss";
@import "./Login.scss";
</style>
