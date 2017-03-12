<template>
  <div>
    <output>{{ counter }}</output>
    <button @click="inc">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Counter extends Vue {
  counter = 0

  inc () {
    this.counter++
  }
}
</script>