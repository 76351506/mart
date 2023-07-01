<template>
  <header class="layout-header">
    <slot name="head">123</slot>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutHeader'
})
</script>
