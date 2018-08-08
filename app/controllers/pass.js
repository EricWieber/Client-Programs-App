Ti.App.Properties.setString('currentWindow', "index");

$.passwin.statusBarStyle = Ti.UI.iOS.StatusBar.LIGHT_CONTENT;

var dfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "data.xml");
var data = [];
if (!dfile.exists()){
	data[0] = "example@email.com";
	data[1] = "pass";
	dfile.write(data[0]+"|"+data[1]);
} else {
	data = dfile.read().text.split("|");
}

var startupAnimation = Titanium.UI.createAnimation({
    opacity: 1,
    duration: 250
});
$.passwin.animate(startupAnimation);

var closeAnimation = Titanium.UI.createAnimation({
    opacity: 0,
    duration: 250
});
closeAnimation.addEventListener('complete', function() {
    $.passwin.close();
});

function closeWindow() {
	$.passwin.animate(closeAnimation);
}

function cancel() {
	$.passwin.close();
	Ti.App.fireEvent("goHome", {});
}

// Ti.App.addEventListener('passCorrect', function(event) {
 	// closeWindow();
// });

function submit(){
	if ($.password.value == data[1]){ //data[1]){
		Ti.App.Properties.setString('currentWindow', "cards");
		closeWindow();
	} else {
		var a = Ti.UI.createAlertDialog({
			title : 'Invalid Password',
			message : "Password is incorrect. Please try again."
		});
		a.show();
	}
}
