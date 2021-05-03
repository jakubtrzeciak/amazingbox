<template>
  <div class="home">
    <figure>
      <img src="../assets/logo-mobile.svg" alt="Pudełeczko">
      <figcaption><h1>AMAZING BOX</h1></figcaption>
    </figure>
    <h2>Świetny pomysł na prezent dla bliskiej Ci osoby</h2>
  </div>
</template>

<style lang="scss" scoped>
figure {
  margin: 0;

  h1 {
    font-size: 4em;
    margin-bottom: 0;

    @media only screen and (max-width: 768px) {
      font-size: 2.4em;
      margin: 10px auto;
    }
  }
}

h2 {
  margin: 0;
  font-size: 1.8em;

  @media only screen and (max-width: 768px) {
    padding: 0 1em;
    font-size: 1.5em;
    font-weight: 400;
  }
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {

};
</script>
