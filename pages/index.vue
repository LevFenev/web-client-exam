<template>
  <v-row justify="center" align="center">
    {{$store.state.pagesData.homePage && $store.state.pagesData.homePage.text}}

    <img :src="$store.state.pagesData.homePage && $store.state.pagesData.homePage.image" alt="">
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
