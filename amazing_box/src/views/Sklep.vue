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
      uk-scrollspy="target: > a; cls: uk-animation-fade; delay: 80">
        <CardOthers v-for="el in item.boxesData" :key="el.id"
        :cardId="el.id" :cardName="el.name" :cardImage="el.image"
        @clicked="updateStorage"></CardOthers>
      </div>
    </div>
  </div>
  <div id="summary">
    <div class="uk-grid-collapse uk-text-center" uk-grid>
      <div class="uk-width-1-2@s uk-width-3-5@m">
          <div class="left-hand">
            <p class="head">Jeśli masz pomysł na własną kompozycję prezentu,
            skontaktuj się ze mną :)</p>

            <div class="pos">
              <a href="mailto:agnieszkaamazingbox@gmail.com">NAPISZ</a>
              <p>agnieszkaamazingbox@gmail.com</p>
            </div>

             <div class="pos">
              <a href="tel:+48515283892">ZADZWOŃ</a>
              <p>+48 515 283 892</p>
            </div>
            <div class="links">
              <div class="production">
                <p>&copy; 2021 AmazingBox.pl</p>
                <p>Produkcja: <a href="https://eyewebcompany.pl"
                target="_blank">Eye Web Company</a></p>
              </div>
              <p><a href="https://amazingbox.pl/regulamin-sklepu.pdf"
                target="_blank">Regulamin sklepu</a>|
                <a href="https://amazingbox.pl/polityka-prywatnosci.pdf"
                target="_blank">Polityka prywatności</a></p>
            </div>
          </div>
      </div>
      <div class="uk-width-1-2 uk-width-2-5@m uk-visible@s">
          <div class="image uk-background-primary uk-light">
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="javascript">
/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-parens */
import CardOthers from '../components/CardOthers.vue';

export default {
  data() {
    return {
      modalData: [],
      photo: '',
      sheetsData: '',
      productsWindowData: '',
      productsStocks: '',
      dataActive: 0,
      types: [
        {
          type_id: 0,
          name: 'Zestawy Prezentowe',
          active: true,
          boxesData: [],
          showBoxes: (ind) => {
            this.types[ind].boxesData = [];
            let i = 0;
            while (i < this.productsStocks.length) {
              this.photo = '';
              let row = '';
              const imagesTable = [];
              let description = '';
              let imageCounter = 2;
              for (let k = 0; k < this.sheetsData.length; k += 1) {
                if (this.sheetsData[k].gs$cell.inputValue
                === this.productsStocks[i].seller_id) {
                  row = this.sheetsData[k].gs$cell.row;
                }
                if (this.sheetsData[k].gs$cell.col === '2' && this.sheetsData[k].gs$cell.row === row) {
                  this.photo = this.sheetsData[k].gs$cell.inputValue.split('/')[5];
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
                if (this.productsStocks[i].seller_id
                === this.productsWindowData[j].seller_id
                && this.productsWindowData[i].name.split(' ')[0] === 'Zestaw') {
                  productData.id = this.productsWindowData[j].seller_id;
                  productData.name = this.productsWindowData[j].name;
                  productData.uri = this.productsWindowData[j].short_code_uri;
                  productData.price = this.productsWindowData[j].price.formatted;
                  productData.image = this.productsWindowData[j].image_thumbnail;
                  productData.images = imagesTable;
                  productData.desc = description;
                  productData.isActive = false;
                  if (productData.id === this.productsStocks[i].seller_id
                  && this.productsStocks[i].available_quantity > 0) {
                    this.types[ind].boxesData.push(productData);
                  }
                }
              }
              i += 1;
            }
            localStorage.setItem('modal-data', JSON.stringify(this.types[ind].boxesData));
          },
        },
        {
          type_id: 1,
          name: 'Wszystkie produkty',
          active: false,
          boxesData: [],
          showBoxes: (ind) => {
            this.types[ind].boxesData = [];
            let i = 0;
            while (i < this.productsStocks.length) {
              this.photo = '';
              let row = '';
              const imagesTable = [];
              let description = '';
              let imageCounter = 2;
              for (let k = 0; k < this.sheetsData.length; k += 1) {
                if (this.sheetsData[k].gs$cell.inputValue
                === this.productsStocks[i].seller_id) {
                  row = this.sheetsData[k].gs$cell.row;
                }
                if (this.sheetsData[k].gs$cell.col === '2' && this.sheetsData[k].gs$cell.row === row) {
                  this.photo = this.sheetsData[k].gs$cell.inputValue.split('/')[5];
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
                if (this.productsStocks[i].seller_id
                === this.productsWindowData[j].seller_id) {
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
                this.types[ind].boxesData.push(productData);
              }
              i += 1;
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
    updateStorage(value) {
      localStorage.setItem('modal-data', JSON.stringify(value));
      this.modalData = value;
    },
    importData() {
      this.$func.getSheetsData().then(res => {
        this.sheetsData = res;

        this.$func.getProductsStocks().then(res1 => {
          this.productsStocks = res1;

          this.$func.getProdcuctsWindowData().then(res2 => {
            this.productsWindowData = res2;
            this.types[this.dataActive].showBoxes(this.dataActive);
          });
        });
      });
    },
  },
  mounted() {
    const app = document.getElementById('app');
    app.classList.remove('mainPageBackground');
    app.classList.add('shopBackground');

    for (let a = 0; a < this.types.length; a += 1) {
      if (this.types[a].active) {
        this.dataActive = a;
      }
    }

    this.importData();
  },
  components: {
    CardOthers,
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
    z-index: 2;
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

#summary {
  background-color: #ffffff;
  position: relative;

  .left-hand {
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 25% 0 25%;

    @media (max-width: 960px) {
      padding: 0 10% 0 10%;
    }

    .links {
      position: absolute;
      bottom: 20px;
      font-size: 0.8em;

      @media (max-width: 640px) {
        font-size: 0.7em;
        padding-bottom: 15px;
      }

      @media(max-width: 960px) {
        bottom: calc(100vh - (100vh - 54px));
      }

      p,a {
        color: #3b3b3b;
        margin: 0 5px;
      }

      .production {
        p {
          margin: 0;
          &:first-of-type {
            font-size: 1.5em;
          }
        }
      }
    }

    .head {
      font-size: 1.3em;
      margin-bottom: 10%;
    }

    .pos {
      width: 90%;
      margin: 10px auto;

      a,p {
        margin: 7px auto;
      }

      a {
        padding: 6px 0;
        display: block;
        width: 100%;
        margin: auto;
        text-align: center;
        color: white;
        border: none;
        font-size: 1.1em;
        border-radius: 30px;
        background-color: #900000;
        cursor: pointer;

        @media (max-width: 640px) {
          font-size: 1em;
        }
      }

      p {
        @media (max-width: 640px) {
          font-size: 0.85em;
        }
      }
    }
  }

  .image {
    height: 100%;
    background-image: url('../assets/photos/agnieszka.jpg');
    background-size: cover;
    background-position: center;
  }
}

.uk-grid-collapse {
  height: 100vh;
}
</style>
