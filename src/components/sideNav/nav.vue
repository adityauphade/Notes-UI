<template>
  <div class="side-nav" :class="[sidebarToggle ? 'expand' : '' ]">
    <div @mouseover="active=!active" class="icons">
      <span class="material-icons md-light md-21" :class="[ active ? 'md-inactive' : '']">
        lightbulb
      </span>
      <label for="">Notes</label>
    </div>
    <div class="icons">
      <span class="material-icons md-light md-inactive md-21 md-21">
        notifications
      </span>
      <label for="">Reminders</label>
    </div>
    <div class="icons">
      <span class="material-icons md-light md-inactive md-21">
        label
      </span>
      <label for="">Labels</label>
    </div>
    <div class="icons">
      <span class="material-icons md-light md-inactive md-21">
        edit
      </span>
      <label for="">Edit</label>
    </div>
    <div class="icons">
      <span class="material-icons md-light md-inactive md-21">
        archive
      </span>
      <label for="">Archive</label>
    </div>
    <div class="icons">
      <span class="material-icons md-light md-inactive md-21">
        delete
      </span>
      <label for="">Trash</label>
    </div>
  </div>
</template>

<script type="module" src="./nav.js"></script>

<style lang="scss" scoped>
@import "@/views/Notes/Notes.scss";
@import "./nav.scss";
</style>
