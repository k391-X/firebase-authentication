<template>
  <div class="container">
    <nav v-if="auth">
      <router-link to="/"> Home </router-link> |
      <router-link to="/hello-world"> HelloWorld </router-link> |
      <router-link to="/about"> About </router-link> |
      <router-link to="/register"> Register </router-link> |  
      <router-link to="/logout"> Logout </router-link>    
    </nav>  
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';

  const auth = ref<boolean>(false);
  // import { useRouter, useRoute } from 'vue-router';

  // const router = useRouter();
  // const route = useRoute();

  onBeforeMount(() => {
    if (localStorage.getItem("user")) {
      auth.value = true;
    } 
  });

  
</script>
