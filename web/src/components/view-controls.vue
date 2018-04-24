<template>
  <div class="view-controls">
    <controls-play-pause />
    <controls-speed />
    <controls-loop/>
  </div>
</template>

<script>
  import ControlsPlayPause from './controls/controls-play-pause';
  import ControlsSpeed from './controls/controls-speed';
  import ControlsLoop from './controls/controls-loop';

  export default {
    name: 'view-controls',
    components: {
      ControlsPlayPause,
      ControlsSpeed,
      ControlsLoop,
    },
  };
</script>

<style lang="scss" scoped>

</style>

