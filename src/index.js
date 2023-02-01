/** @jsx createElem */
import { render, createElem } from './domManipulation.js';

const testArr = [
	'value1',
	'value2',
	'value3',
];

// TESTING
/*
const testJSX = testArr.map((item) =>
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
		<div style={{display: 'grid', gridTemplateRows: 2}}>Test grid</div>
	</div>
);
*/

const content = (
	<div id="container">
		<div id="testGridElem" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', color: 'red'}}>
			<div id="col1" style={{width: '100%'}}>col1</div>
			<div id="col2" style={{width: '100%'}}>col2</div>
		</div>
	</div>
)

render(content, document.getElementById('root'));
// TESTING
console.log(document.getElementById('testGridElem'));
console.log(document.getElementById('sampleHTMLElem'));
