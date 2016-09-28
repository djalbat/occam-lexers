'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SymbolSequence = function () {
  function SymbolSequence(symbols) {
    _classCallCheck(this, SymbolSequence);

    this.symbols = symbols;
  }

  _createClass(SymbolSequence, [{
    key: 'mapSymbols',
    value: function mapSymbols(cb) {
      return this.symbols.map(cb);
    }
  }], [{
    key: 'fromChoice',
    value: function fromChoice(choice) {
      var symbols = choice.split(/\s+/),
          expression = new SymbolSequence(symbols);

      return expression;
    }
  }]);

  return SymbolSequence;
}();

module.exports = SymbolSequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvc3ltYm9sU2VxdWVuY2UuanMiXSwibmFtZXMiOlsiU3ltYm9sU2VxdWVuY2UiLCJzeW1ib2xzIiwiY2IiLCJtYXAiLCJjaG9pY2UiLCJzcGxpdCIsImV4cHJlc3Npb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGM7QUFDSiwwQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OzsrQkFFVUMsRSxFQUFJO0FBQ2IsYUFBTyxLQUFLRCxPQUFMLENBQWFFLEdBQWIsQ0FBaUJELEVBQWpCLENBQVA7QUFDRDs7OytCQUVpQkUsTSxFQUFRO0FBQ3hCLFVBQUlILFVBQVVHLE9BQU9DLEtBQVAsQ0FBYSxLQUFiLENBQWQ7QUFBQSxVQUNJQyxhQUFhLElBQUlOLGNBQUosQ0FBbUJDLE9BQW5CLENBRGpCOztBQUdBLGFBQU9LLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJSLGNBQWpCIiwiZmlsZSI6InN5bWJvbFNlcXVlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTeW1ib2xTZXF1ZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHN5bWJvbHMpIHtcbiAgICB0aGlzLnN5bWJvbHMgPSBzeW1ib2xzO1xuICB9XG5cbiAgbWFwU3ltYm9scyhjYikge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMubWFwKGNiKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21DaG9pY2UoY2hvaWNlKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBjaG9pY2Uuc3BsaXQoL1xccysvKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBTeW1ib2xTZXF1ZW5jZShzeW1ib2xzKTtcbiAgICBcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbFNlcXVlbmNlO1xuIl19