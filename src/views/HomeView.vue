<template>
  <div class="container">
    <div class="welcome-card text-center">
      <h1 class="mb-4">¡Bienvenido!</h1>
      <p class="mb-4">Gracias por visitar nuestra página. Esperamos que tengas una gran experiencia.</p>
      <a href="/auth" class="btn btn-primary">Cerra Sesión</a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
<style scoped>
  .welcome-card {
      max-width: 500px;
      margin: auto;
      margin-top: 10%;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      background-color: white;
    }
</style>
