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

  describe('check module as a middleware', function(){
    var mw = null;
    var req = null;
    var res = null;

    beforeEach(function(){
      mw = require('../detect-browser')(true);
      req = {
        headers: {
          'user-agent': 'blah blah'
        }
      };
      res = {
        locals: {}
      };
    });

    it('it should contain SmartPhone object', function(done){
      mw(req, res, function(){
        assert.equal(false, res.locals.SmartPhone.isAny());
        done()
      });
    });
  });

  describe('check module all function as a middleware', function(){

    userAgents.forEach(function(ua){

      it('it should check: ' + ua['call'], function(done){
        var mw = null;
        var req = null;
        var res = null;


        mw = require('../detect-browser')(true);
        req = {
          headers: {
            'user-agent': 'blah blah'
          }
        };
        res = {
          locals: {}
        };

        req.headers['user-agent'] = ua['userAgent'];
        mw(req, res, function(){
          assert.notEqual(null, res.locals.SmartPhone[ua['call']]());
          done()
        });
      });

    });

  });


});