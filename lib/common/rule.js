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
      var significantTokenPosition = -1,
          matches = content.match(this.regExp);

      if (matches !== null) {
        var firstMatch = first(matches);

        if (firstMatch !== '') {
          significantTokenPosition = matches.index; ///
        }
      }

      return significantTokenPosition;
    }
  }, {
    key: 'significantTokenFromContent',
    value: function significantTokenFromContent(content, line) {
      var matches = content.match(this.regExp),
          firstMatch = first(matches);

      content = firstMatch;

      var significantToken = new SignificantToken(content, line, this.type);

      return significantToken;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwicmVxdWlyZSIsIlJ1bGUiLCJ0eXBlIiwicmVnRXhwIiwiY29udGVudCIsInNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsImluZGV4IiwibGluZSIsInNpZ25pZmljYW50VG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxtQkFBbUJDLFFBQVEsNkJBQVIsQ0FBdkI7O0lBRU1DLEk7QUFDSixnQkFBWUMsSUFBWixFQUFrQkMsTUFBbEIsRUFBMEI7QUFBQTs7QUFDeEIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7NkNBRXdCQyxPLEVBQVM7QUFDaEMsVUFBSUMsMkJBQTJCLENBQUMsQ0FBaEM7QUFBQSxVQUNJQyxVQUFVRixRQUFRRyxLQUFSLENBQWMsS0FBS0osTUFBbkIsQ0FEZDs7QUFHQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7O0FBRUEsWUFBSUUsZUFBZSxFQUFuQixFQUF1QjtBQUNyQkgscUNBQTJCQyxRQUFRSSxLQUFuQyxDQURxQixDQUNxQjtBQUMzQztBQUNGOztBQUVELGFBQU9MLHdCQUFQO0FBQ0Q7OztnREFFMkJELE8sRUFBU08sSSxFQUFNO0FBQ3pDLFVBQUlMLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxLQUFLSixNQUFuQixDQUFkO0FBQUEsVUFDSUssYUFBYUMsTUFBTUgsT0FBTixDQURqQjs7QUFHQUYsZ0JBQVVJLFVBQVY7O0FBRUEsVUFBSUksbUJBQW1CLElBQUliLGdCQUFKLENBQXFCSyxPQUFyQixFQUE4Qk8sSUFBOUIsRUFBb0MsS0FBS1QsSUFBekMsQ0FBdkI7O0FBRUEsYUFBT1UsZ0JBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJiLElBQWpCOztBQUVBLFNBQVNRLEtBQVQsQ0FBZU0sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCByZWdFeHApIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICB9XG4gIFxuICBzaWduaWZpY2FudFRva2VuUG9zaXRpb24oY29udGVudCkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuUG9zaXRpb24gPSAtMSxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWdFeHApO1xuICAgIFxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RNYXRjaCAhPT0gJycpIHtcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uID0gbWF0Y2hlcy5pbmRleDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbjtcbiAgfVxuXG4gIHNpZ25pZmljYW50VG9rZW5Gcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVnRXhwKSxcbiAgICAgICAgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgY29udGVudCA9IGZpcnN0TWF0Y2g7XG5cbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBTaWduaWZpY2FudFRva2VuKGNvbnRlbnQsIGxpbmUsIHRoaXMudHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19