var multiples = [];
for (var i = 1; i < 1000; i++) {
	if ((i % 3 === 0) || (i % 5 === 0)) {
		multiples.push(i);
	}
}
var total = 0;
for (var i = 0; i < multiples.length; i++) {
	total += multiples[i];
}
console.log(total);

