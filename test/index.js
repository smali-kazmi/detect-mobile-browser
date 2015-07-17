var assert = require("assert");
var userAgents = require('./userAgents');

function evaluateUserAgent(ua) {

}

describe('SmartPhone', function() {

	describe('check all SmartPhone function as per userAgents', function(){

		for(index in userAgents) {
			var ua = userAgents[index];
			
			it('it should check: ' + index, function(){
				var SmartPhone = require('../detect-browser')(false);
				SmartPhone.setUserAgent(ua['userAgent'])
				console.log(ua['call']);
				assert.notEqual(null, 1);
			});	

		}

	});
});