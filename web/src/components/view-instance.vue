<template>
  <div class="view-instance">
    <div id="animation" ref="animation"></div>
    hey
  </div>
</template>

<script>
  import lottie from 'lottie-web';

  export default {
    name: 'view-instance',
    data() {
      return {
        animationInstance: null,
      };
    },
    mounted() {
      // this.animationInstance = lottie.loadAnimation({
      //   container: this.$refs.animation,
      //   renderer: 'svg',
      //   loop: true,
      //   autoplay: true,
      //   animationData: e.data.data,
      // });
    },
  };
</script>

<style lang="scss" scoped>
  .view-instance{

  }
</style>

