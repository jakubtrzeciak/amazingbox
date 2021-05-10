<template>
  <div class="shopFirst">
    <div class="pos">
       <figure uk-scrollspy="target: > *;
        cls: uk-animation-fade; delay: 100">
        <img uk-scrollspy-class="uk-animation-slide-top"
        src="../assets/logo-mobile – nobg – white.svg" alt="Pudełeczko">
        <figcaption uk-scrollspy-class="uk-animation-slide-bottom"><h1>AMAZING BOX</h1></figcaption>
      </figure>
      <h2 uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400">
      Świetny pomysł na prezent dla bliskiej Ci osoby</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
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
</style>
