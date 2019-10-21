'use strict'
module.exports = class Planet{
    constructor(name, population){
        this.name = name;
        this.population = population;
    }
    static countPlanetsPopulation(planet){
        let totalePopulation = 0 ;
        planet.forEach(plan => {
            if (plan.population !== 'unknown'){
                totalePopulation += parseInt(plan.population);
            }
        });
        return totalePopulation;
    }
}
