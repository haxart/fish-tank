$(document).ready(function(){
	newPosition();
	animateFish();

	// fish movement
	function newPosition() {

		var tankHeight = $('.fishtank-container').height() - 50,
		tankWidth = $('.fishtank-container').width() - 50,

		newTankHeight = Math.ceil(Math.random() * tankHeight),
		newTankWidth = Math.ceil(Math.random() * tankWidth );

		return [newTankHeight, newTankWidth];
	}
	function animateFish() {

		var newPos = newPosition();
		var oldPos = $('.fish').offset();
		var speed = calcSpeed([oldPos.top, oldPos.left], newPos);

		$('.fish').animate({ top: newPos[0], left: newPos[1] }, speed, function() {
			animateFish();
		});

	}

	function calcSpeed(prev, next) {
		var x = Math.abs(prev[1] - next[1]);
		var y = Math.abs(prev[0] - next[0]);

		var greatest = x > y ? x : y;

		var speedModifier = 0.11;

		var speed = Math.ceil(greatest/speedModifier);

		return speed;
	}

	// clone fish
	document.getElementById('fish').onclick = function() {
	var fish = document.getElementById('fish');
    var clone = fish.cloneNode(true); // "deep" clone
    // get parent node, append fish to it.
    fish.parentNode.appendChild(clone);
	};

});