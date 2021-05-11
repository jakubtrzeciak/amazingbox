<template>
<div uk-slider="autoplay: true">

    <div class="uk-position-relative outer">

        <div class="uk-slider-container uk-light">
            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s
            uk-child-width-1-4@m">
                <a v-for="item in sliderInfos" :key="item.el"
                href="#modal-overflow" uk-toggle
                class="item"
                :style="{'background-image':
                'url(' + require(`../assets/photos/slider_photos/${item.img}`) + ')'}">
                    <div class="uk-position-center uk-panel">
                      <div class="info">
                        <p>Zestaw <br />{{item.name}}</p>
                      </div>
                    </div>
                </a>
            </ul>
        </div>

        <div class="uk-hidden@s uk-light">
            <a class="uk-position-center-left uk-position-small" href="#"
            uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small" href="#"
            uk-slidenav-next uk-slider-item="next"></a>
        </div>

        <div class="uk-visible@s">
            <a class="uk-position-center-left-out uk-position-small" href="#"
            uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right-out uk-position-small" href="#"
            uk-slidenav-next uk-slider-item="next"></a>
        </div>
    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'TopSlider',
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
    .uk-position-relative.outer {
        width: 55%;
        margin: auto;

        @media (min-width: 768px) and (max-width: 1365px) {
          width: 75%;
        }

        a {
            height: auto;
            box-sizing: border-box;
            padding: 10px;
            position: relative;

            &.item {
              height: 200px;
              box-sizing: border-box;
              background-size: cover;
              background-position: center;
            }

            .uk-panel {
              height: auto;
              opacity: 0.9;
            }
        }

        img {
          border-radius: 5px 5px 2px 2px;
          max-width: 100%;
        }

        .info {
          font-size: 1.15em;
        }
    }
</style>
