'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SymbolSequence = require('./symbolSequence');

var BNFLine = function () {
  function BNFLine(name, symbolSequences) {
    _classCallCheck(this, BNFLine);

    this.name = name;
    this.symbolSequences = symbolSequences;
  }

  _createClass(BNFLine, [{
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
      var matches = content.match(BNFLine.nameExpressionRegExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          name = secondMatch,
          ///
      expression = thirdMatch,
          ///
      choices = expression.split(BNFLine.choiceDelimiterRegExp),
          symbolSequences = choices.map(function (choice) {
        var symbolSequence = SymbolSequence.fromChoice(choice);

        return symbolSequence;
      });

      var line = new BNFLine(name, symbolSequences);

      return line;
    }
  }]);

  return BNFLine;
}();

BNFLine.choiceDelimiterRegExp = /\s+\|\s+/;
BNFLine.nameExpressionRegExp = /^\s*(.*?)\s+::=\s+(.*?)\s*$/;
BNFLine.continuedExpressionRegExp = /^\s*(\|\s+.*?)\s*$/;

module.exports = BNFLine;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGluZS5qcyJdLCJuYW1lcyI6WyJTeW1ib2xTZXF1ZW5jZSIsInJlcXVpcmUiLCJCTkZMaW5lIiwibmFtZSIsInN5bWJvbFNlcXVlbmNlcyIsImNiIiwibWFwIiwiY29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsIm5hbWVFeHByZXNzaW9uUmVnRXhwIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJleHByZXNzaW9uIiwiY2hvaWNlcyIsInNwbGl0IiwiY2hvaWNlRGVsaW1pdGVyUmVnRXhwIiwiY2hvaWNlIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tQ2hvaWNlIiwibGluZSIsImNvbnRpbnVlZEV4cHJlc3Npb25SZWdFeHAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxpQkFBaUJDLFFBQVEsa0JBQVIsQ0FBckI7O0lBRU1DLE87QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsZUFBbEIsRUFBbUM7QUFBQTs7QUFDakMsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0QsSUFBWjtBQUNEOzs7dUNBRWtCRSxFLEVBQUk7QUFDckIsYUFBTyxLQUFLRCxlQUFMLENBQXFCRSxHQUFyQixDQUF5QkQsRUFBekIsQ0FBUDtBQUNEOzs7Z0NBRWtCRSxPLEVBQVM7QUFDMUIsVUFBSUMsVUFBVUQsUUFBUUUsS0FBUixDQUFjUCxRQUFRUSxvQkFBdEIsQ0FBZDtBQUFBLFVBQ0lDLGNBQWNDLE9BQU9KLE9BQVAsQ0FEbEI7QUFBQSxVQUVJSyxhQUFhQyxNQUFNTixPQUFOLENBRmpCO0FBQUEsVUFHSUwsT0FBT1EsV0FIWDtBQUFBLFVBR3dCO0FBQ3BCSSxtQkFBYUYsVUFKakI7QUFBQSxVQUk2QjtBQUN6QkcsZ0JBQVVELFdBQVdFLEtBQVgsQ0FBaUJmLFFBQVFnQixxQkFBekIsQ0FMZDtBQUFBLFVBTUlkLGtCQUFrQlksUUFBUVYsR0FBUixDQUFZLFVBQVNhLE1BQVQsRUFBaUI7QUFDN0MsWUFBSUMsaUJBQWlCcEIsZUFBZXFCLFVBQWYsQ0FBMEJGLE1BQTFCLENBQXJCOztBQUVBLGVBQU9DLGNBQVA7QUFDRCxPQUppQixDQU50Qjs7QUFZQSxVQUFJRSxPQUFPLElBQUlwQixPQUFKLENBQVlDLElBQVosRUFBa0JDLGVBQWxCLENBQVg7O0FBRUEsYUFBT2tCLElBQVA7QUFDRDs7Ozs7O0FBR0hwQixRQUFRZ0IscUJBQVIsR0FBZ0MsVUFBaEM7QUFDQWhCLFFBQVFRLG9CQUFSLEdBQStCLDZCQUEvQjtBQUNBUixRQUFRcUIseUJBQVIsR0FBb0Msb0JBQXBDOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCdkIsT0FBakI7O0FBRUEsU0FBU1UsTUFBVCxDQUFnQmMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTWixLQUFULENBQWVZLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3ltYm9sU2VxdWVuY2UgPSByZXF1aXJlKCcuL3N5bWJvbFNlcXVlbmNlJyk7XG5cbmNsYXNzIEJORkxpbmUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzeW1ib2xTZXF1ZW5jZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3ltYm9sU2VxdWVuY2VzID0gc3ltYm9sU2VxdWVuY2VzO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIG1hcFN5bWJvbFNlcXVlbmNlcyhjYikge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbFNlcXVlbmNlcy5tYXAoY2IpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaChCTkZMaW5lLm5hbWVFeHByZXNzaW9uUmVnRXhwKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgbmFtZSA9IHNlY29uZE1hdGNoLCAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXJkTWF0Y2gsIC8vL1xuICAgICAgICBjaG9pY2VzID0gZXhwcmVzc2lvbi5zcGxpdChCTkZMaW5lLmNob2ljZURlbGltaXRlclJlZ0V4cCksXG4gICAgICAgIHN5bWJvbFNlcXVlbmNlcyA9IGNob2ljZXMubWFwKGZ1bmN0aW9uKGNob2ljZSkge1xuICAgICAgICAgIHZhciBzeW1ib2xTZXF1ZW5jZSA9IFN5bWJvbFNlcXVlbmNlLmZyb21DaG9pY2UoY2hvaWNlKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gc3ltYm9sU2VxdWVuY2U7XG4gICAgICAgIH0pO1xuICAgIFxuICAgIHZhciBsaW5lID0gbmV3IEJORkxpbmUobmFtZSwgc3ltYm9sU2VxdWVuY2VzKTtcbiAgICBcbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5CTkZMaW5lLmNob2ljZURlbGltaXRlclJlZ0V4cCA9IC9cXHMrXFx8XFxzKy87XG5CTkZMaW5lLm5hbWVFeHByZXNzaW9uUmVnRXhwID0gL15cXHMqKC4qPylcXHMrOjo9XFxzKyguKj8pXFxzKiQvO1xuQk5GTGluZS5jb250aW51ZWRFeHByZXNzaW9uUmVnRXhwID0gL15cXHMqKFxcfFxccysuKj8pXFxzKiQvO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxpbmU7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuIl19