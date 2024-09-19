<template>
  <v-container min-height="100vh" class="d-flex justify-center align-center">
    <v-card
      class="authentication-body rounded-xl pa-5"
      color="primary"
      min-width="380"
      min-height="520"
      elevation="1"
    >
      <v-card-text v-if="errorMessage" class="text-center">
        {{ errorMessage }}
      </v-card-text>
      <v-card-item>
        <div class="text-h5 font-weight-bold text-center mt-10 mb-10">
          Log In
        </div>
        <v-form validate-on="submit lazy" @submit.prevent="login">
          <v-text-field
            label="E-mail Address"
            type="email"
            bg-color="#f3f3f3"
            v-model="email"
          >
          </v-text-field>

          <v-text-field
            label="Password"
            type="input"
            bg-color="#f3f3f3"
            v-model="password"
          ></v-text-field>

          <v-btn type="submit" block color="secondary" size="large">
            Submit
          </v-btn>
        </v-form>
        <v-card-text
          class="cursor-pointer text-center mt-2"
          @click="$router.push('/sign-up')"
          ><strong>SIGN UP </strong> If you don't have account.</v-card-text
        >
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script setup>
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log("User logged in successfully");
    router.push("/home");
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>
