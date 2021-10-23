<template>
  <!-- <Alert :status="status" :message="message" /> -->
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
            <small :class="[v$.form.email.$error ? 'error' : 'hide']"
              ><i class="bi bi-exclamation-circle-fill"></i>
              {{
                v$.form.email.$error ? v$.form.email.$errors[0].$message : ""
              }}</small
            >
          </div>
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
            <small :class="[v$.form.password.$error ? 'error' : 'hide']"
              ><i class="bi bi-exclamation-circle-fill"></i>
              {{
                v$.form.password.$error
                  ? v$.form.password.$errors[0].$message
                  : ""
              }}</small
            >
          </div>
          <div class="password-footer">
            <button
              @click="this.$router.push('/ForgotPassword')"
              type="button"
              class="transparent"
              id="forget-password"
            >
              Forget password?
            </button>
          </div>
        </div>
        <div class="form-buttons">
          <button
            @click="this.$router.push('/Signup')"
            type="button"
            class="transparent"
            id="sign-up"
          >
            Sign up instead?
          </button>
          <button @click="onLogin" type="button" class="solid" id="sign-in">
            Login
          </button>
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
