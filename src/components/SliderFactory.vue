<template>
  <div class="sliderContent" v-if="items.length">
    <h3 class="sliderTitle" v-if="title">
      {{ title }}
    </h3>

    <div class="sliderItems" ref="slider">
      <template v-for="(index, item) in items">
        <div
          class="sliderItems__item"
          :key="item.id"
          :data-pid="item.id"
        >

        </div>
      </template>
    </div>
  </div>

</template>

<script>
    import Vue from 'vue';
    import $ from 'jquery';
    import 'slick-carousel';
export default {
    props: {
        title: String,
        items: Array,
    },

    data() {
        return {
            sliderOptions: {
                arrows: false,
                mobileFirst: true,
                slidesToShow: 1.1,
                slidesToScroll: 1,
                infinite: false,
                    responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                        arrows: true,
                        slidesToShow: 2.8,
                        },
                    },
                ],
            }
        };
    },

    methods: {
        initSlider() {
            $(this.$refs.slider).slick(this.sliderOptions)
        },
        destroySlider() {
            $(this.$refs.slider).slick('unslick')
        }
    },

    mounted() {
        this.initSlider();
        setTimeout(() => {
            $(this.$refs.slider).slick('setPosition')
        }, 100);
    },

    watch: {
        items() {
            this.destroySlider();
            Vue.nextTick(() => {
                this.initSlider();
            });
        },
    }
};
</script>