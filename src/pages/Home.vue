<template>
  <Nav class="sticky top-0 z-20" />
  <div class="bg-green-900 max-w-screen overflow-hidden">
    <Header id="home" />
    <AboutMe id="aboutme" class="sm:mt-20 md:mt-20 lg:mt-10" />
    <ImageSlider id="portfolio" />
    <Artikel />
    <Images />
    <Form id="contact" />
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
