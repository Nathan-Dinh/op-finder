<script setup>
const props = defineProps(["opInfo"]);
import Card from "primevue/card";

const CapitalizeName = (str) => {
  let fullName = "";
  const STR_ARRAY = str.split(" ");
  STR_ARRAY.forEach((str) => {
    fullName +=
      str.charAt(0).toUpperCase() + str.substring(1, str.length) + " ";
  });
  return fullName;
};

if (props.opInfo != null) {
  console.log(CapitalizeName(props.opInfo.name));
}
</script>

<template>
  <Card>
    <template #content>
      <div class="card-container" v-if="props.opInfo != null">
        <div class="operator-image">
          <img class="image-resize" :src="props.opInfo.imgUrl" alt="opImage" />
        </div>
        <div>
          <div class="operator-name">
            <h1>
              {{ CapitalizeName(props.opInfo.name).trim() }}
            </h1>
          </div>
          <div class="requirement-sub-header">
            <h2 class="sub-header">Requirement tag</h2>
          </div>
          <div class="tags sub-content">
            <div v-for="tag in props.opInfo.recruitmentTag">
              <p>{{ tag }}</p>
            </div>
          </div>
          <div class="archetype-sub-header">
            <h2 class="sub-header">Archetype</h2>
          </div>
          <div class="archetype">
            <p class="sub-content">{{ props.opInfo.archetype }}</p>
          </div>
          <div class="profile-sub-header">
            <h2 class="sub-header">Profile</h2>
          </div>
          <div class="profile">
            <p class="sub-content">{{ props.opInfo.profile }}</p>
          </div>
        </div>
      </div>
    </template>
  </Card>
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
  grid-area: image;
}
.operator-name {
  font-size: 2em;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 1em;
  grid-area: name;
}
.archetype {
  grid-area: arch;
}
.tags {
  display: flex;
  grid-area: tags;
}

.tags div {
  margin-right: 1em;
}
.profile {
  grid-area: profile;
}
.sub-header {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  padding: 0.5em;
  border-radius: 5px;
  background: rgb(129, 129, 129);
}
.sub-content {
  font-size: 1.2em;
  padding: 1em;
}
.image-resize {
  max-width: 100%;
  height: auto;
}
.card-container {
  display: grid;
  grid-template-areas:
    "image name name"
    "image requirement-sub requirement-sub"
    "image tags tags"
    "image arch-sub arch-sub"
    "image arch arch"
    "image profile-sub profile-sub"
    "image profile profile";
  border-radius: 5px;
  height: 80vh;
  padding: 2em;
}
</style>
