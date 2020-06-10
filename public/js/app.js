const city_form = document.querySelector("form")
const city_input = document.querySelector("#city")
const spinner_anim = document.querySelector("#loading-spinner")
const result_div = document.querySelector("#result")

city_input.focus();

city_form.addEventListener("submit", (event) => {
    event.preventDefault() //prevent the form to refresh the page

    result_div.classList.add("d-none")
    spinner_anim.classList.remove("d-none")

    const urlAddress = "/weather?address="+ city_input.value //prendi input dal form

    const getData = async () => {
        const response = await fetch(urlAddress)
        const data = await response.json()
        if(data.error){
            result_div.innerHTML = "<p class='my-5 error'>"+data.error+"</p>"
        }
        if(data.temperature){
            result_div.innerHTML = "<p class='my-5 display-1'>"+data.temperature+"°</p>"
        }
        result_div.classList.remove("d-none")
        spinner_anim.classList.add("d-none")
    }

    getData()

})
