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
    value: function fromEntries(Class, entries) {
      if (entries === undefined) {
        entries = Class;
        Class = BNFLexer;
      }

      var rules = Rules.fromEntries(entries),
          bnfLexer = new Class(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

      return bnfLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing(Class) {
      var bnfLexer = Class === undefined ? BNFLexer.fromEntries(entries) : BNFLexer.fromEntries(Class, entries);

      return bnfLexer;
    }
  }]);

  return BNFLexer;
}(CommonLexer);

Object.assign(BNFLexer, {
  entries: entries,
  specialSymbols: specialSymbols
});

module.exports = BNFLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJ0b2tlbnNVdGlsaXRpZXMiLCJDb21tZW50VG9rZW5zIiwiRW5kT2ZMaW5lVG9rZW5zIiwiV2hpdGVzcGFjZVRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsInNpZ25pZmljYW50VG9rZW5zRnJvbVRva2VucyIsIkJORkxleGVyIiwiYm5mIiwiY29udGVudCIsInRva2VucyIsInNpZ25pZmljYW50VG9rZW5zIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiYm5mTGV4ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxpQkFBUixDQURkO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxpQkFBUixDQUZwQjtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSxrQkFBUixDQUh2QjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSxxQkFBUixDQUp4QjtBQUFBLElBS01LLGdCQUFnQkwsUUFBUSxrQkFBUixDQUx0QjtBQUFBLElBTU1NLGtCQUFrQk4sUUFBUSxvQkFBUixDQU54QjtBQUFBLElBT01PLG1CQUFtQlAsUUFBUSw2QkFBUixDQVB6QjtBQUFBLElBUU1RLHNCQUFzQlIsUUFBUSxnQ0FBUixDQVI1QjtBQUFBLElBU01TLDBCQUEwQlQsUUFBUSxvQ0FBUixDQVRoQzs7SUFXUVUsMkIsR0FBZ0NOLGUsQ0FBaENNLDJCOztJQUVGQyxROzs7Ozs7Ozs7Ozs2Q0FDcUJDLEcsRUFBSztBQUM1QixVQUFNQyxVQUFVRCxHQUFoQjtBQUFBLFVBQXNCO0FBQ2hCRSxxSUFBaUNELE9BQWpDLENBRE47QUFBQSxVQUVNRSxvQkFBb0JMLDRCQUE0QkksTUFBNUIsQ0FGMUI7O0FBSUEsYUFBT0MsaUJBQVA7QUFDRDs7O2dDQUVrQkMsSyxFQUFPakIsTyxFQUFTO0FBQ2pDLFVBQUlBLFlBQVlrQixTQUFoQixFQUEyQjtBQUN6QmxCLGtCQUFVaUIsS0FBVjtBQUNBQSxnQkFBUUwsUUFBUjtBQUNEOztBQUVELFVBQU1PLFFBQVFqQixNQUFNa0IsV0FBTixDQUFrQnBCLE9BQWxCLENBQWQ7QUFBQSxVQUNNcUIsV0FBVyxJQUFJSixLQUFKLENBQVVFLEtBQVYsRUFBaUJaLGVBQWpCLEVBQWtDRCxhQUFsQyxFQUFpREUsZ0JBQWpELEVBQW1FQyxtQkFBbkUsRUFBd0ZDLHVCQUF4RixDQURqQjs7QUFHQSxhQUFPVyxRQUFQO0FBQ0Q7OztnQ0FFa0JKLEssRUFBTztBQUN4QixVQUFNSSxXQUFZSixVQUFVQyxTQUFYLEdBQ0VOLFNBQVNRLFdBQVQsQ0FBcUJwQixPQUFyQixDQURGLEdBRUlZLFNBQVNRLFdBQVQsQ0FBcUJILEtBQXJCLEVBQTRCakIsT0FBNUIsQ0FGckI7O0FBSUEsYUFBT3FCLFFBQVA7QUFDRDs7OztFQTNCb0JsQixXOztBQThCdkJtQixPQUFPQyxNQUFQLENBQWNYLFFBQWQsRUFBd0I7QUFDdEJaLFdBQVNBLE9BRGE7QUFFdEJJLGtCQUFnQkE7QUFGTSxDQUF4Qjs7QUFLQW9CLE9BQU9DLE9BQVAsR0FBaUJiLFFBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBzcGVjaWFsU3ltYm9scyA9IHJlcXVpcmUoJy4vc3BlY2lhbFN5bWJvbHMnKSxcclxuICAgICAgdG9rZW5zVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3Rva2VucycpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBFbmRPZkxpbmVUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9lbmRPZkxpbmUnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvd2hpdGVzcGFjZScpLFxyXG4gICAgICBTdHJpbmdMaXRlcmFsVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9zdHJpbmdMaXRlcmFsJyksXHJcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9yZWd1bGFyRXhwcmVzc2lvbicpO1xyXG5cclxuY29uc3QgeyBzaWduaWZpY2FudFRva2Vuc0Zyb21Ub2tlbnMgfSA9IHRva2Vuc1V0aWxpdGllcztcclxuXHJcbmNsYXNzIEJORkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHNpZ25pZmljYW50VG9rZW5zRnJvbUJORihibmYpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBibmYsICAvLy9cclxuICAgICAgICAgIHRva2VucyA9IHN1cGVyLnRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpLFxyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21Ub2tlbnModG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpIHtcclxuICAgIGlmIChlbnRyaWVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZW50cmllcyA9IENsYXNzO1xyXG4gICAgICBDbGFzcyA9IEJORkxleGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBibmZMZXhlciA9IG5ldyBDbGFzcyhydWxlcywgRW5kT2ZMaW5lVG9rZW5zLCBDb21tZW50VG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBSZWd1bGFyRXhwcmVzc2lvblRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGJuZkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XHJcbiAgICBjb25zdCBibmZMZXhlciA9IChDbGFzcyA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgQk5GTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcykgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgQk5GTGV4ZXIuZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBibmZMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oQk5GTGV4ZXIsIHtcclxuICBlbnRyaWVzOiBlbnRyaWVzLFxyXG4gIHNwZWNpYWxTeW1ib2xzOiBzcGVjaWFsU3ltYm9sc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQk5GTGV4ZXI7XHJcbiJdfQ==