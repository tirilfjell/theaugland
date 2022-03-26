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
    description:
      "Sommer 2021 var jeg prosjektleder og innholdsprodusent for en oppstartsapp som ble lansert for skolen. Målet med appen var å fungere som et hjelpeverktøy og en informasjonsarena for nye elever og ansatte gjennom oppstarten av skoleåret. Mitt ansvar var innhenting og filtrering av nødvendig informasjon, i tillegg til layout og design.",
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
      "Jeg fikk i oppdrag om å lage noe som kunne fortelle lokale politikere om viktigheten av to utdanningstilbud på skolen. Målet var å få frem elevenes stemmer og gi et representativt innblikk i skolen, samtidig som budskapet kom frem på en visuell og gjennomført måte. Jeg valgte derfor å lage dette e-magasinet i programmet «readymag».",
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
    description: "En av sakene jeg lagde under praksisperioden min i NRK Sørlandet. Saken omhandlet hvordan det er å arbeide som kvinnelig fisker. I sammenheng med denne saken mottok jeg og en medstudent diplom fra skolen, for å ha produsert «journalistikk som betyr noe». ",
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
    description: "Dette er en annen sak som jeg publiserte for NRK Sørlandet. Her så jeg nærmere på de forebyggende tiltakene som ble gjort for å motarbeide den lokale ungdomskriminaliteten.  ",
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
    title: "Gladiators vs Vikings",
    href: "https://kvadraturen.vgs.no/aktuelt/gladiators-vs-vikings.39220.aspx",
    category: { name: "Artikel", href: "https://kvadraturen.vgs.no/aktuelt/gladiators-vs-vikings.39220.aspx" },
    description: "I løpet av min tid på Kvadraturen vgs har jeg skrevet flere små artikler for skolens hjemmeside. Et eksempel på dette ser du her, av en elev som deltok i NM i amerikansk fotball. ",
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
    description: "De ansatte på Kvadraturen vgs skulle gjennomføre et kollegasamarbeid, og i den sammenheng lagde jeg en manual. Den inneholder mål, begrunnelse, kommentarer og skjema som er relevant til gjennomførelsen av kollegasamarbeidet. Denne manualen ble sendt til alle ansatte. ",
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
    title: "Språk-Kafé",

    category: { name: "Event" },
    description: "På skolen er det mange arrangementer og aktiviteter, som jeg har ansvar for å opplyse elevmassen om. Så det er vanlig at jeg lager diverse plakater/informasjonsskriv som deles rundt på skolen og på sosiale medier. Dette er et eksempel på det.",
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
    title: "Spørreundersøkelse ",

    category: { name: "Undersøkelse" },
    description:
      "Ledelsen på skolen ønsket tilbakemeldinger på oppstarten 2021. Etterspørselen var å lage en undersøkelse med layout som reflekterte skolen. Jeg utformet en spørreundersøkelse i programmet «typeform», som lot meg lage et eget personalisert design som ga mottakerne en bedre opplevelse. Den inneholdt blant annet minneverdige bilder og korte videoer fra oppstarten. ",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: require("../assets/undersokelse.png"),
    readingTime: "11 min",
    author: {
      name: "",
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
