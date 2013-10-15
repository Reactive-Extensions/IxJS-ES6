var Enumerable = require('./enumerable');

var array = [1, 2, 3, 4, 5];
var generator = (for (x of array) x * x);
 
var enumerable = new Enumerable(array);
var enumerableCubed = enumerable.map(x => x * x * x);
 
var enumerable2 = new Enumerable(generator);
var enuemrable2Cubed = enumerable2.map(x => x * x * x);

var enumerable3 = new Enumerable(array);
var enumerable3Filtered = enumerable3.filter(x => x % 2 === 0);

var enumerable4 = new Enumerable(array);
var enumerable4Filtered = enumerable4
	.map(x => x * x)
	.filter(x => x % 2 === 0);