// Quick and dirty fish cloning
document.getElementById('fish').onclick = function() {
	var fish = document.getElementById('fish');
    var clone = fish.cloneNode(true); // "deep" clone
    // get parent node(container), append fish to it.
    fish.parentNode.appendChild(clone);
}