function request_data(method, path, data) {
	const headers = {}
	if (data) {
		headers['Content-Type'] = 'application/json'
	}

	return fetch(`/api/${path}`, {
		cache: "no-cache",
		headers: headers,
		method: method,
		body: JSON.stringify(data),
	}).then(r => {
		return r.json()
	})
}

function post(path, data) {
	return request_data('post', path, data)
}

export default {
	authUser(login, password) {
		return post('auth/user', {login, password})
	}
}