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
  }, {
    key: 'reduceSymbols',
    value: function reduceSymbols(cb, initialValue) {
      return this.symbols.reduce(cb, initialValue);
    }
  }], [{
    key: 'fromChoice',
    value: function fromChoice(choice) {
      var symbols = choice.split(/\s+|(<NO_WHITESPACE>)|(<END_OF_LINE>)/).reduce(function (symbols, symbol) {
        if (symbol !== undefined) {
          symbols.push(symbol);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvc3ltYm9sU2VxdWVuY2UuanMiXSwibmFtZXMiOlsiU3ltYm9sU2VxdWVuY2UiLCJzeW1ib2xzIiwiY2IiLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJjaG9pY2UiLCJzcGxpdCIsInN5bWJvbCIsInVuZGVmaW5lZCIsInB1c2giLCJleHByZXNzaW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxjO0FBQ0osMEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7K0JBRVVDLEUsRUFBSTtBQUNiLGFBQU8sS0FBS0QsT0FBTCxDQUFhRSxHQUFiLENBQWlCRCxFQUFqQixDQUFQO0FBQ0Q7OztrQ0FFYUEsRSxFQUFJRSxZLEVBQWM7QUFDOUIsYUFBTyxLQUFLSCxPQUFMLENBQWFJLE1BQWIsQ0FBb0JILEVBQXBCLEVBQXdCRSxZQUF4QixDQUFQO0FBQ0Q7OzsrQkFFaUJFLE0sRUFBUTtBQUN4QixVQUFJTCxVQUFVSyxPQUFPQyxLQUFQLENBQWEsdUNBQWIsRUFBc0RGLE1BQXRELENBQTZELFVBQVNKLE9BQVQsRUFBa0JPLE1BQWxCLEVBQTBCO0FBQy9GLFlBQUlBLFdBQVdDLFNBQWYsRUFBMEI7QUFDeEJSLGtCQUFRUyxJQUFSLENBQWFGLE1BQWI7QUFDRDtBQUNELGVBQU9QLE9BQVA7QUFDRCxPQUxTLEVBS1AsRUFMTyxDQUFkO0FBQUEsVUFNSVUsYUFBYSxJQUFJWCxjQUFKLENBQW1CQyxPQUFuQixDQU5qQjs7QUFRQSxhQUFPVSxVQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCYixjQUFqQiIsImZpbGUiOiJzeW1ib2xTZXF1ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU3ltYm9sU2VxdWVuY2Uge1xuICBjb25zdHJ1Y3RvcihzeW1ib2xzKSB7XG4gICAgdGhpcy5zeW1ib2xzID0gc3ltYm9scztcbiAgfVxuXG4gIG1hcFN5bWJvbHMoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLm1hcChjYik7XG4gIH1cbiAgXG4gIHJlZHVjZVN5bWJvbHMoY2IsIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMucmVkdWNlKGNiLCBpbml0aWFsVmFsdWUpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNob2ljZShjaG9pY2UpIHtcbiAgICB2YXIgc3ltYm9scyA9IGNob2ljZS5zcGxpdCgvXFxzK3woPE5PX1dISVRFU1BBQ0U+KXwoPEVORF9PRl9MSU5FPikvKS5yZWR1Y2UoZnVuY3Rpb24oc3ltYm9scywgc3ltYm9sKSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN5bWJvbHM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBTeW1ib2xTZXF1ZW5jZShzeW1ib2xzKTtcbiAgICBcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbFNlcXVlbmNlO1xuIl19