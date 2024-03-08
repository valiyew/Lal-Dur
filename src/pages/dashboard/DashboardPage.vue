<template>
  <div>
    <h1>Dashboard Page</h1>

    <router-link to="/login">
      <Button>Login</Button>
    </router-link>

    <router-link to="/register">
      <Button>Register</Button>
    </router-link>
  </div>
</template>

<script setup>
import Button from "primevue/button";
</script>

<style scoped></style>
