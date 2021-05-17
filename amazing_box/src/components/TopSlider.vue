<template>
<div uk-slider="autoplay: true">

    <div class="uk-position-relative outer">

        <div class="uk-slider-container uk-light">
            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s
            uk-child-width-1-4@m">
                <a v-for="item in boxesData" :key="item.id"
                href="#modal-overflow" uk-toggle
                class="item"
                :style="{'background-image':
                'url(' + `${item.image}` + ')'}">
                    <div class="uk-position-center uk-panel">
                      <div class="info">
                        <p>{{item.name}}</p>
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
/* eslint-disable prefer-destructuring */
export default {
  data() {
    return {
      name: 'TopSlider',
      boxesData: [],
      photo: '',
      listLength: 0,
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

    uk-slider-container a {
      box-sizing: border-box;
      padding-left: 10px;
    }
</style>
