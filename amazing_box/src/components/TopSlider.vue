<template>
<div  uk-slider="autoplay: true">

    <div class="uk-position-relative outer">

        <div class="uk-slider-container uk-light">
            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s
            uk-child-width-1-4@m">
                <a v-for="item in boxesData" :key="item.id"
                href="#modal-overflow" uk-toggle
                class="item"
                @click="updateStorage(item.id)"
                :style="{'background-image':
                'url(' + `${item.image}` + ')'}">
                    <div class="uk-position-center uk-panel">
                      <div class="info">
                        <h3>{{item.name}}</h3>
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
/* eslint-disable arrow-parens */
export default {
  data() {
    return {
      name: 'TopSlider',
      boxesData: [],
      sheetsData: '',
      productsStocks: '',
      productsWindowData: '',
      photo: '',
      listLength: 0,
    };
  },
  methods: {
    showBoxes() {
      this.boxesData = [];
      if (this.productsStocks.length > 6) this.listLenght = 6;
      let i = 0;
      while (i < this.listLength) {
        this.photo = '';
        let row = '';
        const imagesTable = [];
        let description = '';
        let imageCounter = 2;
        for (let k = 0; k < this.sheetsData.length; k += 1) {
          if (this.sheetsData[k].gs$cell.inputValue === this.productsStocks[i].seller_id) {
            row = this.sheetsData[k].gs$cell.row;
          }

          if (this.sheetsData[k].gs$cell.row === row
          && this.sheetsData[k].gs$cell.col === imageCounter.toString()) {
            const ImagesData = {};
            ImagesData.value = this.sheetsData[k].gs$cell.inputValue.split('/')[5];
            ImagesData.el = imageCounter;
            imagesTable.push(ImagesData);
            imageCounter += 1;
          }

          if (this.sheetsData[k].gs$cell.col === '7' && this.sheetsData[k].gs$cell.row === row) {
            description = this.sheetsData[k].gs$cell.inputValue;
          }
        }
        const productData = {};
        for (let j = 0; j < this.productsWindowData.length; j += 1) {
          if (this.productsStocks[i].seller_id === this.productsWindowData[j].seller_id) {
            productData.id = this.productsWindowData[j].seller_id;
            productData.name = this.productsWindowData[j].name;
            productData.uri = this.productsWindowData[j].short_code_uri;
            productData.price = this.productsWindowData[j].price.formatted;
            productData.image = this.productsWindowData[j].image_thumbnail;
            productData.images = imagesTable;
            productData.desc = description;
            productData.isActive = false;
          }
        }
        if (productData.id === this.productsStocks[i].seller_id
        && this.productsStocks[i].available_quantity > 0) {
          this.boxesData.push(productData);
          localStorage.setItem('modal-data', JSON.stringify(this.boxesData));
        }
        i += 1;
      }
      // end
    },
    updateStorage(value) {
      const activeItem = value;
      const modalData = JSON.parse(localStorage.getItem('modal-data'));
      for (let i = 0; i < modalData.length; i += 1) {
        if (modalData[i].id === activeItem) {
          modalData[i].isActive = true;
        } else {
          modalData[i].isActive = false;
        }
      }

      this.$emit('clicked', modalData);
    },
    importData() {
      this.$func.getSheetsData().then(res => {
        this.sheetsData = res;

        this.$func.getProductsStocks().then(res1 => {
          this.productsStocks = res1;
          this.listLength = res1.length;

          this.$func.getProdcuctsWindowData().then(res2 => {
            this.productsWindowData = res2;
            this.showBoxes();
          });
        });
      });
    },
  },
  mounted() {
    this.importData();
  },
};
</script>

<style lang="scss" scoped>
    .uk-position-relative.outer {
        width: 55%;
        margin: auto;

        @media (min-width: 541px) and (max-width: 1365px) {
          width: 75%;
        }

        @media (max-width: 540px) {
          width: 100%;
        }

        a {
            height: auto;
            position: relative;

            &.item {
              height: 200px;
              box-sizing: border-box;
              background-size: cover;
              background-position: center;

              @media (max-width: 640px) {
                width: 100%;
                height: 210px;
              }

              @media (min-width: 400px) and (max-width: 640px) {
                height: 250px;
              }

              h3 {
                box-sizing: border-box;
                width: 65%;
                margin: auto;
                text-shadow: 1.5px 1.5px 2px #000000;
                font-size: 1.1em;

                @media (max-width: 640px) {
                  font-size: 1.4em;
                }
              }
            }
        }

        img {
          border-radius: 5px 5px 2px 2px;
          max-width: 100%;
        }
    }
</style>
