class DataCleaner {
  fetchData = async (filter) => {
    const peopleData = await fetch(`https://swapi.co/api/${filter}`);
    const response = await peopleData.json();
    const rawData = await response.results;

    switch(filter) {
      case 'people':
          return this.cleanPeopleData(rawData)
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
}

export default DataCleaner;