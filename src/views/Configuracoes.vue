<template>
  <div>
    <h1>Configurações do Sistema</h1>
    <v-form>
      <v-text-field label="Nome da Empresa" />
      <v-switch
        label="Ativar Notifações"
        v-model="notificacoesAtivadas"
      ></v-switch>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "AppConfiguracoes",
  data() {
    return {
      notificacoesAtivadas: true,
    };
  },
};
</script>