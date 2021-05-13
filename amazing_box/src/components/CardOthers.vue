<template>
<a :id="cardId" href="#modal-overflow" uk-toggle v-scroll-to="'#shopArea'"
    uk-scrollspy-class="uk-animation-fade">
    <div class="uk-card uk-card-default">
        <div class="uk-card-media-top" :style="{'background-image':
        `url(${cardImage})`}">
        </div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">{{ cardName }}</h3>
        </div>
    </div>
</a>
</template>

<script>
export default {
  name: 'CardOthers',
  props: {
    cardName: String,
    cardId: String,
    cardImage: String,
  },
};
</script>

<style lang="scss">
.uk-padding-large {
  @media (min-width: 1200px) {
     padding-top: 10px;
  }
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
