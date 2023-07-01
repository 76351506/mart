<template>
  <div>this is comp page</div>
</template>

<script>
export default {
  name: "Comp",
  props: {
    position: {},
  },
  setup(props) {
    console.log(props.position);
  },
};
</script>

<style></style>
