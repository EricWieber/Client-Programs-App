var args = arguments[0] || {};

var events = args.events;
var index = args.index;
var all = args.all;

// Animations
var startupAnimation = Titanium.UI.createAnimation({
    opacity: 1,
    duration: 250
});
$.win.animate(startupAnimation);

var closeAnimation = Titanium.UI.createAnimation({
    opacity: 0,
    duration: 250
});
closeAnimation.addEventListener('complete', function() {
    $.win.close();
});

function closeWindow() {
	$.win.animate(closeAnimation);
}

function removeCard(){
	$.win.close();
	
	if (all)
		Ti.App.fireEvent("removeEvent", {events: events});
	else
		Ti.App.fireEvent("removeCard", {events: events, index: index});
}

Ti.App.addEventListener('goHome', function(event) {
 	closeWindow();
});

// Ti.App.addEventListener('resume', function(event) {
	// if ( Ti.App.Properties.getString('currentWindow') == "card-addcard") {
	 	// var prompt = Alloy.createController('pass', {}).getView();
	    // prompt.open();
	// }
// });
