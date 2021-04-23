sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/demo/basicTemplate/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("ns.calendar.controller.App", {

		formatter: formatter,

		onInit: function () {

		}
	});
});