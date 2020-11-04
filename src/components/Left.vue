<template>
  <div class="Left">
    <div class="row flex-col justify-between">
      <div class="">
        <Weather/>
      </div>
    </div>
    <div class="row">
      <div class="">
        <Image/>
      </div>
    </div>
  </div>
</template>


<script>
  import Weather from './Weather'
  import Image from './Image'

export default {
    name: 'Left',
    setup(){
        return {}
    },
    components:{
      Weather,
      Image
    }
}
</script>


<style lang="scss" scoped>

</style>