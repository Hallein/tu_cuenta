<template>
	<div class="login">
		<h1>LOGIN</h1>
		<router-link :to="{ name: 'signup' }">Registrarse</router-link>
		<br><br>
		<form @submit.prevent="doLogin">
			<label for="username">Usuario</label>
			<input type="text" name="username" v-model="username">
			<label for="password">Contraseña</label>
			<input type="password" name="password" v-model="password">
			<button type="submit">Ingresar</button>
		</form>
	</div>
</template>

<script>
export default {
	data(){
		return {
			username: null,
			password: null
		}
	},
	methods: {
		doLogin(){
			console.log(this.username, this.password)
			this.$router.push('/')
		}
	}
}
</script>
