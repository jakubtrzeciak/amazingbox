<template>
  <div class="main">
    <div class="home uk-flex uk-flex-column uk-flex-center">
      <figure uk-scrollspy="target: > *;
        cls: uk-animation-fade; delay: 100; repeat: true">
        <img uk-scrollspy-class="uk-animation-slide-top"
        src="../assets/logo-mobile.svg" alt="Pudełeczko">
        <figcaption uk-scrollspy-class="uk-animation-slide-bottom"><h1>AMAZING BOX</h1></figcaption>
      </figure>
      <h2  uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400; repeat: true">
      Świetny pomysł na prezent dla bliskiej Ci osoby</h2>
      <TopSlider uk-scrollspy="cls: uk-animation-slide-bottom; delay: 100;
      repeat: true" @clicked="updateStorage">
      </TopSlider>
    </div>
    <div id="aboutus">
      <div v-for="item in aboutInfo" :key="item.el" :data-name="item.name"
      class="item desktop uk-background-fixed uk-height-large uk-background-cover
      uk-overflow-hidden uk-light uk-background-blend-screen
      uk-background-secondary" uk-scrollspy="cls: uk-animation-fade;
      repeat: true" :class="item.id" uk-parallax="opacity: 0,1">
        <div class="blackContainer"  uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
          <h3>{{item.h3}}</h3>
          <p>{{item.par}}</p>
        </div>
      </div>
    </div>
    <div id="contactus">
      <div class="pos">
        <h2 class="head" uk-scrollspy="cls: uk-animation-slide-top; delay: 200; repeat: true">
        MASZ PYTANIE?</h2>
        <Email uk-scrollspy="cls: uk-animation-slide-bottom; delay: 340;"></Email>
      </div>
    </div>
    <div id="info" uk-scrollspy="uk-animation-fade; repeat: true;">
      <div class="uk-height-large uk-background-fixed uk-background-cover uk-light
      uk-flex uk-flex-top">
        <p uk-scrollspy="cls: uk-animation-slide-top; repeat: true; delay: 300"
        class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <q>
        Moja ścieżka zawodowa zaprowadziła mnie właśnie do tego
        miejsca, w którym chcę rozwijać swoją pasję i kreatywność.
        Nic nie daje mi takiej satysfakcji jak kontakt z klientem
        oraz pomoc w organizacji wyjątkowego prezentu.</q></p>
      </div>
    </div>
    <div id="offer">
      <div class="pos uk-child-width-1-3@m" uk-grid
      uk-scrollspy="cls: uk-animation-slide-top; target: .uk-card; delay: 100; repeat: true">
        <div v-for="item in offerInfo" :key="item.el">
            <div class="uk-card uk-card-default uk-card-body">
                <i :class="item.icon_name"></i>
                <p>{{item.par}}</p>
            </div>
        </div>
      </div>
    </div>
    <div id="finish">
      <h4>Spodobała Ci się moja oferta?</h4>
      <h5>Odwiedź nasz sklep online!</h5>
      <a class="button" href="#/kupuj">WEJDŹ</a>
      <div class="production">
        <p>&copy; 2021 AmazingBox.pl</p>
        <p>Produkcja: <a href="https://eyewebcompany.pl"
        target="_blank">Eye Web Company</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import TopSlider from '../components/TopSlider.vue';
import Email from '../components/Email.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  data() {
    return {
      modalData: [],
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
      offerInfo: [
        {
          el: 1,
          icon_name: 'icon-star',
          par: 'Przygotowywane przeze mnie zestawy są pierwszej jakości!',
        },
        {
          el: 2,
          icon_name: 'icon-heart',
          par: 'W każdy zestaw wkładam ogromny kawałek swojego serca.',
        },
        {
          el: 3,
          icon_name: 'icon-gift',
          par: 'W zestawach znajdują się pyszne kawy, herbaty i różne gadżety.',
        },
        {
          el: 4,
          icon_name: 'icon-credit-card',
          par: 'Bezpieczeństwo płatności zapewnia niezawodny 1koszyk.pl',
        },
        {
          el: 5,
          icon_name: 'icon-puzzle',
          par: 'Elementy zestawu idealnie łączą się ze sobą tworząc spójną całość.',
        },
        {
          el: 6,
          icon_name: 'icon-hourglass-2',
          par: 'Kupując zestaw prezentowy oszczędzasz czas i pieniądze!',
        },
      ],
    };
  },
  methods: {
    updateStorage(value) {
      this.modalData = value;
      localStorage.setItem('modal-data', JSON.stringify(this.modalData));
      this.$modal = this.modalData;
    },
  },
  components: {
    TopSlider,
    Email,
  },
  mounted() {
    const app = document.getElementById('app');
    app.classList.remove('shopBackground');
    app.classList.add('mainPageBackground');
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 1em;

  @media (min-width: 1500px) {
    height: 85vh;
  }
}

.ph1 {
  background-image: url('../assets/photos/about_photos/z6.jpg');
  height: 100vh;
}

.ph2 {
  background-image: url('../assets/photos/about_photos/z2.jpg');
  height: 100vh;
}

.ph3 {
  background-image: url('../assets/photos/about_photos/z3.jpg');
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

  &.head {
    color: #3b3b3b;
    font-size: 2.1em;
    margin: auto;
    padding: 12px 0;
  }
}

#contactus, #aboutus > .desktop {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .pos {
    @media (min-width: 1366px) {
      width: 45%;
    }
  }
}

#aboutus > .desktop {
  justify-content: flex-end;

  .blackContainer {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(0,0,0, .15);

    @media (max-width: 960px) {
      width: 100%;
    }

    h3 {
      font-size: 1.8em;
      font-weight: 700;
      box-sizing: border-box;
      padding: 0 10%;
    }

    p {
      padding: 0 2.5em;
      font-size: 1.3em;
      color: #ffffff;
    }
  }
}

#info {
  div {
    height: 100vh;
    background-image: url('../assets/photos/zestaw4/z4.jpg');

    p {
      width: 100%;
      font-size: 1.5em;
      padding: 10% 0;
      background-color: rgba(0,0,0, .2);
      color: #ffffff;

      q {
        font-weight: 700;
        @media (min-width: 960px) {
          display: block;
          padding: 0 15%;
        }
      }
    }
  }
}

#offer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0 4.5em 0;

  @media (min-width: 960px) {
    height: 100vh;
    padding: 0;
  }

  .pos {
    width: 70%;
  }

  i {
    font-size: 4.5em;
    color: #900000;
  }

  p {
    color: #3b3b3b;
  }
}

#finish {
  background-color: #ffffff;
  padding: 2em 0;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, .08);

  @media (max-width: 960px) {
    padding-bottom: 5em;
  }

  h4 {
    font-size: 2em;
    margin-bottom: 0;

    @media (max-width: 960px) {
      font-size: 1.45em;
    }
  }

  h5 {
    font-size: 1.5em;
    margin: 0 0 1em 0;
    color: #707070;

    @media (max-width: 960px) {
      font-size: 1.2em;
    }
  }

  a.button {
    padding: 5px 0;
    display: block;
    width: 25%;
    margin: auto;
    text-align: center;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.6em;
    background-color: #900000;
    cursor: pointer;

    @media (max-width: 960px) {
      width: 90%;
    }

    @media (max-width: 640px) {
      width: 80%;
      font-size: 1.4em;
    }
  }

  .production {
    margin-top: 3em;

    p {
      margin: 0;
      font-size: 0.8em;

      &:first-of-type {
        font-size: 1.2em;
      }

      a {
        color: #3b3b3b;
      }
    }
  }
}
</style>
