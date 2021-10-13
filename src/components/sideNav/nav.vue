<template>
  <div class="side-nav" :class="[sidebarToggle ? 'expand' : '' ]">
    <div class="icons">
      <span class="material-icons md-light md-inactive">
        lightbulb
      </span>
      <label for="">Notes</label>
    </div>
    <div class="icons">
      <span class="material-icons md-light md-inactive">
        notifications
      </span>
      <label for="">Reminders</label>
    </div>
    <div class="icons">
      <span class="material-icons md-light md-inactive">
        label
      </span>
      <label for="">Labels</label>
    </div>
    <div class="icons">
      <span class="material-icons md-light md-inactive">
        edit
      </span>
      <label for="">Edit</label>
    </div>
    <div class="icons">
      <span class="material-icons md-light md-inactive">
        archive
      </span>
      <label for="">Archive</label>
    </div>
    <div class="icons">
      <span class="material-icons md-light md-inactive">
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
