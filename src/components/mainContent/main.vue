<template>
  <div class="notes-dashboard">
    <AddNote v-on:newNoteAdded="newNoteAdded"/>    <!-- passing API call function  -->
    <GetNotes :isAdded="isAdded"/>   <!-- passing the Array of Notes as a Prop  -->
  </div>
</template>

<script type="module" src="./main.js"></script>

<style lang="scss" scoped>
@import "@/views/Notes/Notes.scss";
@import "./main.scss";
</style>
