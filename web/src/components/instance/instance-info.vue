<template>
  <div class="instance-info">
    <label for="">
      {{ title }}
    </label>
    <span>
      {{ value }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'instance-info',
    props: {
      title: {
        type: String,
        required: true,
      },
      value: {
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .instance-info{

  }
</style>
