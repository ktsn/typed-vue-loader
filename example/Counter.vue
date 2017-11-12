<template>
  <div>
    <output>{{ counter }}</output>
    <button @click="inc(1)">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {},

  data () {
    return {
      counter: 0
    }
  },

  methods: {
    inc (amount: number): void {
      this.counter += amount
    }
  }
})
</script>