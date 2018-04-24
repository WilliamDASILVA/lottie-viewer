<template>
  <div class="controls-speed">
    <label for="speed">
      Speed
    </label>
    <select id="speed" name="speed" v-model="speed" @change="setSpeed(speed)">
      <option
        v-for="(speed, k) in speedOptions"
        :key="k"
        :value="speed"
      >{{ speed }}x</option>
    </select>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'controls-speed',
    data() {
      return {
        speed: 1,
        speedOptions: [
          0.1, 0.2, 0.5, 1, 2,
        ],
      };
    },
    methods: {
      ...mapActions([
        'setSpeed',
      ]),
    },
    computed: {
      ...mapGetters([
        'getSpeed',
      ]),
    },
    mounted() {
      this.speed = this.getSpeed;
    },
  };
</script>

<style lang="scss" scoped>
  .controls-speed{

  }
</style>

