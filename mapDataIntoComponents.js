list.js: Contain an array with the user’s name and roll number in the form of key-value pairs.

const Users=[
{
	name:"Deepak",
	rollNo:"123"
},
{
	name:"Yash",
	rollNo:"124"
},
{
	name:"Raj",
	rollNo:"125"
},{
	name:"Rohan",
	rollNo:"126"
},
{
	name:"Puneet",
	rollNo:"127"

},
{
	name:"Vivek",
	rollNo:"128"
},
{
	name:"Aman",
	rollNo:"129"
},
]
export default Users;


Info.js: Username and roll number as props in the Info component.

import React from 'react';

function Info (props){
return (
	<div style={{border:'1px solid black',
				margin:'10px',width:'20%'}}>
	
<p> {props.name} </p>
<p> {props.rollNo}</p>

</div>

)
}
export default Info;


App.js: Import Users array and Info component in the App.js file. Use the map function to map each element of User arrays to the Info component. 

import React from 'react';
import './App.css';
import Users from './list';
import Info from './Info';

function App() {

return (
	<div style={{margin:'40px'}} >
	<h1 style={{color:'green'}}> Geeks For Geeks </h1>
	

<p> Mapping Data to component in React js. </p>


	{Users.map((e)=>{
	return (
	<Info name={e.name} rollNo={e.rollNo}/>
	);})}
	</div>
);
}
export default App;

Example 2: Mapping data from list.js file to Info component without using the map function.

App.js file: 

import React from 'react';
import './App.css';
import Users from './list';
import Info from './Info';

function App() {

return (
	<div style={{margin:'40px'}} >
	<h1 style={{color:'green'}}> Geeks For Geeks </h1>
	

<p> Mapping Data to component in React js. </p>



	<Info name={Users[0].name} rollNo={Users[0].rollNo}/>
	<Info name={Users[1].name} rollNo={Users[1].rollNo}/>
	<Info name={Users[2].name} rollNo={Users[2].rollNo}/>
	<Info name={Users[3].name} rollNo={Users[3].rollNo}/>
	<Info name={Users[4].name} rollNo={Users[4].rollNo}/>
	<Info name={Users[5].name} rollNo={Users[5].rollNo}/>
	<Info name={Users[6].name} rollNo={Users[6].rollNo}/>

	</div>
);
}
export default App;


