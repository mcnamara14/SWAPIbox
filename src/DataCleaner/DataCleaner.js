class DataCleaner {
  fetchData = async (filter) => {
    const fetchedData = await fetch(`https://swapi.co/api/${filter}`);
    const response = await fetchedData.json();
    const rawData = response.results;

    switch (filter) {
      case 'people':
        return this.cleanPeopleData(rawData);
      case 'planets':
        return this.cleanPlanetData(rawData);
      case 'vehicles':
        return this.cleanVehicleData(rawData);
    }
  };

  cleanPeopleData = async (people) => {
    const unresolvedPeopleData = people.map(async (person, index) => {
      const name = person.name;
      const homeworldData = await this.cleanHomeworldData(person.homeworld);
      const homeworldName = homeworldData.name;
      const homeworldPopulation = homeworldData.population;
      const species = await this.cleanSpeciesData(person.species);
      
      return {name, homeworld: homeworldName, 
        species, population: homeworldPopulation, id: `people${index}`};
    });

    return await Promise.all(unresolvedPeopleData);
  };

  cleanHomeworldData = async (homeworld) => {
    const homeworldResponse = await fetch(homeworld);
    const homeworldData = await homeworldResponse.json();
    const name = homeworldData.name;
    const population = homeworldData.population;

    return { name, population };
  }

  cleanSpeciesData = async (species) => {
    const speciesResponse = await fetch(species);
    const speciesData = await speciesResponse.json();
    const speciesName = speciesData.name;

    return speciesName;
  }

  cleanPlanetData = async (planets) => {
    const unresolvedPlanetData = planets.map(async (planet, index) => {
      const residents = await this.cleanResidentsData(planet);
 
      return {name: planet.name, terrain: planet.terrain, 
        population: planet.population, climate: planet.climate, 
        residents,  id: `planets${index}`};
    });

    return await Promise.all(unresolvedPlanetData);
  };

  cleanResidentsData = async (planet) => {
    const unresolvedResidents = planet.residents.map(async (resident) => {
      const residentsResponse = await fetch(resident);
      const parsedResident = await residentsResponse.json();
      const residentName = parsedResident.name;

      return residentName;
    });

    return await Promise.all(unresolvedResidents);
  };

  cleanVehicleData = async (vehicles) => {
    const unresolvedVehiclesData = vehicles.map(async (vehicle, index) => {
      return {name: vehicle.name, model: vehicle.model, 
        class: vehicle.vehicle_class, passengers: vehicle.passengers, 
        id: `vehicles${index}`};
    });

    return await Promise.all(unresolvedVehiclesData);
  }
 
}

export default DataCleaner;