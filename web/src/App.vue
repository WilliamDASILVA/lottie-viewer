<template>
  <div id="app">
    <view-controls />
    <view-instance />
  </div>
</template>

<script>
  import ViewControls from './components/view-controls';
  import ViewInstance from './components/view-instance';

  export default {
    name: 'app',
    components: {
      ViewControls,
      ViewInstance,
    },
  };
</script>

<style lang="scss" scoped>

</style>
