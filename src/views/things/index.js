import { h } from 'preact';
import Marked from 'marked';
import Match, { Link } from 'preact-router/match';

// Components
import Header from '../../global/components/header';

// Styling
import style from './style.css';

// Static Data
import thingsJson from '../../static/all-things.json';

// External Implicit Imports
import '../../static/prism.css';
import '../../static/prism.js';


// Personal Knowledge Base
// https://alligator.io/css/css-grid-layout-fr-unit/

/*
<div>
 <div class={style.search} contenteditable="true">
	Search Topics
</div> 
*/
const Things = () => {
	const things = thingsJson.map((json) => JSON.parse(json));
	/*
	  const renderSearch = () => {
		  const options = things.map(thing =>
			  <Link activeClass={style.activeTopic} href={`/things/${thing.name}`}>
				  <div class={style.topic}>
					  <h4 style={{ textAlign: 'start' }}>{thing.name}</h4>
				  </div>
			  </Link>
		  )
  
		  return (
			  <form action="/things">
				  <datalist id="things" style={{ display: 'inherit' }}>
					  {options}
				  </datalist>
			  </form >
		  )
	  }
	  */


	const renderThingList = () => {
		return things.map((thing) => {
			const slug = thing.name.toLowerCase().replace(/ /g, '-');
			return (
				<Link activeClassName={style.current} href={`/things/${slug}`}>
					<h4 class={style.topic}>
						{thing.name}
					</h4>
				</Link>
			)
		});
	};

	const renderThing = (args) => {
		const { matches, path } = args;
		const paths = path.split(/\/|\?/g);
		const slug = paths[paths.length - 1];
		const thing = things.find((thing) => thing.name === slug)

		return matches ?
			(<h3 style={{ gridArea: 'main', textAlign: 'left' }}>
				{'Welcome to my personal knowlege base'}
			</h3>) :
			(<div style={{ gridArea: 'main' }}>
				<div class={style.content}>
					<span dangerouslySetInnerHTML={{ __html: Marked(thing.notes) }} />
				</div>
			</div>)
	}

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			height: '100vh'
		}}>
			<Header />
			<main class={style.main}>
				<input id="collapse-toggle" class={style.toggleInput} type="checkbox" />
				<label for="collapse-toggle" class={style.toggle} />
				<div class={style.topics}>
					{renderThingList()}
				</div>
				<Match path="/things">
					{renderThing}
				</Match>
			</main>
		</div>
	)
}

export default Things;
