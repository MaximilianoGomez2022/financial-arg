<template>
<Header/>
  <router-view/>
</template>

<script>
import { onMounted } from "vue"
import Header from "./components/Header.vue"
import store from "./store"


export default({
  components: {
    Header
  },
  setup() {
      onMounted(async() => {
        await store.dispatch('llamarCotizaciones')
        await store.dispatch('llamarNoticias')
      })
  },
})
</script>
