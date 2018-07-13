<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <router-link to="/">
           <a class="navbar-brand">Сусамов Тахан от „Йордан
               Каракехайов”ЕООД</a>
       </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link to="/pages/orders/order">
                        <a class="nav-link">Поръчай</a>
                    </router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Продукция
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link to="/pages/production/susamov-tahan"><a class="dropdown-item" href="#">Сусамов
                            Тахан</a></router-link>
                        <router-link to="/pages/production/brashno-ot-limets">
                            <a class="dropdown-item">Брашно от Лимец</a>
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <router-link to="/pages/production/susamovo-maslo"><a class="dropdown-item" href="#">Сусамово
                            Масло</a></router-link>
                        <router-link to="/pages/production/pchelen-med"><a class="dropdown-item" href="#">Пчелен Мед</a>
                        </router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <router-link to="/pages/Technology">
                        <a class="nav-link">Технология</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/pages/Gallery">
                        <a class="nav-link">Галерия</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/pages/history">
                        <a class="nav-link">История</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/pages/contacts">
                        <a class="nav-link">Контакти</a>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>