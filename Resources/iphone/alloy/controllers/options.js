function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function closeWindow() {
        $.addwin.animate(closeAnimation);
    }
    function next() {
        $.pass2.focus();
    }
    function save() {
        data[0] = $.email.value;
        $.pass1.value == $.pass2.value && (data[1] = $.pass2.value);
        dfile.write(data[0] + "|" + data[1]) || calert("Error", "Failed to update data file");
        closeWindow();
    }
    function calert(t, m) {
        var dialog = Ti.UI.createAlertDialog({
            message: m,
            ok: "Ok",
            title: t
        });
        dialog.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "options";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addwin = Ti.UI.createWindow({
        backgroundColor: "transparent",
        id: "addwin",
        title: "Options",
        opacity: "0"
    });
    $.__views.addwin && $.addTopLevelView($.__views.addwin);
    $.__views.__alloyId22 = Ti.UI.createView({
        backgroundColor: "black",
        opacity: "0.5",
        id: "__alloyId22"
    });
    $.__views.addwin.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#163318",
        height: "60%",
        width: "50%",
        borderColor: "#fff",
        borderRadius: 10,
        id: "__alloyId23"
    });
    $.__views.addwin.add($.__views.__alloyId23);
    $.__views.emailLbl = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#fff",
        top: "30dp",
        font: {
            fontSize: 20
        },
        text: "Default Email:",
        id: "emailLbl"
    });
    $.__views.__alloyId23.add($.__views.emailLbl);
    $.__views.email = Ti.UI.createTextField({
        height: 40,
        top: "20dp",
        width: "80%",
        keyboardType: Titanium.UI.KEYBOARD_EMAIL,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Email",
        id: "email",
        value: "",
        autocorrect: "true",
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS
    });
    $.__views.__alloyId23.add($.__views.email);
    $.__views.emailLbl = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#fff",
        top: "30dp",
        font: {
            fontSize: 20
        },
        text: "Change Password:",
        id: "emailLbl"
    });
    $.__views.__alloyId23.add($.__views.emailLbl);
    $.__views.pass1 = Ti.UI.createTextField({
        height: 40,
        top: "20dp",
        width: "80%",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        passwordMask: true,
        clearOnEdit: true,
        id: "pass1",
        value: "",
        hintText: "New Password",
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        autocorrect: "false",
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
    });
    $.__views.__alloyId23.add($.__views.pass1);
    next ? $.__views.pass1.addEventListener("return", next) : __defers["$.__views.pass1!return!next"] = true;
    $.__views.pass2 = Ti.UI.createTextField({
        height: 40,
        top: "20dp",
        width: "80%",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        passwordMask: true,
        clearOnEdit: true,
        id: "pass2",
        value: "",
        hintText: "Verify New Password",
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        autocorrect: "false",
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
    });
    $.__views.__alloyId23.add($.__views.pass2);
    $.__views.save = Ti.UI.createButton({
        top: 40,
        height: Ti.UI.SIZE,
        width: 200,
        backgroundColor: "#ccc",
        borderRadius: 15,
        borderColor: "#000",
        font: {
            fontSize: 20
        },
        id: "save",
        title: "Save"
    });
    $.__views.__alloyId23.add($.__views.save);
    save ? $.__views.save.addEventListener("click", save) : __defers["$.__views.save!click!save"] = true;
    $.__views.cancel = Ti.UI.createButton({
        top: 40,
        height: Ti.UI.SIZE,
        width: 200,
        backgroundColor: "#ccc",
        borderRadius: 15,
        borderColor: "#000",
        font: {
            fontSize: 20
        },
        id: "cancel",
        title: "Cancel"
    });
    $.__views.__alloyId23.add($.__views.cancel);
    closeWindow ? $.__views.cancel.addEventListener("click", closeWindow) : __defers["$.__views.cancel!click!closeWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.Properties.setString("currentWindow", "options");
    var dfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "data.xml");
    var data = [];
    if (dfile.exists()) data = dfile.read().text.split("|"); else {
        data[1] = "fisher123";
        dfile.write(data[0] + "|" + data[1]);
    }
    var startupAnimation = Titanium.UI.createAnimation({
        opacity: 1,
        duration: 250
    });
    $.addwin.animate(startupAnimation);
    var closeAnimation = Titanium.UI.createAnimation({
        opacity: 0,
        duration: 250
    });
    closeAnimation.addEventListener("complete", function() {
        $.addwin.close();
        Ti.App.Properties.setString("currentWindow", "index");
    });
    Ti.App.addEventListener("goHome", function() {
        closeWindow();
    });
    __defers["$.__views.pass1!return!next"] && $.__views.pass1.addEventListener("return", next);
    __defers["$.__views.save!click!save"] && $.__views.save.addEventListener("click", save);
    __defers["$.__views.cancel!click!closeWindow"] && $.__views.cancel.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;