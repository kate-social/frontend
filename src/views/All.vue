<template lang="pug">
  
</template>

<script>
export default {
	name: 'All',
	beforeMount() {
		let path = this.$route.path
		if (path.indexOf("id") === 0) {
      let id = parseInt(/(\d+)/g.match(path)[0])
			this.$route.push({name:'profile', params:{
				id: id,
			}})
		}		
	}
}
</script>

<style>

</style>