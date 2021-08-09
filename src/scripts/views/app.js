import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
	constructor({ button, drawer, content, link }) {
		this._button = button;
		this._drawer = drawer;
		this._content = content;
		this._link = link;

		this._initialAppShell();
	}

	_initialAppShell() {
		DrawerInitiator.init({
			button: this._button,
			drawer: this._drawer,
			content: this._content,
			link: this._link,
		});
	}

	async renderPage() {
		let url = UrlParser.parseActiveUrlWithCombiner();
		if (!(url in routes)) {
			window.location.hash = '#/404';
			url = UrlParser.parseActiveUrlWithCombiner();
		}
		const page = routes[url];
		this._content.innerHTML = await page.render();
		await page.afterRender();
	}
}

export default App;
