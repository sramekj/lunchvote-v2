<template>
  <v-layout column>
    <v-flex v-for="restaurant in restaurants" :key="restaurant.id">
      <Restaurant
        :id="restaurant.id"
        :title="restaurant.name"
        :link="restaurant.link"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import Restaurant from '@/components/restaurant-menu'
import { mapGetters } from 'vuex'

export default {
  components: {
    Restaurant
  },
  computed: {
    ...mapGetters({ restaurants: 'restaurants/getRestaurants' })
  }
}
</script>

<style></style>
