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
			getPeople() {
				fetch("https://swapi.dev/api/people/")
					.then(response => {
						return response.json();
					})
					.then(data =>
						setStore({
							people: data
						})
					)
					.catch(error => {
						console.log(error);
					});
			},

			getPlanets() {
				fetch("https://swapi.dev/api/planets/")
					.then(response => {
						return response.json();
					})
					.then(data =>
						setStore({
							planets: data
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
