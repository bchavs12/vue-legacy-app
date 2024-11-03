<template>
  <v-footer app color="primary" dark>
    <v-col class="text-center white--text">
      &copy; {{ new Date().getFullYear() }}
      Sistema Jurídico da Seguradora
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>