class DataCleaner {
  fetchData = async (filter) => {
    const fetchedData = await fetch(`https://swapi.co/api/${filter}`);
    const response = await fetchedData.json();
    const rawData = response.results;

    console.log(rawData)

    switch(filter) {
      case 'people':
          return this.cleanPeopleData(rawData)
          break;
      case 'planets':
          return this.cleanPlanetData(rawData)
          break;
      case 'vehicles':
          return this.cleanVehicleData(rawData)
          break; 
      default:
          null
    }
  };

  cleanPeopleData = async (people) => {
    const unresolvedPeopleData = people.map(async (person, index) => {
      const homeworldData = await this.cleanHomeworldData(person)
      const homeworldName = homeworldData.name;
      const homeworldPopulation = homeworldData.population
      const species = await this.cleanSpeciesData(person)
      
      return {name: person.name, homeworld: homeworldName, 
              species, population: homeworldPopulation, id: `people${index}`, favorite: false}
    });

    return await Promise.all(unresolvedPeopleData)
  };

  cleanHomeworldData = async (person) => {
    const homeworldResponse = await fetch(person.homeworld);
    const homeworldData = await homeworldResponse.json();
    const name = homeworldData.name;
    const population = homeworldData.population

    return { name, population }
  }

  cleanSpeciesData = async (person) => {
    const speciesResponse = await fetch(person.species);
    const speciesData = await speciesResponse.json();
    const species = speciesData.name;

    return species
  }

  cleanPlanetData = async (planets) => {
    const unresolvedPlanetData = planets.map(async (planet, index) => {
    const residentData = await this.cleanResidentsData(planet)

    return {name: planet.name, terrain: planet.terrain, population: planet.population, 
              climate: planet.climate, id: `planets${index}`, favorite: false}
    });

    return await Promise.all(unresolvedPlanetData)
  };

  cleanResidentsData = async (planet) => {
    const unresolvedResidents = planet.residents.map(async (resident, index) => {
      const residentsResponse = await fetch(resident);
      const parsedResidents = await residentsResponse.json();
      return resident.name
    });

    return await Promise.all(unresolvedResidents)
  };

  cleanVehicleData = async (vehicles) => {
    const unresolvedVehiclesData = vehicles.map(async (vehicle, index) => {
      return {name: vehicle.name, model: vehicle.model, class: vehicle.vehicle_class, passengers: vehicle.passengers, id: `vehicles${index}`, favorite: false}
    });

    return await Promise.all(unresolvedVehiclesData)
  };
 
}

export default DataCleaner;