<template>
   <body class="portfolioDetails" v-if="project">
      <div class="wss__bg-title">
      <div class="wss__container">
        <div
          class="wss__breadCrumb"
          typeof="BreadcrumbList"
          vocab="http://schema.org/"
        >
          <span property="itemListElement" typeof="ListItem">

            <router-link to="/">
              Home
            </router-link>
          </span>
          »<span property="itemListElement" typeof="ListItem"
            >
            <router-link to="/portfolio">
              Portfolio
            </router-link>
            </span>
            »<span property="itemListElement" typeof="ListItem"
            ><span property="name">{{project.title }}</span
            ><meta property="position" content="4"
          /></span>
        </div>

        <h1 class="title__pages">{{ project.title }}</h1>
      </div>
    </div>

    <div class="box-site">
      <div class="wss__container">
        <section class="content__pages">
          <div class="project__contentHtml" v-html="project.content.html">
          </div>

          <div class="wss__job">
            <h3 class="wss__img-pro">
              <i class="fa fa-picture-o" aria-hidden="true"></i> IMAGENS DO
              <strong>PROJETO</strong>
            </h3>

            <div class="wss__job-img" v-if="project.images">
							<div class="wss__img" ref="slider">
									<div v-for="img in project.images" :key="img.id">
										<img :src="img.url" :alt="img.fileName" />
									</div>
							</div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
          </div>
          <div class="wss__descrp-job">
            <h4 class="wss__descrp-title">
              <i class="fa fa-magic" aria-hidden="true"></i> Tecnologias
              <strong>utilizadas</strong>
            </h4>
            <ul class="wss__tags-job" v-if="project.tags">
              <li v-for="(tg, idx) in getTags(project.tags)" :key="idx">{{ tg }}</li>
            </ul>
            <a v-if="project.urlSite"
              :href="project.urlSite"
              class="btn__out"
              :title="'Acessar o site'+ project.title"
              target="_blank"
              ><i class="fa fa-link" aria-hidden="true"></i> Visitar o site</a
            >
          </div>
        </section>
      </div>
    </div>
  </body>
</template>

<script>
  import Vue from 'vue';
  import $ from 'jquery';
  import 'slick-carousel';
  import { mapGetters } from "vuex";

  export default {

    data() {
      return {
        project: this.projects ? this.projects : {},

        sliderPrincipalOptions: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          autoplay: true,
          autoplaySpeed: 5000
        }
      };
    },

    computed: {
      ...mapGetters('project', {
        projects: 'projects'
      })
    },

    methods: {
      getProject(args){
        const idProject = this.$route.params.slug;

        if(args) {
          args.find((item) => {
            if(item.slug === idProject) {
              this.project = item;
              document.title = item.title + ' - Wendel Sodré';
            }
          });
        }
      },

      getTags(args){
        if(args){
          return args.split(',');
        }
      },

      initSlider() {
        $(this.$refs.slider).slick(this.sliderPrincipalOption);
      },

      destroySlider() {
        $(this.$refs.slider).slick('unslick');
      }
    },

    watch: {
      projects(newVal, ) {
        this.getProject(newVal);
        this.destroySlider();
        Vue.nextTick(() => {
            this.initSlider();
        });
      }
    },

    created() {
      this.getProject(this.projects);
    },

    mounted() {
      this.initSlider();
      setTimeout(() => {
        $(this.$refs.slider).slick('setPosition');
      }, 100);
    }
  }
</script>
