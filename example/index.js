/** @jsx createElem */
import {render, createElem} from '../gomi/domManipulation.js';

const content = (
	<div>
		<h1>Welcome</h1>
		<p>Welcome to this example webpage! This is meant to illustrate the Gomi framework.</p>
		<ul>
			<li>List item 1</li>
			<li>List item 2</li>
			<li>List item 3</li>
		</ul>
	</div>
)

render(content);