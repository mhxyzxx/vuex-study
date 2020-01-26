<template>
  <div>
    <!-- <h3>当前数量为：{{ $store.state.count }}</h3>   -->
    <!-- 动态的去加一个字符串,使用第一种方式： -->
    <!-- <h3>{{ '当前数量为：' + $store.state.count }}</h3>   -->
    <!-- 使用第二种方式： -->
    <h3>{{ $store.getters.optCount }}</h3>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>
