<template>
    <div class="Right">
        <div class="">
          <div class="row">
            <div class="">
              <Dev/>
            </div>
          </div>
          <div class="row">
            <div class="">
              <Socials/>
            </div>  
          </div>
        </div>
    </div>
</template>


<script>
  import Dev from './Dev'
  import Socials from './Socials'

export default {
    name: 'Right',
    setup(){
        return {}
    },
    components:{
      Dev,
      Socials
    }
}
</script>


<style lang="scss" scoped>

</style>