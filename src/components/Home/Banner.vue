<template>
<section id="banner" class="contenedor-banner">
    <div id="texto-banner">
        <h2>El portal de economía y noticias más importante de Argentina</h2>
        <p>Enterate de las últimas noticias del mundo</p>
        <p>Simulá tu cambio de moneda con nuestro conversor</p>
    </div>
    <div class="cotizaciones-banner" v-if="cotizaciones && cotizaciones.blue">
        <div>
            <h3>DOLAR BLUE</h3>
            <div class="container">
            <div class="row">
                <div class="col-md-6"><p>COMPRA ${{cotizaciones.blue.value_buy}}</p></div>
                <div class="col-md-6"><p>VENTA ${{cotizaciones.blue.value_sell}}</p></div>
            </div>
            </div>
        </div>
        <div>
            <h3>DOLAR OFICIAL</h3>
            <div class="container">
            <div class="row">
                <div class="col-md-6"><p>COMPRA ${{cotizaciones.oficial.value_buy}}</p></div>
                <div class="col-md-6"><p>VENTA ${{cotizaciones.oficial.value_sell}}</p></div>
            </div>
            </div>
        </div>
        <div>
            <h3>EURO BLUE</h3>
            <div class="container">
            <div class="row">
                <div class="col-md-6"><p>COMPRA ${{cotizaciones.blue_euro.value_buy}}</p></div>
                <div class="col-md-6"><p>VENTA ${{cotizaciones.blue_euro.value_sell}}</p></div>
            </div>
            </div>
        </div>
        <div>
            <h3>EURO OFICIAL</h3>
            <div class="container">
            <div class="row">
                <div class="col-md-6"><p>COMPRA ${{cotizaciones.oficial_euro.value_buy}}</p></div>
                <div class="col-md-6"><p>VENTA ${{cotizaciones.oficial_euro.value_sell}}</p></div>
            </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import store from '@/store'
import { computed } from 'vue';

export default {
        setup(){
        const cotizaciones = computed(() => store.state.cotizaciones);
        return {
            cotizaciones
        }
    } 
}
</script>

<style scoped>
#banner {
    margin: auto;
    margin-top: -15px;
    position: relative;
    display: flex;
    width: 100%;
    height: calc(100vh - 60px);
    max-height: 1300px;
    margin-bottom: 6em;
    align-items: center;
}


.cotizaciones-banner p {
    color: #fff !important;
    font-size: 18px !important;
    margin-left: -10px;
    font-family: "Roboto", serif;
    margin-top: 8px;
}

.cotizaciones-banner {
    border:10px solid #fff;
    border-radius: 6px;
    color: white;
    width: 30%;
    padding: 40px;
    margin: auto;
    letter-spacing: 1px;
}

#texto-banner {
    color: white;
    width: 60%;
    left: 5%;
     padding: 40px;
}

#banner p {
    color: #fff;
    font-size: 2.3em;
}

h2 {
    font-size: 4em;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 30px;
}

img {
    max-width: 100%;
}

.cotizaciones-banner h2, h3, p, div {
    color: #fff;
}

.cotizaciones-banner h2, h3 {
    font-weight: 700;
}

.cotizaciones-banner h3 {
    font-size: 20px;
}

.cotizaciones-banner > div {
    margin-bottom: 30px;
}
</style>