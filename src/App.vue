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

      <div class="d-flex align-center">
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
      <HelloWorld />
      <Bingo />

      <hr />
      <v-row class="text-center">
        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-3">What's next?</h2>
          <v-row justify="center">
            <a
              href="https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/"
              class="subheading mx-3"
              target="_blank"
            >OWASP Top 10</a>
            <a
              href="https://snyk.io/security-resources/"
              class="subheading mx-3"
              target="_blank"
            >Snyk's Security Resources for Developers</a>
          </v-row>
        </v-col>
      </v-row>

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

  data: () => ({
    //
  })
};
</script>
