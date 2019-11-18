import { h, render, Component } from 'preact';
import { Router } from 'preact-router';
import Match from 'preact-router/match';

import Header from './components/header';
import Omniheader from './components/omni-header';

// Code-splitting is automated for routes 
import Blog from './views/blog';
import Me from './views/me';

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
                <Match path="*">
                    {({ matches, path, url }) => path === '/' ? <Header /> : <Omniheader />}
                </Match>
                <Router onChange={this.handleRoute}>
                    <Blog path="/blog" />
                    <Me path="/why" />
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