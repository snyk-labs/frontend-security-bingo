<template>
  <div>
    <v-container>
      <v-col md="6" offset-md="3">
        <v-row align="center" justify="center">
          <v-progress-linear
            color="purple"
            height="12"
            v-bind:value="bingoItemsToggledPercent"
          ></v-progress-linear>

          <v-row align="center" justify="center">
            <v-chip
              class="ma-2"
              :color="bingoItemsToggledCount > 0 ? 'purple' : 'pink'"
              text-color="white"
            >{{bingoItemsToggledCount}}</v-chip>good practices
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
            :color="!bingoItemsToggle[index] ? 'gray' : 'purple lighten-4' "
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

       <v-row align="center mb-5" justify="center">
        <v-btn @click="shareWithYourFriends" class="ma-2" color="blue" dark>
          <v-icon dark>mdi-twitter</v-icon>
          share with your friends
        </v-btn>
      </v-row>

      <hr />
      <v-row class="text-center">
        <v-col class="mb-5 mt-5" cols="12">
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
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security"
              class="subheading mx-3"
              target="_blank"
            >MDN Web Security</a>
            <a
              href="https://www.mydevsecops.io/the-secure-developer-podcast"
              class="subheading mx-3"
              target="_blank"
            >The Secure Developer podcast</a>
            <a
              href="https://www.mydevsecops.io/content"
              class="subheading mx-3"
              target="_blank"
            >MyDevSecOps Community</a>
          </v-row>

          <v-row justify="center">
            <a
              href="https://cheatsheetseries.owasp.org/Glossary.html"
              class="subheading mx-3"
              target="_blank"
            >OWASP Cheat Sheet Series</a>
            <a
              href="https://github.com/qazbnm456/awesome-web-security"
              class="subheading mx-3"
              target="_blank"
            >Curated Awesome Web Security resources</a>
            <a
              href="https://portswigger.net/web-security"
              class="subheading mx-3"
              target="_blank"
            >PortSwigger's Web Security Academy</a>
          </v-row>

          
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
        },
        {
          directive: "",
          text: "I set HTTP header Strict-Transport-Security",
          category: "http security header",
          url:
            "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"
        },
        {
          directive: "",
          text: "I set HTTP header Strict-Transport-Security",
          category: "http security header",
          url:
            "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"
        },
        {
          directive: "",
          text: "I learn about web security",
          category: "security learning",
          url:
            "https://developer.mozilla.org/en-US/docs/Web/Security"
        },
        {
          directive: "",
          text: "I practice security education",
          category: "security learning",
          url:
            "https://www.hacksplaining.com/lessons"
        },
        {
          directive: "",
          text: "I practice Capture The Flag security games",
          category: "security learning",
          url:
            "https://ctf.hacker101.com/"
        },
        {
          directive: "",
          text: "I practice DevSecOps",
          category: "tools",
          url:
            "https://snyk.io/devsecops/technology/"
        },
        {
          directive: "",
          text: "I understand Cross-site Scripting vulnerabilities in frontend apps",
          category: "vulnerabilities",
          url:
            "https://snyk.io/learn/cross-site-scripting/"
        },
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

      if (this.bingoItemsToggledPercent === 100) {
        this.$confetti.start();
      } else {
        this.$confetti.stop();
      }

      this.bingoItemsToggledCount = totalItemsToggled;
    },
    gotoWebsite: function({ url }) {
      window.open(url, "_blank");
    },
    shareWithYourFriends: function() {
      const tweetText = 'I played Frontend Security Bingo and you can too at https://frontend-security-bingo.netlify.app/'
      const tweetMsg = encodeURIComponent(tweetText);
      const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetMsg}&via=liran_tal`;
      window.open(tweetUrl, "_blank");
    }
  }
};
</script>