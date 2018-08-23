<template>
    <div id="new-product">
        <h1>Agregar un nuevo producto a la cuenta {{ id }}</h1>
        <br>
        <router-link :to="{ name: 'bill-detail', params: { id: id } }">Vovler</router-link>
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
        }
    }
}
</script>
