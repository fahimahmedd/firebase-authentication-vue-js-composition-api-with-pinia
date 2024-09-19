<template>
  <v-container min-height="100vh" class="d-flex justify-center align-center">
    <v-card
      class="authentication-body rounded-xl pa-5"
      color="#f7f7f7"
      min-width="380"
      min-height="520"
      elevation="4"
    >
      <v-card-item>
        <v-card-text v-if="errorMessage" class="text-center">
          {{ errorMessage }}
        </v-card-text>
        <div class="text-h5 font-weight-bold text-center mt-10 mb-10">
          Sign UP
        </div>
        <v-form validate-on="submit lazy" @submit.prevent="register">
          <v-text-field
            v-model="email"
            label="E-mail Address"
            type="email"
            bg-color="#f3f3f3"
          >
          </v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="input"
            bg-color="#f3f3f3"
          ></v-text-field>

          <v-btn block color="primary" type="submit" size="large">
            Submit
          </v-btn>
        </v-form>

        <v-card-text
          @click="$router.push('/')"
          class="cursor-pointer text-center mt-2"
          ><strong>LOG IN </strong> If you already have account.</v-card-text
        >
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "@/firebase";

const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const register = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    router.push("/home");

    console.log("User signed up successfully");
  } catch (error) {
    errorMessage.value = error.message;
  }

  // router.push("/");
};
</script>
