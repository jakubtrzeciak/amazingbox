<template>
    <div class="uk-modal-dialog" v-if="isActive">
        <button class="uk-modal-close-default" type="button" uk-close></button>

        <div class="uk-modal-header">
            <h2 class="uk-modal-title">{{ name }}</h2>
        </div>

        <div class="uk-modal-body" uk-overflow-auto>
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1"
        uk-slideshow>
                <ul class="uk-slideshow-items">
                    <li v-for="image in images" :key="image.el">
                        <div uk-cover class="uk-panel" :style="{'background-image':
                'url(' + `https://drive.google.com/uc?id=${image.value}&export=download` + ')'}">
                        </div>
                    </li>
                </ul>

                <a class="uk-slidenav-large uk-position-center-left uk-position-small
                uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                <a class="uk-slidenav-large uk-position-center-right uk-position-small
                uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

            </div>
            <p class="descPar" v-for="item in desc" :key="item.keyValue">{{ item.value }}</p>
        </div>

        <div class="uk-modal-footer uk-text-right">
            <a :href="uri" type="button" class="button">Dodaj do koszyka ({{price}})</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    name: String,
    images: Array,
    desc: Array,
    uri: String,
    price: String,
    isActive: Boolean,
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

        h2 {
            @media (max-width: 640px) {
                font-size: 1.4em;
            }
        }
    }

    .uk-modal-body {
        padding: 0;
        height: 66vh;

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

    p.descPar {

        &:first-of-type {
            font-size: 1.1em;
            text-decoration: underline;
            color: #3b3b3b;
            margin-bottom: 15px;
        }

        &:last-of-type {
            margin: 20px 0;
        }
    }
</style>
