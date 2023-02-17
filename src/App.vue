  <template>
  <div id="app">
    <user-comp/>
    <curso-comp/>
  </div>
</template>

<script>
import CursoComp from './components/CursoComp.vue'
import UserComp from './components/UserComp.vue'

export default {
  name: 'App',
  components: {
    UserComp,
    CursoComp
  }
}
</script>

<style>
</style>
