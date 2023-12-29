<script setup>
const props = defineProps(["opInfo"]);

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
  console.log(CapitalizeName(prop.opInfo.name));
}
</script>

<template>
  <div>
    <div class="card-container" v-if="props.opInfo != null">
      <div class="operator-image">
        <img class="image-resize" :src="props.opInfo.imgUrl" alt="opImage" />
      </div>
      <h1 class="operator-name">
        {{ CapitalizeName(props.opInfo.name).trim() }}
      </h1>
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
  font-size: 2em;
  font-weight: bolder;
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
  font-size: 1.5em;
  padding: 1em;
}

.sub-header {
  padding: 1em;
  font-size: 1.5em;
  background: rgb(129, 129, 129);
}
.image-resize {
  max-width: 35em;
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
  border-radius: 5px;
  padding: 3em 2em;
  margin: 0 2em;
}
</style>
