const loginBtn = document.querySelector(".login__btn")
const emailInp = document.querySelector("#login__inp-emil")
const passInp = document.querySelector("#login__inp-pass")

const getAccounts = async () => {
	
	const obj = {
		email: emailInp.value,
		password: passInp.value
	}
	
	const config = {
		method: "POST",
		headers: {
			"Content-Type":"application/json"
		},
		body: JSON.stringify(obj)
	}

    if (emailInp.value <= 0) {
		emailInp.placeholder = "Enter your email"
		emailInp.style.border = "1px solid red"
	} else if (emailInp.value) {
		emailInp.value = ""
	}
	if (passInp.value <= 0) {
		passInp.placeholder = "Enter yout password"
		passInp.style.border = "1px solid red"
		return
	} else if (passInp.value) {
		passInp.value = ""
	} 
	
    const response = await fetch("http://www.nikita.php-f22.ru/api/login", config)
	const data = await response.json()

	arr = []
	arr.push(data)
	arr.forEach(el => {
		const token = el.access_token
		const bar = el.token_type
		
		if (token) {
			window.location.href = "../index.html"
		}
	})
	
	return data
}

loginBtn.addEventListener("click", async (e) => {
    e.preventDefault()

	await getAccounts()
})
