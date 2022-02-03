<template>
  <div class="w-96">
    <carousel :items-to-show="1.5">
      <slide v-for="slide in 10" :key="slide"> <img src="../assets/thea5.png" alt="" /> </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const slides = [
  {
    id: 1,
    imageSrc: require("../assets/POSTER.jpg"),
    imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    image: require("../assets/Kvadraturen-vgs-poster.jpg"),
    imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 3,
    image: require("../assets/Kvadraturen-vgs-poster.jpg"),
    imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  },
];

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    return {
      slides,
    };
  },
};
</script>
