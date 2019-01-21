(() => {
	// this is selt invoking anonymous function
	console.log("fired!");

// these are the elements that you want to reference on the page (the icons in this case)

// querySElector gets one result
	var badge = document.querySelector("img");
// gets a reference to all the elements that match the selector
	var otherBadges = document.querySelectorAll('.jpgBadge');
	// functions are the same in JS as in Python:
	// what do you want to have on a click?
	function logBadgeId() {
		console.log(this.id);
		debugger;
	}
// what evvents are we listenting for? click? mouseover? and what should happen when we hear one
	badge.addEventListener("click", logBadgeId);

	otherBadges.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));

	

	// this is the same as print in python
})();