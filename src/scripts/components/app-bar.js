class AppBar extends HTMLElement {
	connectedCallback() {
		this._render();
	}

	_render() {
		this.innerHTML = `
        <div class="brand">
          <a class="logo" href="/">
            <img src="./logo goeat.png" alt="Go eat" />
          </a>
        </div>
        <div class="menu-button">
          <button id="hamburgerButton" title="menu" aria-label="menu">☰</button>
        </div>
        <nav id="navigationDrawer" class="navigation">
          <ul class="nav-list">
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://www.instagram.com/halawa_oji" target="_blank" rel="noopener">about</a></li>
          </ul>
        </nav>
    `;
	}
}

customElements.define('app-bar', AppBar);
