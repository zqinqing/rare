<template>
	<div class="container">
		<v-header></v-header>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<v-footer></v-footer>
	</div>
</template>

<script>
    import VHeader from '@/components/header/header'
    import VFooter from '@/components/footer/footer'
    export default {
        components: {
          VHeader,
          VFooter
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        padding: 88px 0 100px 0;
        width: 100%;
        height: auto;
    }
</style>
