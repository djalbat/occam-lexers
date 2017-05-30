'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
    StringToken = require('../common/token/significant/string'),
    WhitespaceToken = require('../common/token/significant/whitespace');

var BNFLexer = function (_CommonLexer) {
  _inherits(BNFLexer, _CommonLexer);

  function BNFLexer() {
    _classCallCheck(this, BNFLexer);

    return _possibleConstructorReturn(this, (BNFLexer.__proto__ || Object.getPrototypeOf(BNFLexer)).apply(this, arguments));
  }

  _createClass(BNFLexer, [{
    key: 'linesFromGrammar',
    value: function linesFromGrammar(grammar) {
      var content = grammar,
          ///
      lines = _get(BNFLexer.prototype.__proto__ || Object.getPrototypeOf(BNFLexer.prototype), 'linesFromContent', this).call(this, content);

      return lines;
    }
  }], [{
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var grammar = BNFLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([StringToken.type, WhitespaceToken.type]);

      return significantTokenTypes;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var rules = Rules.fromGrammar(grammar),
          basicLexer = new BNFLexer(rules, Line);

      return basicLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var grammar = BNFLexer.grammar,
          basicLexer = BNFLexer.fromGrammar(grammar);

      return basicLexer;
    }
  }]);

  return BNFLexer;
}(CommonLexer);

module.exports = BNFLexer;

BNFLexer.grammar = [{ "regularExpression": "\\/[^/]+\\/" }, { "noWhitespace": "<NO_WHITESPACE>" }, { "endOfLine": "<END_OF_LINE>" }, { "special": "::=|\\(|\\)|!|&|\\|" }, { "operator": "\\?|\\*|\\+" }, { "type": "\\[[^/]+\\]" }, { "name": "\\w+" }];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwiU3RyaW5nVG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJCTkZMZXhlciIsImdyYW1tYXIiLCJjb250ZW50IiwibGluZXMiLCJncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJjb25jYXQiLCJ0eXBlIiwicnVsZXMiLCJmcm9tR3JhbW1hciIsImJhc2ljTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLGlCQUFSLENBRGQ7QUFBQSxJQUVNRSxjQUFjRixRQUFRLGlCQUFSLENBRnBCO0FBQUEsSUFHTUcsY0FBY0gsUUFBUSxvQ0FBUixDQUhwQjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSx3Q0FBUixDQUp4Qjs7SUFNTUssUTs7Ozs7Ozs7Ozs7cUNBQ2FDLE8sRUFBUztBQUN4QixVQUFNQyxVQUFVRCxPQUFoQjtBQUFBLFVBQTBCO0FBQ3BCRSxtSUFBK0JELE9BQS9CLENBRE47O0FBR0EsYUFBT0MsS0FBUDtBQUNEOzs7NENBRThCO0FBQzdCLFVBQU1GLFVBQVVELFNBQVNDLE9BQXpCO0FBQUEsVUFDTUcsK0JBQStCUCxZQUFZUSxnQ0FBWixDQUE2Q0osT0FBN0MsQ0FEckM7QUFBQSxVQUVNSyx3QkFBd0JGLDZCQUE2QkcsTUFBN0IsQ0FBb0MsQ0FDMURULFlBQVlVLElBRDhDLEVBRTFEVCxnQkFBZ0JTLElBRjBDLENBQXBDLENBRjlCOztBQU9BLGFBQU9GLHFCQUFQO0FBQ0Q7OztnQ0FFa0JMLE8sRUFBUztBQUMxQixVQUFNUSxRQUFRYixNQUFNYyxXQUFOLENBQWtCVCxPQUFsQixDQUFkO0FBQUEsVUFDTVUsYUFBYSxJQUFJWCxRQUFKLENBQWFTLEtBQWIsRUFBb0JmLElBQXBCLENBRG5COztBQUdBLGFBQU9pQixVQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTVYsVUFBVUQsU0FBU0MsT0FBekI7QUFBQSxVQUNNVSxhQUFhWCxTQUFTVSxXQUFULENBQXFCVCxPQUFyQixDQURuQjs7QUFHQSxhQUFPVSxVQUFQO0FBQ0Q7Ozs7RUEvQm9CZCxXOztBQWtDdkJlLE9BQU9DLE9BQVAsR0FBaUJiLFFBQWpCOztBQUVBQSxTQUFTQyxPQUFULEdBQW1CLENBRWpCLEVBQUUscUJBQXFCLGFBQXZCLEVBRmlCLEVBSWpCLEVBQUUsZ0JBQWdCLGlCQUFsQixFQUppQixFQU1qQixFQUFFLGFBQWEsZUFBZixFQU5pQixFQVFqQixFQUFFLFdBQVcscUJBQWIsRUFSaUIsRUFVakIsRUFBRSxZQUFZLGFBQWQsRUFWaUIsRUFZakIsRUFBRSxRQUFRLGFBQVYsRUFaaUIsRUFjakIsRUFBRSxRQUFRLE1BQVYsRUFkaUIsQ0FBbkIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIFN0cmluZ1Rva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZycpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgQk5GTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZ3JhbW1hciwgIC8vL1xyXG4gICAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXMoKSB7XHJcbiAgICBjb25zdCBncmFtbWFyID0gQk5GTGV4ZXIuZ3JhbW1hcixcclxuICAgICAgICAgIGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMgPSBDb21tb25MZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMuY29uY2F0KFtcclxuICAgICAgICAgICAgU3RyaW5nVG9rZW4udHlwZSxcclxuICAgICAgICAgICAgV2hpdGVzcGFjZVRva2VuLnR5cGVcclxuICAgICAgICAgIF0pO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBuZXcgQk5GTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEJORkxleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBiYXNpY0xleGVyID0gQk5GTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxleGVyO1xyXG5cclxuQk5GTGV4ZXIuZ3JhbW1hciA9IFtcclxuXHJcbiAgeyBcInJlZ3VsYXJFeHByZXNzaW9uXCI6IFwiXFxcXC9bXi9dK1xcXFwvXCIgfSxcclxuXHJcbiAgeyBcIm5vV2hpdGVzcGFjZVwiOiBcIjxOT19XSElURVNQQUNFPlwiIH0sXHJcblxyXG4gIHsgXCJlbmRPZkxpbmVcIjogXCI8RU5EX09GX0xJTkU+XCIgfSxcclxuXHJcbiAgeyBcInNwZWNpYWxcIjogXCI6Oj18XFxcXCh8XFxcXCl8IXwmfFxcXFx8XCIgfSxcclxuXHJcbiAgeyBcIm9wZXJhdG9yXCI6IFwiXFxcXD98XFxcXCp8XFxcXCtcIiB9LFxyXG5cclxuICB7IFwidHlwZVwiOiBcIlxcXFxbW14vXStcXFxcXVwiIH0sXHJcblxyXG4gIHsgXCJuYW1lXCI6IFwiXFxcXHcrXCIgfVxyXG5cclxuXTtcclxuIl19