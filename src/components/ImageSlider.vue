<template>
  <div class="">
    <div class="flex justify-center">
      <h1>Portfolio</h1>
    </div>
    <div class="flex justify-center max-w-screen">
      <div class="w-5/6 md:w-3/4 lg:w-1/2">
        <carousel :items-to-show="1.5" :wrap-around="true">
          <slide :key="1"> <img class="p-1 hover:p-7 lg:p-3" src="../assets/Kvadraturen-vgs-poster.jpg" alt="" /> </slide>
          <slide :key="2"> <img class="p-1 lg:p-3" src="../assets/Kvadraturen-vgs-forside_Side_1.jpg" alt="" /> </slide>
          <slide :key="3"> <img class="p-1 lg:p-3" src="../assets/POSTER.jpg" alt="" /> </slide>
          <slide :key="4"> <img class="p-1 lg:p-3" src="../assets/sprakcafe.png" alt="" /> </slide>
          <slide :key="5"> <img class="p-1 lg:p-3" src="../assets/app.png" alt="" /> </slide>
          <slide :key="6"> <img class="p-1 lg:p-3" src="../assets/kollegabesok.png" alt="" /> </slide>
          <slide :key="7"> <img class="p-1 lg:p-3" src="../assets/sporreundersokelse.png" alt="" /> </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    return {};
  },
};
</script>
