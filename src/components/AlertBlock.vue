<template lang="pug">
div()
	v-dialog(v-model="visible")
		v-card
			v-card-text {{msg}}
</template>

<script>
export default {
    name: 'AlertBlock',
	props: ['msg'],
	data() {
		return {
			visible: this.msg !== '',
		}
	}
	
}
</script>

<style>

</style>