<template>
  <header class="wss__header-fx">
    <div class="wss__fx">
      <div class="wss__container">
        <ul class="wss__address">
          <li>
            <a href="mailto:wendelsodres@gmail.com" class="ic__email"
              >wendelsodres@gmail.com</a
            >
          </li>
        </ul>

        <ul class="wss__social">
          <li>
            <a
              href="https://www.linkedin.com/in/wendelsodres"
              target="_blank"
              title="Linkedin"
              class="wss__social-linkedin"
              rel="noopener noreferrer"
            ></a>
          </li>
          <li>
            <a
              href="https://github.com/wendelsodres"
              target="_blank"
              title="Github"
              class="wss__social-git"
              rel="noopener noreferrer"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/wendelsodres/"
              target="_blank"
              title="Codepen"
              class="wss__social-code"
              rel="noopener noreferrer"
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="wss__container wss__header">
      <div class="wss__logo">
        <h1>
          <span>Wendel Sodré - Desenvolvedor Web</span>
          <router-link to="/">
            <img
              :src="require('@/assets/images/wendel-sodre-logo.png')"
              alt="Wendel Sodré web developer"
            />
          </router-link>
        </h1>
      </div>

      <nav class="wss__main">
        <ul>
          <li
            class="menu-item"
          >
            <router-link to="/sobre">Sobre</router-link>
          </li>
          <li
            id="menu-item-75"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75"
          >
            <router-link to="/portfolio">Portfolio</router-link>
          </li>
          <li
            id="menu-item-94"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"
          >
            <router-link to="/contato">Contato</router-link>
          </li>
        </ul>

        <div class="wss__main-btn"></div>
      </nav>

      <div class="wss__hambu"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
