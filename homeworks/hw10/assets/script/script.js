// s1 outfit
// let s1 = /* get #s1 outfit */
/* the process: */
// s1.onclick = function() {
// 	/* 1. hide #body (set display to none)
// 	/* 2. call the function you created to hide all the outfits 
// 	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
// 	/* 3. show #o1 outfit (set display to block)*/
// };

function fit(fitID) {
	var fits = document.getElementsByClassName("outfit");

	for (var i = 0; i < fits.length; i++) {
		var element = fits[i];
		element.style.display = "none";
	}

	document.getElementById("body").style.display = "none";
	
	document.getElementById(fitID).style.display = 'block';
}

document.getElementById("s1").onclick = function() {
	fit('o1');
}

// s2 outfit
/* get #s2 outfit */
/* repeat process */
document.getElementById("s2").onclick = function() {
	fit('o2');
}

// s3 outfit
/* get #s3 outfit */
/* repeat process */
document.getElementById("s3").onclick = function() {
	fit('o3');
}

// s4 outfit
/* get #s4 outfit */
/* repeat process */
document.getElementById("s4").onclick = function() {
	fit('o4');
}

// s5 outfit
/* get #s5 outfit */
/* repeat process */
document.getElementById("s5").onclick = function() {
	fit('o5');
}

// strip outfit
let strip = document.getElementById("strip-button");
strip.onclick = function() {
	fit('body');
}