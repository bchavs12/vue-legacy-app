<template>
  <v-app>
    <app-nav />
    <main-content />
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from "./layouts/AppFooter.vue";
import AppNav from "./layouts/AppNav.vue";
import MainContent from "./layouts/MainContent.vue";

export default {
  name: "App",
  components: {
    AppNav,
    MainContent,
    AppFooter,
  },
};
</script>
