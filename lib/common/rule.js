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
    key: 'significantTokenPositionWithinContent',
    value: function significantTokenPositionWithinContent(content) {
      var significantTokenPosition = -1;

      var matches = content.match(this.regExp);

      if (matches !== null) {
        var firstMatch = first(matches);

        if (firstMatch !== '') {
          significantTokenPosition = matches.index; ///
        }
      }

      return significantTokenPosition;
    }
  }, {
    key: 'significantTokenFromWithinContentAndLine',
    value: function significantTokenFromWithinContentAndLine(content, line) {
      var matches = content.match(this.regExp),
          firstMatch = first(matches);

      content = firstMatch; ///

      var significantToken = SignificantToken.fromContentLineAndType(content, line, this.type);

      return significantToken;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIlJ1bGUiLCJ0eXBlIiwicmVnRXhwIiwiY29udGVudCIsInNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsImluZGV4IiwibGluZSIsInNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudExpbmVBbmRUeXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CQyxRQUFRLDZCQUFSLENBQXpCOztJQUVNQyxJO0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLE1BQWxCLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzBEQUVxQ0MsTyxFQUFTO0FBQzdDLFVBQUlDLDJCQUEyQixDQUFDLENBQWhDOztBQUVBLFVBQU1DLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxLQUFLSixNQUFuQixDQUFoQjs7QUFFQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQU1FLGFBQWFDLE1BQU1ILE9BQU4sQ0FBbkI7O0FBRUEsWUFBSUUsZUFBZSxFQUFuQixFQUF1QjtBQUNyQkgscUNBQTJCQyxRQUFRSSxLQUFuQyxDQURxQixDQUNxQjtBQUMzQztBQUNGOztBQUVELGFBQU9MLHdCQUFQO0FBQ0Q7Ozs2REFFd0NELE8sRUFBU08sSSxFQUFNO0FBQ3RELFVBQU1MLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxLQUFLSixNQUFuQixDQUFoQjtBQUFBLFVBQ01LLGFBQWFDLE1BQU1ILE9BQU4sQ0FEbkI7O0FBR0FGLGdCQUFVSSxVQUFWLENBSnNELENBSWhDOztBQUV0QixVQUFNSSxtQkFBbUJiLGlCQUFpQmMsc0JBQWpCLENBQXdDVCxPQUF4QyxFQUFpRE8sSUFBakQsRUFBdUQsS0FBS1QsSUFBNUQsQ0FBekI7O0FBRUEsYUFBT1UsZ0JBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJkLElBQWpCOztBQUVBLFNBQVNRLEtBQVQsQ0FBZU8sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZ0V4cCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gIH1cbiAgXG4gIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuUG9zaXRpb24gPSAtMTtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ0V4cCk7XG4gICAgXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgaWYgKGZpcnN0TWF0Y2ggIT09ICcnKSB7XG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IG1hdGNoZXMuaW5kZXg7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuUG9zaXRpb247XG4gIH1cblxuICBzaWduaWZpY2FudFRva2VuRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ0V4cCksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0aGlzLnR5cGUpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==