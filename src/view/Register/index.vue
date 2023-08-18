<template>
    <div class="register">
        <h1>Register</h1>
        <form @submit.prevent="Register">
            <div>
                <input type="text" placeholder="Email" v-model="email"/>
            </div>
            <div>
                <input type="password" placeholder="Password" v-model="password"/>
            </div>
            <div>
                <input type="submit" value="Register"/>
            </div>
            <p>
                Have an account?
                <router-link to="/login">
                    Login Here
                </router-link>
            </p>
        </form>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'; 
    import { useRouter } from 'vue-router';
    import { registerFirebase } from "../../sdk/firebase";

    const email = ref("");
    const password = ref("");

    const router = useRouter();

    const Register = async () => {
        let status: any = await registerFirebase(email.value, password.value);
        if (status) {
            alert('Successfully registered!');  
            router.push('/login');
        } else {
            alert('Register Failed!');
        }
    }
</script>