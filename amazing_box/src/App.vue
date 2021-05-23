<template>
  <div id="app">
  <span uk-icon="info" class="shipping-modal" uk-toggle="target: #free-shipping-modal"></span>
    <div id="free-shipping-modal" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
          <button class="uk-modal-close-default" type="button" uk-close></button>
          <h2 class="uk-modal-title">Darmowa dostawa!</h2>
          <h5 class="uk-margin-small">Drogi użytkowniku, nasz sklep
          oferuje darmową dostawę na terenie Olsztyna
          (warmińsko-mazurskie).</h5> <h5 class="uk-margin-remove"> Przy wybieraniu opcji dostawy
          należy wybrać "Transport sprzedawcy"
          i wpisać adres, na który Twój Amazing Box zostanie dostarczony.</h5>
      </div>
    </div>
    <div id="nav" class="uk-margin-auto uk-visible@m">
      <div class="centerNav uk-margin-auto uk-flex uk-flex-center uk-text-center">
        <router-link to="/">OFERTA</router-link>
        <router-link to="/" v-scroll-to="'#contactus'">KONTAKT</router-link>
        <router-link to="/" v-scroll-to="'#offer'">O NAS</router-link>
        <router-link class="red" to="/kupuj">SKLEP <i class="icon-basket"></i></router-link>
      </div>
    </div>
    <div id="navMobile" class="uk-hidden@m"  uk-sticky>
      <router-link class="red" to="/kupuj" v-scroll-to="'.shopFirst'">
      SKLEP <i class="icon-basket"></i></router-link>
      <button class="uk-button uk-button-default menu-button" type="button"
      uk-toggle="target: #offcanvas-nav-primary">
      <span uk-icon="icon: chevron-left; ratio: 1.15"></span> MENU
      </button>
    </div>
     <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true; flip: true;">
          <div class="uk-offcanvas-bar uk-flex uk-flex-column uk-background-muted">

              <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                  <li class="uk-parent"  @click="hideCanvas()">
                      <router-link to="/" v-scroll-to="'#app'"><img src="./assets/logo-mobile.svg"
                      alt="Logo"></router-link>
                      <ul class="uk-nav-sub">
                          <li @click="hideCanvas()">
                          <router-link to="/kupuj">
                          Pełna oferta sklepu</router-link></li>
                          <li @click="hideCanvas()">
                          <router-link to="/" v-scroll-to="'#aboutus'">
                          Wprowadzenie</router-link></li>
                          <li @click="hideCanvas()">
                          <router-link to="/" v-scroll-to="'#contactus'">
                          Skontaktuj się</router-link></li>
                          <li @click="hideCanvas()">
                          <router-link to="/" v-scroll-to="'#offer'">
                          Trochę o nas</router-link></li>
                      </ul>
                  </li>
                  <li class="uk-nav-divider"></li>
              </ul>

          </div>
      </div>
    <router-view/>
    <div id="modal-overflow" uk-modal>
       <Modal v-for="item in modalData" :key="item.id"
        :isActive="item.isActive"
        :desc="item.desc"
        :images="item.images"
        :name="item.name"
        :uri="item.uri"
        :price="item.price"></Modal>
    </div>
  </div>
</template>

<script>
/* eslint-disable func-names */
/* eslint-disable operator-assignment */
import UIkit from 'uikit';
import Modal from './components/Modal.vue';

export default {
  data() {
    return {
      modalData: [],
      x: [],
    };
  },
  methods: {
    updateData() {
      const x = JSON.parse(localStorage.getItem('modal-data'));
      let xSplitted = [];
      let oneObj = {};
      let descArray = [];
      for (let i = 0; i < x.length; i += 1) {
        descArray = [];
        xSplitted = x[i].desc.split('/');
        for (let j = 0; j < xSplitted.length; j += 1) {
          oneObj = {
            value: xSplitted[j],
            keyValue: j,
          };
          descArray.push(oneObj);
        }
        x[i].desc = descArray;
      }

      this.modalData = x;
    },
    hideCanvas() {
      UIkit.offcanvas('#offcanvas-nav-primary').hide();
    },
    showShippingModal() {
      if (sessionStorage.getItem('free-shipping-modal') === null) {
        console.log('Activated');
        UIkit.modal('#free-shipping-modal').show();
        sessionStorage.setItem('free-shipping-modal', 'active');
      }
    },
  },
  mounted() {
    setTimeout(() => {
      const viewheight = window.innerHeight;
      const viewwidth = window.innerWidth;
      const viewport = document.querySelector('meta[name=viewport]');
      viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0`);
    }, 300);

    this.showShippingModal();
    document.body.addEventListener('click', this.updateData);
  },
  components: {
    Modal,
  },
};
</script>

<style lang="scss">
#cookie_law_notification {
  bottom: 70px !important;
}

#offcanvas-nav-primary {
  z-index: 3;
}

.shipping-modal {
  position: fixed;
  z-index: 1;
  right: 30px;
  top: 50px;

  @media (min-width: 960px) {
    top: 30px;
    right: 40px;
    transform: scale(1.2);
  }
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3B3B3B;
  background-color: #FAFAFA;

  &.shopBackground {
    background-image: url('assets/photos/shop_box_1.jpg');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    height: 100vh;
    overflow-y: scroll;

    #nav .centerNav {
      border-color: #000000;
    }

    #nav a {
      color: #000000;
    }

    #nav a:last-child {
      color: #900000;
    }
  }

  &.mainPageBackground {
    background-image: url('assets/background – mobile.svg');
    background-size: cover;
  }

  .red {
    color: #900000;
  }
}

.uk-sticky-placeholder {
  margin: 0;

  @media (min-width: 960px) {
     display: none;
  }
}

#navMobile {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  z-index: 1;

  a, button {
    padding: 10px 30px;
    border: none;
    color: #2c3e50;
    font-size: 1.2em;
  }

  ul {
    list-style: none;
  }

  .menu-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.uk-offcanvas-bar .uk-nav-primary .uk-nav-sub {

  li{
    background-color: #efefef;
    margin: 10px 0;
    &:first-of-type {
      a {
        color: #900000;
      }
    }
  }
  a {
    color: #3b3b3b;
    padding: 5px 0;
    font-size: 1.1em;
  }
}

#nav {
  padding: 10px 30px 30px 30px;
  font-size: 1.3em;
  background-color: none;

  .centerNav {
    width: 55%;
    border-bottom: 2px solid #9c9c9c;

    @media only screen and (max-width: 1100px) {
    width: 65%;
    }
  }

  a {
    color: #2c3e50;
    padding: 10px 30px;
  }
}

#modal-overflow {
  padding: 0;

  @media (max-width: 960px) {
    height: calc(100vh - 54px);
  }
}
</style>
