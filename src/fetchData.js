import DataCleaner from '../../../DataCleaner';

const dataCleaner = new DataCleaner();

const fetchData = async (filter) => {
  const peopleData = await fetch(`https://swapi.co/api/${filter}`);
  const response = await peopleData.json();
  const rawData = await response.results;

  switch(filter) {
    case 'people':
        return dataCleaner.cleanPeopleData(rawData)
        break;
    case 'planets':
        return dataCleaner.cleanPlanetData(rawData)
        break;
    case 'vehicles':
        return dataCleaner.cleanVehicleData(rawData)
        break; 
    default:
        null
  }
};

export default fetchData;