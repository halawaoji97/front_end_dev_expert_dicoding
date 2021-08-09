import CONFIG from '../globals/config';

class DetailRestaurantItem extends HTMLElement {
	/**
	 * @param {any} restaurant
	 */
	set restaurant(restaurant) {
		this._restaurant = restaurant;
		this.render();
	}

	render() {
		this.innerHTML = `
    <article class="detail-restaurant">
      <div tabindex="0" class="body-card">
        <div class="img-restaurant">
        <img class="lazyload" src="./images/placeholder.webp" width="500" height="250" data-src=${
					CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId
				} alt=${this._restaurant.name}>
        </div>
        <div class="rating">
          <p>Rating ${this._restaurant.rating}</p>
        </div>
        <div class="about-restaurant">
          <h2 class="name-resto" tabindex="0">
          <a href="${`/#/detail/${this._restaurant.id}`}">${this._restaurant.name}</a>
          </h2>
          <p class="full-address">${this._restaurant.city}, <span>${
			this._restaurant.address
		}</span></p>
        </div>
      </div>
      <div class="description">
        <div class="categories">
          <h3>Menu Category</h3>
          <ul class="category-menu">
          ${this._restaurant.categories.map((menu) => `<li>${menu.name}</li>`).join(' ')}
          </ul>
        </div>
        <div class="menus">
          <div class="foods-menu">
            <h3>Food</h3>
            <ul>
            ${this._restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join(' ')}
            </ul>
          </div>
          <div class="drinks-menu">
            <h3>Drink</h3>
            <ul>
            ${this._restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join(' ')}
            </ul>
        </div>
      </div>
    </article>
    
    <article class="description-customerReviews">
      <div class="description__text">
          <h3>Description</h3>
          <p>${this._restaurant.description}</p>
      </div>
      <div class="customerReviews">
          <h3>Review</h3>
          ${this._restaurant.customerReviews
						.map(
							(item) => ` 
            <div class="review-item">
              <h4>${item.name}</h4>
              <p>${item.review}</p>
              <span>${item.date}</span>
            </div> 
            `,
						)
						.join(' ')}
      </div>
    </article>
        `;
	}
}

customElements.define('detail-restaurant-item', DetailRestaurantItem);
