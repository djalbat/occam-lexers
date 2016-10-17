'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    util = require('../util');

var Rules = function () {
  function Rules(array) {
    _classCallCheck(this, Rules);

    this.array = array;
  }

  _createClass(Rules, [{
    key: 'significantTokenFromContent',
    value: function significantTokenFromContent(content, line) {
      var significantToken = null;

      this.array.some(function (rule) {
        significantToken = rule.significantTokenFromContent(content, line);

        if (significantToken !== null) {
          return true;
        } else {
          return false;
        }
      });

      return significantToken;
    }
  }], [{
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var array = grammar.map(function (entry) {
        var type = grammar.type(entry),
            regExp = entry[type],
            regExpPattern = util.regExpPattern(regExp);

        regExp = new RegExp('^(' + regExpPattern + ')', 'u'); ///

        var rule = new Rule(type, regExp);

        return rule;
      }),
          rules = new Rules(array);

      return rules;
    }
  }]);

  return Rules;
}();

module.exports = Rules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJhcnJheSIsImNvbnRlbnQiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJydWxlIiwic2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50IiwiZ3JhbW1hciIsIm1hcCIsImVudHJ5IiwidHlwZSIsInJlZ0V4cCIsInJlZ0V4cFBhdHRlcm4iLCJSZWdFeHAiLCJydWxlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLE9BQU9ELFFBQVEsU0FBUixDQURYOztJQUdNRSxLO0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7Z0RBRTJCQyxPLEVBQVNDLEksRUFBTTtBQUN6QyxVQUFJQyxtQkFBbUIsSUFBdkI7O0FBRUEsV0FBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3QkYsMkJBQW1CRSxLQUFLQywyQkFBTCxDQUFpQ0wsT0FBakMsRUFBMENDLElBQTFDLENBQW5COztBQUVBLFlBQUlDLHFCQUFxQixJQUF6QixFQUErQjtBQUM3QixpQkFBTyxJQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FSRDs7QUFVQSxhQUFPQSxnQkFBUDtBQUNEOzs7Z0NBRWtCSSxPLEVBQVM7QUFDMUIsVUFBSVAsUUFBUU8sUUFBUUMsR0FBUixDQUFZLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsWUFBSUMsT0FBT0gsUUFBUUcsSUFBUixDQUFhRCxLQUFiLENBQVg7QUFBQSxZQUNJRSxTQUFTRixNQUFNQyxJQUFOLENBRGI7QUFBQSxZQUVJRSxnQkFBZ0JkLEtBQUtjLGFBQUwsQ0FBbUJELE1BQW5CLENBRnBCOztBQUlBQSxpQkFBUyxJQUFJRSxNQUFKLFFBQWdCRCxhQUFoQixRQUFrQyxHQUFsQyxDQUFULENBTGtDLENBS2U7O0FBRWpELFlBQUlQLE9BQU8sSUFBSVQsSUFBSixDQUFTYyxJQUFULEVBQWVDLE1BQWYsQ0FBWDs7QUFFQSxlQUFPTixJQUFQO0FBQ0QsT0FWTyxDQUFaO0FBQUEsVUFXSVMsUUFBUSxJQUFJZixLQUFKLENBQVVDLEtBQVYsQ0FYWjs7QUFhQSxhQUFPYyxLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCakIsS0FBakIiLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICB0aGlzLmFycmF5LnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgdmFyIGFycmF5ID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGdyYW1tYXIudHlwZShlbnRyeSksXG4gICAgICAgICAgICAgIHJlZ0V4cCA9IGVudHJ5W3R5cGVdLFxuICAgICAgICAgICAgICByZWdFeHBQYXR0ZXJuID0gdXRpbC5yZWdFeHBQYXR0ZXJuKHJlZ0V4cCk7XG5cbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKGBeKCR7cmVnRXhwUGF0dGVybn0pYCwgJ3UnKTsgLy8vXG5cbiAgICAgICAgICB2YXIgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ0V4cCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVzID0gbmV3IFJ1bGVzKGFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcztcbiJdfQ==