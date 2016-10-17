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
    key: 'significantTokenFromContent',
    value: function significantTokenFromContent(content, line) {
      var significantToken = null,
          matches = content.match(this.regExp);

      if (matches !== null) {
        var firstMatch = first(matches),
            str = firstMatch; ///

        significantToken = new SignificantToken(str, this.type, line);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIlJ1bGUiLCJ0eXBlIiwicmVnRXhwIiwiY29udGVudCIsImxpbmUiLCJzaWduaWZpY2FudFRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0Iiwic3RyIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLDZCQUFSLENBQXZCOztJQUVNQyxJO0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLE1BQWxCLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O2dEQUUyQkMsTyxFQUFTQyxJLEVBQU07QUFDekMsVUFBSUMsbUJBQW1CLElBQXZCO0FBQUEsVUFDSUMsVUFBVUgsUUFBUUksS0FBUixDQUFjLEtBQUtMLE1BQW5CLENBRGQ7O0FBR0EsVUFBSUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsWUFDSUksTUFBTUYsVUFEVixDQURvQixDQUVFOztBQUV0QkgsMkJBQW1CLElBQUlQLGdCQUFKLENBQXFCWSxHQUFyQixFQUEwQixLQUFLVCxJQUEvQixFQUFxQ0csSUFBckMsQ0FBbkI7QUFDRDs7QUFFRCxhQUFPQyxnQkFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQlosSUFBakI7O0FBRUEsU0FBU1MsS0FBVCxDQUFlSSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZ0V4cCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gIH1cblxuICBzaWduaWZpY2FudFRva2VuRnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgc3RyID0gZmlyc3RNYXRjaDsgLy8vXG4gICAgICBcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXcgU2lnbmlmaWNhbnRUb2tlbihzdHIsIHRoaXMudHlwZSwgbGluZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=