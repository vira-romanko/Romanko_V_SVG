(() => {
	// this is selt invoking anonymous function
	console.log("Hello Trevor!");

// these are the elements that you want to reference on the page (the icons in this case)

// querySElector gets one result
	var icons = document.querySelector("svg");
	var leaf = document.querySelectorAll('#icon1')
	var pineapple = document.querySelectorAll('#icon2')
	var pelican = document.querySelectorAll('#icon3')
	var flamingo = document.querySelectorAll('#icon4')
	var watermelon = document.querySelectorAll('#icon5')
	var flower = document.querySelectorAll('#icon6')
	var bird = document.querySelectorAll('#icon7')
	var orange = document.querySelectorAll('#icon8')
	var lemon = document.querySelectorAll('#icon9')
	var cherry = document.querySelectorAll('#icon10')

// gets a reference to all the elements that match the selector
	// var othericons = document.querySelectorAll('.jpgBadge');
	// functions are the same in JS as in Python:
	// what do you want to have on a click?
	function logiconsId() {
		console.log(this.id);
		 // debugger;
	}
// what evvents are we listenting for? click? mouseover? and what should happen when we hear one
	icons.addEventListener("click", logiconsId);




leaf.forEach(thisicons => thisicons.addEventListener("click", logiconsId));
pineapple.forEach(thisicons => thisicons.addEventListener("click", logiconsId));
pelican.forEach(thisicons => thisicons.addEventListener("click", logiconsId));
flamingo.forEach(thisicons => thisicons.addEventListener("click", logiconsId));
watermelon.forEach(thisicons => thisicons.addEventListener("click", logiconsId));
flower.forEach(thisicons => thisicons.addEventListener("click", logiconsId));
bird.forEach(thisicons => thisicons.addEventListener("click", logiconsId));
orange.forEach(thisicons => thisicons.addEventListener("click", logiconsId));
lemon.forEach(thisicons => thisicons.addEventListener("click", logiconsId));
cherry.forEach(thisicons => thisicons.addEventListener("click", logiconsId));

function classToggle() {
	console.log(this.classList.toggle('st0', 'st1', 'st2', 'st3'));
    

     }
document.querySelector('#icon1').addEventListener('click', classToggle);

// function classToggle() {
// 	console.log(this.classList.toggle('st4', 'st5', 'st6', 'st7', 'st8'));
    

//      }
// document.querySelector('#icon2').addEventListener('click', classToggle);
  

    
    
	

	

	// this is the same as print in python
})();


