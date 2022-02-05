<template>
  <v-row justify="center" align="center">
    {{ $store.state.pagesData.aboutPage && $store.state.pagesData.aboutPage.text }}

    <img
      :src="$store.state.pagesData.aboutPage && $store.state.pagesData.aboutPage.image"
      alt=""
    />
  </v-row>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>
