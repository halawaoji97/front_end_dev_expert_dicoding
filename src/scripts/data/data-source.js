import API_ENDPOINTS from '../globals/api-endpoints';
import CONFIG from '../globals/config';

class DataSource {
	static async catalogueRestaurantsSource() {
		const response = await fetch(API_ENDPOINTS.HOME);
		const responseJson = await response.json();
		return responseJson.restaurants;
	}

	static async detailRestaurant(id) {
		const response = await fetch(API_ENDPOINTS.DETAIL(id));
		return response.json();
	}

	static async addReview(review) {
		const getReview = await fetch(API_ENDPOINTS.POST_REVIEW, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': CONFIG.KEY,
			},
			body: JSON.stringify(review),
		});
		return getReview;
	}
}

export default DataSource;
