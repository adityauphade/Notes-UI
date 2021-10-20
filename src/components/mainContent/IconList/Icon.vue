<template>
  <div class="icons">
    <span class="material-icons md-light md-inactive md-18">
      notification_important
    </span>
    <span class="material-icons md-light md-inactive md-18">
      person_add
    </span>
    <div
      class="image-box"
      :class="[isToggled ? '' : 'hide']"
      @mouseover="isToggled = true"
      @mouseleave="isToggled = false"
    >
      <div id="black" class="colors"></div>
      <div id="gray" class="colors"></div>
      <div id="blue" class="colors"></div>
      <div id="red" class="colors"></div>
      <div id="yellow" class="colors"></div>
      <div id="green" class="colors"></div>
    </div>
    <span
      @mouseover="isToggled = true"
      @mouseleave="isToggled = false"
      id="palette"
      class="material-icons md-light md-inactive md-18"
    >
      palette
    </span>
    <span class="material-icons md-light md-inactive md-18">
      image
    </span>
    <span
      @click="ArchiveNote"
      class="material-icons md-light md-inactive md-18"
    >
      archive
    </span>
    <span @click="DeleteNote" class="material-icons md-light md-inactive md-18">
      more_vert
    </span>
  </div>
</template>

<script type="module" src="./Icon.js"></script>

<style lang="scss" scoped>
@import "@/views/Notes/Notes.scss";
@import "./Icon.scss";
</style>
