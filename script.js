import { countries } from "./data.js";

console.log(countries.length)

function addTal(){
    return 12+11;
}

const result = addTal()

//Ta fram alla countries som har population > 450 000 000
let filtered = []
for(let i = 0; i < countries.length; i++){
    const country =  countries[i];
    if (country.population > 450000000){
        filtered.push(country)
    }
}

console.log(filtered)
