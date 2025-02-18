<template>
<BannerVue/>
<ConversorVue/>
<NoticiasVue/>
<FooterVue/>
</template>
<script>

import BannerVue from '@/components/Home/Banner.vue'
import ConversorVue from '@/components/Home/Conversor.vue'
import NoticiasVue from '@/components/Home/Noticias.vue'
import FooterVue from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    BannerVue,
    ConversorVue,
    NoticiasVue,
    FooterVue
  }
}
</script>
