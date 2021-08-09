import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import '../../components/detail-restaurant-item';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-db';

const Detail = {
	async render() {
		return `
      <section class="detail-restaurants">
        <h1 class="headline">About Restaurant</h1>
        <detail-restaurant-item></detail-restaurant-item>
        <div id="likeButtonContainer"></div>
      </section>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurants = await DataSource.detailRestaurant(url.id);

		const detailContainer = document.querySelector('detail-restaurant-item');
		detailContainer.restaurant = restaurants.restaurant;

		LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			favoriteRestaurants: FavoriteRestaurantIdb,
			restaurant: {
				id: restaurants.restaurant.id,
				pictureId: restaurants.restaurant.pictureId,
				name: restaurants.restaurant.name,
				rating: restaurants.restaurant.rating,
				city: restaurants.restaurant.city,
				address: restaurants.restaurant.address,
				description: restaurants.restaurant.description,
			},
		});
	},
};

export default Detail;
