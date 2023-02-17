<template>
  <div>
    {{ $store.state.user }}
    <h1>User {{ aulasCompletas }}</h1>
  </div>
</template>

<script>

export default {
  name: "UserComp",
  computed:{
    aulasCompletas(){
      return this.$store.state.aulaCompletas
    }
  }
};
</script>

<style></style>
