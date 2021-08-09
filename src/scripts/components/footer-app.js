class FooterApp extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="list-footer">
        <div class="brand">
          <a class="logo" href="/">
            <img src="./logo goeat.png" alt="Go eat" />
          </a>
        </div>
        <ul>
          <li><a href="#">Carrer</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>
      <div class="copyright">
        <p>Copyright &copy; 2021 - Goeat</p>
      </div>
        `;
	}
}

customElements.define('footer-app', FooterApp);
