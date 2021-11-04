<template>
  <div>
    <button @click='showBird'>Scraping</button>
    <br>
    <img v-if="src" :src="src">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(){
    return {
      src: ''
    }
  },
  // mounted: {
  //   async test() {
  //     const res = await this.$axios.get('api')
  //     console.log('res', res)
  //   }
  // },

  methods: {
    async showBird() {
      this.src = await this.$axios.$get('api/get_image')
    },
  }
})
</script>
