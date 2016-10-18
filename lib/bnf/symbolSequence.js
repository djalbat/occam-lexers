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

var END_OF_LINE = '<END_OF_LINE>',
    NO_WHITESPACE = '<NO_WHITESPACE>',
    symbolDelimiterRegExp = new RegExp('\\s+|(' + END_OF_LINE + ')|(' + NO_WHITESPACE + ')');

SymbolSequence.END_OF_LINE = END_OF_LINE;
SymbolSequence.NO_WHITESPACE = NO_WHITESPACE;

module.exports = SymbolSequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvc3ltYm9sU2VxdWVuY2UuanMiXSwibmFtZXMiOlsiU3ltYm9sU2VxdWVuY2UiLCJzeW1ib2xzIiwiY2IiLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJjaG9pY2UiLCJzcGxpdCIsInN5bWJvbERlbGltaXRlclJlZ0V4cCIsInN5bWJvbCIsInVuZGVmaW5lZCIsInB1c2giLCJleHByZXNzaW9uIiwiRU5EX09GX0xJTkUiLCJOT19XSElURVNQQUNFIiwiUmVnRXhwIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxjO0FBQ0osMEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7K0JBRVVDLEUsRUFBSTtBQUNiLGFBQU8sS0FBS0QsT0FBTCxDQUFhRSxHQUFiLENBQWlCRCxFQUFqQixDQUFQO0FBQ0Q7OztrQ0FFYUEsRSxFQUFJRSxZLEVBQWM7QUFDOUIsYUFBTyxLQUFLSCxPQUFMLENBQWFJLE1BQWIsQ0FBb0JILEVBQXBCLEVBQXdCRSxZQUF4QixDQUFQO0FBQ0Q7OzsrQkFFaUJFLE0sRUFBUTtBQUN4QixVQUFJTCxVQUFVSyxPQUFPQyxLQUFQLENBQWFDLHFCQUFiLEVBQW9DSCxNQUFwQyxDQUEyQyxVQUFTSixPQUFULEVBQWtCUSxNQUFsQixFQUEwQjtBQUM3RSxZQUFJQSxXQUFXQyxTQUFmLEVBQTBCO0FBQ3hCVCxrQkFBUVUsSUFBUixDQUFhRixNQUFiO0FBQ0Q7QUFDRCxlQUFPUixPQUFQO0FBQ0QsT0FMUyxFQUtQLEVBTE8sQ0FBZDtBQUFBLFVBTUlXLGFBQWEsSUFBSVosY0FBSixDQUFtQkMsT0FBbkIsQ0FOakI7O0FBUUEsYUFBT1csVUFBUDtBQUNEOzs7Ozs7QUFHSCxJQUFJQyxjQUFjLGVBQWxCO0FBQUEsSUFDSUMsZ0JBQWdCLGlCQURwQjtBQUFBLElBRUlOLHdCQUF3QixJQUFJTyxNQUFKLFlBQW9CRixXQUFwQixXQUFxQ0MsYUFBckMsT0FGNUI7O0FBSUFkLGVBQWVhLFdBQWYsR0FBNkJBLFdBQTdCO0FBQ0FiLGVBQWVjLGFBQWYsR0FBK0JBLGFBQS9COztBQUVBRSxPQUFPQyxPQUFQLEdBQWlCakIsY0FBakIiLCJmaWxlIjoic3ltYm9sU2VxdWVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFN5bWJvbFNlcXVlbmNlIHtcbiAgY29uc3RydWN0b3Ioc3ltYm9scykge1xuICAgIHRoaXMuc3ltYm9scyA9IHN5bWJvbHM7XG4gIH1cblxuICBtYXBTeW1ib2xzKGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9scy5tYXAoY2IpO1xuICB9XG4gIFxuICByZWR1Y2VTeW1ib2xzKGNiLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLnJlZHVjZShjYiwgaW5pdGlhbFZhbHVlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21DaG9pY2UoY2hvaWNlKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBjaG9pY2Uuc3BsaXQoc3ltYm9sRGVsaW1pdGVyUmVnRXhwKS5yZWR1Y2UoZnVuY3Rpb24oc3ltYm9scywgc3ltYm9sKSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN5bWJvbHM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBTeW1ib2xTZXF1ZW5jZShzeW1ib2xzKTtcbiAgICBcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG52YXIgRU5EX09GX0xJTkUgPSAnPEVORF9PRl9MSU5FPicsXG4gICAgTk9fV0hJVEVTUEFDRSA9ICc8Tk9fV0hJVEVTUEFDRT4nLFxuICAgIHN5bWJvbERlbGltaXRlclJlZ0V4cCA9IG5ldyBSZWdFeHAoYFxcXFxzK3woJHtFTkRfT0ZfTElORX0pfCgke05PX1dISVRFU1BBQ0V9KWApO1xuXG5TeW1ib2xTZXF1ZW5jZS5FTkRfT0ZfTElORSA9IEVORF9PRl9MSU5FO1xuU3ltYm9sU2VxdWVuY2UuTk9fV0hJVEVTUEFDRSA9IE5PX1dISVRFU1BBQ0U7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sU2VxdWVuY2U7XG4iXX0=