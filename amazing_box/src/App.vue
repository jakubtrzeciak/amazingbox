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
      <router-link class="red" to="/kupuj">SKLEP <i class="icon-basket"></i></router-link>
      <button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-flip">
      &lt; MENU
      </button>

      <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
        <div class="uk-offcanvas-bar">

            <button class="uk-offcanvas-close" type="button" uk-close></button>

            <ul>
              <li><router-link to="/" v-scroll-to="'#aboutus'">OFERTA</router-link></li>
              <li><router-link to="/" v-scroll-to="'#contactus'">KONTAKT</router-link></li>
              <li><router-link to="/" v-scroll-to="'#offer'">O NAS</router-link></li>
            </ul>

        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
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
    background-repeat: no-reapat;

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

    @media (min-width: 768px) {
     background-image: url('assets/background.svg');
      background-position: right;
    }
  }

  .red {
    color: #900000;
  }
}

.uk-sticky-placeholder {
  margin: 10px 0;

  @media (min-width: 960px) {
     display: none;
  }
}

#navMobile {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: #fafafa;

  a, button {
    padding: 10px 30px;
    border: none;
    color: #2c3e50;
    font-size: 1.2em;
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

<script>
export default {

};
</script>
