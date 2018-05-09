class DataCleaner {
  fetchData = async (filter) => {
    const peopleData = await fetch(`https://swapi.co/api/${filter}`);
    const response = await peopleData.json();
    const rawData = await response.results;

    switch(filter) {
      case 'people':
          return this.cleanPeopleData(rawData)
          break;
      case 'planets':
          return this.cleanPlanetData(rawData)
          break;
      default:
          null
    }

  };

  cleanPeopleData = async (people) => {
    const unresolvedPeopleData = people.map(async (person) => {
      const homeworldResponse = await fetch(person.homeworld);
      const parsedHomeworld = await homeworldResponse.json();
      const speciesResponse = await fetch(person.species);
      const parsedSpecies = await speciesResponse.json();

      return {name: person.name, homeworld: parsedHomeworld.name, 
              species: parsedSpecies.name, population: parsedHomeworld.population}
    });

    return await Promise.all(unresolvedPeopleData)
  };

  cleanPlanetData = async (planets) => {
    const unresolvedPlanetData = planets.map(async (planet) => {
    const residentData = await this.cleanResidentsData(planet)

    return {name: planet.name, terrain: planet.terrain, population: planet.population, 
              climate: planet.climate}
    });

    return await Promise.all(unresolvedPlanetData)
  };

  cleanResidentsData = async (planet) => {
    const unresolvedResidents = planet.residents.map(async (resident) => {
      const residentsResponse = await fetch(resident);
      const parsedResidents = await residentsResponse.json();
      return resident.name
    });

    return await Promise.all(unresolvedResidents)
  };
 
}

export default DataCleaner;