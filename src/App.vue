<template>
  <div class="flex justify-center">
    <div class="w-1/4">
      <Left/>
    </div>
    <div class="w-1/2">
      <Center/>
    </div>
    <div class="w-1/4">
      <Right/>
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
