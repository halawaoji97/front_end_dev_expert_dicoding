import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
	set restaurant(restaurant) {
		this._restaurant = restaurant;
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="body-card">
            <a href=${`/#/detail/${this._restaurant.id}`}>
                <img class="lazyload" src="./images/placeholder.webp" width="500" height="250" data-src=${
									CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId
								} alt=${this._restaurant.name}>
            </a>
            <div class="rating">
                <p>Rating ${this._restaurant.rating}</p>
            </div>
        </div>
        
        <div class="foooter-card">
            <h2 class="name-resto">
                <a href=${`/#/detail/${this._restaurant.id}`}>${this._restaurant.name}</a>
            </h2>
            <p class="city">${this._restaurant.city}</p>
            <p class="desc">${this._restaurant.description}</p>
        </div>
        `;
	}
}

customElements.define('restaurant-item', RestaurantItem);
