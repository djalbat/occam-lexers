'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantToken = require('../common/token/significant');

var Rule = function () {
  function Rule(type, regExp) {
    _classCallCheck(this, Rule);

    this.type = type;
    this.regExp = regExp;
  }

  _createClass(Rule, [{
    key: 'significantTokenPosition',
    value: function significantTokenPosition(content) {
      var significantTokenPosition = content.search(this.regExp);

      return significantTokenPosition;
    }
  }, {
    key: 'significantTokenFromContent',
    value: function significantTokenFromContent(content, line) {
      var significantToken = null,
          matches = content.match(this.regExp);

      if (matches !== null) {
        var firstMatch = first(matches),
            str = firstMatch; ///

        significantToken = new SignificantToken(str, line, this.type);
      }

      return significantToken;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIlJ1bGUiLCJ0eXBlIiwicmVnRXhwIiwiY29udGVudCIsInNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiIsInNlYXJjaCIsImxpbmUiLCJzaWduaWZpY2FudFRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0Iiwic3RyIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLDZCQUFSLENBQXZCOztJQUVNQyxJO0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLE1BQWxCLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzZDQUV3QkMsTyxFQUFTO0FBQ2hDLFVBQUlDLDJCQUEyQkQsUUFBUUUsTUFBUixDQUFlLEtBQUtILE1BQXBCLENBQS9COztBQUVBLGFBQU9FLHdCQUFQO0FBQ0Q7OztnREFFMkJELE8sRUFBU0csSSxFQUFNO0FBQ3pDLFVBQUlDLG1CQUFtQixJQUF2QjtBQUFBLFVBQ0lDLFVBQVVMLFFBQVFNLEtBQVIsQ0FBYyxLQUFLUCxNQUFuQixDQURkOztBQUdBLFVBQUlNLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSUUsYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLFlBQ0lJLE1BQU1GLFVBRFYsQ0FEb0IsQ0FFRTs7QUFFdEJILDJCQUFtQixJQUFJVCxnQkFBSixDQUFxQmMsR0FBckIsRUFBMEJOLElBQTFCLEVBQWdDLEtBQUtMLElBQXJDLENBQW5CO0FBQ0Q7O0FBRUQsYUFBT00sZ0JBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJkLElBQWpCOztBQUVBLFNBQVNXLEtBQVQsQ0FBZUksS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCByZWdFeHApIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICB9XG4gIFxuICBzaWduaWZpY2FudFRva2VuUG9zaXRpb24oY29udGVudCkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuUG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCh0aGlzLnJlZ0V4cCk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uO1xuICB9XG5cbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIHN0ciA9IGZpcnN0TWF0Y2g7IC8vL1xuICAgICAgXG4gICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IFNpZ25pZmljYW50VG9rZW4oc3RyLCBsaW5lLCB0aGlzLnR5cGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19