<template>
  <div class="flex justify-center m-20 max-w-screen">
    <YouTube src="https://www.youtube.com/watch?v=fdIYVJ13V-U" @ready="onReady" ref="youtube" />
  </div>
</template>

<script>
import YouTube from "vue3-youtube";

export default {
  components: { YouTube },
  methods: {
    onReady() {
      this.$refs.youtube.playVideo();
    },
  },
};
</script>
