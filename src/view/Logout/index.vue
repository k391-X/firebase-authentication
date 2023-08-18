<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useRouter, useRoute } from 'vue-router'; 

    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
        console.log('location Logout');
        localStorage.clear();

        if (route.query.path !== '/login')
            router.push("/login");
    });
</script>