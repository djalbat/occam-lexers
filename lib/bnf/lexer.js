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
    value: function fromEntries() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : BNFLexer;
      var entries = arguments[1];

      var rules = Rules.fromEntries(entries),
          bnfLexer = new Class(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

      return bnfLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing(Class) {
      return BNFLexer.fromEntries(Class, entries);
    }
  }]);

  return BNFLexer;
}(CommonLexer);

Object.assign(BNFLexer, {
  entries: entries,
  specialSymbols: specialSymbols
});

module.exports = BNFLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJ0b2tlbnNVdGlsaXRpZXMiLCJDb21tZW50VG9rZW5zIiwiRW5kT2ZMaW5lVG9rZW5zIiwiV2hpdGVzcGFjZVRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsInNpZ25pZmljYW50VG9rZW5zRnJvbVRva2VucyIsIkJORkxleGVyIiwiYm5mIiwiY29udGVudCIsInRva2VucyIsInNpZ25pZmljYW50VG9rZW5zIiwiQ2xhc3MiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiYm5mTGV4ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxpQkFBUixDQURkO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxpQkFBUixDQUZwQjtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSxrQkFBUixDQUh2QjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSxxQkFBUixDQUp4QjtBQUFBLElBS01LLGdCQUFnQkwsUUFBUSxrQkFBUixDQUx0QjtBQUFBLElBTU1NLGtCQUFrQk4sUUFBUSxvQkFBUixDQU54QjtBQUFBLElBT01PLG1CQUFtQlAsUUFBUSw2QkFBUixDQVB6QjtBQUFBLElBUU1RLHNCQUFzQlIsUUFBUSxnQ0FBUixDQVI1QjtBQUFBLElBU01TLDBCQUEwQlQsUUFBUSxvQ0FBUixDQVRoQzs7SUFXUVUsMkIsR0FBZ0NOLGUsQ0FBaENNLDJCOztJQUVGQyxROzs7Ozs7Ozs7Ozs2Q0FDcUJDLEcsRUFBSztBQUM1QixVQUFNQyxVQUFVRCxHQUFoQjtBQUFBLFVBQXNCO0FBQ2hCRSxxSUFBaUNELE9BQWpDLENBRE47QUFBQSxVQUVNRSxvQkFBb0JMLDRCQUE0QkksTUFBNUIsQ0FGMUI7O0FBSUEsYUFBT0MsaUJBQVA7QUFDRDs7O2tDQUU2QztBQUFBLFVBQTNCQyxLQUEyQix1RUFBbkJMLFFBQW1CO0FBQUEsVUFBVFosT0FBUzs7QUFDNUMsVUFBTWtCLFFBQVFoQixNQUFNaUIsV0FBTixDQUFrQm5CLE9BQWxCLENBQWQ7QUFBQSxVQUNNb0IsV0FBVyxJQUFJSCxLQUFKLENBQVVDLEtBQVYsRUFBaUJYLGVBQWpCLEVBQWtDRCxhQUFsQyxFQUFpREUsZ0JBQWpELEVBQW1FQyxtQkFBbkUsRUFBd0ZDLHVCQUF4RixDQURqQjs7QUFHQSxhQUFPVSxRQUFQO0FBQ0Q7OztnQ0FFa0JILEssRUFBTztBQUFFLGFBQU9MLFNBQVNPLFdBQVQsQ0FBcUJGLEtBQXJCLEVBQTRCakIsT0FBNUIsQ0FBUDtBQUE4Qzs7OztFQWhCckRHLFc7O0FBbUJ2QmtCLE9BQU9DLE1BQVAsQ0FBY1YsUUFBZCxFQUF3QjtBQUN0QlosV0FBU0EsT0FEYTtBQUV0Qkksa0JBQWdCQTtBQUZNLENBQXhCOztBQUtBbUIsT0FBT0MsT0FBUCxHQUFpQlosUUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIHNwZWNpYWxTeW1ib2xzID0gcmVxdWlyZSgnLi9zcGVjaWFsU3ltYm9scycpLFxyXG4gICAgICB0b2tlbnNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdG9rZW5zJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIEVuZE9mTGluZVRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2VuZE9mTGluZScpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyk7XHJcblxyXG5jb25zdCB7IHNpZ25pZmljYW50VG9rZW5zRnJvbVRva2VucyB9ID0gdG9rZW5zVXRpbGl0aWVzO1xyXG5cclxuY2xhc3MgQk5GTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc2lnbmlmaWNhbnRUb2tlbnNGcm9tQk5GKGJuZikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGJuZiwgIC8vL1xyXG4gICAgICAgICAgdG9rZW5zID0gc3VwZXIudG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VucztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhDbGFzcyA9IEJORkxleGVyLCBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgYm5mTGV4ZXIgPSBuZXcgQ2xhc3MocnVsZXMsIEVuZE9mTGluZVRva2VucywgQ29tbWVudFRva2VucywgV2hpdGVzcGFjZVRva2VucywgU3RyaW5nTGl0ZXJhbFRva2VucywgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMpO1xyXG5cclxuICAgIHJldHVybiBibmZMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykgeyByZXR1cm4gQk5GTGV4ZXIuZnJvbUVudHJpZXMoQ2xhc3MsIGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oQk5GTGV4ZXIsIHtcclxuICBlbnRyaWVzOiBlbnRyaWVzLFxyXG4gIHNwZWNpYWxTeW1ib2xzOiBzcGVjaWFsU3ltYm9sc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQk5GTGV4ZXI7XHJcblxyXG4iXX0=