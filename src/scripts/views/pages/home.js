import DataSource from '../../data/data-source';
import '../../components/list-restaurant';
import '../../components/hero-app';

const CatalogueRestaurant = {
	async render() {
		return `
      <hero-app class="hero"></hero-app>
      <section class="catalogue-restaurants">
        <h1 class="headline">Explore Restoran</h1>
        <list-restaurant></list-restaurant>
      </section>
    `;
	},

	async afterRender() {
		const listRestaurantsContainer = document.querySelector('list-restaurant');
		const restaurants = await DataSource.catalogueRestaurantsSource();
		console.log(restaurants);
		listRestaurantsContainer.restaurants = restaurants;
	},
};

export default CatalogueRestaurant;
