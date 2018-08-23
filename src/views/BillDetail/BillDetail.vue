<template>
    <div id="bill-detail">
        <h1>Cuenta {{ id }}</h1>
        <br>
        <router-link :to="{ name: 'new-product', }">Agregar producto</router-link>
        <br><br>
        <router-link :to="{ name: 'bills' }">Volver</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
    watch:{
        '$route'(to, from){
            this.id = this.$route.params.id
            //GET datos de la nueva cuenta
        }
    }
}
</script>

