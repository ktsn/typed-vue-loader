<template>
  <div>
    <p class="foo">{{ message }}</p>
    <counter></counter>
    <div>
      <p>This is static</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Counter from './Counter.vue'

export default Vue.extend({
  components: {
    Counter
  },

  props: {},

  data () {
    return {
      message: 'Hello typed template!'
    }
  }
})
</script>

<style scoped>
.foo {
  font-size: 24px;
  color: blue;
}
</style>