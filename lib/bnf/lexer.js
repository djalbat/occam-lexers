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
    CommentTokens = require('./tokens/comment'),
    EndOfLineTokens = require('./tokens/endOfLine'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    StringLiteralTokens = require('../common/tokens/stringLiteral'),
    RegularExpressionTokens = require('../common/tokens/regularExpression');

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

function significantTokensFromTokens(tokens) {
  var significantTokens = tokens.reduce(function (significantTokens, token) {
    var tokenSignificant = token.isSignificant();

    if (tokenSignificant) {
      var significantToken = token; ///

      significantTokens.push(significantToken);
    }

    return significantTokens;
  }, []);

  return significantTokens;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJDb21tZW50VG9rZW5zIiwiRW5kT2ZMaW5lVG9rZW5zIiwiV2hpdGVzcGFjZVRva2VucyIsIlN0cmluZ0xpdGVyYWxUb2tlbnMiLCJSZWd1bGFyRXhwcmVzc2lvblRva2VucyIsIkJORkxleGVyIiwiYm5mIiwiY29udGVudCIsInRva2VucyIsInNpZ25pZmljYW50VG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zIiwicnVsZXMiLCJmcm9tRW50cmllcyIsImJuZkxleGVyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsInRva2VuIiwidG9rZW5TaWduaWZpY2FudCIsImlzU2lnbmlmaWNhbnQiLCJzaWduaWZpY2FudFRva2VuIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLFFBQVFELFFBQVEsaUJBQVIsQ0FEZDtBQUFBLElBRU1FLGNBQWNGLFFBQVEsaUJBQVIsQ0FGcEI7QUFBQSxJQUdNRyxpQkFBaUJILFFBQVEsa0JBQVIsQ0FIdkI7QUFBQSxJQUlNSSxnQkFBZ0JKLFFBQVEsa0JBQVIsQ0FKdEI7QUFBQSxJQUtNSyxrQkFBa0JMLFFBQVEsb0JBQVIsQ0FMeEI7QUFBQSxJQU1NTSxtQkFBbUJOLFFBQVEsNkJBQVIsQ0FOekI7QUFBQSxJQU9NTyxzQkFBc0JQLFFBQVEsZ0NBQVIsQ0FQNUI7QUFBQSxJQVFNUSwwQkFBMEJSLFFBQVEsb0NBQVIsQ0FSaEM7O0lBVU1TLFE7Ozs7Ozs7Ozs7OzZDQUNxQkMsRyxFQUFLO0FBQzVCLFVBQU1DLFVBQVVELEdBQWhCO0FBQUEsVUFBc0I7QUFDaEJFLHFJQUFpQ0QsT0FBakMsQ0FETjtBQUFBLFVBRU1FLG9CQUFvQkMsNEJBQTRCRixNQUE1QixDQUYxQjs7QUFJQSxhQUFPQyxpQkFBUDtBQUNEOzs7Z0NBRWtCZCxPLEVBQVM7QUFDMUIsVUFBTWdCLFFBQVFkLE1BQU1lLFdBQU4sQ0FBa0JqQixPQUFsQixDQUFkO0FBQUEsVUFDTWtCLFdBQVcsSUFBSVIsUUFBSixDQUFhTSxLQUFiLEVBQW9CVixlQUFwQixFQUFxQ0QsYUFBckMsRUFBb0RFLGdCQUFwRCxFQUFzRUMsbUJBQXRFLEVBQTJGQyx1QkFBM0YsQ0FEakI7O0FBR0EsYUFBT1MsUUFBUDtBQUNEOzs7a0NBRW9CO0FBQUUsYUFBT1IsU0FBU08sV0FBVCxDQUFxQmpCLE9BQXJCLENBQVA7QUFBdUM7Ozs7RUFoQnpDRyxXOztBQW1CdkJnQixPQUFPQyxNQUFQLENBQWNWLFFBQWQsRUFBd0I7QUFDdEJWLFdBQVNBLE9BRGE7QUFFdEJJLGtCQUFnQkE7QUFGTSxDQUF4Qjs7QUFLQWlCLE9BQU9DLE9BQVAsR0FBaUJaLFFBQWpCOztBQUVBLFNBQVNLLDJCQUFULENBQXFDRixNQUFyQyxFQUE2QztBQUMzQyxNQUFNQyxvQkFBb0JELE9BQU9VLE1BQVAsQ0FBYyxVQUFTVCxpQkFBVCxFQUE0QlUsS0FBNUIsRUFBbUM7QUFDekUsUUFBTUMsbUJBQW1CRCxNQUFNRSxhQUFOLEVBQXpCOztBQUVBLFFBQUlELGdCQUFKLEVBQXNCO0FBQ3BCLFVBQU1FLG1CQUFtQkgsS0FBekIsQ0FEb0IsQ0FDWTs7QUFFaENWLHdCQUFrQmMsSUFBbEIsQ0FBdUJELGdCQUF2QjtBQUNEOztBQUVELFdBQU9iLGlCQUFQO0FBQ0QsR0FWeUIsRUFVdkIsRUFWdUIsQ0FBMUI7O0FBWUEsU0FBT0EsaUJBQVA7QUFDRCIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgc3BlY2lhbFN5bWJvbHMgPSByZXF1aXJlKCcuL3NwZWNpYWxTeW1ib2xzJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIEVuZE9mTGluZVRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2VuZE9mTGluZScpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIFN0cmluZ0xpdGVyYWxUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3N0cmluZ0xpdGVyYWwnKSxcclxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ub2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3JlZ3VsYXJFeHByZXNzaW9uJyk7XHJcblxyXG5jbGFzcyBCTkZMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzaWduaWZpY2FudFRva2Vuc0Zyb21CTkYoYm5mKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYm5mLCAgLy8vXHJcbiAgICAgICAgICB0b2tlbnMgPSBzdXBlci50b2tlbnNGcm9tQ29udGVudChjb250ZW50KSxcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBibmZMZXhlciA9IG5ldyBCTkZMZXhlcihydWxlcywgRW5kT2ZMaW5lVG9rZW5zLCBDb21tZW50VG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zLCBTdHJpbmdMaXRlcmFsVG9rZW5zLCBSZWd1bGFyRXhwcmVzc2lvblRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGJuZkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQk5GTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7IH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihCTkZMZXhlciwge1xyXG4gIGVudHJpZXM6IGVudHJpZXMsXHJcbiAgc3BlY2lhbFN5bWJvbHM6IHNwZWNpYWxTeW1ib2xzXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCTkZMZXhlcjtcclxuXHJcbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5zRnJvbVRva2Vucyh0b2tlbnMpIHtcclxuICBjb25zdCBzaWduaWZpY2FudFRva2VucyA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oc2lnbmlmaWNhbnRUb2tlbnMsIHRva2VuKSB7XHJcbiAgICBjb25zdCB0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xyXG5cclxuICAgIGlmICh0b2tlblNpZ25pZmljYW50KSB7XHJcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjsgLy8vXHJcblxyXG4gICAgICBzaWduaWZpY2FudFRva2Vucy5wdXNoKHNpZ25pZmljYW50VG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VucztcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiBzaWduaWZpY2FudFRva2VucztcclxufVxyXG4iXX0=