<template>
  <div>
    <div class="home uk-flex uk-flex-column uk-flex-center">
      <figure>
        <img src="../assets/logo-mobile.svg" alt="Pudełeczko">
        <figcaption><h1>AMAZING BOX</h1></figcaption>
      </figure>
      <h2>Świetny pomysł na prezent dla bliskiej Ci osoby</h2>
      <TopSlider class="uk-visible@s"></TopSlider>
      <TopSliderMobile class="uk-hidden@s"></TopSliderMobile>
    </div>
    <div id="aboutus">
      <div v-for="item in aboutInfo" :key="item.el" :id="item.id" :data-name="item.name"
      class="uk-background-fixed uk-height-large uk-background-cover uk-overflow-hidden
      uk-light uk-flex uk-flex-top uk-background-blend-screen uk-background-secondary">
        <div class="uk-width-1-2@m uk-text-center
        uk-margin-auto uk-margin-auto-vertical">
            <h3 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;"
            class="uk-heading-small">{{item.h3}}</h3>
            <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;"
            class="uk-text-primary uk-padding-small">{{item.par}}</p>
        </div>
      </div>
    </div>
    <!--<div id="ph2" class="uk-background-fixed uk-height-large uk-background-cover
    uk-overflow-hidden
     uk-light uk-flex uk-flex-top">
      <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
          <h3 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;"
          class="uk-heading-medium">Headline</h3>
          <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    <div id="ph3" class="uk-background-fixed uk-height-large uk-background-cover
    uk-overflow-hidden
     uk-light uk-flex uk-flex-top">
      <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
          <h3 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;"
          class="uk-heading-medium">Headline</h3>
          <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.</p>
      </div>
    </div>-->
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding-bottom: 1em;
  @media (min-width: 321px) and (max-width: 768px) {
    height: 85vh;
  }
}

#ph1 {
  background-image: url('../assets/photos/about_photos/z6.jpg');
  height: 100vh;
}

#ph2 {
  background-image: url('../assets/photos/about_photos/z2.jpg');
  height: 100vh;
}

#ph3 {
  background-image: url('../assets/photos/about_photos/z5.jpg');
  height: 100vh;
}

figure {
  margin: 0 0 .5em 0;

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
  data() {
    return {
      aboutInfo: [
        {
          el: 1,
          id: 'ph1',
          name: 'Zestaw nr 2',
          h3: 'Witaj, jak mogę Ci pomóc?',
          par: `Mam na imię Aga i zapraszam Cię do
                mojego kolorowego świata prezentowych
                boxów małej manufaktury, projektowanych
                od serca, ciekawych i twórczych przedmiotów.`,
        },
        {
          el: 2,
          id: 'ph2',
          name: 'Zestaw nr 3',
          h3: 'Jak działam?',
          par: `Do każdej realizacji podchodzę indywidualnie,
                klient ma możliwość wyboru każdego z
                poszczególnych elementów prezentu,
                spersonalizowania go lub skorzystania
                z gotowych już rozwiązań.`,
        },
        {
          el: 3,
          id: 'ph3',
          name: 'Zestaw nr 6',
          h3: 'Co oferuję?',
          par: `Na asortyment naszego sklepu składa się
                szeroka gama produktów prezentowych takich jak naturalne świece,
                najwyższej jakości kawy i herbaty przysmaki dla psiaków, czy inne gadżety`,
        },
      ],
    };
  },
  components: {
    TopSlider,
    TopSliderMobile,
  },
};
</script>
