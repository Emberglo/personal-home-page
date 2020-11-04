<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <Left/>
      </div>
      <div class="col-6">
        <Center/>
      </div>
      <div class="col-3">
        <Right/>
      </div>
    </div>
  </div>
</template>

<script>
  import Left from './components/Left'
  import Center from './components/Center'
  import Right from './components/Right'

export default {
  name: 'App',
  components: {
    Left,
    Center,
    Right
  }
}
</script>

<style scoped>

</style>
