<template>
  <div class="app-section">
    <router-view/>
  </div>
</template>

<script>
  import {Header, Footer} from '@/js/layout'

  export default {
    name: 'App',
    components: {Header, Footer}
  }
</script>

<style scoped>

</style>