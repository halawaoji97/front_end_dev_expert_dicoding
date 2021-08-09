import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-db';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
	await LikeButtonInitiator.init({
		likeButtonContainer: document.querySelector('#likeButtonContainer'),
		favoriteRestaurants: FavoriteRestaurantIdb,
		restaurant,
	});
};
export { createLikeButtonPresenterWithRestaurant };
