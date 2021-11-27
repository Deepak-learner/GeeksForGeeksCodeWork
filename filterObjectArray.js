Example 1: We create an array of “students” and call the filter() function on array to derive the elements from array that satisfy the given condition.

Code:

<script>
var obj = {
	'Students': [{
			"name": "Raj",
			"Age":"15",
			"RollNumber": "123",
			"Marks": "99",
			
		}, {
			"name": "Aman",
			"Age":"14",
			"RollNumber": "223",
			"Marks": "69",
		},
		{
			"name": "Vivek",
			"Age":"13",
			"RollNumber": "253",
			"Marks": "89",
		},
		]
};

var newArray = obj.Students.filter(function (el)
{
return el.Age >=15 &&
		el.RollNumber <= 200 &&
		el.Marks >= 80 ;
}
);
console.log(newArray);
</script>


Example 2: The following example shows filtering invalid entries from array. We create an array of “id”s and call the filter() function on the array to derive 
the “id”s whose values are non-zero and numeric. 

Code:

<script>
let array = [
{ id: 3 },
{ id: -1 },
{ id: 0 },
{ id: 15 },
{ id: 12.2 },
{ },
{ id: null },
{ id: NaN },
{ id: 'undefined' }
]

let countInvalidEntries = 0

function filterById(obj) {
if (Number.isFinite(obj.id) && obj.id !== 0)
{
	return true
}
countInvalidEntries++
return false;
}

let arrayById = array.filter(filterById);

console.log('Filtered Array with non-zero and numeric id: \n',
		arrayById);

console.log('Number of Invalid Entries = ', countInvalidEntries);

</script>
