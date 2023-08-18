<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="Login">
            <div>
                <input type="text" placeholder="Email" v-model="email"/>
            </div>
            <div>
                <input type="password" placeholder="Password" v-model="password"/>
            </div>
            <div>
                <p v-if="errMsg" class="error">{{ errMsg }}</p>
            </div>
            <input type="submit" value="Login"/>
            <p>
                Need an account?
                <router-link to="/register">
                    Register Here
                </router-link>
            </p>
            <p @click="loginWithGA">
                Login With Google Account? 
                <router-link to="#">
                    Login
                </router-link>
            </p>
        </form>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { loginFirebase, logInGoogleFirebase } from "../../sdk/firebase";
    import { useRouter } from "vue-router";

    const email = ref("");
    const password = ref("");
    const errMsg = ref("");

    const router = useRouter();

    const Login = async () => {
            let data: any = await loginFirebase(email.value, password.value);
            if (data?.status) {
                alert('Successfully Login!');  
                router.push('/');
            } else {
                alert('Login Failed!');
                errorLogin(data?.data);
            }
    };

    const errorLogin = (error:any) => {
        switch (error.code) {
            case "auth/invalid-email":
                return errMsg.value = "Invalid email!";
            case "auth/user-not-found":
                return errMsg.value = "No account with that email was found!";
            case "auth/wrong-password":
                return errMsg.value = "Incorrect password!"
            default: 
                return errMsg.value = "Email or password is incorrect!";
        }
    };

    const loginWithGA = () => {
        logInGoogleFirebase();
    };
</script>