export const mockCleanedVehicleData = {
    class: "sail barge",
    id: "vehicles0",
    model: "Modified Luxury Sail Barge",
    name: "Sail barge",
    passengers: "500"
}

export const mockCleanedPeopleData = {
  homeworld: "Tatooine",
  id: "people0",
  name: "Luke Skywalker",
  population: "200000",
  species: "Human"
}

export const mockCleanedPlanetData = {
  climate: "temperate",
  id: "planets0",
  name: "Alderaan",
  residents: "Alderaan",
  population: "2000000000",
  terrain: "grasslands, mountains"
}

export const mockDirtyPlanetData = {
  "count": 61,
  "next": "https://swapi.co/api/planets/?page=2",
  "previous": null,
  "results": [
      {
        "name": "Alderaan",
        "rotation_period": "24",
        "orbital_period": "364",
        "diameter": "12500",
        "climate": "temperate",
        "gravity": "1 standard",
        "terrain": "grasslands, mountains",
        "surface_water": "40",
        "population": "2000000000",
        "residents": [
            "https://swapi.co/api/people/5/",
            "https://swapi.co/api/people/68/",
            "https://swapi.co/api/people/81/"
        ],
        "films": [
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T11:35:48.479000Z",
        "edited": "2014-12-20T20:58:18.420000Z",
        "url": "https://swapi.co/api/planets/2/"
      }
    ]
  }

export const mockDirtyPeopleData = {
  "count": 87,
  "next": "https://swapi.co/api/people/?page=2",
  "previous": null,
  "results": [
      {
          "name": "Luke Skywalker",
          "height": "172",
          "mass": "77",
          "hair_color": "blond",
          "skin_color": "fair",
          "eye_color": "blue",
          "birth_year": "19BBY",
          "gender": "male",
          "homeworld": "https://swapi.co/api/planets/1/",
          "films": [
              "https://swapi.co/api/films/2/",
              "https://swapi.co/api/films/6/",
              "https://swapi.co/api/films/3/",
              "https://swapi.co/api/films/1/",
              "https://swapi.co/api/films/7/"
          ],
          "species": [
              "https://swapi.co/api/species/1/"
          ],
          "vehicles": [
              "https://swapi.co/api/vehicles/14/",
              "https://swapi.co/api/vehicles/30/"
          ],
          "starships": [
              "https://swapi.co/api/starships/12/",
              "https://swapi.co/api/starships/22/"
          ],
          "created": "2014-12-09T13:50:51.644000Z",
          "edited": "2014-12-20T21:17:56.891000Z",
          "url": "https://swapi.co/api/people/1/"
      }
  ]
}

export const mockDirtyVehicleData = {
  "count": 39,
  "next": "https://swapi.co/api/vehicles/?page=2",
  "previous": null,
  "results": [
      {
          "name": "Sail barge",
          "model": "Modified Luxury Sail Barge",
          "manufacturer": "Ubrikkian Industries Custom Vehicle Division",
          "cost_in_credits": "285000",
          "length": "30",
          "max_atmosphering_speed": "100",
          "crew": "26",
          "passengers": "500",
          "cargo_capacity": "2000000",
          "consumables": "Live food tanks",
          "vehicle_class": "sail barge",
          "pilots": [],
          "films": [
              "https://swapi.co/api/films/3/"
          ],
          "created": "2014-12-18T10:44:14.217000Z",
          "edited": "2014-12-22T18:21:15.807906Z",
          "url": "https://swapi.co/api/vehicles/24/"
      }
  ]
}

export const mockDirtyHomeworldData = {
  "name": "Tatooine",
  "rotation_period": "23",
  "orbital_period": "304",
  "diameter": "10465",
  "climate": "arid",
  "gravity": "1 standard",
  "terrain": "desert",
  "surface_water": "1",
  "population": "200000",
  "residents": [
      "https://swapi.co/api/people/1/",
      "https://swapi.co/api/people/2/",
      "https://swapi.co/api/people/4/",
      "https://swapi.co/api/people/6/",
      "https://swapi.co/api/people/7/",
      "https://swapi.co/api/people/8/",
      "https://swapi.co/api/people/9/",
      "https://swapi.co/api/people/11/",
      "https://swapi.co/api/people/43/",
      "https://swapi.co/api/people/62/"
  ],
  "films": [
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
  ],
  "created": "2014-12-09T13:50:49.641000Z",
  "edited": "2014-12-21T20:48:04.175778Z",
  "url": "https://swapi.co/api/planets/1/"
}

export const mockDirtySpeciesData = {
  "name": "Droid",
  "classification": "artificial",
  "designation": "sentient",
  "average_height": "n/a",
  "skin_colors": "n/a",
  "hair_colors": "n/a",
  "eye_colors": "n/a",
  "average_lifespan": "indefinite",
  "homeworld": null,
  "language": "n/a",
  "people": [
      "https://swapi.co/api/people/2/",
      "https://swapi.co/api/people/3/",
      "https://swapi.co/api/people/8/",
      "https://swapi.co/api/people/23/",
      "https://swapi.co/api/people/87/"
  ],
  "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/7/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
  ],
  "created": "2014-12-10T15:16:16.259000Z",
  "edited": "2015-04-17T06:59:43.869528Z",
  "url": "https://swapi.co/api/species/2/"
}

export const mockDirtyFilmsData = [
    {
        "title": "A New Hope",
        "episode_id": 4,
        "opening_crawl": "It is a period of civil war to the galaxy....",
        "director": "George Lucas",
        "producer": "Gary Kurtz, Rick McCallum",
        "release_date": "1977-05-25",
        "characters": [
            "https://swapi.co/api/people/1/",
            "https://swapi.co/api/people/2/"
        ],
        "planets": [
            "https://swapi.co/api/planets/2/"
        ],
        "starships": [
            "https://swapi.co/api/starships/2/",
            "https://swapi.co/api/starships/3/",
            "https://swapi.co/api/starships/5/"
        ],
        "vehicles": [
            "https://swapi.co/api/vehicles/4/"
        ],
        "species": [
            "https://swapi.co/api/species/5/",
            "https://swapi.co/api/species/3/"
        ],
        "created": "2014-12-10T14:23:31.880000Z",
        "edited": "2015-04-11T09:46:52.774897Z",
        "url": "https://swapi.co/api/films/1/"
    }
]

export const mockDirtyResidentData = {

}