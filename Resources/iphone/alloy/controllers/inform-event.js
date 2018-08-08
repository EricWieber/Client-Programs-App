var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'inform-event';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.win3 = Ti.UI.createWindow(
	{ backgroundColor: "#163318", id: "win3" });

	$.__views.win3 && $.addTopLevelView($.__views.win3);
	drawTable ? $.addListener($.__views.win3, 'focus', drawTable) : __defers['$.__views.win3!focus!drawTable'] = true;$.__views.topbar = Ti.UI.createView(
	{ top: "-10dp", height: "70dp", width: "103%", borderColor: "#fff", borderRadius: "30dp", borderWidth: "2dp", backgroundColor: "#215525", id: "topbar" });

	$.__views.win3.add($.__views.topbar);
	$.__views.topTitle = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, id: "topTitle" });

	$.__views.topbar.add($.__views.topTitle);
	$.__views.add = Ti.UI.createButton(
	{ height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", right: "50dp", borderColor: "#fff", borderRadius: "10dp", backgroundColor: "#274429", font: { fontSize: 14 }, id: "add", title: "   Add Client   " });

	$.__views.topbar.add($.__views.add);
	addNewClient ? $.addListener($.__views.add, 'click', addNewClient) : __defers['$.__views.add!click!addNewClient'] = true;$.__views.back = Ti.UI.createButton(
	{ height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", left: "50dp", borderColor: "#fff", borderRadius: "10dp", backgroundColor: "#274429", font: { fontSize: 14 }, id: "back", title: "   Events   " });

	$.__views.topbar.add($.__views.back);
	closeWindow ? $.addListener($.__views.back, 'click', closeWindow) : __defers['$.__views.back!click!closeWindow'] = true;var __alloyId18 = [];$.__views.__alloyId19 = Ti.UI.createTableViewRow(
	function () {
		var o = {};
		if (Alloy.isHandheld) Alloy.deepExtend(true, o, { backgroundColor: "transparent", height: "60dp" });
		if (Alloy.isTablet) Alloy.deepExtend(true, o, { backgroundColor: "transparent", height: "80dp" });
		Alloy.deepExtend(true, o, { id: "__alloyId19" });
		return o;
	}());

	__alloyId18.push($.__views.__alloyId19);$.__views.table = Ti.UI.createTableView(
	{ backgroundColor: "transparent", top: "60dp", data: __alloyId18, id: "table", backgroundImage: "/Fisher-3.png", editable: true, rowHeight: 80 });

	$.__views.win3.add($.__views.table);
	rowClick ? $.addListener($.__views.table, 'click', rowClick) : __defers['$.__views.table!click!rowClick'] = true;$.__views.add = Ti.UI.createButton(
	{ height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", right: "50dp", borderColor: "#fff", borderRadius: "10dp", backgroundColor: "#274429", font: { fontSize: 14 }, id: "add", title: "Add Client", top: "-50dp" });

	$.__views.win3.add($.__views.add);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var args = arguments[0] || {};

	var file = args.file;
	$.topTitle.text = args.events;

	$.win3.statusBarStyle = Ti.UI.iOS.StatusBar.LIGHT_CONTENT;

	var string = JSON.parse(file.read().text);
	drawTable();

	function drawTable(e) {

		string = JSON.parse(file.read().text);
		var arr = [];
		for (var i = 0; i < string[$.topTitle.text].length; i++) {
			arr.push(Alloy.createController('inform-row', {
				file: file,
				name: string[$.topTitle.text][i].name,
				rowNum: i,
				sent: string[$.topTitle.text][i].informed,
				eventName: $.topTitle.text }).
			getView());
		}
		$.table.setData(arr);
	}

	function rowClick(e) {
		var win4 = Alloy.createController('inform-client', {
			file: file,
			x: $.topTitle.text,
			y: e.rowData.rowNum }).
		getView();
		win4.open({ transition: Ti.UI.iOS.AnimationStyle.CURL_UP });
	}

	function closeWindow() {
		$.win3.close({ transition: Ti.UI.iOS.AnimationStyle.CURL_DOWN });
	}

	function addNewClient() {
		var addwin = Alloy.createController('inform-addclient', { file: file, events: $.topTitle.text }).getView();
		addwin.open();
	}





	__defers['$.__views.win3!focus!drawTable'] && $.addListener($.__views.win3, 'focus', drawTable);__defers['$.__views.add!click!addNewClient'] && $.addListener($.__views.add, 'click', addNewClient);__defers['$.__views.back!click!closeWindow'] && $.addListener($.__views.back, 'click', closeWindow);__defers['$.__views.table!click!rowClick'] && $.addListener($.__views.table, 'click', rowClick);



	_.extend($, exports);
}

module.exports = Controller;