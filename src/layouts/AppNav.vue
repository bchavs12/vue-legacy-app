<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Seguradora</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/" exact>Home</v-btn>
    <v-btn text to="/pagamentos">Pagamentos</v-btn>
    <v-btn text to="/historico-solicitacoes">Histórico</v-btn>
    <v-btn text to="/configuracoes">Configuracoes</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppNav",
};
</script>