/*global QUnit*/

sap.ui.define([
	"zprcreate/controller/PRCreation.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PRCreation Controller");

	QUnit.test("I should test the PRCreation controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
