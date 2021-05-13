<template>
<div id="modal-overflow" uk-modal>
    <div class="uk-modal-dialog">

        <button class="uk-modal-close-default" type="button" uk-close></button>

        <div class="uk-modal-header">
            <h2 class="uk-modal-title">Headline</h2>
        </div>

        <div class="uk-modal-body" uk-overflow-auto>
           <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1"
           uk-slideshow>
                <ul class="uk-slideshow-items">
                    <li>
                        <div uk-cover class="uk-panel" :style="{'background-image':
                        'url(' + require('../assets/photos/zestaw4/z4.jpg') + ')'}">
                        </div>
                    </li>
                    <li>
                        <div uk-cover class="uk-panel" :style="{'background-image':
                        'url(' + require('../assets/photos/zestaw4/z4_1.jpg') + ')'}">
                        </div>
                    </li>
                    <li>
                        <div uk-cover class="uk-panel" :style="{'background-image':
                        'url(' + require('../assets/photos/zestaw4/z4_2.jpg') + ')'}">
                        </div>
                    </li>
                </ul>

                <a class="uk-slidenav-large uk-position-center-left uk-position-small
                uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                <a class="uk-slidenav-large uk-position-center-right uk-position-small
                uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div class="uk-modal-footer uk-text-right">
            <a href="#" type="button" class="button">DODAJ DO KOSZYKA</a>
        </div>

    </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    productName: String,
    imagePaths: Array,
    description: String,
    price: String,
    productURL: String,
  },
  mounted() {
    console.log(this.productName);
    console.log(this.imagePaths);
    console.log(this.description);
    console.log(this.price);
    console.log(this.productURL);
  },
};
</script>

<style lang="scss" scoped>
    .uk-modal-footer a.button {
        width: 50%;
        padding: 6px 0;
        display: block;
        margin: auto;
        text-align: center;
        color: white;
        border: none;
        font-size: 1.1em;
        border-radius: 30px;
        background-color: #900000;
        cursor: pointer;

        @media (max-width: 960px) {
            width: auto;
        }
    }

    .uk-modal-header {
        text-align: center;
        padding: 10px 0;
    }

    .uk-modal-body {
        padding: 0;
        height: 60vh;

        @media (min-width: 960px) {
            height: 85vh;
        }

            p {
                padding: 0 1em;
                margin: 0;
                margin-top: 10px;
            }
    }

    .uk-modal-body .uk-panel {
        background-size: cover;
        background-position: center;

            @media (max-width: 960px) {
                height: 250px;
            }
    }

    .uk-slideshow-items {
        height: 220px;
        margin-bottom: 30px;
    }
</style>
