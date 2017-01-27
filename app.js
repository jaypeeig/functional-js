
/*understanding map function*/

var keys = [1,2,3];

console.log(keys);

var newkeys = keys.map(function(key) {
	return key * 2;
});

console.log(newkeys);