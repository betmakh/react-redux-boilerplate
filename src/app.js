import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import store from './store.js';
import Quesstionnaire from './components/Questionnaire.jsx';
import MainPageContainer from './containers/RootContainer.jsx';

const browserHistory = createBrowserHistory();

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<HashRouter>
						<Switch>
							<Route exact path="/" component={MainPageContainer} />
						</Switch>
					</HashRouter>
				</Router>
			</Provider>
		);
	}
}

const renderApp = () => {
	render(<App />, document.getElementById('root'));
};
renderApp();
