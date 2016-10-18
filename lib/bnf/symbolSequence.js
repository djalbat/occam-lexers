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
      var symbols = choice.split(/\s+|(<NO_WHITESPACE>)|(<END_OF_LINE>)/).reduce(function (symbols, symbol) {
        if (symbol !== undefined) {
          symbols.push(symbols);
        }
        return symbols;
      }, []),
          expression = new SymbolSequence(symbols);

      return expression;
    }
  }]);

  return SymbolSequence;
}();

module.exports = SymbolSequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvc3ltYm9sU2VxdWVuY2UuanMiXSwibmFtZXMiOlsiU3ltYm9sU2VxdWVuY2UiLCJzeW1ib2xzIiwiY2IiLCJtYXAiLCJjaG9pY2UiLCJzcGxpdCIsInJlZHVjZSIsInN5bWJvbCIsInVuZGVmaW5lZCIsInB1c2giLCJleHByZXNzaW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxjO0FBQ0osMEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7K0JBRVVDLEUsRUFBSTtBQUNiLGFBQU8sS0FBS0QsT0FBTCxDQUFhRSxHQUFiLENBQWlCRCxFQUFqQixDQUFQO0FBQ0Q7OzsrQkFFaUJFLE0sRUFBUTtBQUN4QixVQUFJSCxVQUFVRyxPQUFPQyxLQUFQLENBQWEsdUNBQWIsRUFBc0RDLE1BQXRELENBQTZELFVBQVNMLE9BQVQsRUFBa0JNLE1BQWxCLEVBQTBCO0FBQy9GLFlBQUlBLFdBQVdDLFNBQWYsRUFBMEI7QUFDeEJQLGtCQUFRUSxJQUFSLENBQWFSLE9BQWI7QUFDRDtBQUNELGVBQU9BLE9BQVA7QUFDRCxPQUxTLEVBS1AsRUFMTyxDQUFkO0FBQUEsVUFNSVMsYUFBYSxJQUFJVixjQUFKLENBQW1CQyxPQUFuQixDQU5qQjs7QUFRQSxhQUFPUyxVQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCWixjQUFqQiIsImZpbGUiOiJzeW1ib2xTZXF1ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU3ltYm9sU2VxdWVuY2Uge1xuICBjb25zdHJ1Y3RvcihzeW1ib2xzKSB7XG4gICAgdGhpcy5zeW1ib2xzID0gc3ltYm9scztcbiAgfVxuXG4gIG1hcFN5bWJvbHMoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLm1hcChjYik7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ2hvaWNlKGNob2ljZSkge1xuICAgIHZhciBzeW1ib2xzID0gY2hvaWNlLnNwbGl0KC9cXHMrfCg8Tk9fV0hJVEVTUEFDRT4pfCg8RU5EX09GX0xJTkU+KS8pLnJlZHVjZShmdW5jdGlvbihzeW1ib2xzLCBzeW1ib2wpIHtcbiAgICAgICAgICBpZiAoc3ltYm9sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN5bWJvbHMucHVzaChzeW1ib2xzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN5bWJvbHM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBTeW1ib2xTZXF1ZW5jZShzeW1ib2xzKTtcbiAgICBcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbFNlcXVlbmNlO1xuIl19