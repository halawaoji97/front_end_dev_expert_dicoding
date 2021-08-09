import FavoriteRestaurantIdb from '../../data/favorite-restaurant-db';
import '../../components/list-restaurant';

const Favorite = {
	async render() {
		return `
      <section class="catalogue-restaurants">
        <h1 class="headline">Your Favorite Restaurant</h1>
        <list-restaurant></list-restaurant>
      </section>
`;
	},

	async afterRender() {
		const listRestaurantsContainer = document.querySelector('list-restaurant');
		const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
		const restaurantsLength = restaurants.length;
		if (restaurantsLength === 0) {
			listRestaurantsContainer.innerHTML =
				'<p class="no-have">Opsss,,, You don\'t have any favorite restaurant yet!</p>';
		} else {
			listRestaurantsContainer.restaurants = restaurants;
		}
	},
};

export default Favorite;
