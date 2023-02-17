/** @jsx createNode */
import { render, createNode } from './domManipulation.js';
import { updateView } from './domUpdating.js';

const testArr = [
	'value1',
	'value2',
	'value3',
];

const testJSX = testArr.map((item) =>
	<li>{item}</li>
);

const content = (
	<div id="oldOuterContainer">
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

const updateContentTwo = (
	<div>
		<ul id="testUpdateElem">
			<li>Item 1</li>
			<li>Item 2</li>
		</ul>
		<grid cols="repeat(3, 1fr)">
			<div>Text 1</div>
			<div>Text 1</div>
			<div>Text 1</div>
		</grid>
	</div>
)

const root = document.getElementById('root');
render(root, updateContentOne);

const updateButton1 = document.getElementById('testUpdateButton1');
const updateButton2 = document.getElementById('testUpdateButton2');

updateButton1.addEventListener('click', () => updateView(root, updateContentOne, content));
updateButton2.addEventListener('click', () => updateView(root, updateContentTwo, updateContentOne));