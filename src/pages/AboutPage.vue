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
        <p class="text__p">
          Me chamo<strong> Wendel Sodré dos Santos</strong>, tenho 35 anos, sou
          casado e tenho dois filhos.
        </p>

        <p class="text__p">
         Como engenheiro de software, tenho uma ampla experiência em desenvolvimento de aplicações web, trabalhando em projetos desafiadores em diferentes áreas da tecnologia. Com uma sólida formação acadêmica e anos de experiência prática, eu tenho habilidades em programação, arquitetura de software e análise de requisitos.
        </p>

        <p class="text__p">
         Ao longo da minha carreira, tive oportunidade de apoiar equipes multidisciplinares em projetos complexos, desde a concepção até a entrega final do produto.
        </p>

        <p class="text__p">
          Dei início na área de tecnologia em 2009, no curso de web design (SENAI), em 2013 tive minha primeira experência e oportunidade como
          programador, foi possível aprender muitos conceitos e ter uma visão mais ampla do mercado.
        </p>

        <p class="text__p">
          Sou formado em Sistemas para Internet pela Universidade Nove de Julho,
          tenho experiência com metodologias ágeis de desenvolvimento de software, capacidade de trabalho em equipe e profundo conhecimento em HTML semântico, SEO, CSS, performance web e javascript.

          Tive a oportunidade de atuar diretamente em diversos projetos, boa parte ecommerce nas plataformas Salesforce, VTEX e magento.
        </p>

        <p class="text__p"><strong>Conhecimento Técnico</strong></p>

        <ul>
          <li><strong>Back-End:</strong> (Node e PHP)</li>

          <li>
            <strong>Plataforma de E-commerce</strong> (Salesforce, VTEX e
            Magento)
          </li>

          <li>
            <strong>Experiência:</strong>(git, HTML, css, sass, javascript, jquery, nodejs, vuejs, php e wordpress)
          </li>
          <li><strong>Webservices API</strong> (Rest)</li>
          <li>
            <strong>Banco de Dados</strong> (Modelagem de Dados, MySQL e SQL Server)
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
