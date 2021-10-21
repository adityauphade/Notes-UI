<template>
  <div class="view-notes">
    <EditNote :selectedNote="selectedNote" v-on:editClosed="openEdit=false" :openEdit="openEdit" />
    <div v-for="(note, index) in notesData" :key="index" class="note" :style="noteColor(note.colour)">  
      <div class="note-body" @click="openNote(note)">
        <h1>{{ note.title }}</h1>
        <p>{{ note.body }}</p>
      </div>
      <IconList :id="note._id" />
    </div>
  </div>
</template>

<script type="module" src="./GetNotes.js"></script>

<style lang="scss" scoped>
@import "@/views/Notes/Notes.scss";
@import "./GetNotes.scss";
</style>
