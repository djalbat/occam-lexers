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
    value: function mapSymbolSequences(callback) {
      return this.symbolSequences.map(callback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wcmltaXRpdmUvbGluZS5qcyJdLCJuYW1lcyI6WyJTeW1ib2xTZXF1ZW5jZSIsInJlcXVpcmUiLCJMaW5lIiwibmFtZSIsInN5bWJvbFNlcXVlbmNlcyIsImNhbGxiYWNrIiwibWFwIiwiY29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsIm5hbWVFeHByZXNzaW9uUmVnRXhwIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJleHByZXNzaW9uIiwiY2hvaWNlcyIsInNwbGl0IiwiY2hvaWNlRGVsaW1pdGVyUmVnRXhwIiwiY2hvaWNlIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tQ2hvaWNlIiwibGluZSIsImNvbnRpbnVlZEV4cHJlc3Npb25SZWdFeHAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsa0JBQVIsQ0FBdkI7O0lBRU1DLEk7QUFDSixnQkFBWUMsSUFBWixFQUFrQkMsZUFBbEIsRUFBbUM7QUFBQTs7QUFDakMsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0QsSUFBWjtBQUNEOzs7dUNBRWtCRSxRLEVBQVU7QUFDM0IsYUFBTyxLQUFLRCxlQUFMLENBQXFCRSxHQUFyQixDQUF5QkQsUUFBekIsQ0FBUDtBQUNEOzs7Z0NBRWtCRSxPLEVBQVM7QUFDMUIsVUFBTUMsVUFBVUQsUUFBUUUsS0FBUixDQUFjUCxLQUFLUSxvQkFBbkIsQ0FBaEI7QUFBQSxVQUNNQyxjQUFjQyxPQUFPSixPQUFQLENBRHBCO0FBQUEsVUFFTUssYUFBYUMsTUFBTU4sT0FBTixDQUZuQjtBQUFBLFVBR01MLE9BQU9RLFdBSGI7QUFBQSxVQUcwQjtBQUNwQkksbUJBQWFGLFVBSm5CO0FBQUEsVUFJK0I7QUFDekJHLGdCQUFVRCxXQUFXRSxLQUFYLENBQWlCZixLQUFLZ0IscUJBQXRCLENBTGhCO0FBQUEsVUFNTWQsa0JBQWtCWSxRQUFRVixHQUFSLENBQVksVUFBU2EsTUFBVCxFQUFpQjtBQUM3QyxZQUFNQyxpQkFBaUJwQixlQUFlcUIsVUFBZixDQUEwQkYsTUFBMUIsQ0FBdkI7O0FBRUEsZUFBT0MsY0FBUDtBQUNELE9BSmlCLENBTnhCOztBQVlBLFVBQU1FLE9BQU8sSUFBSXBCLElBQUosQ0FBU0MsSUFBVCxFQUFlQyxlQUFmLENBQWI7O0FBRUEsYUFBT2tCLElBQVA7QUFDRDs7Ozs7O0FBR0hwQixLQUFLZ0IscUJBQUwsR0FBNkIsVUFBN0I7QUFDQWhCLEtBQUtRLG9CQUFMLEdBQTRCLDZCQUE1QjtBQUNBUixLQUFLcUIseUJBQUwsR0FBaUMsb0JBQWpDOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCdkIsSUFBakI7O0FBRUEsU0FBU1UsTUFBVCxDQUFnQmMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTWixLQUFULENBQWVZLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTeW1ib2xTZXF1ZW5jZSA9IHJlcXVpcmUoJy4vc3ltYm9sU2VxdWVuY2UnKTtcblxuY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN5bWJvbFNlcXVlbmNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zeW1ib2xTZXF1ZW5jZXMgPSBzeW1ib2xTZXF1ZW5jZXM7XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgbWFwU3ltYm9sU2VxdWVuY2VzKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9sU2VxdWVuY2VzLm1hcChjYWxsYmFjayk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goTGluZS5uYW1lRXhwcmVzc2lvblJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIG5hbWUgPSBzZWNvbmRNYXRjaCwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXJkTWF0Y2gsIC8vL1xuICAgICAgICAgIGNob2ljZXMgPSBleHByZXNzaW9uLnNwbGl0KExpbmUuY2hvaWNlRGVsaW1pdGVyUmVnRXhwKSxcbiAgICAgICAgICBzeW1ib2xTZXF1ZW5jZXMgPSBjaG9pY2VzLm1hcChmdW5jdGlvbihjaG9pY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNlcXVlbmNlID0gU3ltYm9sU2VxdWVuY2UuZnJvbUNob2ljZShjaG9pY2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sU2VxdWVuY2U7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgY29uc3QgbGluZSA9IG5ldyBMaW5lKG5hbWUsIHN5bWJvbFNlcXVlbmNlcyk7XG4gICAgXG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cbn1cblxuTGluZS5jaG9pY2VEZWxpbWl0ZXJSZWdFeHAgPSAvXFxzK1xcfFxccysvO1xuTGluZS5uYW1lRXhwcmVzc2lvblJlZ0V4cCA9IC9eXFxzKiguKj8pXFxzKzo6PVxccysoLio/KVxccyokLztcbkxpbmUuY29udGludWVkRXhwcmVzc2lvblJlZ0V4cCA9IC9eXFxzKihcXHxcXHMrLio/KVxccyokLztcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cbiJdfQ==