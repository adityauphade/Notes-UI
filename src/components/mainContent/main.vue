<template>
  <div class="notes-dashboard">
    <div class="create-note">
      <div v-if="expand" class="input-box-default">
          <input  placeholder="Take a note..." type="text" />
          <span class="material-icons md-light md-inactive">
            check_box
          </span>
          <span class="material-icons md-light md-inactive">
            brush
          </span>
          <span class="material-icons md-light md-inactive">
            image
          </span>
      </div>
      <div v-else class="input-box-expanded">
        <div class="row one">
          <input placeholder="Title" type="text" />
          <span class="material-icons md-light md-inactive">
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
              <button @click="expand=!expand" type="button">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="view-notes"></div>
  </div>
</template>

<script type="module" src="./main.js"></script>

<style lang="scss" scoped>
@import "@/views/Notes/Notes.scss";
@import "./main.scss";
</style>
