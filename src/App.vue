<template lang="pug">
v-app
  v-app-bar(
    app
    color="primary"
    dark
  )
    v-container(
    ).py-0.fill-height
      v-btn(
        text
      ) Kate Social

      v-spacer

      v-responsive
        v-avatar(
          class="mr-10"
          color="grey darken-1"
          size="32"
        ).float-right

  v-main.grey.lighten-3
    v-container
      v-row
        v-col(
          cols="2"
        )
          v-sheet(rounded="lg")
            v-list(
              color="transparent"
            )
              v-list-item(v-for="menu in menuList" link)
                v-list-item-content
                  v-list-item-title {{menu.text}}

        v-col
          router-view

</template>

<script>
export default {
  name: 'App',

  data: () => ({
    menuList: [
      {text:"My Profile"},
      {text:"Messages"}
    ]
  }),
};
</script>
