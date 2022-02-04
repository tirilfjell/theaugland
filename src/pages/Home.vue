<template>
  <div class="bg-green-900 overflow-hidden max-w-screen">
    <Nav class="sticky top-0 z-20" />
    <Header />
    <AboutMe class="sm:mt-20 md:mt-20 lg:mt-10" />
    <ImageSlider class="overflow-hidden max-w-screen" />
    <Artikel />
    <Images class="overflow-hidden max-w-screen" />
    <Form />
    <Footer />
  </div>
</template>

<script>
import {} from "vue";

import Header from "../components/Header";
import Nav from "../components/Nav.vue";
import Form from "../components/Form.vue";
import AboutMe from "../components/AboutMe.vue";
import ImageSlider from "../components/ImageSlider.vue";
import Footer from "../components/Footer.vue";
import Artikel from "../components/Artikel.vue";
import Images from "../components/Images.vue";

export default {
  components: {
    Header,
    Nav,
    Form,
    Footer,
    AboutMe,
    ImageSlider,
    Artikel,
    Images,
  },
  setup() {
    return {};
  },
};
</script>
