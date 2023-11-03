<template>
  <div>
    <GMapMap
      :center="center"
      :zoom="7"
      style="width: 100vw; height: 900px"
    >
    </GMapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
    }
  },
};
</script>
