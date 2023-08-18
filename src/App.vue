<template>
  <div class="container">
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/hello-world"> HelloWorld </router-link> |
      <router-link to="/about"> About </router-link> |
      <router-link to="/login"> Login </router-link> |
      <router-link to="/register"> Register </router-link> |      
    </nav>  
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import { onBeforeMount } from 'vue';
  // import { useRouter, useRoute } from 'vue-router';

  // const router = useRouter();
  // const route = useRoute();

  onBeforeMount(() => {

  });

  
</script>
