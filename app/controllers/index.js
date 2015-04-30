Ti.App.Properties.setString('currentWindow', "index");

$.win.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;

$.version.text = "Version "+Titanium.App.version;
$.win.open();

$.view.animate(Titanium.UI.createAnimation({
    opacity: 1,
    duration: 1000,
    delay: 500
}));

function inform() {
	var winx = Alloy.createController('inform-index', {}).getView();
    winx.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
}

function cards() {
	var winy = Alloy.createController('card-index', {}).getView();
    winy.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
    var winz = Alloy.createController('pass', {}).getView();
    winz.open();
    Ti.App.Properties.setString('currentWindow', "index");
}

function options() {
	var wina = Alloy.createController('options', {}).getView();
    wina.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
    var winb = Alloy.createController('pass', {}).getView();
    winb.open();
	Ti.App.Properties.setString('currentWindow', "index");
}

Ti.App.addEventListener('pause', function(event) {
	if ( Ti.App.Properties.getString('currentWindow') != "index") {
	 	var prompt = Alloy.createController('pass', {}).getView();
	    prompt.open();
	}
});
