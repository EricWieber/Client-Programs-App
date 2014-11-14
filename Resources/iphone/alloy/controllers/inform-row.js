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
    this.__controllerPath = "inform-row";
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
            hasChild: "true",
            rowNum: "",
            name: ""
        });
        return o;
    }());
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.name = Ti.UI.createLabel({
        top: "30dp",
        height: Ti.UI.SIZE,
        left: "100dp",
        color: "#fff",
        font: {
            fontSize: 20
        },
        id: "name"
    });
    $.__views.row.add($.__views.name);
    $.__views.check = Ti.UI.createImageView({
        image: "/tick_64.png",
        top: "10dp",
        left: "20dp",
        height: "60dp",
        id: "check",
        visible: "false"
    });
    $.__views.row.add($.__views.check);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var file = args.file;
    $.name.text = args.name;
    $.row.name = args.name;
    $.row.rowNum = args.rowNum;
    $.check.visible = args.sent;
    var eventName = args.eventName;
    $.row.addEventListener("delete", function() {
        var string = JSON.parse(file.read().text);
        if (null == eventName) {
            delete string[$.name.text];
            var ind = string["Events"].indexOf($.name.text);
            ind > -1 && string["Events"].splice(ind, 1);
        } else string[eventName].splice($.row.rowNum, 1);
        file.write(JSON.stringify(string)) || alert("Failed to update file");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;