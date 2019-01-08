const PubSub = require ('../helpers/pub_sub.js')

const PlanetDetailsView = function(container) {
  this.container = container;
}

PlanetDetailsView.prototype.bindEvents = function () {
  // console.log("test")
  PubSub.subscribe('SolarSystem:planet-found', (event) => {



    const planetObject = event.detail;
    this.render(planetObject);
    console.log('planet-found HEARD by planet_details_view');

  })
};

PlanetDetailsView.prototype.render = function(planet){
  this.container.innerHTML ='';

  const heading = this.createHeading(planet);
  const infoList = this.createInfoList(planet);


  this.container.appendChild(heading);
  this.container.appendChild(infoList);
};

PlanetDetailsView.prototype.createHeading = function(planet){
  const heading = document.createElement('h3');
  heading.textContent = planet.name;
  return heading;
};



PlanetDetailsView.prototype.createInfoList = function(planet){
const infoList = document.createElement('ul');

const liSpeed = this.createLi(`Orbit: ${planet.orbit}`, infoList);
const liClass = this.createLi(`Day: ${planet.day}`, infoList);
return infoList;
};

PlanetDetailsView.prototype.createLi = function(textContent, ul) {
const li = document.createElement('li');
li.textContent = textContent;
ul.appendChild(li);
};


module.exports = PlanetDetailsView;
