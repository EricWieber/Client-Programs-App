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
	this.__controllerPath = 'inform-addevent';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.addwin = Ti.UI.createWindow(
	{ backgroundColor: "transparent", id: "addwin", title: "Add Event", opacity: 0 });

	$.__views.addwin && $.addTopLevelView($.__views.addwin);
	$.__views.__alloyId16 = Ti.UI.createView(
	{ backgroundColor: "black", opacity: 0.5, id: "__alloyId16" });

	$.__views.addwin.add($.__views.__alloyId16);
	$.__views.__alloyId17 = Ti.UI.createScrollView(
	{ layout: "vertical", backgroundColor: "#163318", height: 300, width: "50%", borderColor: "#fff", borderRadius: 10, id: "__alloyId17" });

	$.__views.addwin.add($.__views.__alloyId17);
	$.__views.eventName = Ti.UI.createTextField(
	{ height: 40, top: 50, width: "80%", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, hintText: "Event Name", id: "eventName", autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES });

	$.__views.__alloyId17.add($.__views.eventName);
	$.__views.save = Ti.UI.createButton(
	{ top: 40, height: Ti.UI.SIZE, width: 200, backgroundColor: "#ccc", borderRadius: 15, borderColor: "#000", font: { fontSize: 20 }, id: "save", title: "Save" });

	$.__views.__alloyId17.add($.__views.save);
	save ? $.addListener($.__views.save, 'click', save) : __defers['$.__views.save!click!save'] = true;$.__views.cancel = Ti.UI.createButton(
	{ top: 40, height: Ti.UI.SIZE, width: 200, backgroundColor: "#ccc", borderRadius: 15, borderColor: "#000", font: { fontSize: 20 }, id: "cancel", title: "Cancel" });

	$.__views.__alloyId17.add($.__views.cancel);
	closeWindow ? $.addListener($.__views.cancel, 'click', closeWindow) : __defers['$.__views.cancel!click!closeWindow'] = true;exports.destroy = function () {};




	_.extend($, $.__views);


	var args = arguments[0] || {};

	var file = args.file;

	var startupAnimation = Titanium.UI.createAnimation({
		opacity: 1,
		duration: 250 });

	$.addwin.animate(startupAnimation);

	var closeAnimation = Titanium.UI.createAnimation({
		opacity: 0,
		duration: 250 });

	closeAnimation.addEventListener('complete', function () {
		$.addwin.close();
	});

	function closeWindow() {
		$.addwin.animate(closeAnimation);
	}

	function save() {

		var string = JSON.parse(file.read().text);

		if (!($.eventName.value in string)) {
			string[$.eventName.value] = [];
			string["Events"][string["Events"].length] = $.eventName.value;
		}


		if (!file.write(JSON.stringify(string))) {
			alert("Failed to update file");
		}
		closeWindow();
	}





	__defers['$.__views.save!click!save'] && $.addListener($.__views.save, 'click', save);__defers['$.__views.cancel!click!closeWindow'] && $.addListener($.__views.cancel, 'click', closeWindow);



	_.extend($, exports);
}

module.exports = Controller;