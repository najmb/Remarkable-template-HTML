<template>
  <div class="card-card card">
    <div class="card-header">
      <img alt="image" :src="Icon" class="card-icon" />
      <h3 class="card-heading">{{ Title }}</h3>
    </div>
    <p class="card-text">{{ Description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    Icon: {
      type: String,
      default: '/playground_assets/group%201643.svg',
    },
    Title: {
      type: String,
      default: 'High-impact business services',
    },
    Description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
}
</script>

<style scoped>
.card-card {
  position: relative;
}
.card-header {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.card-icon {
  height: 50px;
  object-fit: cover;
}
.card-heading {
  color: rgb(18, 40, 33);
  font-size: 24px;
  max-width: 600px;
  font-style: normal;
  font-weight: 500;
}
.card-text {
  color: rgb(18, 40, 33);
  max-width: 600px;
  font-family: Lato;
  line-height: 24px;
}
</style>
