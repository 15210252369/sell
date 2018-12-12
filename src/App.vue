<template>
  <div id="app">
    <router-view/>
    <footguide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import footguide from 'components/footguide/footguide'
export default {
    components:{
      footguide
    }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  #app
    height:100%
</style>
