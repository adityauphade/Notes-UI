<template>
  <div class="notes-dashboard">
    <AddNote/>    <!-- passing API call function  -->
    <GetNotes/>   <!-- passing the Array of Notes as a Prop  -->
  </div>
</template>

<script type="module" src="./main.js"></script>

<style lang="scss" scoped>
@import "@/views/Notes/Notes.scss";
@import "./main.scss";
</style>
