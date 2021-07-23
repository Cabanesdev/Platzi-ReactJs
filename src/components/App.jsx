import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import BadgeNew from '../pages/BadgeNew.jsx';
import Badges from '../pages/Badges.jsx';
import NotFound from '../pages/NotFound.jsx';
import Home from '../pages/Home.jsx';
function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Layout>
						<Home />
					</Layout>
				</Route>
				<Route exact path='/badges'>
					<Layout>
						<Badges />
					</Layout>
				</Route>
				<Route exact path='/badges/new'>
					<Layout>
						<BadgeNew />
					</Layout>
				</Route>
				<Route exact path='/badges/:badgeId/edit'>
					<Layout>
						<BadgeNew />
					</Layout>
				</Route>
				<Route component={NotFound} />
				<Redirect from='*' to='/404' />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
