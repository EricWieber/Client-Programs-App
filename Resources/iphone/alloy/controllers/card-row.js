function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "card-row";
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
    $.__views.row = Ti.UI.createTableViewRow(function() {
        var o = {};
        Alloy.isHandheld && _.extend(o, {
            layout: "horizontal",
            height: "60dp",
            color: "#fff"
        });
        Alloy.isTablet && _.extend(o, {
            layout: "horizontal",
            height: "80dp",
            color: "#fff"
        });
        _.extend(o, {
            id: "row",
            className: "row",
            hasChild: "true"
        });
        return o;
    }());
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.check = Ti.UI.createImageView({
        image: "/tick_64.png",
        top: "10dp",
        left: "20dp",
        height: "60dp",
        id: "check",
        visible: "false"
    });
    $.__views.row.add($.__views.check);
    $.__views.name = Ti.UI.createLabel({
        top: "30dp",
        height: Ti.UI.SIZE,
        left: "20dp",
        color: "#fff",
        font: {
            fontSize: 20
        },
        id: "name"
    });
    $.__views.row.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var file = args.file;
    $.row.events = args.events || "";
    $.row.index = args.index || "";
    $.name.text = args.title || "";
    $.row.name = args.name || "";
    $.row.add1 = args.add1 || "";
    $.row.add2 = args.add2 || "";
    $.row.add3 = args.add3 || "";
    $.row.city = args.city || "";
    $.row.state = args.state || "";
    $.row.postcode = args.postcode || "";
    $.row.phone = args.phone || "";
    $.row.mobile = args.mobile || "";
    $.row.email = args.email || "";
    $.row.guestof = args.guestof || "";
    $.row.reltoclient = args.reltoclient || "";
    $.row.oid = args.oid || "";
    $.row.sent = args.sent || "";
    $.check.visible = args.sent || false;
    args.eventName || "";
    $.row.addEventListener("delete", function() {
        var string = JSON.parse(file.read().text);
        "" == $.row.index ? Ti.App.fireEvent("removeEvent", {
            events: $.row.events
        }) : Ti.App.fireEvent("removeCard", {
            events: $.row.events,
            index: $.row.index
        });
        file.write(JSON.stringify(string)) || alert("Failed to update file");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;