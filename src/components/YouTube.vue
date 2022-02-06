<template>
  <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:gap-x-2">
    <YouTube src="https://www.youtube.com/watch?v=C97A9JVy3d4" @ready="onReady" ref="youtube" />
    <YouTube src="https://www.youtube.com/watch?v=oBRILUkPIJs" @ready="onReady" ref="youtube" />
    <YouTube src="https://www.youtube.com/watch?v=9m4VCQwGdkc" @ready="onReady" ref="youtube" />
    <YouTube src="https://www.youtube.com/watch?v=5O0sg1S7UYY" @ready="onReady" ref="youtube" />
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
