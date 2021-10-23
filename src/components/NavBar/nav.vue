<template>
  <header>
    <div class="header-components" id="menu-logo">
      <span @click="$emit('changeSideBar')" class="material-icons md-light">
        menu
      </span>
      <img
        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
        alt=""
        style="width:40px;height:40px"
      />
      <h2>Keep</h2>
    </div>
    <div class="header-components" id="search-icons">
      <div class="search-box">
        <input placeholder="Search" type="text" />
        <span class="material-icons md-light">
          search
        </span>
      </div>
      <div class="icons">
        <span class="material-icons md-light md-inactive">
          refresh
        </span>
        <span class="material-icons md-light md-inactive">
          dns
        </span>
        <span class="material-icons md-light md-inactive">
          settings
        </span>
      </div>
    </div>
    <div class="header-components" id="profile">
      <span class="material-icons md-light ">
        apps
      </span>
      <span @click="isToggled=!isToggled" class="material-icons md-light">
        account_circle
      </span>
      <div class="userInfo" :class="[isToggled ? '' : 'hide']" >
        <div class="logo">
          <span class="material-icons md-light md-36">
            account_circle
          </span>
        </div>
        <div class="name">
          <h1>{{firstName + ' ' + lastName}}</h1>
        </div>
        <div class="logoutButton">
          <button @click="logout">Sign out</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script type="module" src="./nav.js"></script>

<style lang="scss" scoped>
@import "@/views/Notes/Notes.scss";
@import "./nav.scss";
</style>
