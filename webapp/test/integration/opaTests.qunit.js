/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"training/Training_Session/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});