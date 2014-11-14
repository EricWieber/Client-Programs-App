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
    function save() {
        var string = JSON.parse(file.read().text);
        $.name.value in string || (string[$.name.value] = []);
        file.write(JSON.stringify(string)) || calert("Error", "Failed to update database file");
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
    this.__controllerPath = "card-addevent";
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
        title: "Add Event",
        opacity: "0"
    });
    $.__views.addwin && $.addTopLevelView($.__views.addwin);
    $.__views.__alloyId5 = Ti.UI.createView({
        backgroundColor: "black",
        opacity: "0.5",
        id: "__alloyId5"
    });
    $.__views.addwin.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#163318",
        height: "30%",
        width: "60%",
        borderColor: "#fff",
        borderRadius: 10,
        id: "__alloyId6"
    });
    $.__views.addwin.add($.__views.__alloyId6);
    $.__views.name = Ti.UI.createTextField({
        font: {
            fontSize: 20
        },
        top: "50dp",
        color: "#000",
        height: "40dp",
        width: "80%",
        borderRadius: "3dp",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "name",
        value: "",
        hintText: "Event Name",
        autocorrect: "true",
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS
    });
    $.__views.__alloyId6.add($.__views.name);
    $.__views.save = Ti.UI.createButton({
        top: "50dp",
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
    $.__views.__alloyId6.add($.__views.save);
    save ? $.__views.save.addEventListener("click", save) : __defers["$.__views.save!click!save"] = true;
    $.__views.cancel = Ti.UI.createButton({
        top: "50dp",
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
    $.__views.__alloyId6.add($.__views.cancel);
    closeWindow ? $.__views.cancel.addEventListener("click", closeWindow) : __defers["$.__views.cancel!click!closeWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var file = args.file;
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
    });
    Ti.App.addEventListener("goHome", function() {
        closeWindow();
    });
    __defers["$.__views.save!click!save"] && $.__views.save.addEventListener("click", save);
    __defers["$.__views.cancel!click!closeWindow"] && $.__views.cancel.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;