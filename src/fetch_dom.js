import { apiKey } from "./env";

const blockMeteo = document.querySelector("#bloc_meteo");

const textCity = document.querySelector("#city");

const btnCharger = document.querySelector("#charger");



const box = document.createElement("div");


box.style.display ="flex";
box.style.flexDirection = "column";


blockMeteo.appendChild(box);

console.log(blockMeteo);

for(let i = 1; i < 4; i ++){
    const createH2 = document.createElement("h2");
    createH2.style.cssText = "width : auto;  height : 10vh; background-color : grey; text-align : center; align-content : center; padding-top : 20px; padding-bottom : 20px";
    createH2.textContent = "vide";
    createH2.setAttribute("id", "titre"+i);
    box.appendChild(createH2);
}

async function getMeteoJson(ville) {
        return await fetch ("https://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q="+ ville + "&appid=" + apiKey)

        .then(data => {
            return data.json()
        })
}
getMeteoJson("lyon").then(json => {
    console.log(json)
});

const ville = document.querySelector("#titre1");
const temperature = document.querySelector("#titre2");
const temps = document.querySelector("#titre3");

btnCharger.addEventListener("click", () => {
    const cityVal = city.value;
    console.log(cityVal);
    if(city.value === ""){
        throw new Error('Veuillez indiquer la ville');
    }
    getMeteoJson(cityVal).then( data => {
        if(cityVal == data.status !== 200){
            throw new Error("La ville n'est pas répertorié")
        }
        ville.textContent = `Ville : ${data.name}`;
        temperature.textContent = `Température : ${data.main.temp}`;
        temps.textContent = `Temps ${data.weather[0].description}`;

    })
    
})


