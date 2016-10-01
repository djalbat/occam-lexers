'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    grammar = require('./grammar');

var tokenTypes = Object.keys(grammar),
    ///
rules = tokenTypes.reduce(function (rules, tokenType) {
  var regExp = grammar[tokenType],
      rule = new Rule(tokenType, regExp);

  rules.push(rule);

  return rules;
}, []);

var Rules = function () {
  function Rules() {
    _classCallCheck(this, Rules);
  }

  _createClass(Rules, null, [{
    key: 'significantTokenFromContent',
    value: function significantTokenFromContent(content, line) {
      var significantToken = null;

      rules.some(function (rule) {
        significantToken = rule.significantTokenFromContent(content, line);

        if (significantToken !== null) {
          return true;
        } else {
          return false;
        }
      });

      return significantToken;
    }
  }]);

  return Rules;
}();

module.exports = Rules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL3J1bGVzLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiZ3JhbW1hciIsInRva2VuVHlwZXMiLCJPYmplY3QiLCJrZXlzIiwicnVsZXMiLCJyZWR1Y2UiLCJ0b2tlblR5cGUiLCJyZWdFeHAiLCJydWxlIiwicHVzaCIsIlJ1bGVzIiwiY29udGVudCIsImxpbmUiLCJzaWduaWZpY2FudFRva2VuIiwic29tZSIsInNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLFVBQVVELFFBQVEsV0FBUixDQURkOztBQUdBLElBQUlFLGFBQWFDLE9BQU9DLElBQVAsQ0FBWUgsT0FBWixDQUFqQjtBQUFBLElBQXdDO0FBQ3BDSSxRQUFRSCxXQUFXSSxNQUFYLENBQWtCLFVBQVNELEtBQVQsRUFBZ0JFLFNBQWhCLEVBQTJCO0FBQ25ELE1BQUlDLFNBQVNQLFFBQVFNLFNBQVIsQ0FBYjtBQUFBLE1BQ0lFLE9BQU8sSUFBSVYsSUFBSixDQUFTUSxTQUFULEVBQW9CQyxNQUFwQixDQURYOztBQUdBSCxRQUFNSyxJQUFOLENBQVdELElBQVg7O0FBRUEsU0FBT0osS0FBUDtBQUNELENBUE8sRUFPTCxFQVBLLENBRFo7O0lBVU1NLEs7Ozs7Ozs7Z0RBQytCQyxPLEVBQVNDLEksRUFBTTtBQUNoRCxVQUFJQyxtQkFBbUIsSUFBdkI7O0FBRUFULFlBQU1VLElBQU4sQ0FBVyxVQUFTTixJQUFULEVBQWU7QUFDeEJLLDJCQUFtQkwsS0FBS08sMkJBQUwsQ0FBaUNKLE9BQWpDLEVBQTBDQyxJQUExQyxDQUFuQjs7QUFFQSxZQUFJQyxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0IsaUJBQU8sSUFBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsYUFBT0EsZ0JBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJQLEtBQWpCIiwiZmlsZSI6InJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKTtcblxudmFyIHRva2VuVHlwZXMgPSBPYmplY3Qua2V5cyhncmFtbWFyKSwgIC8vL1xuICAgIHJ1bGVzID0gdG9rZW5UeXBlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXMsIHRva2VuVHlwZSkge1xuICAgICAgdmFyIHJlZ0V4cCA9IGdyYW1tYXJbdG9rZW5UeXBlXSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUodG9rZW5UeXBlLCByZWdFeHApO1xuXG4gICAgICBydWxlcy5wdXNoKHJ1bGUpO1xuXG4gICAgICByZXR1cm4gcnVsZXM7XG4gICAgfSwgW10pO1xuXG5jbGFzcyBSdWxlcyB7XG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIHJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVzO1xuIl19