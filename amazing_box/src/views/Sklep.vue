<template>
<div>
  <div class="shopFirst">
    <div class="pos">
       <figure uk-scrollspy="target: > *;
        cls: uk-animation-fade; delay: 100; repeat: true">
        <img uk-scrollspy-class="uk-animation-slide-top"
        src="../assets/logo-mobile – nobg – white.svg" alt="Pudełeczko">
        <figcaption uk-scrollspy-class="uk-animation-slide-bottom"><h1>AMAZING BOX</h1></figcaption>
      </figure>
      <h2 uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400; repeat: true">
      Świetny pomysł na prezent dla bliskiej Ci osoby</h2>
    </div>
  </div>
  <div id="shopArea">
    <ul class="uk-subnav uk-flex">
      <li :class="{'uk-active': item.active}"
      v-for="item in types" :key="item.type_id" @click="changePreset( item )">
      <a>{{item.name}}</a></li>
    </ul>
    <div v-for="item in types" :key="item.type_id"
    uk-scrollspy="cls: uk-animation-fade; repeat: true; delay: 550">
      <div v-if="item.active"
      class="boxesArea uk-child-width-1-5@l uk-child-width-1-4@m
      uk-child-width-1-2@s uk-padding-large cards" uk-grid
      uk-scrollspy="target: > a; cls: uk-animation-fade; repeat: true; delay: 80">
        <CardOthers v-for="el in item.boxesData" :key="el.id"
        :cardId="el.id" :cardName="el.name" :cardImage="el.image"
        @clicked="updateStorage"></CardOthers>
      </div>
    </div>
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
</div>
</template>

<script lang="javascript">
/* eslint-disable prefer-destructuring */
import CardOthers from '../components/CardOthers.vue';
import Modal from '../components/Modal.vue';

export default {
  data() {
    return {
      modalData: [],
      photo: '',
      types: [
        {
          type_id: 0,
          name: 'Zestawy Prezentowe',
          active: false,
          boxesData: [],
          showBoxes: (ind) => {
            this.types[ind].boxesData = [];
            const sheetsData = JSON.parse(this.$func.getSheetsData()).data.feed.entry;
            console.log(sheetsData);
            const productsStocks = JSON.parse(this.$func.getProductsStocks());
            console.log(productsStocks);
            const productsWindowData = JSON.parse(this.$func.getProdcuctsWindowData());
            console.log(productsWindowData);

            for (let i = 0; i < productsStocks.data.length; i += 1) {
              this.photo = '';
              let row = '';
              const imagesTable = [];
              let description = '';
              let imageCounter = 2;
              for (let k = 0; k < sheetsData.length; k += 1) {
                if (sheetsData[k].gs$cell.inputValue === productsStocks.data[i].seller_id) {
                  row = sheetsData[k].gs$cell.row;
                }
                if (sheetsData[k].gs$cell.col === '2' && sheetsData[k].gs$cell.row === row) {
                  this.photo = sheetsData[k].gs$cell.inputValue.split('/')[5];
                }

                if (sheetsData[k].gs$cell.row === row
                && sheetsData[k].gs$cell.col === imageCounter.toString()) {
                  const ImagesData = {};
                  ImagesData.value = sheetsData[k].gs$cell.inputValue.split('/')[5];
                  ImagesData.el = imageCounter;
                  imagesTable.push(ImagesData);
                  imageCounter += 1;
                }

                if (sheetsData[k].gs$cell.col === '7' && sheetsData[k].gs$cell.row === row) {
                  description = sheetsData[k].gs$cell.inputValue;
                }
              }
              const productData = {};
              for (let j = 0; j < productsWindowData.data.length; j += 1) {
                if (productsStocks.data[i].seller_id === productsWindowData.data[j].seller_id
                && productsWindowData.data[i].name.split(' ')[0] === 'Zestaw') {
                  productData.id = productsWindowData.data[j].seller_id;
                  productData.name = productsWindowData.data[j].name;
                  productData.uri = productsWindowData.data[j].short_code_uri;
                  productData.price = productsWindowData.data[j].price.formatted;
                  productData.image = this.photo;
                  productData.images = imagesTable;
                  productData.desc = description;
                  productData.isActive = false;
                  this.types[ind].boxesData.push(productData);
                }
              }
            }
            localStorage.setItem('modal-data', JSON.stringify(this.types[ind].boxesData));
          },
        },
        {
          type_id: 1,
          name: 'Wszystkie produkty',
          active: true,
          boxesData: [],
          showBoxes: (ind) => {
            this.types[ind].boxesData = [];
            const sheetsData = JSON.parse(this.$func.getSheetsData()).data.feed.entry;
            console.log(sheetsData);
            const productsStocks = JSON.parse(this.$func.getProductsStocks());
            console.log(productsStocks);
            const productsWindowData = JSON.parse(this.$func.getProdcuctsWindowData());
            console.log(productsWindowData);
            for (let i = 0; i < productsStocks.data.length; i += 1) {
              this.photo = '';
              let row = '';
              const imagesTable = [];
              let description = '';
              let imageCounter = 2;
              for (let k = 0; k < sheetsData.length; k += 1) {
                if (sheetsData[k].gs$cell.inputValue === productsStocks.data[i].seller_id) {
                  row = sheetsData[k].gs$cell.row;
                }
                if (sheetsData[k].gs$cell.col === '2' && sheetsData[k].gs$cell.row === row) {
                  this.photo = sheetsData[k].gs$cell.inputValue.split('/')[5];
                }

                if (sheetsData[k].gs$cell.row === row
                && sheetsData[k].gs$cell.col === imageCounter.toString()) {
                  const ImagesData = {};
                  ImagesData.value = sheetsData[k].gs$cell.inputValue.split('/')[5];
                  ImagesData.el = imageCounter;
                  imagesTable.push(ImagesData);
                  imageCounter += 1;
                }

                if (sheetsData[k].gs$cell.col === '7' && sheetsData[k].gs$cell.row === row) {
                  description = sheetsData[k].gs$cell.inputValue;
                }
              }
              const productData = {};
              for (let j = 0; j < productsWindowData.data.length; j += 1) {
                if (productsStocks.data[i].seller_id === productsWindowData.data[j].seller_id) {
                  productData.id = productsWindowData.data[j].seller_id;
                  productData.name = productsWindowData.data[j].name;
                  productData.uri = productsWindowData.data[j].short_code_uri;
                  productData.price = productsWindowData.data[j].price.formatted;
                  productData.image = this.photo;
                  productData.images = imagesTable;
                  productData.desc = description;
                  productData.isActive = false;
                }
              }
              this.types[ind].boxesData.push(productData);
              console.log(this.types[ind].boxesData);
            }
            localStorage.setItem('modal-data', JSON.stringify(this.types[ind].boxesData));
            // end
          },
        },
      ],
    };
  },
  methods: {
    changePreset(el) {
      for (let a = 0; a < this.types.length; a += 1) {
        if (this.types[a].name !== el.name) this.types[a].active = false;
        else {
          this.types[a].active = true;
          this.types[a].showBoxes(a);
        }
      }
    },
    async updateStorage(value) {
      this.modalData = value;
      await localStorage.setItem('modal-data', JSON.stringify(value));
      console.log(value);
    },
  },
  mounted() {
    const app = document.getElementById('app');
    app.classList.remove('mainPageBackground');
    app.classList.add('shopBackground');

    for (let a = 0; a < this.types.length; a += 1) {
      if (this.types[a].active) {
        this.types[a].showBoxes(a);
      }
    }
  },
  components: {
    CardOthers,
    Modal,
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

#shopArea {
  width: 100%;
  position: relative;
  background-color: #fafafa;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.2);

  ul {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: #ffffff;
    box-shadow: 0 2px 7px rgba(82, 82, 82, 0.2);

    @media (max-width: 700px) {
      padding: 10px 0;
    }

    li {
      padding: 15px 30px;
      margin: 30px 10px;

      @media (max-width: 700px) {
        margin: 0 10px;
        padding: 10px;
      }

      a {
        font-size: 1.4em;

        @media (max-width: 700px) {
          font-size: 1em;
        }
      }
    }
  }
}
</style>
