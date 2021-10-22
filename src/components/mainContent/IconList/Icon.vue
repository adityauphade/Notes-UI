<template>
  <div class="icons">
    <span class="material-icons-outlined md-light md-inactive md-18">
      notification_important
    </span>
    <span class="material-icons-outlined md-light md-inactive md-18">
      person_add
    </span>

    <div
      class="color-box"
      :class="[isToggled ? '' : 'hide']"
      @mouseover="isToggled = true"
      @mouseleave="isToggled = false"
    >
      <div @click="$emit('updatedColor','#202124')" id="black" class="colors"></div>
      <div @click="$emit('updatedColor','#3c3f43')" id="gray" class="colors"></div>
      <div @click="$emit('updatedColor','#2d555e')" id="blue" class="colors"></div>
      <div @click="$emit('updatedColor','#5c2b29')" id="red" class="colors"></div>
      <div @click="$emit('updatedColor','#635d19')" id="yellow" class="colors"></div>
      <div @click="$emit('updatedColor','#345920')" id="green" class="colors"></div>
    </div>

    <span
      @mouseover="isToggled = true"
      @mouseleave="isToggled = false"
      id="palette"
      class="material-icons-outlined md-light md-inactive md-18"
    >
      palette
    </span>
    
    <span class="material-icons-outlined md-light md-inactive md-18">
      image
    </span>
    <span
      @click="ArchiveNote"
      class="material-icons-outlined md-light md-inactive md-18"
    >
      archive
    </span>
    <span @click="DeleteNote" class="material-icons-outlined md-light md-inactive md-18">
      more_vert
    </span>
  </div>
</template>

<script type="module" src="./Icon.js"></script>

<style lang="scss" scoped>
@import "@/views/Notes/Notes.scss";
@import "./Icon.scss";
</style>
