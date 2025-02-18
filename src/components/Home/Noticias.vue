<template>
  <section id="noticias-section">
    <h2>ULTIMAS NOTICIAS</h2>
    <div class="container-noticias">
    <a v-for="noticia in noticias.articles" :key="noticia.id" :href="noticia.url">
        <div class="img-noticia">
        <img :src="noticia.urlToImage">
        <div v-if="noticia.urlToImage === null" class="img-aleatoria">
            <img src="https://picsum.photos/seed/picsum/600/320">
        </div>
        </div>
        <div class="texto-noticia">
        <h3>{{noticia.title}}</h3>
        <p>Fecha: {{formatearFecha(noticia.publishedAt)}}</p>
        <p v-if="noticia.author !== null">Autor: {{noticia.author}}</p>
        <p>Portal: {{noticia.source.name}}</p>
        </div>
    </a>
    </div>
  </section>
</template>

<script>
import store from '@/store'
import { computed, ref } from 'vue'

export default {
    name : 'Noticias',
    setup(){
        const noticias = computed(() => store.state.noticias);
        const formatearFecha = (fechaUTC) => {
        return new Date(fechaUTC).toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
        };

        return {
        formatearFecha,
            noticias
        }
    }
}
</script>

<style scoped>

.container-noticias a:last-child {
    display: none;
}

h2 {
    font-size: 2.7em;
    margin-bottom: 30px;
    font-weight: 700;
}

h3{
    margin-bottom: 20px;
    font-weight: 700;
}

p {
    font-size: 1.2em;
}

img {
    text-align: center;
    margin: auto;
    margin-bottom: 18px;
    max-height: 200px;
    width: 100%;
}

#noticias-section {
    width: 90%;
    margin: auto;
    margin-bottom: 4em;
}

.texto-noticia {
    padding: 15px;
}

.img-noticia {
    padding: 0 15px;
}

.img-aleatoria {
    padding: -10px 0px;
}

.container-noticias {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin:auto;
        background-color: #f0f6fa;
}

.container-noticias a {
    width: 30%;
    cursor: pointer;
    text-decoration: none;
    color: #0d0f20;
    box-shadow: 10px 10px 5px -6px rgba(184, 184, 184, 0.75);
    -webkit-box-shadow: 10px 10px 5px -6px rgba(216, 216, 216, 0.75);
    -moz-box-shadow: 10px 10px 5px -6px rgba(187, 187, 187, 0.75);
    padding: 10px;
    border-radius: 3px;
    margin: 20px;
    margin-bottom: 40px;
    background: white;
}

.container-noticias a:first-child {
    display: none;
}

</style>