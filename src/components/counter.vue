<template>
  <div>
    <input type="button" value="减少">
    <input type="button" value="增加" @click="add">
    <br>
    <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 这里不使用自己data中的数据，而是使用store中存储的共享数据
      // count: 0
    }
  },
  methods: {
    add () {
      // 千万不要这么用，不符合 vuex 的设计理念
      // 这样写的话，是各自组件修改的，到时出现问题，不好去定位是哪个组件修改数据出错的。还要分别找到
      // 这几个组件，太麻烦。所以，我们通过vuex一个托管员来去修改state的数据，出现问题，有托管员去管理，定位找问题
      // this.$store.state.count++;
      this.$store.commit("increment");
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
