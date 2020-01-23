<template>
  <div>
    <input type="button" value="减少">
    <input type="button" value="增加">
    <br>
    <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这里不使用自己data中的数据，而是使用store中存储的共享数据
      // count: 0
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
