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
import Component from 'vue-class-component'
import Counter from './Counter.vue'

@Component({
  components: {
    Counter
  }
})
export default class App extends Vue {
  message = 'Hello typed template!'
}
</script>

<style scoped>
.foo {
  font-size: 24px;
  color: blue;
}
</style>