<template>
  <div>
    <h1>
      Aula {{ totalAula }}, esse é o usuário: {{ user }}, aula completas:{{
        aulaCompletas
      }}
    </h1>
    <button @click="handleClick">Modificar Usuário</button>
    <button @click="completarAula">Modificar Usuário</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AulaComp",
  data() {
    return {
      totalAula: 24,
      nome: "edmar",
    };
  },
  computed: {
    ...mapState(["user", "aulaCompletas"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    },
  },
  methods: {
    handleClick() {
      this.$store.commit('changeUser')
    },
    completarAula() {
      this.$store.commit('completarAula')
    },

  },
};
</script>

<style></style>
