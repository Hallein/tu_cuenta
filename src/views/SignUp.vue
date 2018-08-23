<template>
	<div class="login">
    <h1>REGISTRO</h1>
		<form @submit.prevent="doSignUp">
			<label for="username">Usuario</label>
			<input type="text" name="username" v-model="username">
			<label for="password">Contraseña</label>
			<input type="password" name="password" v-model="password">
			<label for="confirm_password">Confirmar contraseña</label>
			<input type="password" name="confirm_password" v-model="confirm_password">
			<button type="submit">Ingresar</button>
		</form>
	</div>
</template>

<script>
export default {
	data(){
		return {
			username: null,
            password: null,
            confirm_password: null
		}
	},
	methods: {
		doSignUp(){
			console.log(this.username, this.password, this.confirm_password)
			this.$router.push('/')
		}
	}
}
</script>
