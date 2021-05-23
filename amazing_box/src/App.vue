<template>
  <div id="app">
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
      <button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-flip">
      &lt; MENU
      </button>

      <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
        <div class="uk-offcanvas-bar">

            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <ul>
              <li class="specialLi"><router-link to="/">
              <img src="./assets/logo-mobile.svg" alt="">
              </router-link></li>
              <li><router-link to="/" v-scroll-to="'#aboutus'">
              OFERTA</router-link></li>
              <li><router-link to="/" v-scroll-to="'#contactus'">KONTAKT</router-link></li>
              <li><router-link to="/" v-scroll-to="'#offer'">O NAS</router-link></li>
            </ul>

        </div>
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
  },
  mounted() {
    setTimeout(() => {
      const viewheight = window.innerHeight;
      const viewwidth = window.innerWidth;
      const viewport = document.querySelector('meta[name=viewport]');
      viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0`);
    }, 300);

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

  .specialLi {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #3b3b3b;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .uk-offcanvas-bar {
    background-color: #ffffff;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 30px 0;

    li {
      margin: 10px 0;
    }
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
</style>
