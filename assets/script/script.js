const form = document.querySelector(".form")
const formBtn = document.querySelector(".form__btn")
const inpPnr = document.querySelector("#pnr")
const pnrTag = document.querySelector(".hero__get-pnr")

const getPnr = async () => {

    const obj = {
        code: inpPnr.value
    }

    const config = {
		method: "POST",
		headers: {
			"Content-Type":"application/json"
		},
		body: JSON.stringify(obj)

	}

    const response = await fetch('http://www.nikita.php-f22.ru/api/decoder', config)
    const data = await response.json()
    const arr = []
    arr.push(data)
    console.log(arr)
    arr.forEach(aviaInfo => {
        const companyDiv = document.createElement("div")
        companyDiv.className = "avia__info"

        const companyTag = document.createElement("p")
        companyTag.className = "avia__title"
        companyTag.innerHTML = aviaInfo.airline

        const cityTimeDiv = document.createElement("div")
        cityTimeDiv.className = "city__time-div"

        const cityDiv = document.createElement("div")
        cityDiv.className = "city__div"

        const cityTag = document.createElement("h3")
        cityTag.className = "city__title"
        cityTag.innerHTML = aviaInfo.departure_country

        const timeDiv = document.createElement("div")
        timeDiv.className = "time__div"

        const timeTag = document.createElement("h3")
        timeTag.className = "city__sub-title"
        timeTag.innerText = aviaInfo.departure_time + ","

        const dateTag = document.createElement("p")
        dateTag.className = "date__title"
        dateTag.innerHTML = aviaInfo.departure_date

        const arrivCityDiv = document.createElement("div")
        arrivCityDiv.className = "arrival__city-div"

        const arrivCityTag = document.createElement("h3")
        arrivCityTag.className = "arrival__title"
        arrivCityTag.innerHTML = aviaInfo.arrival_country

        const arrivTimeTag = document.createElement("h3")
        arrivTimeTag.className = "arrival__sub-title"
        arrivTimeTag.innerHTML = aviaInfo.arrival_time

        const moreInfoBtn = document.createElement("button")
        moreInfoBtn.className = "info__btn"
        moreInfoBtn.innerHTML = "подробнее"

        timeDiv.appendChild(timeTag)
        timeDiv.appendChild(dateTag)

        cityDiv.appendChild(cityTag)

        cityTimeDiv.appendChild(cityDiv)
        cityTimeDiv.appendChild(timeDiv)

        companyDiv.appendChild(companyTag)

        arrivCityDiv.appendChild(arrivCityTag)
        arrivCityDiv.appendChild(arrivTimeTag)

        pnrTag.appendChild(cityTimeDiv)
        pnrTag.appendChild(companyDiv)
        pnrTag.appendChild(arrivCityDiv)
        pnrTag.appendChild(moreInfoBtn)

        // moreInfoBtn.addEventListener("click", () => {
        //     pnrTag.innerHTML =""
        // })

        moreInfoBtn.addEventListener("click", () => {
            pnrTag.innerHTML =""
            arr.forEach(aviaInfo => {
                const infoDiv = document.querySelector("div")
                infoDiv.className = "more__info"

                const depArrCountry = document.createElement("div")
                depArrCountry.className = "countres__title"
            
                const departureCountry = document.createElement("h3")
                departureCountry.className = "departure__info"

                const arrivalCountry = document.createElement("h3")
                arrivalCountry.className = "arrival__info"

                departureCountry.innerHTML = aviaInfo.departure_country + " -- "
                arrivalCountry.innerHTML = aviaInfo.arrival_country

                const timeDepartureDiv = document.createElement("div")
                timeDepartureDiv.className = "departure__div"

                const timeDateDiv = document.createElement("div")
                timeDateDiv.className = "time__div"

                const timeTag = document.createElement("h3")
                timeTag.className = "city__sub-title"
                timeTag.innerHTML = aviaInfo.departure_time

                const dateTag = document.createElement("p")
                dateTag.className = "date__title"
                dateTag.innerHTML = aviaInfo.departure_date
            
                const depAirportTag = document.createElement("p")
                depAirportTag.className = "deperture__airport-title"
                depAirportTag.innerHTML = aviaInfo.departure_airport 
                
                const airlineDiv = document.createElement("div")
                airlineDiv.className = "airline__div"

                const airlineSubDiv = document.createElement("div")
                airlineSubDiv.className =  "airline__sub-div"

                const airlineTag = document.createElement("p")
                airlineTag.className = "airline__title"
                airlineTag.innerHTML = aviaInfo.airline + ","

                const flightTag = document.createElement("p")
                flightTag.className = "airline__sub-title"
                flightTag.innerHTML = aviaInfo.flight_number


                const timeArrivalDiv = document.createElement("div")
                timeArrivalDiv.className = "departure__div"

                const timeDateArrivalDiv = document.createElement("div")
                timeDateArrivalDiv.className = "time__div"

                const timeArrivalTag = document.createElement("h3")
                timeArrivalTag.className = "city__sub-title"
                timeArrivalTag.innerHTML = aviaInfo.arrival_time

                const dateArrivalTag = document.createElement("p")
                dateArrivalTag.className = "date__title"
                dateArrivalTag.innerHTML = aviaInfo.arrival_date
            
                const arrAirportTag = document.createElement("p")
                arrAirportTag.className = "deperture__airport-title"
                arrAirportTag.innerHTML = aviaInfo.arrival_airport

                
                
                timeArrivalDiv.appendChild(timeDateArrivalDiv)
                timeArrivalDiv.appendChild(arrAirportTag)

                timeDateArrivalDiv.appendChild(timeArrivalTag)
                timeDateArrivalDiv.appendChild(dateArrivalTag)

                airlineSubDiv.appendChild(airlineTag)
                airlineSubDiv.appendChild(flightTag)

                infoDiv.appendChild(depArrCountry)

                depArrCountry.appendChild(departureCountry)
                depArrCountry.appendChild(arrivalCountry)

                timeDateDiv.appendChild(timeTag)
                timeDateDiv.appendChild(dateTag)

                timeDepartureDiv.appendChild(timeDateDiv)
                timeDepartureDiv.appendChild(depAirportTag)

                airlineDiv.appendChild(airlineSubDiv)

                pnrTag.className = "pnr__more-info"

                pnrTag.appendChild(depArrCountry)
                pnrTag.appendChild(timeDepartureDiv)
                pnrTag.appendChild(airlineDiv)
                pnrTag.appendChild(timeArrivalDiv)
            })
        })
    })

    return arr
}


form.addEventListener("submit", async (e) => {
    e.preventDefault()

    await getPnr()
})

