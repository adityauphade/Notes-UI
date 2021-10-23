<template>
  <div class="alert-wrapper">
    <div class="alert-box" :class="status">
      <h1>{{message}}</h1>
    </div>
  </div>
</template>

<script type="module" src="./Alert.js"></script>

<style lang="scss" scoped>
@import "@/Global.scss";
@import "@/views/Notes/Notes.scss";
@import "./Alert.scss";
</style>
