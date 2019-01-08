const PubSub = require ('../helpers/pub_sub.js')

const PlanetMenuView = function(menu) {
  this.menu = menu;
}


PlanetMenuView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:all-planets-ready', (event) => {
  console.log('all-planets-ready heard by planet_menu_view.js');
    this.populate(event.detail);

  })

  this.menu.addEventListener('click', (event) => {
    const selectedPlanet = event.target.id;
    PubSub.publish('PlanetMenuView:planet-selected', selectedPlanet);
  });
};

PlanetMenuView.prototype.populate = function (planets) {
  planets.forEach((planet) => {
    const planetLink = document.createElement('a');
    planetLink.id = planet.name;
    planetLink.classList.add('planet-menu-item');
    planetLink.innerText = planet.name;
    this.menu.appendChild(planetLink)

  })
};

module.exports = PlanetMenuView;
