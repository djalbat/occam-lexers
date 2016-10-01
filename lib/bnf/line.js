'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SymbolSequence = require('./symbolSequence');

var Line = function () {
  function Line(name, symbolSequences) {
    _classCallCheck(this, Line);

    this.name = name;
    this.symbolSequences = symbolSequences;
  }

  _createClass(Line, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'mapSymbolSequences',
    value: function mapSymbolSequences(cb) {
      return this.symbolSequences.map(cb);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(Line.nameExpressionRegExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          name = secondMatch,
          ///
      expression = thirdMatch,
          ///
      choices = expression.split(Line.choiceDelimiterRegExp),
          symbolSequences = choices.map(function (choice) {
        var symbolSequence = SymbolSequence.fromChoice(choice);

        return symbolSequence;
      });

      var line = new Line(name, symbolSequences);

      return line;
    }
  }]);

  return Line;
}();

Line.choiceDelimiterRegExp = /\s+\|\s+/;
Line.nameExpressionRegExp = /^\s*(.*?)\s+::=\s+(.*?)\s*$/;
Line.continuedExpressionRegExp = /^\s*(\|\s+.*?)\s*$/;

module.exports = Line;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGluZS5qcyJdLCJuYW1lcyI6WyJTeW1ib2xTZXF1ZW5jZSIsInJlcXVpcmUiLCJMaW5lIiwibmFtZSIsInN5bWJvbFNlcXVlbmNlcyIsImNiIiwibWFwIiwiY29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsIm5hbWVFeHByZXNzaW9uUmVnRXhwIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJleHByZXNzaW9uIiwiY2hvaWNlcyIsInNwbGl0IiwiY2hvaWNlRGVsaW1pdGVyUmVnRXhwIiwiY2hvaWNlIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tQ2hvaWNlIiwibGluZSIsImNvbnRpbnVlZEV4cHJlc3Npb25SZWdFeHAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxpQkFBaUJDLFFBQVEsa0JBQVIsQ0FBckI7O0lBRU1DLEk7QUFDSixnQkFBWUMsSUFBWixFQUFrQkMsZUFBbEIsRUFBbUM7QUFBQTs7QUFDakMsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0QsSUFBWjtBQUNEOzs7dUNBRWtCRSxFLEVBQUk7QUFDckIsYUFBTyxLQUFLRCxlQUFMLENBQXFCRSxHQUFyQixDQUF5QkQsRUFBekIsQ0FBUDtBQUNEOzs7Z0NBRWtCRSxPLEVBQVM7QUFDMUIsVUFBSUMsVUFBVUQsUUFBUUUsS0FBUixDQUFjUCxLQUFLUSxvQkFBbkIsQ0FBZDtBQUFBLFVBQ0lDLGNBQWNDLE9BQU9KLE9BQVAsQ0FEbEI7QUFBQSxVQUVJSyxhQUFhQyxNQUFNTixPQUFOLENBRmpCO0FBQUEsVUFHSUwsT0FBT1EsV0FIWDtBQUFBLFVBR3dCO0FBQ3BCSSxtQkFBYUYsVUFKakI7QUFBQSxVQUk2QjtBQUN6QkcsZ0JBQVVELFdBQVdFLEtBQVgsQ0FBaUJmLEtBQUtnQixxQkFBdEIsQ0FMZDtBQUFBLFVBTUlkLGtCQUFrQlksUUFBUVYsR0FBUixDQUFZLFVBQVNhLE1BQVQsRUFBaUI7QUFDN0MsWUFBSUMsaUJBQWlCcEIsZUFBZXFCLFVBQWYsQ0FBMEJGLE1BQTFCLENBQXJCOztBQUVBLGVBQU9DLGNBQVA7QUFDRCxPQUppQixDQU50Qjs7QUFZQSxVQUFJRSxPQUFPLElBQUlwQixJQUFKLENBQVNDLElBQVQsRUFBZUMsZUFBZixDQUFYOztBQUVBLGFBQU9rQixJQUFQO0FBQ0Q7Ozs7OztBQUdIcEIsS0FBS2dCLHFCQUFMLEdBQTZCLFVBQTdCO0FBQ0FoQixLQUFLUSxvQkFBTCxHQUE0Qiw2QkFBNUI7QUFDQVIsS0FBS3FCLHlCQUFMLEdBQWlDLG9CQUFqQzs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQnZCLElBQWpCOztBQUVBLFNBQVNVLE1BQVQsQ0FBZ0JjLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDM0MsU0FBU1osS0FBVCxDQUFlWSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFN5bWJvbFNlcXVlbmNlID0gcmVxdWlyZSgnLi9zeW1ib2xTZXF1ZW5jZScpO1xuXG5jbGFzcyBMaW5lIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3ltYm9sU2VxdWVuY2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN5bWJvbFNlcXVlbmNlcyA9IHN5bWJvbFNlcXVlbmNlcztcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBtYXBTeW1ib2xTZXF1ZW5jZXMoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xTZXF1ZW5jZXMubWFwKGNiKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goTGluZS5uYW1lRXhwcmVzc2lvblJlZ0V4cCksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgIG5hbWUgPSBzZWNvbmRNYXRjaCwgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSB0aGlyZE1hdGNoLCAvLy9cbiAgICAgICAgY2hvaWNlcyA9IGV4cHJlc3Npb24uc3BsaXQoTGluZS5jaG9pY2VEZWxpbWl0ZXJSZWdFeHApLFxuICAgICAgICBzeW1ib2xTZXF1ZW5jZXMgPSBjaG9pY2VzLm1hcChmdW5jdGlvbihjaG9pY2UpIHtcbiAgICAgICAgICB2YXIgc3ltYm9sU2VxdWVuY2UgPSBTeW1ib2xTZXF1ZW5jZS5mcm9tQ2hvaWNlKGNob2ljZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHN5bWJvbFNlcXVlbmNlO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB2YXIgbGluZSA9IG5ldyBMaW5lKG5hbWUsIHN5bWJvbFNlcXVlbmNlcyk7XG4gICAgXG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cbn1cblxuTGluZS5jaG9pY2VEZWxpbWl0ZXJSZWdFeHAgPSAvXFxzK1xcfFxccysvO1xuTGluZS5uYW1lRXhwcmVzc2lvblJlZ0V4cCA9IC9eXFxzKiguKj8pXFxzKzo6PVxccysoLio/KVxccyokLztcbkxpbmUuY29udGludWVkRXhwcmVzc2lvblJlZ0V4cCA9IC9eXFxzKihcXHxcXHMrLio/KVxccyokLztcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cbiJdfQ==