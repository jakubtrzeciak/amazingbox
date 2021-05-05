<template>
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1"
uk-slider="clsActivated: uk-transition-active; center: true; autoplay: true">

    <ul class="uk-slider-items uk-grid">
        <li class="uk-width-3-4" v-for="item in sliderInfos" :key="item.el">
            <div class="uk-panel">
                <img :src="require(`../assets/photos/slider_photos/${item.img}`)" :alt="item.name">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center
                uk-transition-slide-bottom">
                    <h3 class="uk-margin-remove">Zestaw</h3>
                    <p class="uk-margin-remove">{{item.name}}</p>
                </div>
            </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#"
    uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#"
    uk-slidenav-next uk-slider-item="next"></a>

</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'TopSliderMobile',
      sliderInfos: [
        {
          el: 1,
          name: 'Słodki odpoczynek',
          img: 'z1.jpg',
        },
        {
          el: 2,
          name: 'Kojąca słodycz',
          img: 'z2.jpg',
        },
        {
          el: 3,
          name: 'Męski kącik',
          img: 'z3.jpg',
        },
        {
          el: 4,
          name: 'Chwila spokoju',
          img: 'z4.jpg',
        },
        {
          el: 5,
          name: 'Zdrowy Pupil',
          img: 'z5.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
    li {
        width: 250px;
        img {
            max-height: 250px;
            width: 100%;
        }
    }
</style>
