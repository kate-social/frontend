<template lang="pug">
v-container
	v-form
		v-text-field(
			label="Логин"
			v-model="flogin"
			required
		)
		v-text-field(
			label="Пароль"
			v-model="password"
			required
		)
		v-btn(
			@click="login"
		) Войти
	
	AlertBlock(:msg="err")
</template>

<script>
import api from '../api'
import AlertBlock from '../components/AlertBlock'

export default {
	name: "Login",
	components: {
		AlertBlock,
	},
	data() {
		return {
			flogin: 'test',
			password: 'test',
			err: '',
		}
	},
	methods: {
		async login() {
			let resp = await api.authUser(this.flogin, this.password)
			if (resp.error)	{
				this.err = resp.error
				alert(resp)
				return
			}
      this.$router.push(`/id${resp.id}`)
		}
	}
}
</script>

<style>

</style>