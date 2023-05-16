rand = Math.random() * 100;
rand = Math.round(rand);

const one = document.querySelector('.after');
const twoo = one.innerHTML;
one.innerHTML = `random number: ${rand}`;


document.querySelector('.button-1').onclick = myClick;

let count = 1;


function myClick() {
	let num = document.querySelector('.i-1').value;
	document.querySelector('.out').innerHTML = `You enter: ${num}`;
	document.querySelector('.i-1').value = '';
	document.querySelector('.i-1').placeholder = 'try again';

	if (rand == num) {
		document.querySelector('.out').innerHTML = `You WIN!!!`;
	} else if (rand > num) {
		document.querySelector('.out').innerHTML = `You enter: ${num} i\'ts less.`;
	} else if (rand < num) {
		document.querySelector('.out').innerHTML = `You enter: ${num} i\'ts more.`;
	};

	document.querySelector('.test').innerHTML = `Try number: ${count}`;
	++count;
}

const w = window.innerWidth;
document.querySelector('.new2').innerHTML = `Window width: ${w} <br/><br/> ${navigator.userAgent} <br/><br/> ${navigator.platform}`;

console.log(document.querySelectorAll('.test')[0]);

