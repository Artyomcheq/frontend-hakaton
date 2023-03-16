

const nameInp = document.querySelector("#signin__name")
const emailInp = document.querySelector("#signin__email")
const passInp = document.querySelector("#signin__pass")
const signinBtn = document.querySelector(".signin__btn")

const createForm = async () => {
	
	const form = {
		name: nameInp.value,
		email: emailInp.value,
		password: passInp.value
	}

	const config = {
		method: "POST",
		headers: {
			"Content-Type":"application/json"
		},
		body: JSON.stringify(form)
	}

	if (nameInp.value <= 0) {
		nameInp.placeholder = "Enter your name"
		nameInp.style.border = "1px solid red"
	} else if (nameInp.value) {
		nameInp.value = ""
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
	
	const response = await fetch('http://www.nikita.php-f22.ru/api/register', config)
	const data = await response.json()
	return data
}

signinBtn.addEventListener("click", async (e) => {
    e.preventDefault()
	
	const form = {
		name: nameInp.value,
		email: emailInp.value,
		pass: passInp.value
	}
	
	console.log(await createForm(form));
	
	if (form.name && form.email && form.pass) {
		
	} else if (!form.name) {
		console.log("Не введено имя")
	} else if (!form.email) {
		console.log("Не введена почта")
	} else if (!form.pass) {
		console.log("Не введен пароль")
	} else {
		console.log("Поля пустые");
		return
	}
})
