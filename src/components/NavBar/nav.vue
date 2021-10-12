<template>
  <header>
    <div class="header-components" id="menu-logo">
      <span class="material-icons md-light">
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
        <input type="text" />
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
      <span class="material-icons md-light">
        apps
      </span>
      <span class="material-icons md-light">
        account_circle
      </span>
    </div>
  </header>
</template>

<script type="module" src="./nav.js"></script>

<style lang="scss" scoped>
@import "@/views/Notes/Notes.scss";
@import "./nav.scss";
</style>
