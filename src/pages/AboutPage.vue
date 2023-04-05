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
          »<span property="itemListElement" typeof="ListItem"
            ><span property="name">Sobre</span
            ></span>
        </div>
      </div>
    </div>
    <div class="wss__bg-picture" style="background: #f39927">
      <div class="wss__container">
        <div class="wss__about">
          <img
            :src="require('@/assets/images/wendel-wss.jpeg')"
            alt=""
            class="profile-img"
          />
        </div>
      </div>
    </div>

    <div class="wss__container">
      <section class="content-pages wss__con-about">
        <p>
          Me chamo<strong> Wendel Sodré dos Santos</strong>, tenho 35 anos, sou
          casado e tenho dois filhos.
        </p>

        <p>
          Dei início na área de tecnologia em 2009, no curso de web design
          (SENAI), em 2013 tive minha primeira experência e oportunidade como
          programador, foi possível aprender muitos conceitos e ter uma visão
          mais ampla do mercado.
        </p>

        <p>
          Sou formado em Sistemas para Internet pela Universidade Nove de Julho,
          possuo conhecimento front-end e back-end, nos ultimos anos venho
          atuando a maior parte na implementação de layout e desenvolvimento de
          funcionalidades na plataforma de e-commerce <strong>Salesforce</strong>.
          Tive a oportunidade de atuar diretamente em mais de
          <strong>25 projetos</strong>, grande maioria ecommerce, desde a marcação do HTML, estilização do layout e integração com API.
        </p>

        <p><strong>Conhecimento Técnico</strong></p>

        <ul>
          <li><strong>Back-End:</strong> (Node e PHP)</li>

          <li>
            <strong>Plataforma de E-commerce</strong> (Salesforce, VTEX e
            Magento)
          </li>

          <li>
            <strong>Experiência:</strong>(HTML, css, sass, Javascript,
            nodejs, vuejs, react e redux)
          </li>
          <li><strong>Webservices API</strong> (Rest)</li>
          <li>
            <strong>Banco de Dados</strong> (Modelagem de Dados, MySQL e SQL
            Server)
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
