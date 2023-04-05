<template>
   <div class="mainHome">
      <div class="con__mind">
         <h2 class="ws__mind">
            <span>"Trabalha como se tudo dependesse de ti e confia como se tudo dependesse de Deus"</span><strong>Santo Inácio de Loyola</strong>      </h2>
      </div>

      <section>
         <div class="wss__trends">

            <div class="wss__container">
               <mosaic-project-vue
                  :title="'Projetos'"
                  :titleSpan="'Recentes'"
               />
            </div>

            <router-link to="/portfolio">
               <span title="Ver todos os projetos" class="btn__view-all">
                  Ver todos <strong>projetos</strong>
               </span>
            </router-link>

         </div>

         <div class="wss__skill">

         <div class="wss__container">
               <div class="wss__skill-col">
                  <div class="wss__picture">
                     <img
                     :src="require('@/assets/images/wendel-wss.jpeg')"
                     alt="Wendel Foto Skill">
                  </div>

                  <div class="wss__biograf">
                     <h3 class="title">Eu sou Wendel <strong>Sodré</strong></h3>
                     <p>Atuo nas áreas de desenvolvimento web desde 2009. Sou formado em Sistemas para Internet, possuo conhecimentos nas plataformas de e-commerce Salesforce Commerce Cloud, VTEX e magento. Programação de interfaces (front-end e back-end), <router-link to="/sobre" title="Saiba mais">Saiba mais</router-link></p>
                  </div>

               </div>
            </div>
         </div>

      </section>
   </div>
</template>

<script>
   import MosaicProjectVue from '@/components/MosaicProject.vue';

   export default {

      components: {
         MosaicProjectVue
      }
   };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
