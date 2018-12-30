function onSizeChange() {
	var footerElements = document.getElementsByTagName("footer");
	
	for (var i = 0; i < footerElements.length; i++) {
		footerElements[i].style.position = null;

		var footerPosition = null;
		var rect = footerElements[i].getBoundingClientRect();
		if ((rect.bottom || rect.y + rect.height) < Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) {
			footerPosition = "fixed";
		} else {
			footerPosition = null;
		}

		footerElements[i].style.position = footerPosition;
	}
}

window.onresize = onSizeChange;
window.onload = onSizeChange;