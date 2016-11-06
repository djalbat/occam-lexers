'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('../util'),
    Line = require('./line'),
    Context = require('./context'),
    grammar = require('../grammar/gallina'),
    CommonLexer = require('../common/lexer'),
    RegExpPattern = require('../regExpPattern');

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
  }], [{
    key: 'terminalSymbolsRegExpPattern',
    value: function terminalSymbolsRegExpPattern(grammar) {
      var specialSymbolsRegExp = util.findRegExpFromType(grammar, 'special'),
          keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
          specialSymbolsRegExpPatternString = RegExpPattern.fromRegExp(specialSymbolsRegExp).toString(),
          keywordSymbolsRegExpPatternString = RegExpPattern.fromRegExp(keywordSymbolsRegExp).removeAnchors().removeNonCapturingGroup().toString(),
          terminalSymbolsRegExpPattern = specialSymbolsRegExpPatternString + '|' + keywordSymbolsRegExpPatternString;

      return terminalSymbolsRegExpPattern;
    }
  }, {
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      return CommonLexer.significantTokenTypes(grammar);
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var rules = CommonLexer.rulesFromGrammar(grammar),
          gallinaLexer = new GallinaLexer(rules, Line);

      return gallinaLexer;
    }
  }]);

  return GallinaLexer;
}(CommonLexer);

module.exports = GallinaLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiTGluZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiQ29tbW9uTGV4ZXIiLCJSZWdFeHBQYXR0ZXJuIiwiR2FsbGluYUxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwiZmluZFJlZ0V4cEZyb21UeXBlIiwia2V5d29yZFN5bWJvbHNSZWdFeHAiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5TdHJpbmciLCJmcm9tUmVnRXhwIiwidG9TdHJpbmciLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm5TdHJpbmciLCJyZW1vdmVBbmNob3JzIiwicmVtb3ZlTm9uQ2FwdHVyaW5nR3JvdXAiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicnVsZXMiLCJydWxlc0Zyb21HcmFtbWFyIiwiZ2FsbGluYUxleGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsU0FBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxRQUFSLENBRFg7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLFVBQVVILFFBQVEsb0JBQVIsQ0FIZDtBQUFBLElBSUlJLGNBQWNKLFFBQVEsaUJBQVIsQ0FKbEI7QUFBQSxJQUtJSyxnQkFBZ0JMLFFBQVEsa0JBQVIsQ0FMcEI7O0lBT01NLFk7Ozs7Ozs7Ozs7O3FDQUNhQyxPLEVBQVNDLE8sRUFBUztBQUNqQ0EsZ0JBQVVBLFdBQVcsSUFBSU4sT0FBSixDQUFZLENBQVosQ0FBckIsQ0FEaUMsQ0FDSzs7QUFFdEMsVUFBSU8scUlBQStCRixPQUEvQixFQUF3Q0MsT0FBeEMsQ0FBSjs7QUFFQSxhQUFPQyxLQUFQO0FBQ0Q7OztpREFFbUNOLE8sRUFBUztBQUMzQyxVQUFJTyx1QkFBdUJYLEtBQUtZLGtCQUFMLENBQXdCUixPQUF4QixFQUFpQyxTQUFqQyxDQUEzQjtBQUFBLFVBQ0lTLHVCQUF1QmIsS0FBS1ksa0JBQUwsQ0FBd0JSLE9BQXhCLEVBQWlDLFNBQWpDLENBRDNCO0FBQUEsVUFFSVUsb0NBQW9DUixjQUFjUyxVQUFkLENBQXlCSixvQkFBekIsRUFBK0NLLFFBQS9DLEVBRnhDO0FBQUEsVUFHSUMsb0NBQW9DWCxjQUFjUyxVQUFkLENBQXlCRixvQkFBekIsRUFBK0NLLGFBQS9DLEdBQStEQyx1QkFBL0QsR0FBeUZILFFBQXpGLEVBSHhDO0FBQUEsVUFJSUksK0JBQWtDTixpQ0FBbEMsU0FBdUVHLGlDQUozRTs7QUFNQSxhQUFPRyw0QkFBUDtBQUNEOzs7NENBRThCO0FBQUUsYUFBT2YsWUFBWWdCLHFCQUFaLENBQWtDakIsT0FBbEMsQ0FBUDtBQUFvRDs7O2tDQUVoRTtBQUNuQixVQUFJa0IsUUFBUWpCLFlBQVlrQixnQkFBWixDQUE2Qm5CLE9BQTdCLENBQVo7QUFBQSxVQUNJb0IsZUFBZSxJQUFJakIsWUFBSixDQUFpQmUsS0FBakIsRUFBd0JwQixJQUF4QixDQURuQjs7QUFHQSxhQUFPc0IsWUFBUDtBQUNEOzs7O0VBMUJ3Qm5CLFc7O0FBNkIzQm9CLE9BQU9DLE9BQVAsR0FBaUJuQixZQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvZ2FsbGluYScpLFxyXG4gICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgIFJlZ0V4cFBhdHRlcm4gPSByZXF1aXJlKCcuLi9yZWdFeHBQYXR0ZXJuJyk7XHJcblxyXG5jbGFzcyBHYWxsaW5hTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dCgwKTsgIC8vL1xyXG4gICAgXHJcbiAgICB2YXIgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybihncmFtbWFyKSB7XHJcbiAgICB2YXIgc3BlY2lhbFN5bWJvbHNSZWdFeHAgPSB1dGlsLmZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCAnc3BlY2lhbCcpLFxyXG4gICAgICAgIGtleXdvcmRTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ2tleXdvcmQnKSxcclxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5TdHJpbmcgPSBSZWdFeHBQYXR0ZXJuLmZyb21SZWdFeHAoc3BlY2lhbFN5bWJvbHNSZWdFeHApLnRvU3RyaW5nKCksXHJcbiAgICAgICAga2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nID0gUmVnRXhwUGF0dGVybi5mcm9tUmVnRXhwKGtleXdvcmRTeW1ib2xzUmVnRXhwKS5yZW1vdmVBbmNob3JzKCkucmVtb3ZlTm9uQ2FwdHVyaW5nR3JvdXAoKS50b1N0cmluZygpLFxyXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBgJHtzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5TdHJpbmd9fCR7a2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuU3RyaW5nfWA7XHJcblxyXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXMoKSB7IHJldHVybiBDb21tb25MZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXMoZ3JhbW1hcik7IH1cclxuICBcclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICB2YXIgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgIGdhbGxpbmFMZXhlciA9IG5ldyBHYWxsaW5hTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBnYWxsaW5hTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFMZXhlcjtcclxuIl19