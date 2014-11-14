var args = arguments[0] || {};

var file = args.file;

var startupAnimation = Titanium.UI.createAnimation({
    opacity: 1,
    duration: 250
});
$.addwin.animate(startupAnimation);

var closeAnimation = Titanium.UI.createAnimation({
    opacity: 0,
    duration: 250
});
closeAnimation.addEventListener('complete', function() {
    $.addwin.close();
});

function closeWindow() {
	$.addwin.animate(closeAnimation);
}

function save(){
	var string = JSON.parse(file.read().text);
		
	if (!($.name.value in string)){
		string[$.name.value] = [];
	}
	
	if (!file.write(JSON.stringify(string))){
		calert("Error", "Failed to update database file");
	}
	closeWindow();
}

function calert(t, m){
	var dialog = Ti.UI.createAlertDialog({
	    message: m,
	    ok: 'Ok',
	    title: t
	});
	dialog.show();
}

Ti.App.addEventListener('goHome', function(event) {
 	closeWindow();
});

