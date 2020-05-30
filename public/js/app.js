const spinner = document.querySelector("#loading-spinner")
const resultDiv = document.querySelector("#result")
const cityInput = document.querySelector("#city")

cityInput.focus();

function getData(){

    const urlAddress = "/weather?address="+ cityInput.value //prendi input dal form

    resultDiv.classList.add("d-none")
    spinner.classList.remove("d-none")

    fetch(urlAddress).then((response) => { //promise per chiamata ad API interna
        response.json().then((data) => { //parse dati dal json di risposta
            if(data.error){
                resultDiv.innerHTML = "<p class='my-5 error'>"+data.error+"</p>"
            }
            if(data.temperature){
                resultDiv.innerHTML = "<p class='my-5 display-1'>"+data.temperature+"°</p>"
            }
            resultDiv.classList.remove("d-none")
            spinner.classList.add("d-none")
        })
    })
    return false
}

