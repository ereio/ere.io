import { h, render, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';

// Code-splitting is automated for routes
import Tools from './views/home';
import Blog from './views/blog';
import Why from './views/why';

import './index.css';

class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
    handleRoute = e => {
        this.currentUrl = e.url;
    };

    render() {
        return (
            <div id="app">
                <Header path="/" />
                <Router onChange={this.handleRoute}>
                    <Tools path="/tools" />
                    <Blog path="/blog" />
                    <Why path="/why" />
                </Router>
                <div id='background' />
                <div id='netlify' />
            </div>
        );
    }
}

if (document) {
    const rootElement = document.body;
    if (rootElement.hasChildNodes()) {
        render(<App />, rootElement, rootElement.firstElementChild);
    } else {
        render(<App />, rootElement);
    }
} else {
    render(<App />)
}