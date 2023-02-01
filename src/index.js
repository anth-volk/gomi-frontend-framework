/** @jsx createElem */
import { render, createElem } from './domManipulation.js';

const testArr = [
	'value1',
	'value2',
	'value3'
];

const testJSX = testArr.map( item => 
	<li>{item}</li>
	);

const content = (
	<div id="testing">
		<h1 className="big">Welcome</h1>
		<p>Welcome to this example webpage! This is meant to illustrate the Gomi framework.</p>
		<ul>
			<li>List item 1</li>
			<li>List item 2</li>
			<li>List item 3</li>
		</ul>
		<grid>Grid value</grid>
		<flex>Flex value</flex>
	</div>
);

render(content);
