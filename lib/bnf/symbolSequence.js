'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var symbolTypes = require('../symbolTypes');

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

var symbolDelimiterRegExp = new RegExp('\\s+|(' + symbolTypes.END_OF_LINE + ')|(' + symbolTypes.NO_WHITESPACE + ')');

module.exports = SymbolSequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvc3ltYm9sU2VxdWVuY2UuanMiXSwibmFtZXMiOlsic3ltYm9sVHlwZXMiLCJyZXF1aXJlIiwiU3ltYm9sU2VxdWVuY2UiLCJzeW1ib2xzIiwiY2IiLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJjaG9pY2UiLCJzcGxpdCIsInN5bWJvbERlbGltaXRlclJlZ0V4cCIsInN5bWJvbCIsInVuZGVmaW5lZCIsInB1c2giLCJleHByZXNzaW9uIiwiUmVnRXhwIiwiRU5EX09GX0xJTkUiLCJOT19XSElURVNQQUNFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGNBQWNDLFFBQVEsZ0JBQVIsQ0FBbEI7O0lBRU1DLGM7QUFDSiwwQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OzsrQkFFVUMsRSxFQUFJO0FBQ2IsYUFBTyxLQUFLRCxPQUFMLENBQWFFLEdBQWIsQ0FBaUJELEVBQWpCLENBQVA7QUFDRDs7O2tDQUVhQSxFLEVBQUlFLFksRUFBYztBQUM5QixhQUFPLEtBQUtILE9BQUwsQ0FBYUksTUFBYixDQUFvQkgsRUFBcEIsRUFBd0JFLFlBQXhCLENBQVA7QUFDRDs7OytCQUVpQkUsTSxFQUFRO0FBQ3hCLFVBQUlMLFVBQVVLLE9BQU9DLEtBQVAsQ0FBYUMscUJBQWIsRUFBb0NILE1BQXBDLENBQTJDLFVBQVNKLE9BQVQsRUFBa0JRLE1BQWxCLEVBQTBCO0FBQzdFLFlBQUlBLFdBQVdDLFNBQWYsRUFBMEI7QUFDeEJULGtCQUFRVSxJQUFSLENBQWFGLE1BQWI7QUFDRDtBQUNELGVBQU9SLE9BQVA7QUFDRCxPQUxTLEVBS1AsRUFMTyxDQUFkO0FBQUEsVUFNSVcsYUFBYSxJQUFJWixjQUFKLENBQW1CQyxPQUFuQixDQU5qQjs7QUFRQSxhQUFPVyxVQUFQO0FBQ0Q7Ozs7OztBQUdILElBQUlKLHdCQUF3QixJQUFJSyxNQUFKLFlBQW9CZixZQUFZZ0IsV0FBaEMsV0FBaURoQixZQUFZaUIsYUFBN0QsT0FBNUI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJqQixjQUFqQiIsImZpbGUiOiJzeW1ib2xTZXF1ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHN5bWJvbFR5cGVzID0gcmVxdWlyZSgnLi4vc3ltYm9sVHlwZXMnKTtcblxuY2xhc3MgU3ltYm9sU2VxdWVuY2Uge1xuICBjb25zdHJ1Y3RvcihzeW1ib2xzKSB7XG4gICAgdGhpcy5zeW1ib2xzID0gc3ltYm9scztcbiAgfVxuXG4gIG1hcFN5bWJvbHMoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLm1hcChjYik7XG4gIH1cbiAgXG4gIHJlZHVjZVN5bWJvbHMoY2IsIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMucmVkdWNlKGNiLCBpbml0aWFsVmFsdWUpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNob2ljZShjaG9pY2UpIHtcbiAgICB2YXIgc3ltYm9scyA9IGNob2ljZS5zcGxpdChzeW1ib2xEZWxpbWl0ZXJSZWdFeHApLnJlZHVjZShmdW5jdGlvbihzeW1ib2xzLCBzeW1ib2wpIHtcbiAgICAgICAgICBpZiAoc3ltYm9sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN5bWJvbHMucHVzaChzeW1ib2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3ltYm9scztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBleHByZXNzaW9uID0gbmV3IFN5bWJvbFNlcXVlbmNlKHN5bWJvbHMpO1xuICAgIFxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG59XG5cbnZhciBzeW1ib2xEZWxpbWl0ZXJSZWdFeHAgPSBuZXcgUmVnRXhwKGBcXFxccyt8KCR7c3ltYm9sVHlwZXMuRU5EX09GX0xJTkV9KXwoJHtzeW1ib2xUeXBlcy5OT19XSElURVNQQUNFfSlgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2xTZXF1ZW5jZTtcbiJdfQ==