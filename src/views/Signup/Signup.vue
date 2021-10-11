<template>
  <div class="outer-page">
    <div class="CreateAccountBox">
      <div class="mainContent">
        <form>
          <img width="110" src="@/assets/Fundoo-logo.png" alt="" />
          <h2>Create your Google Account</h2>

          <div class="name">
            <div class="nameInput">
              <div class="fname">
                <div class="input-box">
                  <input
                    :class="[v$.form.name.fname.$error ? 'error' : '']"
                    type="text"
                    id="fname"
                    placeholder=" "
                    v-model="form.name.fname"
                  />
                  <label for="fname">First Name</label>
                </div>
                <small
                  v-if="v$.form.name.fname.$error"
                  :class="[v$.form.name.fname.$error ? 'error' : '']"
                  ><i class="bi bi-exclamation-circle-fill"></i> {{ v$.form.name.fname.$errors[0].$message }}
                </small>
              </div>

              <div class="lname">
                <div class="input-box">
                  <input
                    :class="[v$.form.name.lname.$error ? 'error' : '']"
                    type="text"
                    id="lname"
                    placeholder=" "
                    v-model="form.name.lname"
                  />
                  <label for="lname">Last Name</label>
                </div>
                <small
                  v-if="v$.form.name.lname.$error"
                  :class="[v$.form.name.lname.$error ? 'error' : '']"
                  ><i class="bi bi-exclamation-circle-fill"></i> {{ v$.form.name.lname.$errors[0].$message }}
                </small>
              </div>
            </div>
          </div>

          <div class="username">
            <div class="unameInput">
              <div class="input-box">
                <input
                  :class="[v$.form.email.$error ? 'error' : '']"
                  type="text"
                  id="email"
                  placeholder=" "
                  v-model="form.email"
                />
                <label for="email">Username</label>
              </div>
            </div>
            <small
              v-if="v$.form.email.$error"
              :class="[v$.form.email.$error ? 'error' : '']"
              ><i class="bi bi-exclamation-circle-fill"></i> {{ v$.form.email.$error ? v$.form.email.$errors[0].$message : '' }}
            </small>
            <small v-else>You can use letters, numbers & periods</small>
          </div>

          <div class="password">
            <div class="pwdInput">
              <div class="pwd">
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
                <small
                  :class="[v$.form.password.$error ? 'error' : 'hide']"
                  ><i class="bi bi-exclamation-circle-fill"></i> {{ v$.form.password.$error ? v$.form.password.$errors[0].$message : ''}}</small>
              </div>

              <div class="confirmpwd">
                <div class="input-box">
                  <input
                    :class="[v$.form.confirmpwd.$error ? 'error' : '']"
                    type="password"
                    id="confirmpwd"
                    placeholder=" "
                    v-model="form.confirmpwd"
                  />
                  <label for="confirmpwd">Confirm</label>
                </div>
                <small
                  :class="[v$.form.confirmpwd.$error ? 'error' : 'hide']"
                  ><i class="bi bi-exclamation-circle-fill"></i> {{ v$.form.confirmpwd.$error ? v$.form.confirmpwd.$errors[0].$message : ''}}</small>
              </div>
            </div>
            <small
            :class="[!(v$.form.password.$error || v$.form.confirmpwd.$error) ? '' : 'hide']"
              >Use 8 or more characters with a mix of letters, numbers &
              symbols</small
            >
            <div class="password-checkbox">
              <input @click="hidePassword" type="checkbox" name="showPwd" id="showPwd" />
              <label for="showPwd">Show Password</label>
            </div>
          </div>
          <div class="form-buttons">
            <button type="button" @click="this.$router.push('/Login')" class="transparent" id="sign-in">Sign in instead</button>
            <button type="button" @click="onLogin" class="solid" id="sign-up">Next</button>
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

<script type="module" src="./Signup.js"></script>

<style lang="scss" scoped>
@import "@/Global.scss";
@import "./Signup.scss";
</style>
