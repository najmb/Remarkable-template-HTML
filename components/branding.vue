<template>
  <div class="branding-branding">
    <span class="branding-text">{{ text }}</span>
    <svg viewBox="0 0 1024 1024" class="branding-icon">
      <path d="M128 128h768v768h-768z"></path>
    </svg>
    <span class="branding-text1">{{ text1 }}</span>
  </div>
</template>

<script>
export default {
  name: 'Branding',
  props: {
    text: {
      type: String,
      default: 'Remarkable',
    },
    text1: {
      type: String,
      default: 'Remarkable',
    },
  },
}
</script>

<style scoped>
.branding-branding {
  gap: var(--dl-space-space-unit);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.branding-text {
  color: rgba(18, 40, 33, 1);
  font-size: 24px;
  line-height: 36px;
}
.branding-icon {
  width: 7px;
  height: 7px;
}
.branding-text1 {
  color: rgba(18, 40, 33, 1);
  font-size: 18px;
  font-family: Lato;
  line-height: 27px;
}
@media(max-width: 991px) {
  .branding-icon {
    display: none;
  }
  .branding-text1 {
    display: none;
  }
}
</style>
