<template>
  <div class="portfolioPage">
    <div class="wss__bg-title">
      <div class="wss__container">
        <div
          class="wss__breadCrumb"
          typeof="BreadcrumbList"
          vocab="http://schema.org/"
        >
          <!-- Breadcrumb NavXT 7.2.0 -->
          <span property="itemListElement" typeof="ListItem"
            >

            <router-link to="/">
              Home
            </router-link>

          </span>»
          <span property="itemListElement" typeof="ListItem"
            ><span property="name">Portfolio</span
            ><meta property="position" content="2"
          /></span>
        </div>
      </div>
    </div>

    <div class="wss__container">
      <section>

        <div class="wss__jobs">
          <ul class="filter__jobs">
            <li
              @click="handleFilter($event.target)"
              data-filter="all"
              class="active"
            >
              Todos
            </li>
            <li @click="handleFilter($event.target)" data-filter="web">
              WebSite
            </li>
            <li @click="handleFilter($event.target)" data-filter="ecommerce">
              E-commerce
            </li>
          </ul>

          <div class="portfolio__group" v-if="projects.length">
            <template v-for="item in projects">
              <div
                class="item picture-jobs"
                :class="item.typeProject"
                :key="item.id"
              >
                <router-link
                  :to="{
                    name: 'details',
                    params: { id: item.id, slug: item.slug },
                  }"
                >
                  <div class="crop_img">
                    <img
                      v-if="item.heroImage"
                      :src="item.heroImage.url"
                      :alt="item.title"
                      class="zoom-picture"
                    />
                  </div>
                  <p class="name__project">
                    {{ item.typeProject }} | <strong>{{ item.title }}</strong>
                  </p>
                </router-link>
              </div>
            </template>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("project", {
      projects: "projects",
    }),
  },

  methods: {
    handleFilter(args) {
      let filtersNav = document.querySelectorAll(".filter__jobs li");
      let filtersItem = document.querySelectorAll(".portfolio__group .item");

      if (args) {
        const itemFilter = args.dataset.filter;

        filtersNav.forEach((element) => {
          element.classList.remove("active");
        });

        args.classList.add("active");

        filtersItem.forEach((item) => {
          if (!item.classList.contains(itemFilter)) {
            item.classList.add("hidden");
          } else {
            item.classList.remove("hidden");
          }

          if (itemFilter === "all") {
            item.classList.remove("hidden");
          }
        });
      }
    }
  }
};
</script>
