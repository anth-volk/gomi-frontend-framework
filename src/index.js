/** @jsx createNode */
import { render, createNode } from './domManipulation.js';

const testArr = [
	'value1',
	'value2',
	'value3',
];

const testJSX = testArr.map((item) =>
	<li>{item}</li>
);

const content = (
	<div>
		<ul id="testUpdateElem">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	</div>
);

const updateContentOne = (
	<div>	
		<ul id="testUpdateElem">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
		</ul>
		<grid cols="repeat(3, 1fr)">
			<div>Text 1</div>
			<div>Text 1</div>
			<div>Text 1</div>
		</grid>
	</div>
);

const root = document.getElementById('root');
render(root, content);

const updateButton = document.getElementById('testUpdateButton');

updateButton.addEventListener('click', () => render(root, updateContentOne, content));