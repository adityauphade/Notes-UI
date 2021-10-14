<template>
  <div class="view-notes">
    <div v-for="(note, index) in notes" :key="index" class="note">
      <h1>{{note.title}}</h1>
      {{note.body}}
      {{note.index}}
    </div>
  </div>
</template>

<script type="module" src="./GetNotes.js"></script>

<style lang="scss" scoped>
@import "@/views/Notes/Notes.scss";
@import "./GetNotes.scss";
</style>
