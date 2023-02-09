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
	<ul id="testUpdateElem">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
);

const updateContentOne = (
	<ul id="testUpdateElem">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
		<li>Item 4</li>
	</ul>
);

const root = document.getElementById('root');
render(root, content);

const updateButton = document.getElementById('testUpdateButton');

updateButton.addEventListener('click', () => render(root, content, updateContentOne));
