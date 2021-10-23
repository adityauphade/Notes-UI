<template>
  <div class="create-note" :class="[openEdit ? '' : 'hide']">
    <div class="input-box-expanded" :style="noteColor(note.colour)">
      <div class="row one">
        <input placeholder="Title" type="text" id="title" v-model="note.title" />
        <span class="material-icons md-light md-inactive md-21">
          push_pin
        </span>
      </div>
      <div class="row two">
        <input placeholder="Take a note..." type="text" id="body" v-model="note.body" />
      </div>
      <div class="row three">
        <div class="icons-left"><IconList v-on:updatedColor="updatedColor" v-on:changeArchive="note.isArchived=!note.isArchived"/></div>
        <div class="close-button">
          <button @click="onEditNote" type="button">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="module" src="./EditNote.js"></script>

<style lang='scss' scoped>
@import "@/views/Notes/Notes.scss";
@import "./EditNote.scss";
</style>
