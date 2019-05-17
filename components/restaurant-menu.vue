<template>
  <v-layout row>
    <h1>
      {{ title }}
    </h1>
    <v-flex
      v-for="menu in menus.daily_menus"
      :key="menu.daily_menu.daily_menu_id"
    >
      Valid from:
      {{ new Date(menu.daily_menu.start_date).toLocaleDateString() }}
      To:
      {{ new Date(menu.daily_menu.end_date).toLocaleDateString() }}
      <v-layout column>
        <v-flex v-for="dish in menu.daily_menu.dishes" :key="dish.dish.dish_id">
          <v-card>
            {{ dish.dish.name }}
          </v-card>
          {{ dish.dish.price }}
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Restaurant',
  props: {
    id: { type: String, default: '' },
    title: { type: String, default: '' },
    link: { type: String, default: '' }
  },
  computed: {
    ...mapGetters({ menus: 'menus/getMenus' })
  },
  created() {
    this.loadMenus(this.id)
  },
  methods: {
    ...mapActions({ loadMenus: 'menus/loadMenusForId' })
  }
}
</script>

<style lang="scss" module></style>
