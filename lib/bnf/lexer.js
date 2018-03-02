'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
    specialSymbols = require('./specialSymbols'),
    tokensUtilities = require('../utilities/tokens'),
    CommentTokens = require('./tokens/comment'),
    EndOfLineTokens = require('./tokens/endOfLine'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    StringLiteralTokens = require('../common/tokens/stringLiteral'),
    RegularExpressionTokens = require('../common/tokens/regularExpression');

var significantTokensFromTokens = tokensUtilities.significantTokensFromTokens;

var BNFLexer = function (_CommonLexer) {
  _inherits(BNFLexer, _CommonLexer);

  function BNFLexer() {
    _classCallCheck(this, BNFLexer);

    return _possibleConstructorReturn(this, (BNFLexer.__proto__ || Object.getPrototypeOf(BNFLexer)).apply(this, arguments));
  }

  _createClass(BNFLexer, [{
    key: 'significantTokensFromBNF',
    value: function significantTokensFromBNF(bnf) {
      var content = bnf,
          ///
      tokens = _get(BNFLexer.prototype.__proto__ || Object.getPrototypeOf(BNFLexer.prototype), 'tokensFromContent', this).call(this, content),
          significantTokens = significantTokensFromTokens(tokens);

      return significantTokens;
    }
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = Rules.fromEntries(entries),
          bnfLexer = new BNFLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

      return bnfLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      return BNFLexer.fromEntries(entries);
    }
  }]);

  return BNFLexer;
}(CommonLexer);

Object.assign(BNFLexer, {
  entries: entries,
  specialSymbols: specialSymbols
});

module.exports = BNFLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJ0b2tlbnNVdGlsaXRpZXMiLCJDb21tZW50VG9rZW5zIiwiRW5kT2ZMaW5lVG9rZW5zIiwiV2hpdGVzcGFjZVRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsInNpZ25pZmljYW50VG9rZW5zRnJvbVRva2VucyIsIkJORkxleGVyIiwiYm5mIiwiY29udGVudCIsInRva2VucyIsInNpZ25pZmljYW50VG9rZW5zIiwicnVsZXMiLCJmcm9tRW50cmllcyIsImJuZkxleGVyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLFFBQVFELFFBQVEsaUJBQVIsQ0FEZDtBQUFBLElBRU1FLGNBQWNGLFFBQVEsaUJBQVIsQ0FGcEI7QUFBQSxJQUdNRyxpQkFBaUJILFFBQVEsa0JBQVIsQ0FIdkI7QUFBQSxJQUlNSSxrQkFBa0JKLFFBQVEscUJBQVIsQ0FKeEI7QUFBQSxJQUtNSyxnQkFBZ0JMLFFBQVEsa0JBQVIsQ0FMdEI7QUFBQSxJQU1NTSxrQkFBa0JOLFFBQVEsb0JBQVIsQ0FOeEI7QUFBQSxJQU9NTyxtQkFBbUJQLFFBQVEsNkJBQVIsQ0FQekI7QUFBQSxJQVFNUSxzQkFBc0JSLFFBQVEsZ0NBQVIsQ0FSNUI7QUFBQSxJQVNNUywwQkFBMEJULFFBQVEsb0NBQVIsQ0FUaEM7O0lBV1FVLDJCLEdBQWdDTixlLENBQWhDTSwyQjs7SUFFRkMsUTs7Ozs7Ozs7Ozs7NkNBQ3FCQyxHLEVBQUs7QUFDNUIsVUFBTUMsVUFBVUQsR0FBaEI7QUFBQSxVQUFzQjtBQUNoQkUscUlBQWlDRCxPQUFqQyxDQUROO0FBQUEsVUFFTUUsb0JBQW9CTCw0QkFBNEJJLE1BQTVCLENBRjFCOztBQUlBLGFBQU9DLGlCQUFQO0FBQ0Q7OztnQ0FFa0JoQixPLEVBQVM7QUFDMUIsVUFBTWlCLFFBQVFmLE1BQU1nQixXQUFOLENBQWtCbEIsT0FBbEIsQ0FBZDtBQUFBLFVBQ01tQixXQUFXLElBQUlQLFFBQUosQ0FBYUssS0FBYixFQUFvQlYsZUFBcEIsRUFBcUNELGFBQXJDLEVBQW9ERSxnQkFBcEQsRUFBc0VDLG1CQUF0RSxFQUEyRkMsdUJBQTNGLENBRGpCOztBQUdBLGFBQU9TLFFBQVA7QUFDRDs7O2tDQUVvQjtBQUFFLGFBQU9QLFNBQVNNLFdBQVQsQ0FBcUJsQixPQUFyQixDQUFQO0FBQXVDOzs7O0VBaEJ6Q0csVzs7QUFtQnZCaUIsT0FBT0MsTUFBUCxDQUFjVCxRQUFkLEVBQXdCO0FBQ3RCWixXQUFTQSxPQURhO0FBRXRCSSxrQkFBZ0JBO0FBRk0sQ0FBeEI7O0FBS0FrQixPQUFPQyxPQUFQLEdBQWlCWCxRQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgc3BlY2lhbFN5bWJvbHMgPSByZXF1aXJlKCcuL3NwZWNpYWxTeW1ib2xzJyksXHJcbiAgICAgIHRva2Vuc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90b2tlbnMnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgRW5kT2ZMaW5lVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvZW5kT2ZMaW5lJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgU3RyaW5nTGl0ZXJhbFRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvc3RyaW5nTGl0ZXJhbCcpLFxyXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvcmVndWxhckV4cHJlc3Npb24nKTtcclxuXHJcbmNvbnN0IHsgc2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zIH0gPSB0b2tlbnNVdGlsaXRpZXM7XHJcblxyXG5jbGFzcyBCTkZMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzaWduaWZpY2FudFRva2Vuc0Zyb21CTkYoYm5mKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYm5mLCAgLy8vXHJcbiAgICAgICAgICB0b2tlbnMgPSBzdXBlci50b2tlbnNGcm9tQ29udGVudChjb250ZW50KSxcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBibmZMZXhlciA9IG5ldyBCTkZMZXhlcihydWxlcywgRW5kT2ZMaW5lVG9rZW5zLCBDb21tZW50VG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBSZWd1bGFyRXhwcmVzc2lvblRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGJuZkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQk5GTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihCTkZMZXhlciwge1xyXG4gIGVudHJpZXM6IGVudHJpZXMsXHJcbiAgc3BlY2lhbFN5bWJvbHM6IHNwZWNpYWxTeW1ib2xzXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCTkZMZXhlcjtcclxuIl19