<template>
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1"
uk-slider="clsActivated: uk-transition-active; center: true; autoplay: true">

    <ul class="uk-slider-items uk-grid">
        <a class="uk-width-3-4" v-for="item in boxesData" :key="item.id"
        href="#modal-overflow" uk-toggle>
            <div class="uk-panel"
            :style="{'background-image':
                'url(' + `${item.image}` + ')'}">
                <img :src="`${item.image}`" :alt="item.name">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center
                uk-transition-slide-bottom">
                    <p class="uk-margin-remove">{{item.name}}</p>
                </div>
            </div>
        </a>
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
      boxesData: [],
      photo: '',
      listLength: 0,
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
  methods: {
    showBoxes() {
      this.boxesData = [];
      const productsStocks = JSON.parse(this.$func.getProductsStocks());
      console.log(productsStocks);
      const productsWindowData = JSON.parse(this.$func.getProdcuctsWindowData());
      console.log(productsWindowData);
      this.listLenght = productsStocks.data.length;
      if (productsStocks.data.length > 6) this.listLenght = 6;
      for (let i = 0; i < this.listLenght; i += 1) {
        const productData = {};
        for (let j = 0; j < productsWindowData.data.length; j += 1) {
          if (productsStocks.data[i].seller_id === productsWindowData.data[j].seller_id) {
            productData.id = productsWindowData.data[j].seller_id;
            productData.name = productsWindowData.data[j].name;
            productData.image = productsWindowData.data[j].image_thumbnail;
          }
        }
        this.boxesData.push(productData);
        console.log(this.photo);
      }
      // end
    },
  },
  mounted() {
    this.showBoxes();
  },
};
</script>

<style lang="scss" scoped>
    a {
      .uk-panel {
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: center;

         img {
            visibility: hidden;
            max-width: 100%;
            display: block;
            margin-left: auto;
            margin-right: auto
        }
      }
    }
</style>
