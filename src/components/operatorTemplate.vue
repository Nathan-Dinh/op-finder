<script setup>
const props = defineProps(["opInfo"]);
</script>

<template>
  <div>
    <div class="card-container" v-if="props.opInfo != null">
      <div class="operator-image">
        <img class="image-resize" :src="props.opInfo.imgUrl" alt="opImage" />
      </div>
      <h1 class="operator-name">{{ props.opInfo.name }}</h1>
      <h2 class="requirement-sub-header sub-header">Requirement tag</h2>
      <div v-for="tag in props.opInfo.recruitmentTag">
        <p class="tags sub-content">{{ tag }}</p>
      </div>
      <h2 class="archetype-sub-header sub-header">Archetype</h2>
      <p class="archetype sub-content">{{ props.opInfo.archetype }}</p>
      <h2 class="profile-sub-header sub-header">Profile</h2>
      <p class="profile sub-content">{{ props.opInfo.profile }}</p>
    </div>
  </div>
</template>

<style scoped>
.requirement-sub-header {
  grid-area: requirement-sub;
}
.archetype-sub-header {
  grid-area: arch-sub;
}
.profile-sub-header {
  grid-area: profile-sub;
}
.operator-image {
  display: flex;
  justify-content: center;
  grid-area: image;
}
.operator-name {
  font-size: 2.5em;
  text-align: center;
  grid-area: name;
}
.archetype {
  grid-area: arch;
}
.tags {
  grid-area: tags;
}
.profile {
  grid-area: profile;
}

.sub-content {
  font-size: 24px;
  padding: 1em;
}

.sub-header {
  padding: 1em;
  font-size: 1.6em;
  background: rgb(129, 129, 129);
}
.image-resize {
  max-width: 40%;
  height: auto;
}
.card-container {
  display: grid;
  grid-template-areas:
    "image image image image"
    "name name name name"
    "requirement-sub requirement-sub requirement-sub requirement-sub"
    "tags tags tags tags"
    "arch-sub arch-sub arch-sub arch-sub"
    "arch arch arch arch"
    "profile-sub profile-sub profile-sub profile-sub"
    "profile profile profile profile";
  background-color: lightgray;
  border-radius: 10px;
  padding: 4em 5em;
  margin: 0 20em;
}
</style>
