<template>
  <div class="content-wraper">
    this is map page
    <ul>
      <li
        v-for="address in addressList"
        :key="address.name"
        @click="handlerChange(address.lat, address.lon)"
      >
        {{ address.name }}
      </li>
    </ul>
    <BMap v-if="position.lat" :position="position"></BMap>
  </div>
</template>

<script>
import BMap from "@/components/map";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Map",
  data() {
    return {
      addressList: [
        {
          name: "太原",
          lat: 112.593191,
          lon: 37.869014,
        },
        {
          name: "北京",
          lat: 116.614033,
          lon: 40.088015,
        },
      ],
    };
  },
  components: {
    BMap,
  },
  setup() {
    const position = reactive({});
    const handlerChange = function (lat, lon) {
      position.lat = lat;
      position.lon = lon;
      // console.log(position);
    };
    return {
      position,
      handlerChange,
    };
  },
});
</script>

<style>
.content-wraper {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
