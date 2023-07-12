const butn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const data_hide = document.getElementById('data_hide');

const city_name = document.getElementById('city_name');
const getDetails = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    try {

        if (cityVal === "") {

            city_name.innerText = `Write name before you search`;
        } else {
            let url = `https://api.weatherapi.com/v1/current.json?key=8e7589b8c7c0479194052047230707&q=${cityVal}&aqi=no`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            city_name.innerHTML = `${data.location.name} / ${data.location.region} - ${data.location.country} `;
            temp.innerText = data.current.feelslike_c;
            temp_status.innerHTML = `<img src="${data.current.condition.icon}"/ > `
            temp.style.visibility = "visible";
            temp_status.style.visibility = "visible";


        }

    } catch (error) {
        city_name.innerText = `Plz enter proper city name`;
        data_hide.style.visibility = "hidden";
        temp.style.visibility = "hidden";
        temp_status.style.visibility = "hidden";

    }

}
butn.addEventListener('click', getDetails);