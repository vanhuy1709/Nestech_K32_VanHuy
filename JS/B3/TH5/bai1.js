let userName = prompt("Who's there?", '');

if (userName == 'VanHuy') {
  
} else if (userName == null) {
	alert('Canceled');
} else {
	alert("I don't know you");
}
let pass = prompt('Password?', '');

if (pass == 'vanhuy123') {
	alert('Welcome!');
} else if (pass == null) {
	alert('Canceled.');
} else {
	alert('Wrong password');
}

