Example 1: Set width and height of background image in div element to 100% and 200px.

Code:

import React from 'react';
import './App.css';

function App() {
const myStyle={
	backgroundImage:"url(" +
"https://i.pinimg.com/474x/62/69/be/6269be179ab7d610b2a4959387fd77af.jpg"+")",
	width:'100%',
	height:'200px',
	};
return (
	<div style={myStyle}>
	<h1 style={{color:'green'}}>
	Geeks For Geeks
	</h1>
	<p style={{color:'white'}}>
	Set height and width of background
	image inline style react.
	</p>

	</div>
);
}
export default App;


Example 2: Set width and height of background image in div element to 20% and 200px .

Code:

import React from 'react';
import './App.css';

function App() {
const myStyle={
	backgroundImage:"url(" +
	"https://i.pinimg.com/474x/62/69/be/6269be179ab7d610b2a4959387fd77af.jpg"+")",
	width:'20%',
	height:'200px',
	};
return (
	<div style={myStyle}>
	<h1 style={{color:'green'}}>
	Geeks For Geeks
	</h1>
	<p style={{color:'white'}}>
	Set height and width of background image
	inline style react.
	</p>

	</div>
);
}
export default App;

