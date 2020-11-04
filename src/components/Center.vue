<template>
  <div class="Center">
    <div class="flex-col justify-between items-center">
      <div class="row">
        <div class="w-full">
          <Clock/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="w-full">
        <Quote/>
      </div>
    </div>
  </div>
</template>


<script>
  import Clock from './Clock'
  import Quote from './Quote'

export default {
    name: 'Center',
    setup(){
        return {}
    },
    components:{
      Clock,
      Quote
    }
}
</script>


<style lang="scss" scoped>

</style>