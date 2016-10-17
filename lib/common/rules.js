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
      var array = grammar.map(function (object) {
        var type = Object.keys(object),
            regExp = object[type],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZXMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJhcnJheSIsImNvbnRlbnQiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlbiIsInNvbWUiLCJydWxlIiwic2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50IiwiZ3JhbW1hciIsIm1hcCIsIm9iamVjdCIsInR5cGUiLCJPYmplY3QiLCJrZXlzIiwicmVnRXhwIiwicmVnRXhwUGF0dGVybiIsIlJlZ0V4cCIsInJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7O0lBR01FLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OztnREFFMkJDLE8sRUFBU0MsSSxFQUFNO0FBQ3pDLFVBQUlDLG1CQUFtQixJQUF2Qjs7QUFFQSxXQUFLSCxLQUFMLENBQVdJLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzdCRiwyQkFBbUJFLEtBQUtDLDJCQUFMLENBQWlDTCxPQUFqQyxFQUEwQ0MsSUFBMUMsQ0FBbkI7O0FBRUEsWUFBSUMscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLGlCQUFPLElBQVA7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVJEOztBQVVBLGFBQU9BLGdCQUFQO0FBQ0Q7OztnQ0FFa0JJLE8sRUFBUztBQUMxQixVQUFJUCxRQUFRTyxRQUFRQyxHQUFSLENBQVksVUFBU0MsTUFBVCxFQUFpQjtBQUNuQyxZQUFJQyxPQUFPQyxPQUFPQyxJQUFQLENBQVlILE1BQVosQ0FBWDtBQUFBLFlBQ0lJLFNBQVNKLE9BQU9DLElBQVAsQ0FEYjtBQUFBLFlBRUlJLGdCQUFnQmhCLEtBQUtnQixhQUFMLENBQW1CRCxNQUFuQixDQUZwQjs7QUFJQUEsaUJBQVMsSUFBSUUsTUFBSixRQUFnQkQsYUFBaEIsUUFBa0MsR0FBbEMsQ0FBVCxDQUxtQyxDQUtjOztBQUVqRCxZQUFJVCxPQUFPLElBQUlULElBQUosQ0FBU2MsSUFBVCxFQUFlRyxNQUFmLENBQVg7O0FBRUEsZUFBT1IsSUFBUDtBQUNELE9BVk8sQ0FBWjtBQUFBLFVBV0lXLFFBQVEsSUFBSWpCLEtBQUosQ0FBVUMsS0FBVixDQVhaOztBQWFBLGFBQU9nQixLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbkIsS0FBakIiLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICB0aGlzLmFycmF5LnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgdmFyIGFycmF5ID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSBPYmplY3Qua2V5cyhvYmplY3QpLFxuICAgICAgICAgICAgICByZWdFeHAgPSBvYmplY3RbdHlwZV0sXG4gICAgICAgICAgICAgIHJlZ0V4cFBhdHRlcm4gPSB1dGlsLnJlZ0V4cFBhdHRlcm4ocmVnRXhwKTtcblxuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4oJHtyZWdFeHBQYXR0ZXJufSlgLCAndScpOyAvLy9cblxuICAgICAgICAgIHZhciBydWxlID0gbmV3IFJ1bGUodHlwZSwgcmVnRXhwKTtcblxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KSxcbiAgICAgICAgcnVsZXMgPSBuZXcgUnVsZXMoYXJyYXkpO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVzO1xuIl19