import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';
import NotFound from '../views/pages/404';

const routes = {
	'/': Home,
	'/home': Home,
	'/detail/:id': Detail,
	'/favorite': Favorite,
	'/404': NotFound,
};

export default routes;
