const loginBtn = document.querySelector(".login__btn")
const emailInp = document.querySelector("#login__inp-emil")
const passInp = document.querySelector("#login__inp-pass")

const getAccounts = async (form) => {
	
	const obj = {
		email: emailInp.value,
		passInp: passInp.value
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
	console.log(data)
	
	return data
}

loginBtn.addEventListener("click", async (e) => {
    e.preventDefault()

	// form = {
	// 	email: emailInp.value,
	// 	pass: passInp.value
	// }

	// if (form.email && form.pass) {
	// 	window.location.href = "./index.html"
	// } else {
	// 	console.log("Хуево");
	// }


	console.log(await getAccounts())
})
