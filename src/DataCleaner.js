class DataCleaner {
  fetchData = async (filter) => {
    const peopleData = await fetch(`https://swapi.co/api/${filter}`)
    const response = await peopleData.json()
    const rawData = await response.results

    switch(filter) {
      case 'people':
          this.cleanPeopleData(rawData)
          break;
      default:
          null
  }

  };

  fetchPeopleData = (people) => {
    const unresolvedPeopleData = people.map(async (person) => {
      const response = await fetch(person.homeworld);
      const parsedHomeworld = await response.json();

      return {name: person.name, homeworld: parsedHomeworld.name}
    });

    return Promise.all(unresolvedPeopleData)
  }

  cleanPeopleData = async (rawData) => {
    const people = await this.fetchPeopleData(rawData)
  }

}

export default DataCleaner;


// fetchBios = (staffMembers) => {
//   const unresolvedBios = staffMembers.map(async (staffMember) => {
//     const response = await fetch(staffMember.info);
//     const parsedData = await response.json();
//     return {...parsedData, name: staffMember.name}
//   });

//   return Promise.all(unresolvedBios)
// }

// componentDidMount = async () => {
//   const url = "http://localhost:3001/api/frontend-staff"
//   const response = await fetch(url)
//   const parsedData = await response.json();
//   const staff = await this.fetchBios(parsedData.bio)

//   this.setState({ staff })
// }
