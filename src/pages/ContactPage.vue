<template>
  <div class="aboutPage">
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

         »<span property="itemListElement" typeof="ListItem">
            <span property="name">Contato</span >
          </span>
        </div>
      </div>
    </div>

    <div class="wss__container">
      <section>
        <p>
          <strong>E-mail</strong> wendelsodres@gmail.com
        </p>
        <br/>

      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
