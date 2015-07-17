var assert = require("assert");
var userAgents = require('./userAgents');
var SmartPhone = require('../detect-browser')(false);

describe('SmartPhone', function() {

	describe('check all SmartPhone function as per userAgents', function(){

		userAgents.forEach(function(ua){

			it('it should check: ' + ua['call'], function(){
				SmartPhone.setUserAgent(ua['userAgent']);
				assert.notEqual(null, SmartPhone[ua['call']]());
			});

		});
	});
});