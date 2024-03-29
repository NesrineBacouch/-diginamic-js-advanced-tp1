const axios = require('axios');
let Planet = require('./planet');

let promesse = new Promise((resolve, reject) => {
    let planet = [] ;
    axios.get('https://swapi.co/api/planets/')
    .then((response) => {
        let resultats = response.data.results; 
        resultats.forEach(plan => {
            planet.push(new Planet(plan.name, plan.population));
        });
        resolve(planet);   
    })
    .catch(function (error) {
        console.log(error);
    })
});
promesse.then((data) => {
    console.log(data);
    console.log("Population totale : " + Planet.countPlanetsPopulation(data));    
});

