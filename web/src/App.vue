<template>
  <div id="app">
    <view-controls/>
    <view-instance/>
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

<style lang="scss">
  body{
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .btn{
    background-color: #00D2C2;
    border: none;
    color: white;
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 2px;
    cursor: pointer;

    &:hover{
      background-color: lighten(#00D2C2, 10%);
    }
  }

  select{
    min-height: 34px;
    height: 34px;
    border-bottom: 2px solid #00D2C2;
  }
</style>
