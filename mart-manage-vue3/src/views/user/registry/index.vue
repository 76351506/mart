<template>
  <div>
    <div>{{ state.num }}</div>
    <div>{{ state.str }}</div>
    <div>{{ state.arr }}</div>
  </div>
</template>

<script lang="ts" setup name="user-registry">
// user-registry
import { ref } from 'vue'
const state = {
  num: ref<number>(123),
  str: ref<string>('123'),
  arr: ref<number[]>([1, 2, 3, 4])
}
</script>

<style></style>
