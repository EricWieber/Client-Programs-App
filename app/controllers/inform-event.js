var args = arguments[0] || {};

var file = args.file;
$.topTitle.text = args.events;

$.win3.statusBarStyle = Ti.UI.iOS.StatusBar.LIGHT_CONTENT;

var string = JSON.parse(file.read().text);
drawTable();

function drawTable(e) {
	//string = JSON.parse(Ti.App.Properties.getString('Data'));
	string = JSON.parse(file.read().text);
	var arr = [];
	for (var i = 0; i < string[$.topTitle.text].length; i++) {
		arr.push(Alloy.createController('inform-row', {
			file: file,
			name: string[$.topTitle.text][i].name,
			rowNum: i,
			sent: string[$.topTitle.text][i].informed,
			eventName: $.topTitle.text
		}).getView());
	}
	$.table.setData(arr);
}

function rowClick(e) {
	var win4 = Alloy.createController('inform-client', {
		file: file,
		x: $.topTitle.text,
		y: e.rowData.rowNum,
	}).getView();
	win4.open({transition:Ti.UI.iOS.AnimationStyle.CURL_UP});
}

function closeWindow() {
	$.win3.close({transition:Ti.UI.iOS.AnimationStyle.CURL_DOWN});
}

function addNewClient() {
	var addwin = Alloy.createController('inform-addclient', {file: file, events: $.topTitle.text}).getView();
	addwin.open();
}