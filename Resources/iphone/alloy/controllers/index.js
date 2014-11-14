function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function inform() {
        var winx = Alloy.createController("inform-index", {}).getView();
        winx.open({
            transition: Ti.UI.iPhone.AnimationStyle.CURL_UP
        });
    }
    function cards() {
        var winy = Alloy.createController("card-index", {}).getView();
        winy.open({
            transition: Ti.UI.iPhone.AnimationStyle.CURL_UP
        });
        var winz = Alloy.createController("pass", {}).getView();
        winz.open();
        Ti.App.Properties.setString("currentWindow", "index");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#163318",
        id: "win",
        backgroundImage: "/FisherBackground.png",
        layout: "vertical"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.topbar = Ti.UI.createView({
        top: "-10dp",
        height: "70dp",
        width: "103%",
        borderColor: "#fff",
        borderRadius: "30dp",
        borderWidth: "2dp",
        backgroundColor: "#215525",
        id: "topbar"
    });
    $.__views.win.add($.__views.topbar);
    $.__views.topTitle = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#fff",
        bottom: "10dp",
        font: {
            fontSize: 20
        },
        text: "Client Programs App",
        id: "topTitle"
    });
    $.__views.topbar.add($.__views.topTitle);
    $.__views.view = Ti.UI.createView({
        id: "view",
        layout: "vertical",
        opacity: "0",
        backgroundImage: "/Fisher-3.png"
    });
    $.__views.win.add($.__views.view);
    $.__views.inform = Ti.UI.createButton({
        top: "10%",
        height: "20%",
        width: "60%",
        borderColor: "#fff",
        borderRadius: "30dp",
        borderWidth: "3dp",
        backgroundColor: "#215525",
        color: "#fff",
        font: {
            fontSize: 36,
            fontWeight: "bold"
        },
        title: "Client Check In",
        id: "inform"
    });
    $.__views.view.add($.__views.inform);
    inform ? $.__views.inform.addEventListener("click", inform) : __defers["$.__views.inform!click!inform"] = true;
    $.__views.informlbl = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#fff",
        bottom: "25dp",
        font: {
            fontSize: 20
        },
        text: "Check in clients and notify the team of their arrival",
        id: "informlbl"
    });
    $.__views.inform.add($.__views.informlbl);
    $.__views.cards = Ti.UI.createButton({
        top: "10%",
        height: "20%",
        width: "60%",
        borderColor: "#fff",
        borderRadius: "30dp",
        borderWidth: "3dp",
        backgroundColor: "#215525",
        color: "#fff",
        font: {
            fontSize: 36,
            fontWeight: "bold"
        },
        title: "Client Info Cards",
        id: "cards"
    });
    $.__views.view.add($.__views.cards);
    cards ? $.__views.cards.addEventListener("click", cards) : __defers["$.__views.cards!click!cards"] = true;
    $.__views.cardslbl = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#fff",
        bottom: "25dp",
        font: {
            fontSize: 20
        },
        text: "View client info and export cards",
        id: "cardslbl"
    });
    $.__views.cards.add($.__views.cardslbl);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.Properties.setString("currentWindow", "index");
    $.win.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    $.win.open();
    $.view.animate(Titanium.UI.createAnimation({
        opacity: 1,
        duration: 1e3,
        delay: 500
    }));
    Ti.App.addEventListener("pause", function() {
        if ("index" != Ti.App.Properties.getString("currentWindow")) {
            var prompt = Alloy.createController("pass", {}).getView();
            prompt.open();
        }
    });
    __defers["$.__views.inform!click!inform"] && $.__views.inform.addEventListener("click", inform);
    __defers["$.__views.cards!click!cards"] && $.__views.cards.addEventListener("click", cards);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;