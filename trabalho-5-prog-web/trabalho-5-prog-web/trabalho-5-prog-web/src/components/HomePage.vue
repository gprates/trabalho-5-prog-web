<template>
  <div class="d-flex flex-column justify-content-center align-items-center vh-100">
    <h1 class="mb-4">Bem-vindo ao nosso sistema!</h1>
    <div class="d-grid gap-2 col-6 mx-auto">
      <router-link to="/login" class="btn btn-primary">Entrar no sistema</router-link>
      <router-link to="/register" class="btn btn-secondary">Cadastrar novo usuário</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
