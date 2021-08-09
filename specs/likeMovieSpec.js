// import LikeButtonInitiator from './../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-db';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
	const addLikeButtonContainer = () => {
		document.body.innerHTML = '<div id="likeButtonContainer"></div>';
	};

	beforeEach(() => {
		addLikeButtonContainer();
	});

	it('Should show the like button when the restaurant has not been liked before', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

		expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
	});

	it('Should not show the unlike button when the restaurant has not been liked before', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

		expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
	});

	it('Should be able to like the movie', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));
		const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

		expect(restaurant).toEqual({ id: 1 });

		FavoriteRestaurantIdb.deleteRestaurant(1);
	});

	it('Should not add a movie again when its already liked', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

		await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

		FavoriteRestaurantIdb.deleteRestaurant(1);
	});

	it('Should not add a movie when it has no id', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({});

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
	});
});
