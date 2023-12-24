function phimlen() {
	let element = document.getElementById("nobita");
	element.style.top = parseInt(element.style.top) - 5 + '2px';
}
function phimxuong() {
	let element = document.getElementById("nobita");
	element.style.top = parseInt(element.style.top) + 5 + '2px';
}
function phimtrai() {
	let element = document.getElementById("nobita");
	element.style.left = parseInt(element.style.left) - 5 + '2px';
}
function phimphai() {
	let element = document.getElementById("nobita");
	element.style.left = parseInt(element.style.left) + 5 + '2px';

}
function moveSelection(evt) {
	switch (evt.keyCode) {
    	case 37:
        	phimtrai();
        	break;
    	case 39:
        	phimphai();
        	break;
    	case 38:
        	phimlen();
        	break;
    	case 40:
        	phimxuong();
        	break;
	}
}
function docReady() {
	window.addEventListener('keydown', moveSelection);
}

