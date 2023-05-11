rand = Math.random() * 10;
rand = Math.round(rand);
console.log(rand);

const one = document.querySelectorAll('.after')[0];
const twoo = one.innerHTML;
one.innerHTML = `random number: ${rand}`;
console.log(one);
