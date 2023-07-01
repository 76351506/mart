<template>
  <div class="map-wraper" ref="mapWraper">this is bmap</div>
</template>

<script>
/* eslint-disable no-undef */
import { defineComponent, onMounted, reactive, ref, watch } from "vue";
export default defineComponent({
  name: "BMap",
  props: {
    position: {
      default: {
        lat: 116.303084,
        lon: 39.992147,
      },
    },
  },
  setup(props) {
    let position = reactive(props.position);
    let mapWraper = ref(null);
    let map = null;
    let init = () => {
      map = new BMapGL.Map(mapWraper.value);
      const address = new BMapGL.Point(position.lat, position.lon);
      map.centerAndZoom(address, 11);
    };
    // 监听一个属性没有监听到
    // 通过监听整个props的变化来重新设置地图
    watch(props, (newProps) => {
      position = newProps.position;
      init();
    });
    onMounted(() => {
      init();
    });
    return {
      map,
      init,
      mapWraper,
    };
  },
});
</script>

<style>
.map-wraper {
  position: absolute;
  top: 200px;
  bottom: 44px;
  width: 100%;
}
</style>
