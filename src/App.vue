<script>
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return{

    }
  },
  components: { 
      AppMain,
  }
}


</script>



<template>
  <div id="app">
    <AppMain/>
  </div>

</template>

<style lang="scss">

@use "./styles/general.scss";

</style>