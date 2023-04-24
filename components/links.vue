<template>
  <nav class="links-links">
    <button class="links-button button"><span>{{ text }}</span></button>
    <button class="links-button1 button"><span>{{ text1 }}</span></button>
    <button class="links-button2 button">{{ button }}</button>
  </nav>
</template>

<script>
export default {
  name: 'Links',
  props: {
    button: {
      type: String,
      default: 'Menu',
    },
    text: {
      type: String,
      default: 'Our offers',
    },
    text1: {
      type: String,
      default: 'Get a fast quote',
    },
  },
}
</script>

<style scoped>
.links-links {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.links-button {
  color: rgb(18, 40, 33);
  font-size: 18px;
  font-family: Lato;
  line-height: 27px;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: 0px;
  border-radius: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: transparent;
}
.links-button1 {
  color: rgb(18, 40, 33);
  font-size: 18px;
  font-family: Lato;
  line-height: 27px;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: 0px;
  border-radius: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: transparent;
}
.links-button2 {
  color: rgb(18, 40, 33);
  font-size: 18px;
  font-family: Lato;
  line-height: 27px;
  padding-top: var(--dl-space-space-halfunit);
  border-color: rgba(18, 40, 33, 1);
  padding-left: var(--dl-space-space-threeunits);
  border-radius: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: transparent;
  border-left-width: 1px;
}
</style>
