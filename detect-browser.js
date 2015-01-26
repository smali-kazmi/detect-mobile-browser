/**
 * 
 * @auther SM@K<smali.kazmi@hotmail.com>
 * @description website: smak.pk
 */

(function() {
    var root = this;

    var SmartPhone = function(obj) {
        if (obj instanceof SmartPhone)
            return obj;
        if (!(this instanceof SmartPhone))
            return new SmartPhone(obj);
        this._wrapped = obj;
    };

    SmartPhone.userAgent = null;
    SmartPhone.getUserAgent = function() {
        return navigator.userAgent;
    };
    
    SmartPhone.setUserAgent = function(userAgent) {
        this.userAgent = userAgent;
    };

    SmartPhone._test = function(regex) {
        return regex.test(this.getUserAgent());
    };

    SmartPhone.isAndroid = function() {
        return this._test(/Android/i);
    };

    SmartPhone.isBlackBerry = function() {
        return this._test(/BlackBerry/i);
    };

    SmartPhone.isIOS = function() {
        return this.isIPhone() || this.isIPad() || this.isIPod();
    };

    SmartPhone.isIPhone = function() {
        return this._test(/iPhone/i);
    };
    
    SmartPhone.isIPad = function() {
        return this._test(/iPad/i);
    };
    
    SmartPhone.isIPod = function() {
        return this._test(/iPod/i);
    };
    
    SmartPhone.isOpera = function() {
        return this._test(/Opera Mini/i);
    };
    
    SmartPhone.isWindows = function() {
        return this.isWindowsDesktop() || this.isWindowsMobile();
    };
    
    SmartPhone.isWindowsMobile = function() {
        return this._test(/IEMobile/i);
    };
    
    SmartPhone.isWindowsDesktop = function() {
        return this._test(/WPDesktop/i);
    };
    
    SmartPhone.isAny = function() {
        var foundAny = false;
        var getAllMethods = Object.getOwnPropertyNames(SmartPhone).filter(function(property) {
            return typeof SmartPhone[property] == 'function';
        });

        for (var index in getAllMethods) {
            if (getAllMethods[index] === 'getUserAgent' || getAllMethods[index] === 'isAny'
                    || getAllMethods[index] === 'isWindows' || getAllMethods[index] === 'isIOS') {
                continue;
            }
            if (SmartPhone[getAllMethods[index]]()) {
                foundAny = true;
                break;
            }
        }
        return foundAny;
    };
    
    if(typeof window === 'function') {
        SmartPhone.setUserAgent(navigator.userAgent);
    } 
    
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = SmartPhone;
        }
        exports.SmartPhone = SmartPhone;
    } else {
        root.SmartPhone = SmartPhone;
    }

}.call(this));
