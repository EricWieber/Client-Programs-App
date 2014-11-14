var args = arguments[0] || {};

var file = args.file;
var events = args.events;

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
	
	//string[$.eventName.value]=[];
	string[events][string[events].length]={
		name: $.clientName.value,
		numbers: $.numbers.value,
		message: $.message.value,
		informed:'false'
	};
	
	//Ti.App.Properties.setString('Data', JSON.stringify(string) );
	if (!file.write(JSON.stringify(string))){
		alert("Failed to update file");
	}
	closeWindow();
}

function focusNum() {
	$.numbers.focus();
}

function focusMes() {
	$.message.focus();
}
