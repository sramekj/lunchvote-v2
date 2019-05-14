<template>
  <v-app dark>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>Lunchvote &copy; {{ version }} by Jan Sramek - 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import pkg from '@/package'

export default {
  data() {
    return {
      fixed: false
    }
  },
  computed: {
    version: () => {
      return pkg.version
    }
  }
}
</script>

<style></style>
