var args = arguments[0] || {};

Ti.App.Properties.setString('currentWindow', "options");
var dfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "data.xml");
var data = [];
if (!dfile.exists()){
	data[1] = "fisher123";
	dfile.write(data[0]+"|"+data[1]);
} else {
	data = dfile.read().text.split("|");
}

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
    Ti.App.Properties.setString('currentWindow', "index");
});

function closeWindow() {
	$.addwin.animate(closeAnimation);
}

function next(){
	$.pass2.focus();
}

function save(){		
	data[0] = $.email.value;
	if ($.pass1.value == $.pass2.value){
		data[1] = $.pass2.value;
	}
	
	if (!dfile.write(data[0]+"|"+data[1])){
		calert("Error", "Failed to update data file");
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

