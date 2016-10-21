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

var symbolDelimiterRegExp = new RegExp('\\s+|(' + specialSymbols.END_OF_LINE + ')|(' + specialSymbols.NO_WHITESPACE + ')');

module.exports = SymbolSequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvc3ltYm9sU2VxdWVuY2UuanMiXSwibmFtZXMiOlsic3BlY2lhbFN5bWJvbHMiLCJyZXF1aXJlIiwiU3ltYm9sU2VxdWVuY2UiLCJzeW1ib2xzIiwiY2IiLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJjaG9pY2UiLCJzcGxpdCIsInN5bWJvbERlbGltaXRlclJlZ0V4cCIsInN5bWJvbCIsInVuZGVmaW5lZCIsInB1c2giLCJleHByZXNzaW9uIiwiUmVnRXhwIiwiRU5EX09GX0xJTkUiLCJOT19XSElURVNQQUNFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGlCQUFpQkMsUUFBUSxtQkFBUixDQUFyQjs7SUFFTUMsYztBQUNKLDBCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OytCQUVVQyxFLEVBQUk7QUFDYixhQUFPLEtBQUtELE9BQUwsQ0FBYUUsR0FBYixDQUFpQkQsRUFBakIsQ0FBUDtBQUNEOzs7a0NBRWFBLEUsRUFBSUUsWSxFQUFjO0FBQzlCLGFBQU8sS0FBS0gsT0FBTCxDQUFhSSxNQUFiLENBQW9CSCxFQUFwQixFQUF3QkUsWUFBeEIsQ0FBUDtBQUNEOzs7K0JBRWlCRSxNLEVBQVE7QUFDeEIsVUFBSUwsVUFBVUssT0FBT0MsS0FBUCxDQUFhQyxxQkFBYixFQUFvQ0gsTUFBcEMsQ0FBMkMsVUFBU0osT0FBVCxFQUFrQlEsTUFBbEIsRUFBMEI7QUFDN0UsWUFBT0EsV0FBVyxFQUFaLElBQ0NBLFdBQVdDLFNBRGxCLEVBQ2dDLENBRS9CLENBSEQsTUFHTztBQUNMVCxrQkFBUVUsSUFBUixDQUFhRixNQUFiO0FBQ0Q7O0FBRUQsZUFBT1IsT0FBUDtBQUNELE9BVFMsRUFTUCxFQVRPLENBQWQ7QUFBQSxVQVVJVyxhQUFhLElBQUlaLGNBQUosQ0FBbUJDLE9BQW5CLENBVmpCOztBQVlBLGFBQU9XLFVBQVA7QUFDRDs7Ozs7O0FBR0gsSUFBSUosd0JBQXdCLElBQUlLLE1BQUosWUFBb0JmLGVBQWVnQixXQUFuQyxXQUFvRGhCLGVBQWVpQixhQUFuRSxPQUE1Qjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQmpCLGNBQWpCIiwiZmlsZSI6InN5bWJvbFNlcXVlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3BlY2lhbFN5bWJvbHMgPSByZXF1aXJlKCcuLi9zcGVjaWFsU3ltYm9scycpO1xuXG5jbGFzcyBTeW1ib2xTZXF1ZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHN5bWJvbHMpIHtcbiAgICB0aGlzLnN5bWJvbHMgPSBzeW1ib2xzO1xuICB9XG5cbiAgbWFwU3ltYm9scyhjYikge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMubWFwKGNiKTtcbiAgfVxuICBcbiAgcmVkdWNlU3ltYm9scyhjYiwgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9scy5yZWR1Y2UoY2IsIGluaXRpYWxWYWx1ZSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ2hvaWNlKGNob2ljZSkge1xuICAgIHZhciBzeW1ib2xzID0gY2hvaWNlLnNwbGl0KHN5bWJvbERlbGltaXRlclJlZ0V4cCkucmVkdWNlKGZ1bmN0aW9uKHN5bWJvbHMsIHN5bWJvbCkge1xuICAgICAgICAgIGlmICggIChzeW1ib2wgPT09ICcnKVxuICAgICAgICAgICAgIHx8IChzeW1ib2wgPT09IHVuZGVmaW5lZCkgICkge1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN5bWJvbHMucHVzaChzeW1ib2wpO1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIHJldHVybiBzeW1ib2xzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgU3ltYm9sU2VxdWVuY2Uoc3ltYm9scyk7XG4gICAgXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cbn1cblxudmFyIHN5bWJvbERlbGltaXRlclJlZ0V4cCA9IG5ldyBSZWdFeHAoYFxcXFxzK3woJHtzcGVjaWFsU3ltYm9scy5FTkRfT0ZfTElORX0pfCgke3NwZWNpYWxTeW1ib2xzLk5PX1dISVRFU1BBQ0V9KWApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbFNlcXVlbmNlO1xuIl19