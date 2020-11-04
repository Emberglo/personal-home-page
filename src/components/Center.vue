<template>
    <div class="Center">
        <div class="container-fluid d-flex flex-column">
          <div class="row">
            <div class="col-12">
              <Clock/>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <Quote/>
            </div>
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