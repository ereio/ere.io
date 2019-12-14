import { h, render, Component } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for routes 
import Home from './views/home';
import Blog from './views/blog';
import Post from './views/blog/post';
import Things from './views/things';

import 'normalize.css';
import './index.css';

function hydrate(vnode, parent) {
    return render(vnode, parent, parent.firstElementChild);
}

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
                    <Home path="/" default />
                    <Home path="/me" />
                    <Things path="/things" />
                    <Things path="/things/:thing" />
                    <Things path="/things/:thing?" />
                    <Blog path="/blog" />
                    <Post path="/blog/:post" />
                </Router>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}