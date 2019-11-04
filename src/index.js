import { h, render, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';

// Code-splitting is automated for routes
import Home from './views/home';
import Why from './views/why';
import Work from './views/work';
import Blog from './views/blog';
import Contact from './views/contact';

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
                <Header />
                <Router onChange={this.handleRoute}>
                    {/* <Home path="/" />
                    <Why   />
                    <Work path="/work" />
                    <Blog path="/blog" />
                    <Contact path="/contact" /> */}
                </Router>
                <div id='background' />
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