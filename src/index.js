import { h, render, Component } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for routes 
import Main from './views';
import Blog from './views/blog';

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
                <Router onChange={this.handleRoute}>
                    <Main path="/" />
                    <Blog path="/200" />
                    <Blog path="/404" />
                    <Blog path="/blog" />
                </Router>
                <div id='background' />
                <div id='netlify' />
            </div>
        );
    }
}

document.write('<html><body><div id="root"></div></body></html>')

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