<template>
    <div class="Left">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <Weather/>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <Image/>
            </div>
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