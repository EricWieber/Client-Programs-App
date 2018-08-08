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
		this.__controllerPath = 'pass';
		this.args = arguments[0] || {};

		if (arguments[0]) {
				var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
				var $model = __processArg(arguments[0], '$model');
				var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
		}
		var $ = this;
		var exports = {};
		var __defers = {};







		$.__views.passwin = Ti.UI.createWindow(
		{ backgroundColor: "transparent", id: "passwin", title: "Enter Password", opacity: 0, zIndex: 10 });

		$.__views.passwin && $.addTopLevelView($.__views.passwin);
		$.__views.__alloyId24 = Ti.UI.createView(
		{ backgroundColor: "black", opacity: 0.9, id: "__alloyId24" });

		$.__views.passwin.add($.__views.__alloyId24);
		$.__views.__alloyId25 = Ti.UI.createScrollView(
		{ layout: "vertical", backgroundColor: "#163318", height: 300, width: "50%", borderColor: "#fff", borderRadius: 10, id: "__alloyId25" });

		$.__views.passwin.add($.__views.__alloyId25);
		$.__views.lbl = Ti.UI.createLabel(
		{ height: Ti.UI.SIZE, color: "#fff", top: "30dp", font: { fontSize: 20 }, text: 'A password is required to view this area', id: "lbl" });

		$.__views.__alloyId25.add($.__views.lbl);
		$.__views.password = Ti.UI.createTextField(
		{ height: 40, top: "20dp", width: "80%", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Titanium.UI.RETURNKEY_GO, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, hintText: "Password", passwordMask: true, clearOnEdit: true, id: "password", autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE });

		$.__views.__alloyId25.add($.__views.password);
		submit ? $.addListener($.__views.password, 'return', submit) : __defers['$.__views.password!return!submit'] = true;$.__views.submit = Ti.UI.createButton(
		{ top: 40, height: Ti.UI.SIZE, width: 200, backgroundColor: "#ccc", borderRadius: 15, borderColor: "#000", font: { fontSize: 20 }, id: "submit", title: "Submit" });

		$.__views.__alloyId25.add($.__views.submit);
		submit ? $.addListener($.__views.submit, 'click', submit) : __defers['$.__views.submit!click!submit'] = true;$.__views.cancel = Ti.UI.createButton(
		{ top: 40, height: Ti.UI.SIZE, width: 200, backgroundColor: "#ccc", borderRadius: 15, borderColor: "#000", font: { fontSize: 20 }, id: "cancel", title: "Cancel" });

		$.__views.__alloyId25.add($.__views.cancel);
		cancel ? $.addListener($.__views.cancel, 'click', cancel) : __defers['$.__views.cancel!click!cancel'] = true;exports.destroy = function () {};




		_.extend($, $.__views);


		Ti.App.Properties.setString('currentWindow', "index");

		$.passwin.statusBarStyle = Ti.UI.iOS.StatusBar.LIGHT_CONTENT;

		var dfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "data.xml");
		var data = [];
		if (!dfile.exists()) {
				data[0] = "example@email.com";
				data[1] = "pass";
				dfile.write(data[0] + "|" + data[1]);
		} else {
				data = dfile.read().text.split("|");
		}

		var startupAnimation = Titanium.UI.createAnimation({
				opacity: 1,
				duration: 250 });

		$.passwin.animate(startupAnimation);

		var closeAnimation = Titanium.UI.createAnimation({
				opacity: 0,
				duration: 250 });

		closeAnimation.addEventListener('complete', function () {
				$.passwin.close();
		});

		function closeWindow() {
				$.passwin.animate(closeAnimation);
		}

		function cancel() {
				$.passwin.close();
				Ti.App.fireEvent("goHome", {});
		}





		function submit() {
				if ($.password.value == data[1]) {

						Ti.App.Properties.setString('currentWindow', "cards");
						closeWindow();
				} else {
						var a = Ti.UI.createAlertDialog({
								title: 'Invalid Password',
								message: "Password is incorrect. Please try again." });

						a.show();
				}
		}





		__defers['$.__views.password!return!submit'] && $.addListener($.__views.password, 'return', submit);__defers['$.__views.submit!click!submit'] && $.addListener($.__views.submit, 'click', submit);__defers['$.__views.cancel!click!cancel'] && $.addListener($.__views.cancel, 'click', cancel);



		_.extend($, exports);
}

module.exports = Controller;