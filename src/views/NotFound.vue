<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <v-icon>mdi-alert-circle-outline</v-icon>
        <h1>404 - Página não Encontrada</h1>
        <p>Desculpe, mas a página que você está procurando não existe.</p>
        <v-btn>Voltar a Página Inicial</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
h1 {
  margin-top: 16px;
}
</style>