<template>
  <div class="view-instance">
    <div id="animation" ref="animation"></div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'view-instance',
    methods: {
      ...mapActions([
        'createInstance',
        'updateInstanceData',
      ]),
    },
    mounted() {
      window.addEventListener('message', e => {
        const { type, data } = e.data;
        if (type === 'init') {
          this.createInstance({
            container: this.$refs.animation,
            data,
          });
        } else if (type === 'update') {
          this.updateInstanceData({
            data,
          });
        }
      });
    },
  };
</script>

<style lang="scss" scoped>
  .view-instance{
    #animation{
      $grid-size: 20px;
      
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
      border: none;
      font: normal 100%/normal Arial, Helvetica, sans-serif;
      color: rgba(255,255,255,1);
      -o-text-overflow: clip;
      text-overflow: clip;
      background: -webkit-linear-gradient(45deg, rgba(0,0,0,0.0980392) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.0980392) 75%, rgba(0,0,0,0.0980392) 0), -webkit-linear-gradient(45deg, rgba(0,0,0,0.0980392) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.0980392) 75%, rgba(0,0,0,0.0980392) 0), rgb(255, 255, 255);
      background: -moz-linear-gradient(45deg, rgba(0,0,0,0.0980392) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.0980392) 75%, rgba(0,0,0,0.0980392) 0), -moz-linear-gradient(45deg, rgba(0,0,0,0.0980392) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.0980392) 75%, rgba(0,0,0,0.0980392) 0), rgb(255, 255, 255);
      background: linear-gradient(45deg, rgba(0,0,0,0.0980392) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.0980392) 75%, rgba(0,0,0,0.0980392) 0), linear-gradient(45deg, rgba(0,0,0,0.0980392) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.0980392) 75%, rgba(0,0,0,0.0980392) 0), rgb(255, 255, 255);
      background-position: 0 0, $grid-size $grid-size;
      -webkit-background-origin: padding-box;
      background-origin: padding-box;
      -webkit-background-clip: border-box;
      background-clip: border-box;
      -webkit-background-size: $grid-size*2 $grid-size*2;
      background-size: $grid-size*2 $grid-size*2;
    }
    
  }
</style>

