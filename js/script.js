rand = Math.random() * 100;
rand = Math.round(rand);

const one = document.querySelector('.after');
const twoo = one.innerHTML;
one.innerHTML = `random number: ${rand}`;


document.querySelector('.button-1').onclick = myClick;

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

}

const w = window.innerWidth;
document.querySelector('.new2').innerHTML = `Window width: ${w} <br/><br/> ${navigator.userAgent} <br/><br/> ${navigator.platform}`;