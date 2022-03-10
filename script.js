import { countries } from "./data.js";

console.log(countries.length)



// countries.forEach( (country) => {
//     console.log(country.capital);
//     if(country.name.startsWith("C"))
//         console.log(country.name)
//     } )



// map
// var result = countries.Select(country=>new {  country.population, country.name })
let result3 = countries.map(( country) => {
    const obj = {}
    obj.population = country.population
    obj.name =  country.name
    return obj;
})
console.log(result3)


// // let i = 0;
// // function sayHello() {
// //     i = i +1 ;
// //     console.log('Hello ' + i)
// //   }
// // setInterval(sayHello, 5000) // it prints hello in every second, 1000ms is 1s


// //setInterval(refreshItems, 60000) // it prints hello in every second, 1000ms is 1s


//  //Ta fram alla countries som har population > 450 000 000

//  let result = countries.filter( (country)=>country.population > 450000000  );

// let result2 = countries.filter((country) => {
//     if (country.population > 450000000) return true;
//     return false;
// });




//  //  var result = countries.Where( c => c.population > 450000000 ).    


// // function addTal(tal, tal2, namn){
// //     if(namn == 'Stefan') return tal -tal2;
// //     return tal+tal2;
// // }
// // const result = addTal(1,8, 'Stefan')
// // const result2 = addTal(10,3,'Kalle')



// // function filterCountries(countries,something){
// //     let filtered = []
// //     for(let i = 0; i < countries.length; i++){
// //         const country =  countries[i];
// //         if (something(country)){
// //             filtered.push(country)
// //         }
// //     }
// //     return filtered;
    
// // }

// // let res = filterCountries(countries, (country)=> country.population > 450000000  );
// // let res2 = filterCountries(countries, (country)=> country.name.startsWith('C'));


// // //Ta fram alla countries som har population > 450 000 000
// // let filtered = []
// // for(let i = 0; i < countries.length; i++){
// //     const country =  countries[i];
// //     if (country.population > 450000000){
// //         filtered.push(country)
// //     }
// // }


// // filtered = []
// // for(let i = 0; i < countries.length; i++){
// //     const country =  countries[i];
// //     if (country.name.startsWith('C')){
// //         filtered.push(country)
// //     }
// // }


// // console.log(filtered)
