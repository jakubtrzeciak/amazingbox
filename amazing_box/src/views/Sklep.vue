<template>
<div>
  <div class="shopFirst">
    <div class="pos">
       <figure uk-scrollspy="target: > *;
        cls: uk-animation-fade; delay: 100; repeat: true">
        <img uk-scrollspy-class="uk-animation-slide-top"
        src="../assets/logo-mobile – nobg – white.svg" alt="Pudełeczko">
        <figcaption uk-scrollspy-class="uk-animation-slide-bottom"><h1>AMAZING BOX</h1></figcaption>
      </figure>
      <h2 uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400; repeat: true">
      Świetny pomysł na prezent dla bliskiej Ci osoby</h2>
    </div>
  </div>
  <div id="shopArea">
    <ul class="uk-subnav uk-flex">
      <li class="uk-active"><a href="#shopArea">Zestawy prezentowe</a></li>
      <li><a href="#/kupuj/#shopArea">Wszystkie produkty</a></li>
    </ul>

    <div class="uk-child-width-1-5@l uk-child-width-1-4@m uk-child-width-1-2@s
    uk-padding-large cards" uk-grid uk-scrollspy="target: > a; cls: uk-animation-fade;
    repeat: true; delay: 40">
        <a href="#modal-overflow" uk-toggle uk-scrollspy-class="uk-animation-slide-top">
            <div class="uk-card uk-card-default">
                <div class="uk-card-media-top" :style="{'background-image':
                'url(' + require('../assets/photos/zestaw4/z4.jpg') + ')'}">
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Zestaw 1</h3>
                </div>
            </div>
        </a>
        <a href="#modal-overflow" uk-toggle uk-scrollspy-class="uk-animation-slide-top">
            <div class="uk-card uk-card-default">
                <div class="uk-card-media-top" :style="{'background-image':
                'url(' + require('../assets/photos/zestaw4/z4.jpg') + ')'}">
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Zestaw 1</h3>
                </div>
            </div>
        </a>
    </div>
  </div>
  <Modal></Modal>
</div>
</template>

<script>
import Modal from '../components/Modal.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    Modal,
  },
  mounted() {
    const app = document.getElementById('app');
    app.classList.remove('mainPageBackground');
    app.classList.add('shopBackground');
  },
};
</script>

<style lang="scss" scoped>
.shopFirst {
  height: calc(100vh - 58px);
  @media (min-width: 960px) {
    height: calc(100vh - 94px);
  }

  .pos {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

figure {
  margin: 0 0 .5em 0;

  h1 {
    font-size: 4.5em;
    margin-bottom: 0;
    line-height: 1.1;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(122,122,122,0.94);

    @media only screen and (max-width: 768px) {
      font-size: 2.6em;
      margin: 10px auto;
      line-height: 0.7;
    }
  }

  img {
    @media (min-width: 960px) {
      transform: scale(1.1);
      margin-bottom: 1em;
    }
  }
}

h2 {
  margin: 0;
  font-size: 1.8em;
  margin-bottom: 1em;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(122,122,122,0.94);

  @media only screen and (max-width: 768px) {
    padding: 0 2em;
    font-size: 1.3em;
    font-weight: 400;
    margin-bottom: 1em;
  }
}

#shopArea {
  width: 100%;
  position: relative;
  background-color: #fafafa;

  ul {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 3;

     @media (max-width: 700px) {
       padding: 10px 0;
        background-color: #ffffff;
      }

    li {
      padding: 15px 30px;
      margin: 30px 10px;

      @media (max-width: 700px) {
        margin: 0 10px;
        padding: 10px;
      }

      a {
        font-size: 1.4em;

        @media (max-width: 700px) {
          font-size: 1em;
        }
      }
    }
  }

  .uk-card-media-top {
    height: 250px;
    background-size: cover;
    background-position: center;
  }
}

.uk-card-body {
  padding: 20px 10px;
}
</style>
