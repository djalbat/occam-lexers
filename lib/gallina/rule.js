'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantToken = require('../common/token/significant');

var Rule = function () {
  function Rule(tokenType, regExp) {
    _classCallCheck(this, Rule);

    this.tokenType = tokenType;
    this.regExp = regExp;
  }

  _createClass(Rule, [{
    key: 'significantTokenFromContent',
    value: function significantTokenFromContent(content, line) {
      var matches = content.match(this.regExp);

      if (matches === null) {
        return null;
      }

      var firstMatch = first(matches),
          str = firstMatch,
          ///
      type = this.tokenType,
          ///
      significantToken = new SignificantToken(str, type, line);

      return significantToken;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL3J1bGUuanMiXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlbiIsInJlcXVpcmUiLCJSdWxlIiwidG9rZW5UeXBlIiwicmVnRXhwIiwiY29udGVudCIsImxpbmUiLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJzdHIiLCJ0eXBlIiwic2lnbmlmaWNhbnRUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLG1CQUFtQkMsUUFBUSw2QkFBUixDQUF2Qjs7SUFFTUMsSTtBQUNKLGdCQUFZQyxTQUFaLEVBQXVCQyxNQUF2QixFQUErQjtBQUFBOztBQUM3QixTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O2dEQUUyQkMsTyxFQUFTQyxJLEVBQU07QUFDekMsVUFBSUMsVUFBVUYsUUFBUUcsS0FBUixDQUFjLEtBQUtKLE1BQW5CLENBQWQ7O0FBRUEsVUFBSUcsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsVUFDSUksTUFBTUYsVUFEVjtBQUFBLFVBQ3NCO0FBQ2xCRyxhQUFPLEtBQUtULFNBRmhCO0FBQUEsVUFFNEI7QUFDeEJVLHlCQUFtQixJQUFJYixnQkFBSixDQUFxQlcsR0FBckIsRUFBMEJDLElBQTFCLEVBQWdDTixJQUFoQyxDQUh2Qjs7QUFLQSxhQUFPTyxnQkFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmIsSUFBakI7O0FBRUEsU0FBU1EsS0FBVCxDQUFlTSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHRva2VuVHlwZSwgcmVnRXhwKSB7XG4gICAgdGhpcy50b2tlblR5cGUgPSB0b2tlblR5cGU7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gIH1cblxuICBzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgc3RyID0gZmlyc3RNYXRjaCwgLy8vXG4gICAgICAgIHR5cGUgPSB0aGlzLnRva2VuVHlwZSwgIC8vL1xuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IFNpZ25pZmljYW50VG9rZW4oc3RyLCB0eXBlLCBsaW5lKTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19