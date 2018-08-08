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
	this.__controllerPath = 'card-prompt';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.win = Ti.UI.createWindow(
	{ id: "win", title: "Remove Card", opacity: 0 });

	$.__views.win && $.addTopLevelView($.__views.win);
	$.__views.__alloyId11 = Ti.UI.createView(
	{ backgroundColor: "black", opacity: 0.7, id: "__alloyId11" });

	$.__views.win.add($.__views.__alloyId11);
	$.__views.__alloyId12 = Ti.UI.createScrollView(
	function () {
		var o = {};
		if (Alloy.isTablet) Alloy.deepExtend(true, o, { layout: "vertical", backgroundColor: "#163318", height: "27%", width: "40%", borderColor: "#fff", borderRadius: 10 });
		Alloy.deepExtend(true, o, { id: "__alloyId12" });
		return o;
	}());

	$.__views.win.add($.__views.__alloyId12);
	$.__views.__alloyId13 = Ti.UI.createLabel(
	{ top: "10%", width: Ti.UI.SIZE, height: "auto", color: "#fff", textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, text: 'Email Sent!', id: "__alloyId13" });

	$.__views.__alloyId12.add($.__views.__alloyId13);
	$.__views.prompt = Ti.UI.createLabel(
	{ top: "5%", width: Ti.UI.SIZE, height: "auto", color: "#fff", textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, text: 'Do you want to remove the Card(s)?', id: "prompt" });

	$.__views.__alloyId12.add($.__views.prompt);
	$.__views.yes = Ti.UI.createButton(
	{ top: "13%", height: "19%", width: "60%", borderColor: "#fff", borderRadius: 10, backgroundColor: "#215525", color: "#ccf", id: "yes", title: "Yes" });

	$.__views.__alloyId12.add($.__views.yes);
	removeCard ? $.addListener($.__views.yes, 'click', removeCard) : __defers['$.__views.yes!click!removeCard'] = true;$.__views.no = Ti.UI.createButton(
	{ top: "10%", height: "19%", width: "60%", borderColor: "#fff", borderRadius: 10, backgroundColor: "#215525", color: "#fcc", id: "no", title: "No" });

	$.__views.__alloyId12.add($.__views.no);
	closeWindow ? $.addListener($.__views.no, 'click', closeWindow) : __defers['$.__views.no!click!closeWindow'] = true;exports.destroy = function () {};




	_.extend($, $.__views);


	var args = arguments[0] || {};

	var events = args.events;
	var index = args.index;
	var all = args.all;


	var startupAnimation = Titanium.UI.createAnimation({
		opacity: 1,
		duration: 250 });

	$.win.animate(startupAnimation);

	var closeAnimation = Titanium.UI.createAnimation({
		opacity: 0,
		duration: 250 });

	closeAnimation.addEventListener('complete', function () {
		$.win.close();
	});

	function closeWindow() {
		$.win.animate(closeAnimation);
	}

	function removeCard() {
		$.win.close();

		if (all) Ti.App.fireEvent("removeEvent", { events: events });else Ti.App.fireEvent("removeCard", { events: events, index: index });
	}

	Ti.App.addEventListener('goHome', function (event) {
		closeWindow();
	});












	__defers['$.__views.yes!click!removeCard'] && $.addListener($.__views.yes, 'click', removeCard);__defers['$.__views.no!click!closeWindow'] && $.addListener($.__views.no, 'click', closeWindow);



	_.extend($, exports);
}

module.exports = Controller;