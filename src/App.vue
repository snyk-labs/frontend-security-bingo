<template>
  <v-app>
    <v-app-bar app color="#5b3fa4" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Snyk logo"
          src="https://res.cloudinary.com/snyk/image/upload/v1537345891/press-kit/brand/avatar-transparent.png"
          transition="scale-transition"
          width="60"
        />
      </div>

      <div style="margin-left: -50px;" class="d-flex align-center">
        <v-img
          alt="Snyk logo"
          src="https://res.cloudinary.com/snyk/image/upload/v1537345904/press-kit/brand/wordmark-white.png"
          transition="scale-transition"
          width="160"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://snyk.io/product/open-source-security-management/" target="_blank" text>
        <span class="mr-2">Do Open Source Securely</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-row class="text-center">
        <v-col>
          <h1 class="display-2 font-weight-bold mb-3">Welcome to Frontend Security Bingo</h1>

          <p class="subheading font-weight-regular">
            Are you following security practices when developing and deploying your frontend projects?
          </p>
        </v-col>
      </v-row>
      <HelloWorld v-show="intro" @onReady="beginGame" />
      <Bingo v-show="!intro" />

      <SocialShare />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Bingo from "./components/Bingo";
import SocialShare from "./components/SocialShare";

export default {
  name: "App",

  components: {
    HelloWorld,
    Bingo,
    SocialShare
  },

  data() {
    return {
      intro: true
    }
  },

  methods: {
    beginGame: function() {
      this.intro = false
    }
  }
};
</script>
