<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 id="products-heading" class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover group-hover:opacity-75" />
          </div>
          <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>
              {{ product.name }}
            </h3>
            <p>
              {{ product.price }}
            </p>
          </div>
          <p class="mt-1 text-sm italic text-gray-500">
            {{ product.description }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const products = [
  {
    id: 1,
    name: "Poster for Kvadraturen vgs",
    href: "#",
    price: "",
    description: "Laget i ...",
    imageSrc: require("../assets/Kvadraturen-vgs-poster.jpg"),
    imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Poster for app",
    href: "#",
    price: "",
    description: "For å laste ned app..",
    imageSrc: require("../assets/POSTER.jpg"),
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Focus Carry Case",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc: require("../assets/sprakcafe.png"),
    imageAlt: "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 4,
    name: "Poster for Kvadraturen vgs",
    href: "#",
    price: "",
    description: "Laget i ...",
    imageSrc: require("../assets/Kvadraturen-vgs-poster.jpg"),
    imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 5,
    name: "Poster for app",
    href: "#",
    price: "",
    description: "For å laste ned app..",
    imageSrc: require("../assets/POSTER.jpg"),
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 6,
    name: "Focus Carry Case",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc: require("../assets/sprakcafe.png"),
    imageAlt: "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  // More products...
];

export default {
  setup() {
    return {
      products,
    };
  },
};
</script>
