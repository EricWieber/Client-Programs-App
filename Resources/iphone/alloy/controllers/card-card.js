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
  this.__controllerPath = 'card-card';
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
  { backgroundColor: "#163318", apiName: "Ti.UI.Window", id: "win3", classes: [] });

  $.__views.win3 && $.addTopLevelView($.__views.win3);
  refresh ? $.addListener($.__views.win3, 'focus', refresh) : __defers['$.__views.win3!focus!refresh'] = true;$.__views.topbar = Ti.UI.createView(
  { top: "-10dp", height: "70dp", width: "103%", borderColor: "#fff", borderRadius: "30dp", borderWidth: "2dp", backgroundColor: "#215525", apiName: "Ti.UI.View", id: "topbar", classes: [] });

  $.__views.win3.add($.__views.topbar);
  $.__views.topTitle = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, apiName: "Ti.UI.Label", id: "topTitle", classes: [] });

  $.__views.topbar.add($.__views.topTitle);
  $.__views.edit = Ti.UI.createButton(
  { height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", right: "50dp", borderColor: "#fff", borderRadius: "10dp", backgroundColor: "#274429", font: { fontSize: 14 }, apiName: "Ti.UI.Button", id: "edit", title: "   Edit   ", classes: [] });

  $.__views.topbar.add($.__views.edit);
  editMe ? $.addListener($.__views.edit, 'click', editMe) : __defers['$.__views.edit!click!editMe'] = true;$.__views.back = Ti.UI.createButton(
  { height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", left: "50dp", borderColor: "#fff", borderRadius: "10dp", backgroundColor: "#274429", font: { fontSize: 14 }, apiName: "Ti.UI.Button", id: "back", title: "  Clients  ", classes: [] });

  $.__views.topbar.add($.__views.back);
  closeWindow ? $.addListener($.__views.back, 'click', closeWindow) : __defers['$.__views.back!click!closeWindow'] = true;$.__views.scrollView = Ti.UI.createScrollView(
  { layout: "vertical", backgroundColor: "transparent", color: "#fff", top: "70dp", apiName: "Ti.UI.ScrollView", id: "scrollView", classes: [] });

  $.__views.win3.add($.__views.scrollView);
  $.__views.viewFields = Ti.UI.createView(
  { height: "60dp", layout: "horizontal", apiName: "Ti.UI.View", id: "viewFields", classes: [] });

  $.__views.scrollView.add($.__views.viewFields);
  $.__views.namelbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "25%", text: 'Name:', apiName: "Ti.UI.Label", id: "namelbl", classes: [] });

  $.__views.viewFields.add($.__views.namelbl);
  $.__views.name = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "40%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, apiName: "Ti.UI.TextField", id: "name", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES, classes: [] });

  $.__views.viewFields.add($.__views.name);
  focusNext ? $.addListener($.__views.name, 'return', focusNext) : __defers['$.__views.name!return!focusNext'] = true;$.__views.viewFields = Ti.UI.createView(
  { height: "60dp", layout: "horizontal", apiName: "Ti.UI.View", id: "viewFields", classes: [] });

  $.__views.scrollView.add($.__views.viewFields);
  $.__views.add1lbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "23%", text: 'Address:', apiName: "Ti.UI.Label", id: "add1lbl", classes: [] });

  $.__views.viewFields.add($.__views.add1lbl);
  $.__views.add1 = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "40%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, apiName: "Ti.UI.TextField", id: "add1", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES, classes: [] });

  $.__views.viewFields.add($.__views.add1);
  focusNext ? $.addListener($.__views.add1, 'return', focusNext) : __defers['$.__views.add1!return!focusNext'] = true;$.__views.viewFields = Ti.UI.createView(
  { height: "60dp", layout: "horizontal", apiName: "Ti.UI.View", id: "viewFields", classes: [] });

  $.__views.scrollView.add($.__views.viewFields);
  $.__views.add2lbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "22%", text: 'Address 2:', apiName: "Ti.UI.Label", id: "add2lbl", classes: [] });

  $.__views.viewFields.add($.__views.add2lbl);
  $.__views.add2 = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "40%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, apiName: "Ti.UI.TextField", id: "add2", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES, classes: [] });

  $.__views.viewFields.add($.__views.add2);
  focusNext ? $.addListener($.__views.add2, 'return', focusNext) : __defers['$.__views.add2!return!focusNext'] = true;$.__views.viewFields = Ti.UI.createView(
  { height: "60dp", layout: "horizontal", apiName: "Ti.UI.View", id: "viewFields", classes: [] });

  $.__views.scrollView.add($.__views.viewFields);
  $.__views.add3lbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "22%", text: 'Address 3:', apiName: "Ti.UI.Label", id: "add3lbl", classes: [] });

  $.__views.viewFields.add($.__views.add3lbl);
  $.__views.add3 = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "40%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, apiName: "Ti.UI.TextField", id: "add3", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES, classes: [] });

  $.__views.viewFields.add($.__views.add3);
  focusNext ? $.addListener($.__views.add3, 'return', focusNext) : __defers['$.__views.add3!return!focusNext'] = true;$.__views.viewFields = Ti.UI.createView(
  { height: "60dp", layout: "horizontal", apiName: "Ti.UI.View", id: "viewFields", classes: [] });

  $.__views.scrollView.add($.__views.viewFields);
  $.__views.citylbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "6%", text: 'City:', apiName: "Ti.UI.Label", id: "citylbl", classes: [] });

  $.__views.viewFields.add($.__views.citylbl);
  $.__views.city = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "25%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, apiName: "Ti.UI.TextField", id: "city", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES, classes: [] });

  $.__views.viewFields.add($.__views.city);
  focusNext ? $.addListener($.__views.city, 'return', focusNext) : __defers['$.__views.city!return!focusNext'] = true;$.__views.statelbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "5%", text: 'State:', apiName: "Ti.UI.Label", id: "statelbl", classes: [] });

  $.__views.viewFields.add($.__views.statelbl);
  $.__views.state = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "8%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, apiName: "Ti.UI.TextField", id: "state", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL, classes: [] });

  $.__views.viewFields.add($.__views.state);
  focusNext ? $.addListener($.__views.state, 'return', focusNext) : __defers['$.__views.state!return!focusNext'] = true;$.__views.postcodelbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "5%", text: 'ZIP code:', apiName: "Ti.UI.Label", id: "postcodelbl", classes: [] });

  $.__views.viewFields.add($.__views.postcodelbl);
  $.__views.postcode = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "15%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD, apiName: "Ti.UI.TextField", id: "postcode", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, classes: [] });

  $.__views.viewFields.add($.__views.postcode);
  focusNext ? $.addListener($.__views.postcode, 'return', focusNext) : __defers['$.__views.postcode!return!focusNext'] = true;$.__views.separator = Ti.UI.createView(
  { width: "90%", height: "1dp", backgroundColor: "#5C705D", top: "40dp", bottom: "20dp", apiName: "Ti.UI.View", id: "separator", classes: [] });

  $.__views.scrollView.add($.__views.separator);
  $.__views.viewFields = Ti.UI.createView(
  { height: "60dp", layout: "horizontal", apiName: "Ti.UI.View", id: "viewFields", classes: [] });

  $.__views.scrollView.add($.__views.viewFields);
  $.__views.phonelbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "11%", text: 'Phone:', apiName: "Ti.UI.Label", id: "phonelbl", classes: [] });

  $.__views.viewFields.add($.__views.phonelbl);
  $.__views.phone = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "25%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD, apiName: "Ti.UI.TextField", id: "phone", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, classes: [] });

  $.__views.viewFields.add($.__views.phone);
  focusNext ? $.addListener($.__views.phone, 'return', focusNext) : __defers['$.__views.phone!return!focusNext'] = true;$.__views.mobilelbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "5%", text: 'Mobile:', apiName: "Ti.UI.Label", id: "mobilelbl", classes: [] });

  $.__views.viewFields.add($.__views.mobilelbl);
  $.__views.mobile = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "25%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD, apiName: "Ti.UI.TextField", id: "mobile", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, classes: [] });

  $.__views.viewFields.add($.__views.mobile);
  focusNext ? $.addListener($.__views.mobile, 'return', focusNext) : __defers['$.__views.mobile!return!focusNext'] = true;$.__views.viewFields = Ti.UI.createView(
  { height: "60dp", layout: "horizontal", apiName: "Ti.UI.View", id: "viewFields", classes: [] });

  $.__views.scrollView.add($.__views.viewFields);
  $.__views.emaillbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "24%", text: 'Email:', apiName: "Ti.UI.Label", id: "emaillbl", classes: [] });

  $.__views.viewFields.add($.__views.emaillbl);
  $.__views.email = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "40%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, apiName: "Ti.UI.TextField", id: "email", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, classes: [] });

  $.__views.viewFields.add($.__views.email);
  focusNext ? $.addListener($.__views.email, 'return', focusNext) : __defers['$.__views.email!return!focusNext'] = true;$.__views.separator = Ti.UI.createView(
  { width: "90%", height: "1dp", backgroundColor: "#5C705D", top: "40dp", bottom: "20dp", apiName: "Ti.UI.View", id: "separator", classes: [] });

  $.__views.scrollView.add($.__views.separator);
  $.__views.viewFields = Ti.UI.createView(
  { height: "60dp", layout: "horizontal", apiName: "Ti.UI.View", id: "viewFields", classes: [] });

  $.__views.scrollView.add($.__views.viewFields);
  $.__views.guestoflbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "10%", text: 'Guest of:', apiName: "Ti.UI.Label", id: "guestoflbl", classes: [] });

  $.__views.viewFields.add($.__views.guestoflbl);
  $.__views.guestof = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "30%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, apiName: "Ti.UI.TextField", id: "guestof", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES, classes: [] });

  $.__views.viewFields.add($.__views.guestof);
  focusNext ? $.addListener($.__views.guestof, 'return', focusNext) : __defers['$.__views.guestof!return!focusNext'] = true;$.__views.oidlbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "5%", text: 'OID:', apiName: "Ti.UI.Label", id: "oidlbl", classes: [] });

  $.__views.viewFields.add($.__views.oidlbl);
  $.__views.oid = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "25%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD, apiName: "Ti.UI.TextField", id: "oid", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_NEXT, autocorrect: true, classes: [] });

  $.__views.viewFields.add($.__views.oid);
  focusNext ? $.addListener($.__views.oid, 'return', focusNext) : __defers['$.__views.oid!return!focusNext'] = true;$.__views.viewFields = Ti.UI.createView(
  { height: "60dp", layout: "horizontal", apiName: "Ti.UI.View", id: "viewFields", classes: [] });

  $.__views.scrollView.add($.__views.viewFields);
  $.__views.reltoclientlbl = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", bottom: "10dp", font: { fontSize: 20 }, left: "16%", text: 'Relationship to client:', apiName: "Ti.UI.Label", id: "reltoclientlbl", classes: [] });

  $.__views.viewFields.add($.__views.reltoclientlbl);
  $.__views.reltoclient = Ti.UI.createTextField(
  { font: { fontSize: 20 }, height: "40dp", width: "40%", borderRadius: "3dp", paddingLeft: "5dp", paddingRight: "5dp", top: "20dp", left: "2%", keyboardType: Titanium.UI.KEYBOARD_TYPE_DEFAULT, apiName: "Ti.UI.TextField", id: "reltoclient", value: "", editable: false, returnKeyType: Titanium.UI.RETURNKEY_DONE, autocorrect: true, autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES, classes: [] });

  $.__views.viewFields.add($.__views.reltoclient);
  $.__views.separator = Ti.UI.createView(
  { width: "90%", height: "1dp", backgroundColor: "#5C705D", top: "40dp", bottom: "20dp", apiName: "Ti.UI.View", id: "separator", classes: [] });

  $.__views.scrollView.add($.__views.separator);
  $.__views.informBtn = Ti.UI.createButton(
  { top: "20dp", height: Ti.UI.SIZE, width: 200, backgroundColor: "#ccc", borderRadius: 15, borderColor: "#000", font: { fontSize: 20 }, apiName: "Ti.UI.Button", id: "informBtn", title: "Send This Card", classes: [] });

  $.__views.scrollView.add($.__views.informBtn);
  sendEmail ? $.addListener($.__views.informBtn, 'click', sendEmail) : __defers['$.__views.informBtn!click!sendEmail'] = true;$.__views.sent = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#aaa", bottom: "10dp", font: { fontSize: 20 }, top: "20dp", text: 'Email not sent', apiName: "Ti.UI.Label", id: "sent", sent: false, classes: [] });

  $.__views.scrollView.add($.__views.sent);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};

  var file = args.file;
  var events = args.row.events;
  var index = args.row.index;
  $.name.value = args.row.name;
  $.add1.value = args.row.add1;
  $.add2.value = args.row.add2;
  $.add3.value = args.row.add3;
  $.city.value = args.row.city;
  $.state.value = args.row.state;
  $.postcode.value = args.row.postcode;
  $.phone.value = args.row.phone;
  $.mobile.value = args.row.mobile;
  $.email.value = args.row.email;
  $.guestof.value = args.row.guestof;
  $.reltoclient.value = args.row.reltoclient;
  $.oid.value = args.row.oid;
  $.sent.sent = args.row.sent;

  var string = JSON.parse(file.read().text);
  var edit = "false";

  var editStyle = $.createStyle({
    color: '#000',
    backgroundColor: "#fff",
    editable: 'true',
    borderColor: '#000' });

  var normStyle = $.createStyle({
    color: '#fff',
    backgroundColor: "#163318",
    editable: 'false',
    borderColor: '#777' });


  setStyle();

  $.win3.statusBarStyle = Ti.UI.iOS.StatusBar.LIGHT_CONTENT;

  function refresh() {
    setStyle();
    string = JSON.parse(file.read().text);
  }

  function closeWindow() {
    $.win3.close({ transition: Ti.UI.iOS.AnimationStyle.CURL_DOWN });
  }

  function setStyle() {
    edit = "false";
    $.win3.backgroundColor = "#163318";
    $.edit.title = "     Edit     ";
    $.topTitle.text = "Card";
    $.informBtn.title = "Send Card";

    $.name.applyProperties(normStyle);
    $.add1.applyProperties(normStyle);
    $.add2.applyProperties(normStyle);
    $.add3.applyProperties(normStyle);
    $.city.applyProperties(normStyle);
    $.state.applyProperties(normStyle);
    $.postcode.applyProperties(normStyle);
    $.phone.applyProperties(normStyle);
    $.mobile.applyProperties(normStyle);
    $.email.applyProperties(normStyle);
    $.guestof.applyProperties(normStyle);
    $.reltoclient.applyProperties(normStyle);
    $.oid.applyProperties(normStyle);

    if ($.sent.sent == "true") $.sent.text = "Email Sent";
  }

  function editMe() {
    if (edit == "false") {
      edit = "true";
      $.win3.backgroundColor = "#0B1A0C";
      $.edit.title = "  Cancel  ";
      $.topTitle.text = "Edit";
      $.informBtn.title = "Save";

      $.name.applyProperties(editStyle);
      $.add1.applyProperties(editStyle);
      $.add2.applyProperties(editStyle);
      $.add3.applyProperties(editStyle);
      $.city.applyProperties(editStyle);
      $.state.applyProperties(editStyle);
      $.postcode.applyProperties(editStyle);
      $.phone.applyProperties(editStyle);
      $.mobile.applyProperties(editStyle);
      $.email.applyProperties(editStyle);
      $.guestof.applyProperties(editStyle);
      $.reltoclient.applyProperties(editStyle);
      $.oid.applyProperties(editStyle);
    } else {
      setStyle();

      $.name.value = args.row.name;
      $.add1.value = args.row.add1;
      $.add2.value = args.row.add2;
      $.add3.value = args.row.add3;
      $.city.value = args.row.city;
      $.state.value = args.row.state;
      $.postcode.value = args.row.postcode;
      $.phone.value = args.row.phone;
      $.mobile.value = args.row.mobile;
      $.email.value = args.row.email;
      $.guestof.value = args.row.guestof;
      $.reltoclient.value = args.row.reltoclient;
      $.oid.value = args.row.oid;
    }
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

  function sendEmail() {
    string = JSON.parse(file.read().text);

    if (edit == 'true') {
      string[events][index] = {
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
        oid: $.oid.value };


      args.row.name = $.name.value;
      args.row.add1 = $.add1.value;
      args.row.add2 = $.add2.value;
      args.row.add3 = $.add3.value;
      args.row.city = $.city.value;
      args.row.state = $.state.value;
      args.row.postcode = $.postcode.value;
      args.row.phone = $.phone.value;
      args.row.mobile = $.mobile.value;
      args.row.email = $.email.value;
      args.row.guestof = $.guestof.value;
      args.row.reltoclient = $.reltoclient.value;
      args.row.oid = $.oid.value;

      if (!file.write(JSON.stringify(string))) {
        calert("Error", "Failed to update file");
      }

      editMe();
      return;
    }

    var emailDialog = Ti.UI.createEmailDialog();
    if (!emailDialog.isSupported()) {
      calert("Warning", "Device cannot currently send emails");
      return;
    }

    var fileOut = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, "Card-" + events + "-" + $.name.value + ".xml");

    var firstName = string[events][index].name.split(" ", 1);
    var lastName = string[events][index].name.replace(firstName + " ", "");

    var str = "<?xml version=\"1.0\"?><Workbook xmlns=\"urn:schemas-microsoft-com:office:spreadsheet\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:x=\"urn:schemas-microsoft-com:office:excel\" xmlns:ss=\"urn:schemas-microsoft-com:office:spreadsheet\" xmlns:html=\"http://www.w3.org/TR/REC-html40\"><DocumentProperties xmlns=\"urn:schemas-microsoft-com:office:office\"><Author>Kelsey Higgins</Author><LastAuthor>Kelsey Higgins</LastAuthor><Created>2014-10-02T14:57:39Z</Created><LastSaved>2014-10-22T14:42:11Z</LastSaved><Company>Fisher Investments</Company><Version>14.0</Version></DocumentProperties><OfficeDocumentSettings xmlns=\"urn:schemas-microsoft-com:office:office\"><AllowPNG/></OfficeDocumentSettings><ExcelWorkbook xmlns=\"urn:schemas-microsoft-com:office:excel\"><WindowHeight>6440</WindowHeight><WindowWidth>27140</WindowWidth><WindowTopX>120</WindowTopX><WindowTopY>80</WindowTopY><TabRatio>600</TabRatio><ProtectStructure>False</ProtectStructure><ProtectWindows>False</ProtectWindows></ExcelWorkbook><Styles><Style ss:ID=\"Default\" ss:Name=\"Normal\"><Alignment ss:Vertical=\"Bottom\"/><Borders/><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"11\" ss:Color=\"#000000\"/><Interior/><NumberFormat/><Protection/></Style><Style ss:ID=\"s61\" ss:Name=\"Hyperlink\"><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"11\" ss:Color=\"#0000D4\"    ss:Underline=\"Single\"/></Style><Style ss:ID=\"s56\" ss:Name=\"Normal 4\"><Alignment ss:Vertical=\"Bottom\"/><Borders/><Font/><Interior/><NumberFormat/><Protection/></Style><Style ss:ID=\"s59\" ss:Name=\"Normal_Sheet1\"><Alignment ss:Vertical=\"Bottom\"/><Borders/><Font x:Family=\"Swiss\" ss:Color=\"#000000\"/><Interior/><NumberFormat/><Protection/></Style><Style ss:ID=\"s63\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior ss:Color=\"#C0C0C0\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s64\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Right\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior/></Style><Style ss:ID=\"s65\" ss:Parent=\"s59\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior/></Style><Style ss:ID=\"s66\" ss:Parent=\"s59\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#0000D4\"/><Interior/></Style><Style ss:ID=\"s67\" ss:Parent=\"s59\"><Alignment ss:Vertical=\"Bottom\"/><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#0000D4\"/></Style><Style ss:ID=\"s68\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Right\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior/><NumberFormat ss:Format=\"dd\-mmm\-yy\"/></Style><Style ss:ID=\"s69\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior ss:Color=\"#FCF305\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s70\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior ss:Color=\"#DD0806\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s71\" ss:Parent=\"s56\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\"/><Interior ss:Color=\"#FCF305\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s72\" ss:Parent=\"s56\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\"/></Style><Style ss:ID=\"s73\" ss:Parent=\"s56\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\"/><Interior ss:Color=\"#DD0806\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s74\" ss:Parent=\"s56\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Bold=\"1\"/></Style><Style ss:ID=\"s75\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior/></Style><Style ss:ID=\"s79\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior ss:Color=\"#C0C0C0\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s80\" ss:Parent=\"s59\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior/></Style><Style ss:ID=\"s81\" ss:Parent=\"s56\"><Borders><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders></Style><Style ss:ID=\"s82\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior ss:Color=\"#DD0806\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s83\" ss:Parent=\"s59\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#0000D4\"/><Interior/></Style><Style ss:ID=\"s84\"><Borders><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders></Style><Style ss:ID=\"s85\" ss:Parent=\"s56\"><Alignment ss:Vertical=\"Bottom\"/><Borders/><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\"/></Style><Style ss:ID=\"s86\" ss:Parent=\"s61\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#0000D4\"    ss:Underline=\"Single\"/><Interior/></Style><Style ss:ID=\"s87\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\"/><Interior ss:Color=\"#6711FF\" ss:Pattern=\"Solid\"/></Style></Styles><Worksheet ss:Name=\"Sheet1\"><Table ss:DefaultColumnWidth=\"53\" ss:DefaultRowHeight=\"14\"><Column ss:Width=\"75\"/><Column ss:Width=\"72\"/><Column ss:Width=\"136\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"41\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"69\"/><Column ss:Width=\"86\"/><Column ss:Width=\"131\"/><Column ss:Index=\"12\" ss:Width=\"57\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"24\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"22\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"31\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"27\"/><Column ss:Index=\"18\" ss:AutoFitWidth=\"0\" ss:Width=\"135\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"96\"/><Column ss:Index=\"21\" ss:Width=\"90\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"105\"/><Column ss:Index=\"24\" ss:Width=\"75\"/><Column ss:Index=\"26\" ss:Width=\"70\"/><Column ss:StyleID=\"s84\" ss:Width=\"520\"/><Column ss:Width=\"137\"/><Column ss:Width=\"63\"/><Column ss:Width=\"67\"/><Column ss:Width=\"61\"/><Row><Cell ss:StyleID=\"s74\"><Data ss:Type=\"String\">Legend</Data></Cell><Cell ss:StyleID=\"s71\"/><Cell ss:StyleID=\"s72\"><Data ss:Type=\"String\">Required Fields if provided</Data></Cell><Cell ss:StyleID=\"s85\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s81\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/></Row><Row><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s73\"/><Cell ss:StyleID=\"s72\"><Data ss:Type=\"String\">SST to complete</Data></Cell><Cell ss:StyleID=\"s85\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s81\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/></Row><Row ss:Index=\"5\"><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">Status</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">Notes Entered</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Seminar Name</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Guest OID</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Guest Name</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Guest Last Name</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Address1</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">City</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">State</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Zip</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Country</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">HomePhone</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">WorkPhone</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">Cellular</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">Pager</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">Fax</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Email</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">CommunicationMethod</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">ResponseSource</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">PersonAssetValue</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">Wishes</Data></Cell><Cell ss:StyleID=\"s87\"><Data ss:Type=\"String\">SalesPerson</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">ResponseBox</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">ResponseDate</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Client OID</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">FulfillmentKit</Data></Cell><Cell ss:StyleID=\"s82\"><Data ss:Type=\"String\">Notes</Data></Cell><Cell ss:StyleID=\"s79\"><Data ss:Type=\"String\">Additional Notes From Card</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Client Name</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Relationship</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">Date Entered</Data></Cell><Cell ss:StyleID=\"s70\"/><Cell ss:StyleID=\"s70\"/><Cell ss:StyleID=\"s70\"/><Cell ss:StyleID=\"s70\"/></Row>";
    str += "<Row><Cell ss:StyleID=\"s75\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\">" + events + "</Data></Cell>" + "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\">" + string[events][index].oid + "</Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">" + firstName + "</Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">" + lastName + "</Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">" + string[events][index].add1 + ",\n" + string[events][index].add2 + ",\n" + string[events][index].add3 + "</Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">" + string[events][index].city + "</Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">" + string[events][index].state + "</Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">" + string[events][index].postcode + "</Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">" + string[events][index].phone + "</Data></Cell>" + "<Cell ss:StyleID=\"s66\"/>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">" + string[events][index].mobile + "</Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s86\" ss:HRef=\"" + string[events][index].email + "\"><Data ss:Type=\"String\">" + string[events][index].email + "</Data></Cell>" + "<Cell ss:StyleID=\"s66\"/>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s66\"/>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s67\"/>" + "<Cell ss:StyleID=\"s67\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s66\"/>" + "<Cell ss:StyleID=\"s83\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s80\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\">" + string[events][index].guestof + "</Data></Cell>" + "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\">" + string[events][index].reltoclient + "</Data></Cell>" + "<Cell ss:StyleID=\"s64\"/>" + "<Cell ss:StyleID=\"s68\"/>" + "<Cell ss:StyleID=\"s64\"/>" + "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\"></Data></Cell>" + "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\"></Data></Cell>" + "</Row>";
    str += "</Table><WorksheetOptions xmlns=\"urn:schemas-microsoft-com:office:excel\"><PageSetup><Header x:Margin=\"0.3\"/><Footer x:Margin=\"0.3\"/><PageMargins x:Bottom=\"0.75\" x:Left=\"0.7\" x:Right=\"0.7\" x:Top=\"0.75\"/></PageSetup><Print><ValidPrinterInfo/><HorizontalResolution>600</HorizontalResolution><VerticalResolution>600</VerticalResolution></Print><PageLayoutZoom>0</PageLayoutZoom><Selected/><TopRowVisible>1</TopRowVisible><Panes><Pane><Number>3</Number><ActiveRow>3</ActiveRow><ActiveCol>1</ActiveCol></Pane></Panes><ProtectObjects>False</ProtectObjects><ProtectScenarios>False</ProtectScenarios></WorksheetOptions></Worksheet></Workbook>";

    if (!fileOut.write(str)) {
      calert("Error", "Failed to export xml file");
    }

    var dfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "data.xml");
    var data = [];
    if (!dfile.exists()) {
      data[0] = "example@email.com";
      data[1] = "pass";
      dfile.write(data[0] + "|" + data[1]);
    } else {
      data = dfile.read().text.split("|");
    }

    emailDialog.subject = "Info Card for " + $.name.value + " from " + events;
    emailDialog.toRecipients = [data[0]];
    emailDialog.messageBody = "Attached is the info card for '" + $.name.value + "' from the '" + events + "' event";
    emailDialog.addAttachment(fileOut);
    emailDialog.open({
      animated: true });


    emailDialog.addEventListener('complete', function (e) {
      if (e.result == emailDialog.SENT) {
        string[events][index].sent = "true";
        $.sent.sent = "true";

        if (!file.write(JSON.stringify(string))) {
          calert("Error", "Failed to update database file");
        }

        var cprompt = Alloy.createController('card-prompt', { events: events, index: index, all: false }).getView();
        cprompt.open();

        fileOut.deleteFile();
      } else {
        calert("Error", "Email not sent");
      }
    });
  }

  function calert(t, m) {
    var dialog = Ti.UI.createAlertDialog({
      message: m,
      ok: 'Ok',
      title: t });

    dialog.show();
  }

  Ti.App.addEventListener('removeCard', function () {
    $.win3.close();
  });

  Ti.App.addEventListener('removeEvent', function () {
    $.win3.close();
  });

  Ti.App.addEventListener('goHome', function (event) {
    closeWindow();
  });












  __defers['$.__views.win3!focus!refresh'] && $.addListener($.__views.win3, 'focus', refresh);__defers['$.__views.edit!click!editMe'] && $.addListener($.__views.edit, 'click', editMe);__defers['$.__views.back!click!closeWindow'] && $.addListener($.__views.back, 'click', closeWindow);__defers['$.__views.name!return!focusNext'] && $.addListener($.__views.name, 'return', focusNext);__defers['$.__views.add1!return!focusNext'] && $.addListener($.__views.add1, 'return', focusNext);__defers['$.__views.add2!return!focusNext'] && $.addListener($.__views.add2, 'return', focusNext);__defers['$.__views.add3!return!focusNext'] && $.addListener($.__views.add3, 'return', focusNext);__defers['$.__views.city!return!focusNext'] && $.addListener($.__views.city, 'return', focusNext);__defers['$.__views.state!return!focusNext'] && $.addListener($.__views.state, 'return', focusNext);__defers['$.__views.postcode!return!focusNext'] && $.addListener($.__views.postcode, 'return', focusNext);__defers['$.__views.phone!return!focusNext'] && $.addListener($.__views.phone, 'return', focusNext);__defers['$.__views.mobile!return!focusNext'] && $.addListener($.__views.mobile, 'return', focusNext);__defers['$.__views.email!return!focusNext'] && $.addListener($.__views.email, 'return', focusNext);__defers['$.__views.guestof!return!focusNext'] && $.addListener($.__views.guestof, 'return', focusNext);__defers['$.__views.oid!return!focusNext'] && $.addListener($.__views.oid, 'return', focusNext);__defers['$.__views.informBtn!click!sendEmail'] && $.addListener($.__views.informBtn, 'click', sendEmail);



  _.extend($, exports);
}

module.exports = Controller;