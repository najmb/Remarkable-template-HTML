<template>
  <footer class="footer-footer">
    <div class="footer-information">
      <div class="footer-content">
        <div class="footer-header">
          <app-branding></app-branding>
          <p class="footer-text">{{ text }}</p>
        </div>
        <div class="footer-contact-list">
          <div class="footer-contact">
            <img :alt="image_alt" :src="image_src" class="footer-image" />
            <span class="footer-text01">{{ text1 }}</span>
          </div>
          <div class="footer-contact1">
            <img :alt="image_alt1" :src="image_src1" class="footer-image1" />
            <span class="footer-text02">{{ text2 }}</span>
          </div>
        </div>
      </div>
      <span class="footer-copyright">{{ Copyright }}</span>
    </div>
    <div class="footer-links">
      <div class="footer-column">
        <span class="link">{{ Text }}</span>
        <span class="link">{{ Text1 }}</span>
        <span class="link">{{ Text2 }}</span>
        <span class="link">{{ Text3 }}</span>
        <span class="link">{{ Text4 }}</span>
        <span class="link">{{ Text5 }}</span>
      </div>
      <div class="footer-column1">
        <span class="link">{{ Text6 }}</span>
        <span class="link">{{ Text7 }}</span>
        <span class="link">{{ Text8 }}</span>
        <span class="link">{{ Text9 }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
import AppBranding from './branding'

export default {
  name: 'Footer',
  props: {
    Text5: {
      type: String,
      default: 'Contact',
    },
    Text9: {
      type: String,
      default: 'Facebook',
    },
    Text1: {
      type: String,
      default: 'Training\n',
    },
    Copyright: {
      type: String,
      default: '©2022 Product Calgary. All Rights Reserved.',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    Text: {
      type: String,
      default: 'About',
    },
    text: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    },
    image_src: {
      type: String,
      default: '/playground_assets/group%201639.svg',
    },
    Text3: {
      type: String,
      default: 'Membership',
    },
    text1: {
      type: String,
      default: 'office@remarkable.template',
    },
    Text8: {
      type: String,
      default: 'Twitter',
    },
    Text4: {
      type: String,
      default: 'Blog',
    },
    Text6: {
      type: String,
      default: 'Linkedin',
    },
    Text2: {
      type: String,
      default: 'Events',
    },
    text2: {
      type: String,
      default: '+0 222.345.987',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/group%201640.svg',
    },
    Text7: {
      type: String,
      default: 'Instagram',
    },
  },
  components: {
    AppBranding,
  },
}
</script>

<style scoped>
.footer-footer {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-left: var(--dl-space-space-oneandhalfunits);
  margin-bottom: var(--dl-space-space-fourunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: row;
  justify-content: space-between;
}
.footer-information {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-content {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-header {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-text {
  color: rgb(18, 40, 33);
  width: 100%;
  font-size: 18px;
  max-width: 600px;
  font-family: Lato;
  line-height: 27px;
}
.footer-contact-list {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-contact {
  gap: 11px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.footer-image {
  width: 24px;
  height: 18px;
  object-fit: cover;
}
.footer-text01 {
  color: rgb(18, 40, 33);
  width: 100%;
  font-size: 18px;
  font-family: Lato;
  line-height: 18px;
}
.footer-contact1 {
  gap: 11px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.footer-image1 {
  width: 18px;
  height: 24px;
  object-fit: cover;
  margin-left: 3px;
  margin-right: 3px;
}
.footer-text02 {
  color: rgb(18, 40, 33);
  width: 100%;
  font-size: 18px;
  font-family: Lato;
  line-height: 18px;
}
.footer-copyright {
  color: rgb(18, 40, 33);
  width: 100%;
  font-size: 14px;
  font-family: Lato;
  line-height: 21px;
}
.footer-links {
  gap: 110px;
  display: flex;
  align-items: flex-start;
  padding-right: 135px;
  flex-direction: row;
}
.footer-column {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-column1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
@media(max-width: 991px) {
  .footer-footer {
    gap: var(--dl-space-space-threeunits);
    align-items: flex-start;
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    justify-content: flex-start;
  }
  .footer-content {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .footer-header {
    gap: var(--dl-space-space-unit);
  }
  .footer-copyright {
    display: none;
  }
  .footer-links {
    gap: var(--dl-space-space-threeunits);
    padding-right: 0px;
    flex-direction: column;
  }
}
</style>
