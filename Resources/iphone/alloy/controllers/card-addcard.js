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
  this.__controllerPath = 'card-addcard';
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
  { backgroundColor: "transparent", id: "addwin", title: "Add Client", opacity: 0 });

  $.__views.addwin && $.addTopLevelView($.__views.addwin);
  $.__views.__alloyId0 = Ti.UI.createView(
  { backgroundColor: "black", opacity: 0.5, id: "__alloyId0" });

  $.__views.addwin.add($.__views.__alloyId0);
  $.__views.__alloyId1 = Ti.UI.createScrollView(
  { layout: "vertical", backgroundColor: "#163318", height: "80%", width: "80%", borderColor: "#fff", borderRadius: 10, id: "__alloyId1" });

  $.__views.addwin.add($.__views.__alloyId1);
  $.__views.name = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "40dp", color: "#000", height: "40dp", width: "80%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, id: "name", value: "", hintText: "Full Name", autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES });

  $.__views.__alloyId1.add($.__views.name);
  focusNext ? $.addListener($.__views.name, 'return', focusNext) : __defers['$.__views.name!return!focusNext'] = true;$.__views.add1 = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "80%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, id: "add1", value: "", hintText: "Address Line 1", autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES });

  $.__views.__alloyId1.add($.__views.add1);
  focusNext ? $.addListener($.__views.add1, 'return', focusNext) : __defers['$.__views.add1!return!focusNext'] = true;$.__views.add2 = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "80%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, id: "add2", value: "", hintText: "Address Line 2", autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES });

  $.__views.__alloyId1.add($.__views.add2);
  focusNext ? $.addListener($.__views.add2, 'return', focusNext) : __defers['$.__views.add2!return!focusNext'] = true;$.__views.add3 = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "80%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, id: "add3", value: "", hintText: "Address Line 3", autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES });

  $.__views.__alloyId1.add($.__views.add3);
  focusNext ? $.addListener($.__views.add3, 'return', focusNext) : __defers['$.__views.add3!return!focusNext'] = true;$.__views.__alloyId2 = Ti.UI.createView(
  { layout: "horizontal", height: "80dp", id: "__alloyId2" });

  $.__views.__alloyId1.add($.__views.__alloyId2);
  $.__views.city = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "35%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, left: "10%", id: "city", value: "", hintText: "City", autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES });

  $.__views.__alloyId2.add($.__views.city);
  focusNext ? $.addListener($.__views.city, 'return', focusNext) : __defers['$.__views.city!return!focusNext'] = true;$.__views.state = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "15%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, left: "5%", id: "state", value: "", hintText: "State", autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL });

  $.__views.__alloyId2.add($.__views.state);
  focusNext ? $.addListener($.__views.state, 'return', focusNext) : __defers['$.__views.state!return!focusNext'] = true;$.__views.postcode = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "20%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, left: "5%", id: "postcode", value: "", hintText: "ZIP code", autocorrect: true });

  $.__views.__alloyId2.add($.__views.postcode);
  focusNext ? $.addListener($.__views.postcode, 'return', focusNext) : __defers['$.__views.postcode!return!focusNext'] = true;$.__views.__alloyId3 = Ti.UI.createView(
  { layout: "horizontal", height: "60dp", id: "__alloyId3" });

  $.__views.__alloyId1.add($.__views.__alloyId3);
  $.__views.phone = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "37.5%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, left: "10%", id: "phone", value: "", hintText: "Phone Number", autocorrect: true });

  $.__views.__alloyId3.add($.__views.phone);
  focusNext ? $.addListener($.__views.phone, 'return', focusNext) : __defers['$.__views.phone!return!focusNext'] = true;$.__views.mobile = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "37.5%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, left: "5%", id: "mobile", value: "", hintText: "Mobile Number", autocorrect: true });

  $.__views.__alloyId3.add($.__views.mobile);
  focusNext ? $.addListener($.__views.mobile, 'return', focusNext) : __defers['$.__views.mobile!return!focusNext'] = true;$.__views.email = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "80%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, id: "email", value: "", hintText: "Email Address", autocorrect: true });

  $.__views.__alloyId1.add($.__views.email);
  focusNext ? $.addListener($.__views.email, 'return', focusNext) : __defers['$.__views.email!return!focusNext'] = true;$.__views.__alloyId4 = Ti.UI.createView(
  { layout: "horizontal", height: "60dp", top: "30dp", id: "__alloyId4" });

  $.__views.__alloyId1.add($.__views.__alloyId4);
  $.__views.guestof = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "37.5%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, left: "10%", id: "guestof", value: "", hintText: "Guest of ___", autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES });

  $.__views.__alloyId4.add($.__views.guestof);
  focusNext ? $.addListener($.__views.guestof, 'return', focusNext) : __defers['$.__views.guestof!return!focusNext'] = true;$.__views.oid = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "37.5%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD, returnKeyType: Titanium.UI.RETURNKEY_NEXT, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, left: "5%", id: "oid", value: "", hintText: "OID Number", autocorrect: true });

  $.__views.__alloyId4.add($.__views.oid);
  focusNext ? $.addListener($.__views.oid, 'return', focusNext) : __defers['$.__views.oid!return!focusNext'] = true;$.__views.reltoclient = Ti.UI.createTextField(
  { font: { fontSize: 20 }, top: "20dp", color: "#000", height: "40dp", width: "80%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Titanium.UI.RETURNKEY_DONE, borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, id: "reltoclient", value: "", hintText: "Relation to Client", autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES });

  $.__views.__alloyId1.add($.__views.reltoclient);
  $.__views.save = Ti.UI.createButton(
  { top: "50dp", height: Ti.UI.SIZE, width: 200, backgroundColor: "#ccc", borderRadius: 15, borderColor: "#000", font: { fontSize: 20 }, id: "save", title: "Save" });

  $.__views.__alloyId1.add($.__views.save);
  save ? $.addListener($.__views.save, 'click', save) : __defers['$.__views.save!click!save'] = true;$.__views.cancel = Ti.UI.createButton(
  { top: "50dp", height: Ti.UI.SIZE, width: 200, backgroundColor: "#ccc", borderRadius: 15, borderColor: "#000", font: { fontSize: 20 }, id: "cancel", title: "Cancel" });

  $.__views.__alloyId1.add($.__views.cancel);
  closeWindow ? $.addListener($.__views.cancel, 'click', closeWindow) : __defers['$.__views.cancel!click!closeWindow'] = true;exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};

  var file = args.file;
  var events = args.events;

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

    string[events][string[events].length] = {
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
      sent: 'false' };



    if (!file.write(JSON.stringify(string))) {
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
        break;}

  }

  function calert(t, m) {
    var dialog = Ti.UI.createAlertDialog({
      message: m,
      ok: 'Ok',
      title: t });

    dialog.show();
  }

  Ti.App.addEventListener('goHome', function (event) {
    closeWindow();
  });





  __defers['$.__views.name!return!focusNext'] && $.addListener($.__views.name, 'return', focusNext);__defers['$.__views.add1!return!focusNext'] && $.addListener($.__views.add1, 'return', focusNext);__defers['$.__views.add2!return!focusNext'] && $.addListener($.__views.add2, 'return', focusNext);__defers['$.__views.add3!return!focusNext'] && $.addListener($.__views.add3, 'return', focusNext);__defers['$.__views.city!return!focusNext'] && $.addListener($.__views.city, 'return', focusNext);__defers['$.__views.state!return!focusNext'] && $.addListener($.__views.state, 'return', focusNext);__defers['$.__views.postcode!return!focusNext'] && $.addListener($.__views.postcode, 'return', focusNext);__defers['$.__views.phone!return!focusNext'] && $.addListener($.__views.phone, 'return', focusNext);__defers['$.__views.mobile!return!focusNext'] && $.addListener($.__views.mobile, 'return', focusNext);__defers['$.__views.email!return!focusNext'] && $.addListener($.__views.email, 'return', focusNext);__defers['$.__views.guestof!return!focusNext'] && $.addListener($.__views.guestof, 'return', focusNext);__defers['$.__views.oid!return!focusNext'] && $.addListener($.__views.oid, 'return', focusNext);__defers['$.__views.save!click!save'] && $.addListener($.__views.save, 'click', save);__defers['$.__views.cancel!click!closeWindow'] && $.addListener($.__views.cancel, 'click', closeWindow);



  _.extend($, exports);
}

module.exports = Controller;