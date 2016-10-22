'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var specialSymbols = require('../specialSymbols');

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
      var symbols = choice.split(symbolDelimiterRegExp).reduce(function (symbols, symbol) {
        if (symbol === '' || symbol === undefined) {} else {
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

var symbolDelimiterRegExp = new RegExp('\\s+|(' + specialSymbols.END_OF_LINE + '(?:\\?|\\+|\\*))|(' + specialSymbols.NO_WHITESPACE + ')');

module.exports = SymbolSequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvc3ltYm9sU2VxdWVuY2UuanMiXSwibmFtZXMiOlsic3BlY2lhbFN5bWJvbHMiLCJyZXF1aXJlIiwiU3ltYm9sU2VxdWVuY2UiLCJzeW1ib2xzIiwiY2IiLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJjaG9pY2UiLCJzcGxpdCIsInN5bWJvbERlbGltaXRlclJlZ0V4cCIsInN5bWJvbCIsInVuZGVmaW5lZCIsInB1c2giLCJleHByZXNzaW9uIiwiUmVnRXhwIiwiRU5EX09GX0xJTkUiLCJOT19XSElURVNQQUNFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGlCQUFpQkMsUUFBUSxtQkFBUixDQUFyQjs7SUFFTUMsYztBQUNKLDBCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OytCQUVVQyxFLEVBQUk7QUFDYixhQUFPLEtBQUtELE9BQUwsQ0FBYUUsR0FBYixDQUFpQkQsRUFBakIsQ0FBUDtBQUNEOzs7a0NBRWFBLEUsRUFBSUUsWSxFQUFjO0FBQzlCLGFBQU8sS0FBS0gsT0FBTCxDQUFhSSxNQUFiLENBQW9CSCxFQUFwQixFQUF3QkUsWUFBeEIsQ0FBUDtBQUNEOzs7K0JBRWlCRSxNLEVBQVE7QUFDeEIsVUFBSUwsVUFBVUssT0FBT0MsS0FBUCxDQUFhQyxxQkFBYixFQUFvQ0gsTUFBcEMsQ0FBMkMsVUFBU0osT0FBVCxFQUFrQlEsTUFBbEIsRUFBMEI7QUFDN0UsWUFBT0EsV0FBVyxFQUFaLElBQ0NBLFdBQVdDLFNBRGxCLEVBQ2dDLENBRS9CLENBSEQsTUFHTztBQUNMVCxrQkFBUVUsSUFBUixDQUFhRixNQUFiO0FBQ0Q7O0FBRUQsZUFBT1IsT0FBUDtBQUNELE9BVFMsRUFTUCxFQVRPLENBQWQ7QUFBQSxVQVVJVyxhQUFhLElBQUlaLGNBQUosQ0FBbUJDLE9BQW5CLENBVmpCOztBQVlBLGFBQU9XLFVBQVA7QUFDRDs7Ozs7O0FBR0gsSUFBSUosd0JBQXdCLElBQUlLLE1BQUosWUFBb0JmLGVBQWVnQixXQUFuQywwQkFBbUVoQixlQUFlaUIsYUFBbEYsT0FBNUI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJqQixjQUFqQiIsImZpbGUiOiJzeW1ib2xTZXF1ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHNwZWNpYWxTeW1ib2xzID0gcmVxdWlyZSgnLi4vc3BlY2lhbFN5bWJvbHMnKTtcblxuY2xhc3MgU3ltYm9sU2VxdWVuY2Uge1xuICBjb25zdHJ1Y3RvcihzeW1ib2xzKSB7XG4gICAgdGhpcy5zeW1ib2xzID0gc3ltYm9scztcbiAgfVxuXG4gIG1hcFN5bWJvbHMoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLm1hcChjYik7XG4gIH1cbiAgXG4gIHJlZHVjZVN5bWJvbHMoY2IsIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMucmVkdWNlKGNiLCBpbml0aWFsVmFsdWUpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNob2ljZShjaG9pY2UpIHtcbiAgICB2YXIgc3ltYm9scyA9IGNob2ljZS5zcGxpdChzeW1ib2xEZWxpbWl0ZXJSZWdFeHApLnJlZHVjZShmdW5jdGlvbihzeW1ib2xzLCBzeW1ib2wpIHtcbiAgICAgICAgICBpZiAoICAoc3ltYm9sID09PSAnJylcbiAgICAgICAgICAgICB8fCAoc3ltYm9sID09PSB1bmRlZmluZWQpICApIHtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICByZXR1cm4gc3ltYm9scztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBleHByZXNzaW9uID0gbmV3IFN5bWJvbFNlcXVlbmNlKHN5bWJvbHMpO1xuICAgIFxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG59XG5cbnZhciBzeW1ib2xEZWxpbWl0ZXJSZWdFeHAgPSBuZXcgUmVnRXhwKGBcXFxccyt8KCR7c3BlY2lhbFN5bWJvbHMuRU5EX09GX0xJTkV9KD86XFxcXD98XFxcXCt8XFxcXCopKXwoJHtzcGVjaWFsU3ltYm9scy5OT19XSElURVNQQUNFfSlgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2xTZXF1ZW5jZTtcblxuIl19