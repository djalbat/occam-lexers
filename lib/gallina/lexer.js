'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var GallinaLexer = function (_CommonLexer) {
  _inherits(GallinaLexer, _CommonLexer);

  function GallinaLexer() {
    _classCallCheck(this, GallinaLexer);

    return _possibleConstructorReturn(this, (GallinaLexer.__proto__ || Object.getPrototypeOf(GallinaLexer)).apply(this, arguments));
  }

  _createClass(GallinaLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, context) {
      context = context || new Context(0); ///

      var lines = _get(GallinaLexer.prototype.__proto__ || Object.getPrototypeOf(GallinaLexer.prototype), 'linesFromContent', this).call(this, content, context);

      return lines;
    }
  }, {
    key: 'terminalSymbolsRegExpPattern',
    value: function terminalSymbolsRegExpPattern() {
      var terminalSymbolsRegExpPattern = _get(GallinaLexer.prototype.__proto__ || Object.getPrototypeOf(GallinaLexer.prototype), 'terminalSymbolsRegExpPattern', this).call(this, grammar);

      return terminalSymbolsRegExpPattern;
    }
  }, {
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var significantTokenTypes = ['string', 'ident', 'num'];

      return significantTokenTypes;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var rules = Rules.fromGrammar(grammar),
          gallinaLexer = new GallinaLexer(rules, Line);

      return gallinaLexer;
    }
  }]);

  return GallinaLexer;
}(CommonLexer);

module.exports = GallinaLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwiQ29udGV4dCIsImdyYW1tYXIiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwiR2FsbGluYUxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJydWxlcyIsImZyb21HcmFtbWFyIiwiZ2FsbGluYUxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsVUFBVUQsUUFBUSxXQUFSLENBRGQ7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLFFBQVFILFFBQVEsaUJBQVIsQ0FIWjtBQUFBLElBSUlJLGNBQWNKLFFBQVEsaUJBQVIsQ0FKbEI7O0lBTU1LLFk7Ozs7Ozs7Ozs7O3FDQUNhQyxPLEVBQVNDLE8sRUFBUztBQUNqQ0EsZ0JBQVVBLFdBQVcsSUFBSU4sT0FBSixDQUFZLENBQVosQ0FBckIsQ0FEaUMsQ0FDSzs7QUFFdEMsVUFBSU8scUlBQStCRixPQUEvQixFQUF3Q0MsT0FBeEMsQ0FBSjs7QUFFQSxhQUFPQyxLQUFQO0FBQ0Q7OzttREFFOEI7QUFDN0IsVUFBSUMsd0tBQWtFUCxPQUFsRSxDQUFKOztBQUVBLGFBQU9PLDRCQUFQO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsVUFBSUMsd0JBQXdCLENBQzFCLFFBRDBCLEVBRTFCLE9BRjBCLEVBRzFCLEtBSDBCLENBQTVCOztBQU1BLGFBQU9BLHFCQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBSUMsUUFBUVIsTUFBTVMsV0FBTixDQUFrQlYsT0FBbEIsQ0FBWjtBQUFBLFVBQ0lXLGVBQWUsSUFBSVIsWUFBSixDQUFpQk0sS0FBakIsRUFBd0JaLElBQXhCLENBRG5COztBQUdBLGFBQU9jLFlBQVA7QUFDRDs7OztFQTlCd0JULFc7O0FBaUMzQlUsT0FBT0MsT0FBUCxHQUFpQlYsWUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBHYWxsaW5hTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dCgwKTsgIC8vL1xyXG4gICAgXHJcbiAgICB2YXIgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKCkge1xyXG4gICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBzdXBlci50ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKGdyYW1tYXIpO1xyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuO1xyXG4gIH1cclxuXHJcbiAgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgdmFyIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IFtcclxuICAgICAgJ3N0cmluZycsXHJcbiAgICAgICdpZGVudCcsXHJcbiAgICAgICdudW0nXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIHZhciBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgIGdhbGxpbmFMZXhlciA9IG5ldyBHYWxsaW5hTGV4ZXIocnVsZXMsIExpbmUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZ2FsbGluYUxleGVyO1xyXG4gIH0gIFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFMZXhlcjtcclxuIl19