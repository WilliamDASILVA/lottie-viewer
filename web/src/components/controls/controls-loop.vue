<template>
  <div class="controls-loop">
    <label for="loop">
      Loop
    </label>
    <input
      id="loop"
      type="checkbox"
      v-model="loop"
      :checked="isLooping"
      @change="setLoop(loop)"
    >
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'controls-loop',
    data() {
      return {
        loop: false,
      };
    },
    computed: {
      ...mapGetters([
        'isLooping',
      ]),
    },
    methods: {
      ...mapActions([
        'setLoop',
      ]),
    },
    mounted() {
      this.loop = this.isLooping;
    },
  };
</script>

<style lang="scss" scoped>
  .controls-loop{

  }
</style>
