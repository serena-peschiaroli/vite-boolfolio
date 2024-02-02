<script>
import HomePage from './pages/HomePage.vue';
import AppHeader from './components/AppHeader.vue';
import { links } from './routes';

export default {
  data() {
    return{
      links,

    }
  },
  components: { 
      HomePage,
      AppHeader,
  }
}


</script>



<template>
  <div id="app">
    
    <AppHeader :links="links"></AppHeader>

    <router-view></router-view>
  </div>

</template>

<style lang="scss">

@use "./styles/general.scss";

</style>