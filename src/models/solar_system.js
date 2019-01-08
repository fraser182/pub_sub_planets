const PubSub = require ('../helpers/pub_sub.js');


const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.publish('SolarSystem:all-planets-ready', this.planets)


  PubSub.subscribe('PlanetMenuView:planet-selected', (event) => {
    const chosenPlanetName = event.detail;
    const selectedPlanetObject = this.findByName(chosenPlanetName);
    PubSub.publish('SolarSystem:planet-found', selectedPlanetObject);
  });
};



SolarSystem.prototype.findByName = function (searchName) {
  const foundPlanet = this.planets.find((planet) => {
    return planet.name === searchName;
  })
  return foundPlanet;
};


module.exports = SolarSystem;
