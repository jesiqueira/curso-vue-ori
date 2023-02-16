<template>
  <div>
    <h1>Aula {{ totalAula }}, esse é o usuário: {{ user }}</h1>
    <button @click="mostrarConsole">MOstrar no console</button>
  </div>
</template>

<script>
export default {
  name: "AulaComp",
  data() {
    return {
      totalAula: 24,
    };
  },
  computed: {
    user(){
      return this.$store.state.user
    }
  },
  methods: {
    mostrarConsole() {
      console.log(this.$store.state.user);
    },
  },
};
</script>

<style></style>
