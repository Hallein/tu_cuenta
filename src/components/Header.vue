<template>
    <div id="header">
        <span>Header</span>
        <nav>
            <router-link :to="{ name: 'login' }">Salir</router-link>
        </nav>
    </div>
</template>

<style scoped>
#header{
    height: 60px;
    box-shadow: 0 1px 8px rgba(0,0,0,0.4);
    padding: 0 12px;
}
nav{
    text-align: right;
}
</style>

