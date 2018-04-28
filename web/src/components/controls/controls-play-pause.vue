<template>
  <div class="controls-play-pause">
    <button class="btn" @click="playPause">
      {{ isPlaying ? 'Pause' : 'Play' }}
    </button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'controls-play-pause',
    computed: {
      ...mapGetters([
        'isPlaying',
      ]),
    },
    methods: {
      ...mapActions([
        'playPause',
      ]),
    },
  };
</script>

<style lang="scss" scoped>
  .controls-play-pause{

  }
</style>
