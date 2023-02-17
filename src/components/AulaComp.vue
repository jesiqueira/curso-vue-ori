<template>
  <div>
    <h1>
      Aula {{ totalAula }}, esse é o usuário: {{ user }}, aula completas:{{
        aulaCompletas
      }}
    </h1>
    <button @click="handleClick">Modificar Usuário</button>
    <button @click="COMPLETAR_AULA">Completar Aula</button>
    <input type="text" v-model="novoUser" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "AulaComp",
  data() {
    return {
      totalAula: 24,
      nome: "edmar",
      novoUser: "",
    };
  },
  computed: {
    ...mapState(["user", "aulaCompletas"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    },
  },
  methods: {
    ...mapMutations(["CHANGE_USER", "COMPLETAR_AULA"]),
    handleClick() {
      this.CHANGE_USER({
        user:this.novoUser,
        totalAulas : this.totalAula
      });
    }
  },
};
</script>

<style></style>
