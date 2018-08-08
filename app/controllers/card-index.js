var args = arguments[0] || {};

var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "cards.txt");
if (!file.exists()){
	var string = { 
		'Big Event': [{'name':'Mr. Sample', 'add1':'123 Some St', 'add2':'Line 2', 'add3':'Line 3', 'city':'Someville', 'state':'CA', 'postcode':'91234',
		'phone':'(123) 456-7890', 'mobile':'(987) 654-3210', 'email':'john@email.com', 
		'guestof':'Ken', 'reltoclient':'friend', 'oid':'1234567890', 'sent':'false'}, 
		{'name':'Tom', 'add1':'123 Some St', 'add2':'', 'add3':'', 'city':'Someville', 'state':'CA', 'postcode':'91234',
		'phone':'(123) 456-7890', 'mobile':'(987) 654-3210', 'email':'tom@email.com', 
		'guestof':'Ken', 'reltoclient':'friend', 'oid':'1234567890', 'sent':'false', 'events':'Small Event'}],
	
		'Small Event': [{'name':'Mary', 'add1':'123 Some St', 'add2':'', 'add3':'', 'city':'Someville', 'state':'CA', 'postcode':'91234',
		'phone':'(123) 456-7890', 'mobile':'(987) 654-3210', 'email':'mary@email.com', 
		'guestof':'Ken', 'reltoclient':'friend', 'oid':'1234567890', 'sent':'false', 'events':'Other Event'}]
	};
	file.write(JSON.stringify(string));
} else {
	var string = JSON.parse(file.read().text);
}

//Ti.App.Properties.setString('Data', JSON.stringify(string) );
$.win2.statusBarStyle = Ti.UI.iOS.StatusBar.LIGHT_CONTENT;

drawTable();

// $.table.animate(Titanium.UI.createAnimation({
    // opacity: 1,
    // duration: 1000,
    // delay: 500
// }));

function closeWindow() {
	$.win2.close({transition:Ti.UI.iOS.AnimationStyle.CURL_DOWN});
	Ti.App.Properties.setString('currentWindow', "index");
}

function drawTable(e) {
	string = JSON.parse(file.read().text);
	
	var arr = [];
	for (x in string){
		arr.push(Alloy.createController('card-row', {
			file: file,
			title: x,
			events: x
		}).getView());
	}
	$.table.setData(arr);
}

function rowClick(e) {
	var win3 = Alloy.createController('card-event', {
		file: file,
    	row: e.rowData
    }).getView();
    win3.open({transition:Ti.UI.iOS.AnimationStyle.CURL_UP});
}

function addNewEvent() {
    var addwin = Alloy.createController('card-addevent', { file: file }).getView();
    addwin.open();
}

Ti.App.addEventListener('removeEvent', function(e) {
	Ti.App.Properties.setString('currentWindow', "card-index");
 	string = JSON.parse(file.read().text);
	
	for (x in string[e.events]) {
		string[e.events].splice(e.index, 1);
	}
	delete string[e.events];
	
	if (!file.write(JSON.stringify(string))){
		calert("Error", "Failed to update database file");
	}
	
	drawTable();
});

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
	Ti.App.Properties.setString('currentWindow', "index");
});
