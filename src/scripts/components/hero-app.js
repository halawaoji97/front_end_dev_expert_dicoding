class HeroApp extends HTMLElement {
	connectedCallback() {
		this._render();
	}

	_render() {
		this.innerHTML = `
    <div class="text-hero">
        <h1>
        Are you looking for a restaurant for fun? <br />
        don't worry, we have provided it for you.
        </h1>
    </div>
      `;
	}
}

customElements.define('hero-app', HeroApp);
