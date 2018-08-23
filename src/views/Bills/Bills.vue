<template>
    <div id="bills">
        <h1>Cuentas</h1>
        <router-link :to="{ name: 'new-bill' }">Nueva cuenta</router-link>
        <br>
        <br>
        <router-link :to="{ name: 'bill-detail', params: { id: 1 } }">Cuenta 1</router-link>
        <br>
        <router-link :to="{ name: 'bill-detail', params: { id: 2 } }">Cuenta 2</router-link>
        <br>
        <router-link :to="{ name: 'bill-detail', params: { id: 3 } }">Cuenta 3</router-link>
        <br>
        <router-link :to="{ name: 'bill-detail', params: { id: 4 } }">Cuenta 4</router-link>
    </div>
</template>
