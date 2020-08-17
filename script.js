const submitBtn = document.querySelector("#submit-btn")
const resultDiv = document.querySelector("#result")
const loadingSpinner = document.querySelector("#loading-spinner")
const cityInput = document.querySelector("#city")

submitBtn.addEventListener("click", async (e) =>{
    e.preventDefault();
    resultDiv.classList.add("d-none")
    loadingSpinner.classList.remove("d-none")
    const response = await getWeather(cityInput.value)
    resultDiv.classList.remove("d-none")
    resultDiv.innerHTML = response.current.temperature+"°"
    loadingSpinner.classList.add("d-none")
})

const getWeather = async (city) =>{
    const response = await fetch("/weather.php?city="+city)
    const data = await response.json()
    return data
}
