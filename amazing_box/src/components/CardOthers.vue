<template>
<a :id="cardId" href="#modal-overflow" uk-toggle v-scroll-to="'#shopArea'"
    uk-scrollspy-class="uk-animation-fade" @click="openModal()">
    <div class="uk-card uk-card-default">
        <div class="uk-card-media-top" :style="{'background-image':
                'url(' + `${cardImage}` + ')'}">
        </div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">{{ cardName }}</h3>
        </div>
    </div>
</a>
</template>

<script>
/* eslint-disable func-names */
export default {
  name: 'CardOthers',
  props: {
    cardName: String,
    cardId: String,
    cardImage: String,
  },
  methods: {
    openModal() {
      const activeItem = this.cardId;
      const modalData = JSON.parse(localStorage.getItem('modal-data'));
      for (let i = 0; i < modalData.length; i += 1) {
        if (modalData[i].id === activeItem) {
          modalData[i].isActive = true;
        } else {
          modalData[i].isActive = false;
        }
      }

      this.$emit('clicked', modalData);
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  z-index: 0;
}

.uk-card-media-top {
  height: 240px;
  background-size: cover;
  background-position: center;
}

.uk-card-body {
  padding: 20px 10px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 1.25em;
  }
}
</style>
