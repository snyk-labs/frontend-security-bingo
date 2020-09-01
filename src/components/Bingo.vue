<template>
  <div>
    <v-container>
      <v-col md="6" offset-md="3">
        <v-row align="center" justify="center">
          <v-progress-linear
            background-color="error"
            color="success"
            v-bind:value="bingoItemsToggledPercent"
          ></v-progress-linear>

          <v-row align="center" justify="center">
            <v-chip
              class="ma-2"
              :color="bingoItemsToggledCount > 0 ? 'green' : 'red'"
              text-color="white"
            >{{bingoItemsToggledCount}}</v-chip>good practices
          </v-row>

          <v-row align="center" justify="center">
            <v-btn class="ma-2" color="blue" dark>
              help others improve too
              <v-icon dark>mdi-twitter</v-icon>
            </v-btn>
          </v-row>
        </v-row>
      </v-col>

      <v-row class="mb-10">
        <v-col v-for="(item, index) in bingoItems" :key="index" cols="12" md="3" align="center">
          <v-card
            :ripple="false"
            :title="item.title"
            v-on:click="updateBingoCount({id: index})"
            class="ma-4 pa-4 d-flex flex-column"
            outlined
            :raised="!(!!bingoItemsToggle[index])"
            tile
            :color="!bingoItemsToggle[index] ? 'gray' : 'green lighten-4' "
            hover
            height="100%"
          >
            <v-card-text>
              <h1 class="text--primary font-weight-regular mb-2" style="line-height: 32px">{{item.text}}</h1>
              <p>{{item.category}}</p>
            </v-card-text>

            <v-spacer></v-spacer>
            <v-card-actions>
              <v-row align="center" justify="center">
                <v-btn
                  color="purple"
                  @click="gotoWebsite({url: item.url})"
                  dark
                  center
                >Learn More</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bingoItemsToggle: {},
      bingoItemsToggledPercent: 0,
      bingoItemsToggledCount: 0,
      bingoItems: [
        {
          directive: "code",
          text: "I follow framework security best practices",
          category: "framework best practices",
          url: "https://snyk.io/blog/angular-security-best-practices/"
        },
        {
          directive: "",
          text: "I use a security linter in my IDE",
          category: "tools",
          url:
            "https://snyk.io/blog/how-to-maintain-npm-dependencies-in-your-project/"
        },
        {
          directive: "",
          text: "I test my website for known JavaScript vulnerabilities",
          category: "tools",
          url:
            "https://snyk.io/blog/test-website-security-with-webpagetest-integration/"
        },
        {
          directive: "",
          text: "I set HTTP header Content-Security-Policy",
          category: "http security header",
          url: "https://developers.google.com/web/fundamentals/security/csp"
        },
        {
          directive: "",
          text: "I set HTTP header Strict-Transport-Security",
          category: "http security header",
          url:
            "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"
        }
      ]
    };
  },
  methods: {
    updateBingoCount: function({ id }) {
      this.bingoItemsToggle[id] = Number(!this.bingoItemsToggle[id]);

      let totalItems = this.bingoItems.length;
      let totalItemsToggled = 0;
      for (const itemValue of Object.values(this.bingoItemsToggle)) {
        if (itemValue === 1) {
          totalItemsToggled++;
        }

        this.bingoItemsToggledPercent = Math.floor(
          (totalItemsToggled / totalItems) * 100
        );
      }

      this.bingoItemsToggledCount = totalItemsToggled;
    },
    gotoWebsite: function({ url }) {
      window.open(url, "_blank");
    }
  }
};
</script>