const one = document.querySelectorAll('.after')[0];
const twoo = one.innerHTML;
one.innerHTML = 'www';

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
console.log('eee');
