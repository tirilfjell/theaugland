<template>
  <div class="h-screen w-screen coverPhoto w-full h-full bg-cover bg-no-repeat pt-10 bg-gradient-to-r from-blue-500 to-green-600 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div class="lg:py-24">
            <a href="#" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
              <span class="ml-3 mr-3 text-sm">Available for hire</span>
              <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-blue-500 to-green-600 rounded-full">February 2022</span>
            </a>
            <h1 class="mt-4 text-7xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-8xl lg:mt-6 xl:text-8xl">Thea Ugland</h1>
            <h2 class="mt-10 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 sm:pb-5">content creator</span>
              <span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500 sm:pb-5">communication consultant</span>
              <span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 sm:pb-5">marketing</span>
              <span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-600 sm:pb-5">social media</span>
            </h2>
          </div>
        </div>
        <div class="items-stretch self end lg:mt-200 sm:-mb-20 lg:mr-30 lg:relative">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img class="lg:absolute lg:top-200 lg:top-24 lg:bottom-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="../assets/thea5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  setup() {},
};
</script>

<style scoped></style>
