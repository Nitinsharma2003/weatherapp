APIKEY = "cf26a968a43a487eb8861354241108";
const CityInput = document.getElementById('CityInput')
const SearchBtn = document.getElementById('searchbtn')

async function getData(APIKEY, CityInput) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${CityInput}&aqi=yes`);
    return await promise.json();
}
SearchBtn.addEventListener('click', async() => {
    const input = CityInput.value;
    const result = await getData(APIKEY, input);
    cityName.innerText = ` ${result.location.name}, ${result.location.region}`
    countryName.innerText = `${result.location.country}`
    temp.innerText = `${result.current.temp_c}`
    sup.innerText = '°C'
    localTime.innerText = `${result.location.localtime}`;

})
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('countryName')
const localTime = document.getElementById('loc-time');
const temp = document.getElementById('temp')
const sup = document.getElementById('sup')