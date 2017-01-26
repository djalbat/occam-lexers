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
    value: function mapSymbols(callback) {
      return this.symbols.map(callback);
    }
  }, {
    key: 'reduceSymbols',
    value: function reduceSymbols(callback, initialValue) {
      return this.symbols.reduce(callback, initialValue);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvc3ltYm9sU2VxdWVuY2UuanMiXSwibmFtZXMiOlsic3BlY2lhbFN5bWJvbHMiLCJyZXF1aXJlIiwiU3ltYm9sU2VxdWVuY2UiLCJzeW1ib2xzIiwiY2FsbGJhY2siLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJjaG9pY2UiLCJzcGxpdCIsInN5bWJvbERlbGltaXRlclJlZ0V4cCIsInN5bWJvbCIsInVuZGVmaW5lZCIsInB1c2giLCJleHByZXNzaW9uIiwiUmVnRXhwIiwiRU5EX09GX0xJTkUiLCJOT19XSElURVNQQUNFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGlCQUFpQkMsUUFBUSxtQkFBUixDQUFyQjs7SUFFTUMsYztBQUNKLDBCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OytCQUVVQyxRLEVBQVU7QUFDbkIsYUFBTyxLQUFLRCxPQUFMLENBQWFFLEdBQWIsQ0FBaUJELFFBQWpCLENBQVA7QUFDRDs7O2tDQUVhQSxRLEVBQVVFLFksRUFBYztBQUNwQyxhQUFPLEtBQUtILE9BQUwsQ0FBYUksTUFBYixDQUFvQkgsUUFBcEIsRUFBOEJFLFlBQTlCLENBQVA7QUFDRDs7OytCQUVpQkUsTSxFQUFRO0FBQ3hCLFVBQUlMLFVBQVVLLE9BQU9DLEtBQVAsQ0FBYUMscUJBQWIsRUFBb0NILE1BQXBDLENBQTJDLFVBQVNKLE9BQVQsRUFBa0JRLE1BQWxCLEVBQTBCO0FBQzdFLFlBQU9BLFdBQVcsRUFBWixJQUNDQSxXQUFXQyxTQURsQixFQUNnQyxDQUUvQixDQUhELE1BR087QUFDTFQsa0JBQVFVLElBQVIsQ0FBYUYsTUFBYjtBQUNEOztBQUVELGVBQU9SLE9BQVA7QUFDRCxPQVRTLEVBU1AsRUFUTyxDQUFkO0FBQUEsVUFVSVcsYUFBYSxJQUFJWixjQUFKLENBQW1CQyxPQUFuQixDQVZqQjs7QUFZQSxhQUFPVyxVQUFQO0FBQ0Q7Ozs7OztBQUdILElBQUlKLHdCQUF3QixJQUFJSyxNQUFKLFlBQW9CZixlQUFlZ0IsV0FBbkMsMEJBQW1FaEIsZUFBZWlCLGFBQWxGLE9BQTVCOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCakIsY0FBakIiLCJmaWxlIjoic3ltYm9sU2VxdWVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBzcGVjaWFsU3ltYm9scyA9IHJlcXVpcmUoJy4uL3NwZWNpYWxTeW1ib2xzJyk7XG5cbmNsYXNzIFN5bWJvbFNlcXVlbmNlIHtcbiAgY29uc3RydWN0b3Ioc3ltYm9scykge1xuICAgIHRoaXMuc3ltYm9scyA9IHN5bWJvbHM7XG4gIH1cblxuICBtYXBTeW1ib2xzKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9scy5tYXAoY2FsbGJhY2spO1xuICB9XG4gIFxuICByZWR1Y2VTeW1ib2xzKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21DaG9pY2UoY2hvaWNlKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBjaG9pY2Uuc3BsaXQoc3ltYm9sRGVsaW1pdGVyUmVnRXhwKS5yZWR1Y2UoZnVuY3Rpb24oc3ltYm9scywgc3ltYm9sKSB7XG4gICAgICAgICAgaWYgKCAgKHN5bWJvbCA9PT0gJycpXG4gICAgICAgICAgICAgfHwgKHN5bWJvbCA9PT0gdW5kZWZpbmVkKSAgKSB7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgcmV0dXJuIHN5bWJvbHM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBTeW1ib2xTZXF1ZW5jZShzeW1ib2xzKTtcbiAgICBcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG52YXIgc3ltYm9sRGVsaW1pdGVyUmVnRXhwID0gbmV3IFJlZ0V4cChgXFxcXHMrfCgke3NwZWNpYWxTeW1ib2xzLkVORF9PRl9MSU5FfSg/OlxcXFw/fFxcXFwrfFxcXFwqKSl8KCR7c3BlY2lhbFN5bWJvbHMuTk9fV0hJVEVTUEFDRX0pYCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sU2VxdWVuY2U7XG5cbiJdfQ==