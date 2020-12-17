<template lang="pug">
div
  v-card(
    elevation="2"
    outlined
    tile
  ).d-flex.flex-column
    div
      v-img(
        min-height="250"
        min-width="150"
        max-height="250"
        max-width="150"
        src="https://picsum.photos/id/11/500/300"
      )
      v-btn(
        color="gray"
      ) Edit

  v-card
    label ID: {{id}}
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {
            id: 0
        }
    },
    mounted() {
        this.id = this.$route.params.id
    }
}
</script>

<style>

</style>