<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2 class="headline font-weight-bold mb-3">How to win?</h2>

        <p class="subheading font-weight-regular">
          Go ahead and tick all the boxes below for all the practices you are following.
          <br/>
          Did you catch them all? you win!
        </p>

        <div class="my-2">
          <v-btn @click="ready" x-large color="success" dark>Let's play!</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    ready() {
      this.$emit('onReady')
    }
  }
};
</script>
