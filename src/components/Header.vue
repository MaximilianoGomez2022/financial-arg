<template>
  <header className='header'>
            <div class="logo">
                <a href="/" id="logo">Casacambio
                <img src="../../public/img/logo.svg" alt="" srcset=""></a>
            </div>
            <nav id="menu">
                <ul id="hamburguesa">
                    <li><a href="#menu">abrir</a></li>
                    <li><a href="#">cerrar</a></li>
                </ul>
                <!-- <ul id="barra">
                    <li><a href="#conversor">CONVERSOR</a></li>
                    <router-link to="#section-noticias" replace>Ir a Noticias</router-link>
                    <li><a href="#contacto">CONTACTO</a></li>
                </ul> -->
            </nav>
          </header>
</template>

<script>
import store from '@/store'
export default {
    name: 'Header'
}
</script>

<style>

#logo {
    font-size: 0;
}

@media screen and (min-width: 991px) {

    header {
        display: flex;
        justify-content: space-between;
        height: 70px;
        background: #fff;
        box-shadow: 2px 6px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 2px 6px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 6px 5px 0px rgba(0,0,0,0.75);
    }

    .logo {
        font-size: 0;
        width: 30%;
    }
    .logo img {
        width: 300px;
        height: 60px
    };

    #barra {
        flex: 1;
    }

    nav {
        padding-right: 60px;
    }

    #barra li {
        display: inline-block;
        margin: 0;
        margin-top: 15px;
    }


    #barra li a {
        display: inline-block;
        font-size: 1.1em;
        margin: 0px;
        color: #0d0f20;
        transition: 0.5s color linear;
        text-decoration: none;
        margin: 0 20px;
    }

    #barra li a:hover {
        color: #292b40;
        transition: 0.5s color linear;
    }

}

</style>