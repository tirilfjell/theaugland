<template>
  <div class="overflow-hidden max-w-screen">
    <div class="flex justify-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-white my-10 sm:text-4xl italic underline">Plakater</h2>
    </div>
    <div class="flex justify-center max-w-screen">
      <div class="w-5/6 md:w-3/4 lg:w-1/2">
        <carousel :items-to-show="1.5" :wrap-around="true">
          <slide :key="1"> <img class="p-1 hover:p-7 lg:p-3" src="../assets/Kvadraturen-vgs-poster.jpg" alt="" /> </slide>
          <slide :key="2"> <img class="p-1 lg:p-3" src="../assets/POSTER.jpg" alt="" /> </slide>

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
  data() {
    return {
      showPreview: false,
    };
  },
  setup() {
    return {};
  },
};
</script>
