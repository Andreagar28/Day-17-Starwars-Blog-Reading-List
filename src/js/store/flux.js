const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			favorites: [],
			deleteFavourites: []
		},

		actions: {
			// getPeople() {
			//  fetch("https://swapi.dev/api/people/?page=3")
			//      .then(response => {
			//          return response.json();
			//      })
			//      .then(data =>
			//          setStore({
			//              people: data
			//          })
			//      )
			//      .catch(error => {
			//          console.log(error);
			//      });
			// },
			getPeople() {
				Promise.all([
					fetch("https://swapi.dev/api/people/"),
					fetch("https://swapi.dev/api/people/?page=2"),
					fetch("https://swapi.dev/api/people/?page=3"),
					fetch("https://swapi.dev/api/people/?page=4"),
					fetch("https://swapi.dev/api/people/?page=5"),
					fetch("https://swapi.dev/api/people/?page=6"),
					fetch("https://swapi.dev/api/people/?page=7"),
					fetch("https://swapi.dev/api/people/?page=8")
				])
					.then(([res1, res2, res3, res4, res5, res6, res7, res8]) =>
						Promise.all([
							res1.json(),
							res2.json(),
							res3.json(),
							res4.json(),
							res5.json(),
							res6.json(),
							res7.json(),
							res8.json()
						])
					)
					.then(([data1, data2, data3, data4, data5, data6, data7, data8]) =>
						setStore({
							people: data1.results
								.concat(data2.results)
								.concat(data3.results)
								.concat(data4.results)
								.concat(data5.results)
								.concat(data6.results)
								.concat(data7.results)
								.concat(data8.results)
						})
					)
					.catch(error => {
						console.log(error);
					});
			},

			// getPlanets() {
			//  fetch("https://swapi.dev/api/planets/")
			//      .then(response => {
			//          return response.json();
			//      })
			//      .then(data =>
			//          setStore({
			//              planets: data
			//          })
			//      )
			//      .catch(error => {
			//          console.log(error);
			//      });
			// },
			getPlanets() {
				Promise.all([
					fetch("https://swapi.dev/api/planets/"),
					fetch("https://swapi.dev/api/planets/?page=2"),
					fetch("https://swapi.dev/api/planets/?page=3"),
					fetch("https://swapi.dev/api/planets/?page=4"),
					fetch("https://swapi.dev/api/planets/?page=5"),
					fetch("https://swapi.dev/api/planets/?page=6")
				])
					.then(([res1, res2, res3, res4, res5, res6, res7, res8]) =>
						Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json()])
					)
					.then(([data1, data2, data3, data4, data5, data6]) =>
						setStore({
							planets: data1.results
								.concat(data2.results)
								.concat(data3.results)
								.concat(data4.results)
								.concat(data5.results)
								.concat(data6.results)
						})
					)
					.catch(error => {
						console.log(error);
					});
			},
			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},

			setDeleteMyFavourites: deleted => {
				setStore({
					favourites: getStore().favourites.filter(item => item != deleted)
				});
			}
		}
	};
};

export default getState;
