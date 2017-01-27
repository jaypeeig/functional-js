
/*understanding map function*/

var keys = [1,2,3,4];

console.log(keys);


var newkeys = keys.map(function(key) {
	return key * 2;
});

//console.log(newkeys);

/*understanding filter function*/

/*returns a boolean, and can be chained to a map function*/

var newkeys = keys.filter(function(key){
    return (key % 2 !== 0); //odd number
}).map(function(number){
    return number * 2;
});

/*understanding reduce function*/
/*second param is the starting value*/
/*returns one val*/

var totalkeys = keys.map(function(number){
    return number * 2;
}).reduce(function(total, number){
    console.log(total + " + " + number);
    return total + number;
}, 0);

console.log(totalkeys); 
