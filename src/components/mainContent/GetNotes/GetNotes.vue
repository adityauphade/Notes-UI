<template>
  <div class="view-notes">
    <div v-for="(note, index) in notesData" :key="index" class="note">
      <div class="note-body" @click="EditNote">
        <h1>{{note.title}}</h1>
        <p>{{note.body}}</p>
      </div>
      <IconList :id="note._id"/>
    </div>
  </div>
  
</template>

<script type="module" src="./GetNotes.js"></script>

<style lang="scss" scoped>
@import "@/views/Notes/Notes.scss";
@import "./GetNotes.scss";
</style>
