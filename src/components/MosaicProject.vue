<template>
    <div class="mosaicProjects">

        <h3 class="title__job" v-if="title">
            {{ title }} <strong>{{ titleSpan }} </strong>
        </h3>

        <ul class="filter__jobs">
            <li @click="handleFilter($event.target)" data-filter="all" class="active">Todos</li>
            <li @click="handleFilter($event.target)" data-filter="web">WebSite</li>
            <li @click="handleFilter($event.target)" data-filter="ecommerce">E-commerce</li>
        </ul>

        <div class="portfolio__group" v-if="projects.length">

            <template v-for="(item, idx) in projects">

                <div class="item picture-jobs" v-if="idx < itemsQtd && item.stage == 'PUBLISHED' " :class="item.typeProject" :key="item.id">

                    <router-link :to="{ name: 'details', params: { id: item.id, slug: item.slug }}">
                        <div class="crop_img">
                            <img v-if="item.heroImage"
                                :src="item.heroImage.url"
                                :alt="item.title" class="zoom-picture">
                        </div>
                        <p class="name__project">{{ item.typeProject }} | <strong>{{ item.title }}</strong></p>
                    </router-link>
                </div>
            </template>
        </div>
    </div>

</template>

<script>

import { mapGetters } from "vuex";

export default {
    props: {
        title: String,
        titleSpan:String,
        items: Array,
        itemsQtd: {
            type:Number,
            default: 8
        }
    },

    computed:{
        ...mapGetters('project', {
            projects: 'projects'
        })
    },

    methods: {
       handleFilter(args) {


           let filtersNav = document.querySelectorAll(".filter__jobs li");
           let filtersItem = document.querySelectorAll(".portfolio__group .item");

            if (args) {
                const itemFilter = args.dataset.filter;
                console.log(args, itemFilter);

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