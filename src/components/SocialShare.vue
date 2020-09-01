<template>
  <div>
    <v-container class="text-center pt-10 pb-10" :fluid="true">
      <v-row align="center" justify="center" class="grey lighten-5" style="height: 300px;">
        <v-col cols="6">
          <v-sheet elevation="12" class="pa-12">
            <span class="mr-2">
              <v-text-field
                :counter="true"
                v-model="shareTwitterText"
                label="tweet"
                required
                :error-messages="tweetError"
              ></v-text-field>
              <v-btn
                color="blue"
                outlined
                large
                @click="shareTwitter"
                class="blue--text text--darken-1 font-weight-bold"
                full-width
              >Share on Twitter</v-btn>
            </span>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SocialShare",
  data: () => {
    return {
      shareTwitterText:
        "Learn about Frontend Security Bingo: https://goo.gl #FrontendSecurity #WebDev",
      tweetError: ''
    };
  },
  methods: {
    shareTwitter() {
      if (this.shareTwitterText.length > 280) {
        this.tweetError = `Your text is longer than 280 characters: ${this.shareTwitterText}`;
        return true;
      } else {
        this.tweetError = '';
        const tweetMsg = encodeURIComponent(this.shareTwitterText);
        const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetMsg}&via=liran_tal`;
        window.open(tweetUrl, "_blank");
      }
    }
  }
};
</script>