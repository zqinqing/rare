<template>
  <div id="app">
    <module></module>  
  </div>
</template>

<script>
import module from '@/components/module/module'
export default {
    name: 'app',
    components: {
        module
    }
}
</script>

<style lang='scss'>
  @import 'assets/scss/reset';
  @import 'assets/scss/style';
</style>