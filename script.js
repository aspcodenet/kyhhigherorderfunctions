import { countries } from "./data.js";

console.log(countries.length)


countries.sort( (a, b) => {
    return b.population - a.population
  })

// let i = 0;
// setInterval( ()=>{
//     refreshPlayers()
// } ,60000 );



// function add(tal1,tal2,namn) {
//     if(namn == "Stefan") return tal1+tal2;
//     return tal1-tal2;
// }


// //Higher order functions
// // FUNKTIONER - återanvända bra algoritmer/logik - vi skickar in en FUNKTION som parameter till
// // en funktion
// // och/eller en funktion som returnerar en funktion


// //Ta fram alla countries som har population > 450 000 000

// let filtered = []
// for(let i = 0; i < countries.length; i++){
//     const country =  countries[i];
//     if (country.population > 450000000){
//         filtered.push(country)
//     }
// }

// console.log(filtered)


// filtered = []
// for(let i = 0; i < countries.length; i++){
//     const country =  countries[i];
//     if (country.name.startsWith('C')){
//         filtered.push(country)
//     }
// }



// //Coola saker i C#, LINQ = 
// // Where   ...     innehåller en forloop och  kör vår funktion en gång per item - return true 
// // var filtered = countries.Where( country => country.population > 450000000 || country.name == 'Sweden'  );
// filtered = countries.filter(country => {
//     if(country.name == 'Sweden') return;
//     return country.population > 450000000 ;
// });
// console.log(filtered)

// // Select   ...     innehåller en forloop och  kör vår funktion en gång per item som ska 
                    //göra om objektet till
//             // ngt annat

// var res = countries.Select(country=>new { Namn: country.name, Pop: country.population * 10 })
let resultatet = countries.map( country => {
    let obj = {}
    obj.Namn = country.name,
    obj.Pop = country.population,
    obj.NamnLength = country.name.length;
    return obj;
    } );
console.log(resultatet)
// // Båda returnerar en ny "lista"            


resultatet = countries.map( country => {
    return {
        Namn : country.name,
        Pop : country.population,
        NamnLength : country.name.length
        };
    } );
console.log(resultatet)




// countries.forEach( (country) => {
//     console.log(country.capital);
//     if(country.name.startsWith("C"))
//         console.log(country.name)
//     } )



// listLink.addEventListener("click",()=>{ 
//     showSection('sectionList');    
// });







// let items = [3,4,5]

// //Skapa en lista där alla tal är plussade med 10
 let newResult = items.map( tal=>tal+10 )
// console.log(newResult)

// // console.log(result31)
// // map
// // var result = countries.Select(country=>new {  country.population, country.name })
// let result3 = countries.map(( country) => {
//     return {
//          population: country.population,
//          name:  country.name
//     };
//     // const obj = {}
//     // obj.population = country.population
//     // obj.name =  country.name
//     // return obj;
// })


// console.log(result3)


// // // let i = 0;
// // // function sayHello() {
// // //     i = i +1 ;
// // //     console.log('Hello ' + i)
// // //   }
// // // setInterval(sayHello, 5000) // it prints hello in every second, 1000ms is 1s


// // //setInterval(refreshItems, 60000) // it prints hello in every second, 1000ms is 1s


// //  //Ta fram alla countries som har population > 450 000 000

// //  let result = countries.filter( (country)=>country.population > 450000000  );
// //  let result = countries.filter( (country)=>{return country.population > 450000000;}  );

// // let result2 = countries.filter((country) => {
// //     if (country.population > 450000000) return true;
// //     return false;
// // });




// //  //  var result = countries.Where( c => c.population > 450000000 ).    


// // // function addTal(tal, tal2, namn){
// // //     if(namn == 'Stefan') return tal -tal2;
// // //     return tal+tal2;
// // // }
// // // const result = addTal(1,8, 'Stefan')
// // // const result2 = addTal(10,3,'Kalle')



// // // function filterCountries(countries,something){
// // //     let filtered = []
// // //     for(let i = 0; i < countries.length; i++){
// // //         const country =  countries[i];
// // //         if (something(country)){
// // //             filtered.push(country)
// // //         }
// // //     }
// // //     return filtered;
    
// // // }

// // // let res = filterCountries(countries, (country)=> country.population > 450000000  );
// // // let res2 = filterCountries(countries, (country)=> country.name.startsWith('C'));


// // // //Ta fram alla countries som har population > 450 000 000
// // // let filtered = []
// // // for(let i = 0; i < countries.length; i++){
// // //     const country =  countries[i];
// // //     if (country.population > 450000000){
// // //         filtered.push(country)
// // //     }
// // // }


// // // filtered = []
// // // for(let i = 0; i < countries.length; i++){
// // //     const country =  countries[i];
// // //     if (country.name.startsWith('C')){
// // //         filtered.push(country)
// // //     }
// // // }


// // // console.log(filtered)
