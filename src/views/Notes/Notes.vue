<template>
  <div class="wrapper-class">
    <Nav v-on:changeSideBar="sidebarToggle=!sidebarToggle" />
    <div class="body-content">
      <SideNav :sidebarToggle="sidebarToggle" />
      <DashboardContent/>
    </div>
  </div>
</template>

<script type="module" src="./Notes.js"></script>

<style lang="scss" scoped>
@import "./Notes.scss";
</style>
