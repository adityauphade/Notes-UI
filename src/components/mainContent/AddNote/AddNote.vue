<template>
  <div class="create-note">
    <div v-if="expand" class="input-box-default">
      <input
        @click="expand = !expand"
        placeholder="Take a note..."
        type="text"
      />
      <span class="material-icons md-light md-inactive md-21">
        check_box
      </span>
      <span class="material-icons md-light md-inactive md-21">
        brush
      </span>
      <span class="material-icons md-light md-inactive md-21">
        image
      </span>
    </div>
    <div v-else class="input-box-expanded">
      <div class="row one">
        <input placeholder="Title" type="text" />
        <span class="material-icons md-light md-inactive md-21">
          push_pin
        </span>
      </div>
      <div class="row two">
        <input placeholder="Take a note..." type="text" />
      </div>
      <div class="row three">
        <div class="icons-left">
          <span class="material-icons md-light md-inactive md-18">
            notification_important
          </span>
          <span class="material-icons md-light md-inactive md-18">
            person_add
          </span>
          <span class="material-icons md-light md-inactive md-18">
            palette
          </span>
          <span class="material-icons md-light md-inactive md-18">
            image
          </span>
          <span class="material-icons md-light md-inactive md-18">
            archive
          </span>
          <span class="material-icons md-light md-inactive md-18">
            more_vert
          </span>
        </div>
        <div class="close-button">
          <button @click="expand = !expand" type="button">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="module" src="./AddNote.js"></script>

<style lang='scss' scoped>
@import "@/views/Notes/Notes.scss";
@import "./AddNote.scss";
</style>
