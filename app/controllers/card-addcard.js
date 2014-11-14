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
	var string = JSON.parse(file.read().text);
		
	string[events][string[events].length]={
		name: $.name.value,
		add1: $.add1.value,
		add2: $.add2.value,
		add3: $.add3.value,
		city: $.city.value,
		state: $.state.value,
		postcode: $.postcode.value,
		phone: $.phone.value,
		mobile: $.mobile.value,
		email: $.email.value,
		guestof: $.guestof.value,
		reltoclient: $.reltoclient.value,
		oid: $.oid.value,
		sent: 'false'
	};
	
	//Ti.App.Properties.setString('Data', JSON.stringify(string) );
	if (!file.write(JSON.stringify(string))){
		calert("Error", "Failed to update database file");
	}
	closeWindow();
}

function focusNext(e) {
	switch (e.source.toString()) {
		case "[object name]":
			$.add1.focus();
			break;
		case "[object add1]":
			$.add2.focus();
			break;
		case "[object add2]":
			$.add3.focus();
			break;
		case "[object add3]":
			$.city.focus();
			break;
		case "[object city]":
			$.state.focus();
			break;
		case "[object state]":
			$.postcode.focus();
			break;
		case "[object postcode]":
			$.phone.focus();
			break;
		case "[object phone]":
			$.mobile.focus();
			break;
		case "[object mobile]":
			$.email.focus();
			break;
		case "[object email]":
			$.guestof.focus();
			break;
		case "[object guestof]":
			$.oid.focus();
			break;
		case "[object oid]":
			$.reltoclient.focus();
			break;
		case "default":
			break;
	}
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

