Example 1: When I use multiple HTML elements inside a render method :

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
<h1>Geeks For Geeks</h1>
	
<p>Learn Programming </p>

document.getElementById('root')
);

Example 2: When I use a single HTML element inside a render method :

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
<div>
<h1>Geeks For Geeks</h1>
	
<p>Learn Programming </p>

</div>,
document.getElementById('root')
);


