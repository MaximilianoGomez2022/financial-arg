<template>
  <div class="conversor-container" id="conversor">
    <div class="form-container">
    <h2>CONVERSOR DE MONEDA</h2>
    <form @submit.prevent>
        <label for="ingreso">Ingresá el monto y elegí el tipo de moneda</label>
        <div class="monto-contenedor input-ingreso">
            <div class="form-group">
                <input type="number" min="0" class="form-control" id="input-ingreso" aria-describedby="Ingresar monto" placeholder="Ingresa monto" v-model="ingreso">
            </div>
            <div class="form-group select-ingreso">
                <select v-model="selectIngreso">
                    <option value="dolar">Dolar USD</option>
                    <option value="euro">Euro EUR</option>
                    <option value="pesos">Pesos ARS</option>
                </select>
            </div>
        </div>
        <div class="form-group select2-contenedor">
            <label for="ingresocambio">Elegí la moneda por la que vas a cambiar</label>
            <select id="ingresocambio" v-model="selectIngreso2">
                <option v-for="(option, index) in optionsSegundoSelect" :key="index" :value="option.value">{{option.text}}</option>
            </select>
        </div>
        <button @click="calcular" class="btn btn-primary">Cambiar moneda</button>
        <div class="resultado">
            <p v-html="mensaje"></p>
        </div>
    </form>
    </div>
    <div class="noticia-principal">
        <a :href="noticiaMasReciente.link">
        <h2>NOTICIA PRINCIPAL</h2>
        <div v-if="noticiaMasReciente.image_url === null">
            <img :src="`https://picsum.photos/1800/900?random=${Math.random()}`">
        </div>
        <img :src="noticiaMasReciente.image_url">
        <h3>{{noticiaMasReciente.title}}</h3>
        </a>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import store from '@/store'

export default {
name: 'Conversor',
setup(){
    const ingreso = ref(0);
    const selectIngreso = ref('pesos')
    const selectIngreso2 = ref('dolarblue');
    const resultado = ref(0)
    let mensaje = ref('')

    const noticias = computed(() => store.state.noticias.articles);
    const cotizaciones = computed(() => store.state.cotizaciones);

// Función para calcular la conversión de monedas
const calcular = () => {
  const monto = parseFloat(ingreso.value);

  if (selectIngreso.value === 'pesos' && selectIngreso2.value === 'dolarblue') {
    // Conversion de Pesos ARS a Dólar USD usando el valor del dólar blue
    const tasaDolarBlue = cotizaciones.value.blue.value_sell;
    resultado.value = monto / tasaDolarBlue;

  } else if (selectIngreso.value === 'pesos' && selectIngreso2.value === 'dolaroficial') {
    // Conversión de Pesos ARS a DOLAR oficial el valor del dólar oficial
    const tasaDolarOficial = cotizaciones.value.oficial.value_sell;
    resultado.value = monto / tasaDolarOficial;
    
  } else if (selectIngreso.value === 'pesos' && selectIngreso2.value === 'euroblue') {
    // Conversión de Pesos ARS a Euro Blue el valor del Euro blue
    const tasaEuroBlue = cotizaciones.value.blue_euro.value_sell;
    resultado.value = monto / tasaEuroBlue;

  } else if (selectIngreso.value === 'pesos' && selectIngreso2.value === 'eurooficial') {
    // Conversión de Pesos ARS a Euro oficial el valor del Euro oficial
    const tasaEuroOficial = cotizaciones.value.oficial_euro.value_sell;
    resultado.value = monto / tasaEuroOficial;
  }

  if (selectIngreso.value === 'dolar' && selectIngreso2.value === 'pesos-blue') {
    // Conversion de Pesos ARS a Dólar USD usando el valor del dólar blue
    const tasaDolarBlue = cotizaciones.value.blue.value_buy;
    resultado.value = monto * tasaDolarBlue;

  } else if (selectIngreso.value === 'dolar' && selectIngreso2.value === 'pesos-oficial') {
    // Conversión de Pesos ARS a DOLAR oficial el valor del dólar oficial
    const tasaDolarOficial = cotizaciones.value.oficial.value_buy;
    resultado.value = monto * tasaDolarOficial;   
  }

  if (selectIngreso.value === 'euro' && selectIngreso2.value === 'pesos-blue') {
    // Conversion de Pesos ARS a Dólar USD usando el valor del dólar blue
    const tasaDolarBlue = cotizaciones.value.blue_euro.value_buy;
    resultado.value = monto * tasaDolarBlue;

  } else if (selectIngreso.value === 'euro' && selectIngreso2.value === 'pesos-oficial') {
    // Conversión de Pesos ARS a DOLAR oficial el valor del dólar oficial
    const tasaDolarOficial = cotizaciones.value.oficial_euro.value_buy;
    resultado.value = monto * tasaDolarOficial;   
  }

    mensaje.value = `Cambiaste ${monto} ${selectIngreso.value} por <b>${resultado.value.toFixed(2)} ${selectIngreso2.value}</b>`

    ingreso.value = 0
};

const optionsSegundoSelect = computed(() => {
switch (selectIngreso.value) {
case 'dolar':
return [
    { value: 'pesos-blue', text: 'Pesos - Dolar blue' },
    { value: 'pesos-oficial', text: 'Pesos - Dolar oficial' },
];
case 'euro':
return [
    { value: 'pesos-blue', text: 'Pesos - Euro blue' },
    { value: 'pesos-oficial', text: 'Pesos - Euro oficial' },
];
case 'pesos':
return [
    { value: 'dolarblue', text: 'Dolar Blue' },
    { value: 'dolaroficial', text: 'Dolar Oficial' },
    { value: 'euroblue', text: 'Euro Blue' },
    { value: 'eurooficial', text: 'Euro Oficial' },
];
default:
return [];
}
});

// Función para obtener la noticia más reciente
const noticiaMasReciente = computed(() => {
if (noticias.value && noticias.value.length > 0) {
    return noticias.value.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))[0];
} 
return 'null';
});

return {
    ingreso,
    selectIngreso,
    noticias,
    optionsSegundoSelect,
    selectIngreso2,
    calcular,
    resultado,
    noticiaMasReciente,
    mensaje
}
    }
}
</script>

<style scoped>

    h3 {
        font-weight: 700;
        margin-bottom: 18px;
    }

    h2 {
    font-size: 2.7em;
    margin-bottom: 30px;
    font-weight: 700;
    }

    .noticia-principal {
        box-shadow: 10px 10px 5px -6px rgba(184, 184, 184, 0.75);
        -webkit-box-shadow: 10px 10px 5px -6px rgba(216, 216, 216, 0.75);
        -moz-box-shadow: 10px 10px 5px -6px rgba(187, 187, 187, 0.75);
        padding: 40px;
        border-radius: 3px;
    }

    .noticia-principal h3 {
        margin-bottom: 18px;
        margin-top: 18px;
    }

    a {
        text-decoration: none;
        color: #0d0f20;
    }

    .btn-primary {
        background-color: #0d0f20;
        border-color: #0d0f20;
    }

    .conversor-container {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6em;
    }

    .monto-contenedor > div:first-child {
        width: 60%;
    }

    .monto-contenedor > div:last-child {
        width: 40%;
    }


    form {
        background: #f0f6fa;
        border-radius: 5px;
        padding: 40px;
    }
    
    form label {
        margin-bottom: 15px;
        font-size: 1.1em;
    }

    form input, select, button {
        font-size: 1.1em;
    }

    form button {
        margin-bottom: 30px;
    }

    .form-container {
        width: 48%;
    }

    .noticia-principal {
        width: 48%;
        right: 0;
    }

    .resultado {
        font-size: 1.5em;
    }

    .monto-contenedor {
        display: flex;
        margin-bottom: 30px;
    }

    .select2-contenedor select {
        width: 100%;
        margin-bottom: 30px;
    }

    select {
        padding: 12px;
        width: 100%;
        border: 2px solid;
        border-color: #0d0f20;
        border-radius: 10px;
    }

    input {
        padding: 12px;
        width: 90%;
        border: 2px solid;
        border-color: #0d0f20;
        border-radius: 10px;
    }
</style>