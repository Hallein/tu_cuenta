<template>
	<div class="home">
		<Header />
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '@/components/Header'

export default {
	name: 'home',
	components: { Header }
}
</script>
