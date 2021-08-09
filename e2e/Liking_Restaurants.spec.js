const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
	I.amOnPage('/#/favorite');
});
const firstCondition = "Opsss,,, You don't have any favorite restaurant yet!";

Scenario('showing empty favorite restaurant', ({ I }) => {
	I.seeElement('list-restaurant');
	I.see(firstCondition, 'list-restaurant');
});

Scenario('Liking one of restaurants', async ({ I }) => {
	I.see(firstCondition, 'list-restaurant');

	I.amOnPage('/');

	I.seeElement('.name-resto a');
	const firstCard = locate('.name-resto a').first();
	const firstCardTitle = await I.grabTextFrom(firstCard);
	I.click(firstCard);

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/favorite');
	I.seeElement('restaurant-item');
	const likedCardTitle = await I.grabTextFrom('.name-resto');

	assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one of restaurants', async ({ I }) => {
	I.see(firstCondition, 'list-restaurant');
	I.amOnPage('/');

	I.seeElement('.name-resto a');
	const firstCard = locate('.name-resto a');
	const firstCardTitle = await I.grabTextFrom(firstCard);
	I.click(firstCard);

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/favorite');
	I.seeElement('restaurant-item');
	const likedCardTitle = await I.grabTextFrom('.name-resto');
	assert.strictEqual(firstCardTitle, likedCardTitle);

	I.click(likedCardTitle);

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/favorite');
	I.seeElement('list-restaurant');
	const noFavRestaurant = await I.grabTextFrom('list-restaurant');

	assert.strictEqual(noFavRestaurant, firstCondition);
});
