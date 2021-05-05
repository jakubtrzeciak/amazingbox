<template>
  <div class="home uk-flex uk-flex-column uk-flex-center">
    <figure>
      <img src="../assets/logo-mobile.svg" alt="Pudełeczko">
      <figcaption><h1>AMAZING BOX</h1></figcaption>
    </figure>
    <h2>Świetny pomysł na prezent dla bliskiej Ci osoby</h2>
    <TopSlider class="uk-visible@s"></TopSlider>
    <TopSliderMobile class="uk-hidden@s"></TopSliderMobile>
  </div>
</template>

<style lang="scss" scoped>
.home {
  @media only screen and(max-width: 768px) {
    height: 85vh;
  }
}

figure {
  margin: 0;

  h1 {
    font-size: 4em;
    margin-bottom: 0;
    line-height: 1.1;

    @media only screen and (max-width: 768px) {
      font-size: 2.4em;
      margin: 10px auto;
      line-height: 0.7;
    }
  }
}

h2 {
  margin: 0;
  font-size: 1.8em;
  margin-bottom: 1em;
  color: #707070;

  @media only screen and (max-width: 768px) {
    padding: 0 2em;
    font-size: 1.2em;
    font-weight: 400;
    margin-bottom: 1em;
  }
}
</style>

<script>
import TopSlider from '../components/TopSlider.vue';
import TopSliderMobile from '../components/TopSliderMobile.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    TopSlider,
    TopSliderMobile,
  },

};
</script>
