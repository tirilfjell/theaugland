<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-gray-100 h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl italic underline">Portfolio</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Samling av atrikler, undersøkelser og annet innhold jeg har produsert.</p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div data-aos="fade-up" data-aos-duration="3000" v-for="post in posts" :key="post.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0 bg-white">
            <img class="h-64 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a :href="post.category.href" target="_blank" class="hover:underline">
                  {{ post.category.name }}
                </a>
              </p>
              <a :href="post.href" target="_blank" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const posts = [
  {
    title: "App for Kvadraturen vgs",
    href: "https://www.kvadraturenvgsapp.com/",
    category: { name: "Apputvikling", href: "https://www.kvadraturenvgsapp.com/" },
    description: "I sommer var jeg prosjektleder, samt innholdsprodusent for en skole app for kvadraturen vgs.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: require("../assets/app.png"),
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "E-magasin for Kvadraturen vgs",
    href: "https://readymag.com/u2386664963/3167700/",
    category: { name: "E-magasin", href: "https://readymag.com/u2386664963/3167700/" },
    description:
      "Da jeg skulle velge hvilken VGS-linje jeg ville gå på, så var jeg usikker på hva jeg ville. Jeg er interessert i elektronikk og hadde derfor lyst til å ha elektrofag og lære mer om det, men samtidig så hadde jeg også lyst til å kunne ha de tunge realfagene slik at jeg fikk valgfrihet på høyere utdanning. Derfor følte jeg at ingeniørveien var den perfekte linjen for meg.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: require("../assets/Kvadraturen-vgs-forside_Side_1.jpg"),
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Oda Sofie (19) er fisker: – Kvinner blir ikke tatt seriøst",
    href: "https://www.nrk.no/sorlandet/oda-sofie-_19_-er-fisker_-_-kvinner-blir-ikke-tatt-seriost-1.14409144",
    category: { name: "Artikel", href: "https://www.nrk.no/sorlandet/oda-sofie-_19_-er-fisker_-_-kvinner-blir-ikke-tatt-seriost-1.14409144" },
    description: "Elevrådsleder Christine, Christines beskjed til medelevene: håper dere ser lyset i enden av tunnelen! Hvordan er det egentlig å være elevrådsleder under en pandemi? Det er litt krevende. ",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: require("../assets/odasofie.jpg"),
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Før kjempet vi alene med problemene våre",
    href: "https://www.nrk.no/sorlandet/_-for-kjempet-vi-alene-med-problemene-vare-1.14427153",
    category: { name: "Artikel", href: "https://www.nrk.no/sorlandet/_-for-kjempet-vi-alene-med-problemene-vare-1.14427153" },
    description:
      "To bidrag fra Kvadraturen vgs kom på pallen i årets twitternovelle konkurranse. Hvert år arrangerer mållaget en konkurranse for videregående skoler i Kristiansand. Den går ut på å skrive en novelle i form av en mikrotekst på twitter. Deretter kårer en jury de 3 beste bidragene som vinner en pengepremie, 1000 kr for 1. plass, 600 kr for 2. plass og 300 kr for 3. plass. ",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: require("../assets/atdhegashi.jpg"),
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "GLADIATORS VS VIKINGS",
    href: "#",
    category: { name: "Artikel", href: "#" },
    description:
      "Kvadraturen elev Odd Kristoffer Sundsethvik spiller amerikansk fotball, og på søndag spilte det lokalet laget Gladiators den siste kampen for sesongen. Gladiators og Oslo Vikings er for tiden ansett som de to beste lagene nasjonalt, og kampen avgjorde hvem som ble seriemestere. Dessverre for de lokale heltene så gikk det ikke veien, til tross for seier etter seier tidligere i sesongen.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: require("../assets/artikel-gladiators.png"),
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Kollegasamarbeid",
    href: "https://readymag.com/u2386664963/3181437/",
    category: { name: "Artikel", href: "https://readymag.com/u2386664963/3181437/" },
    description: "Kollegabesøk er viktig for egenutvikling, og det kan medføre at man blir tryggere på seg selv. Det skaper også et godt samarbeid med kollegaer, der man ser hva slags kompetanse de innehar.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: require("../assets/kollegasamarbeid.png"),
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Språk-Kafè",
    href: "#",
    category: { name: "Event", href: "#" },
    description: "Har du lyst til å bli bedre til å snakke norsk daglitale? Kom på språk-kafè",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: require("../assets/sprakcafe.png"),
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Spørreundersøkelse",
    href: "#",
    category: { name: "Undersøkelse", href: "#" },
    description: "Kvadraturen videregående skole størst på helse og teknologi. I arbeidet mot oppstarten av skoleåret 2022/2023 ønsker vi din tilbakemelding på høsten 2021.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: require("../assets/undersokelse.png"),
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default {
  setup() {
    return {
      posts,
    };
  },
};
</script>
