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
	//var string = JSON.parse(Ti.App.Properties.getString('Data'));
	var string = JSON.parse(file.read().text);
	
	if (!($.eventName.value in string)) {
		string[$.eventName.value]=[];
		string["Events"][string["Events"].length]=$.eventName.value;
	}
	
	//Ti.App.Properties.setString('Data', JSON.stringify(string) );
	if (!file.write(JSON.stringify(string))){
		alert("Failed to update file");
	}
	closeWindow();
}
