const NotFound = {
	async render() {
		return `
      <div class="container-not-found">
            <div class="error-404">Error 404</div>
            <p>Page not found!</p>
            <a class="back-to-home" href="#/home">Back To Home</a>
      </div>
          `;
	},
};

export default NotFound;
