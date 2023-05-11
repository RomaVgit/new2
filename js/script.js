const one = document.querySelectorAll('.after')[0];
console.log(one);
const twoo = one.innerHTML;
console.log(twoo);
one.innerHTML = 'Yes';


let numRandom = function (ofTimes) {
	let num = 0;
	let rand;
	while (num < ofTimes) {
		rand = Math.random() * 10;
		rand = Math.round(rand);
		console.log(rand);
		num++;
	}
}

numRandom(5);
