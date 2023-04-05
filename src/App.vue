<template>
  <div>
    <HeaderComp />
    <transition name="fade" mode="out-in" appear>
        <router-view :key="$route.fullPath"></router-view>
    </transition>
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from './components/Header.vue'
import FooterComp from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style src="@/assets/scss/styles.scss" lang="scss"></style>
