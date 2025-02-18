import { createStore } from 'vuex'

export default createStore({
  state: {
    cotizaciones: {},
    noticias: []
  },
  getters: {
    getCotizaciones() {
      return state.cotizaciones
    },
    getCotizaciones() {
      return state.noticias
    }
  },
  mutations: {
    setCotizaciones(state, cotizaciones) {
      state.cotizaciones = cotizaciones
    },
    setNoticias(state, noticias) {
      state.noticias = noticias
    },
  },
  actions: {
    llamarCotizaciones({commit}){
      fetch("https://api.bluelytics.com.ar/v2/latest")
      .then(response => response.json())
      .then(response => {
        const cotizaciones = response;
        console.log(response)
        commit('setCotizaciones', cotizaciones);
        //localStorage.setItem("cotizaciones",JSON.stringify(this.cotizaciones))
      })
      .catch( err => console.error(err));
    },
    llamarNoticias({commit}){
      fetch("https://back-financial.vercel.app/noticias", {
      })
      .then(response => response.json())
      .then(response => {
        const noticias = response;
        console.log('noticias', noticias)
        commit('setNoticias', noticias);
        //localStorage.setItem("cotizaciones",JSON.stringify(this.cotizaciones))
      })
      .catch( err => console.error(err));
    }
  },
  modules: {
  }
})
