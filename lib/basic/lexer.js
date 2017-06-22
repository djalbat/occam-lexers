'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    grammar = require('./grammar'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
    WhitespaceToken = require('../common/token/significant/whitespace');

var BasicLexer = function (_CommonLexer) {
  _inherits(BasicLexer, _CommonLexer);

  function BasicLexer() {
    _classCallCheck(this, BasicLexer);

    return _possibleConstructorReturn(this, (BasicLexer.__proto__ || Object.getPrototypeOf(BasicLexer)).apply(this, arguments));
  }

  _createClass(BasicLexer, null, [{
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var grammar = BasicLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([WhitespaceToken.type]);

      return significantTokenTypes;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var rules = Rules.fromGrammar(grammar),
          basicLexer = new BasicLexer(rules, Line);

      return basicLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var grammar = BasicLexer.grammar,
          basicLexer = BasicLexer.fromGrammar(grammar);

      return basicLexer;
    }
  }]);

  return BasicLexer;
}(CommonLexer);

module.exports = BasicLexer;

BasicLexer.grammar = grammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImdyYW1tYXIiLCJSdWxlcyIsIkNvbW1vbkxleGVyIiwiV2hpdGVzcGFjZVRva2VuIiwiQmFzaWNMZXhlciIsImdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMiLCJzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImNvbmNhdCIsInR5cGUiLCJydWxlcyIsImZyb21HcmFtbWFyIiwiYmFzaWNMZXhlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLFdBQVIsQ0FEaEI7QUFBQSxJQUVNRSxRQUFRRixRQUFRLGlCQUFSLENBRmQ7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGlCQUFSLENBSHBCO0FBQUEsSUFJTUksa0JBQWtCSixRQUFRLHdDQUFSLENBSnhCOztJQU1NSyxVOzs7Ozs7Ozs7Ozs0Q0FDMkI7QUFDN0IsVUFBTUosVUFBVUksV0FBV0osT0FBM0I7QUFBQSxVQUNNSywrQkFBK0JILFlBQVlJLGdDQUFaLENBQTZDTixPQUE3QyxDQURyQztBQUFBLFVBRU1PLHdCQUF3QkYsNkJBQTZCRyxNQUE3QixDQUFvQyxDQUMxREwsZ0JBQWdCTSxJQUQwQyxDQUFwQyxDQUY5Qjs7QUFNQSxhQUFPRixxQkFBUDtBQUNEOzs7Z0NBR2tCUCxPLEVBQVM7QUFDMUIsVUFBTVUsUUFBUVQsTUFBTVUsV0FBTixDQUFrQlgsT0FBbEIsQ0FBZDtBQUFBLFVBQ01ZLGFBQWEsSUFBSVIsVUFBSixDQUFlTSxLQUFmLEVBQXNCWixJQUF0QixDQURuQjs7QUFHQSxhQUFPYyxVQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTVosVUFBVUksV0FBV0osT0FBM0I7QUFBQSxVQUNNWSxhQUFhUixXQUFXTyxXQUFYLENBQXVCWCxPQUF2QixDQURuQjs7QUFHQSxhQUFPWSxVQUFQO0FBQ0Q7Ozs7RUF4QnNCVixXOztBQTJCekJXLE9BQU9DLE9BQVAsR0FBaUJWLFVBQWpCOztBQUVBQSxXQUFXSixPQUFYLEdBQXFCQSxPQUFyQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgQmFzaWNMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEJhc2ljTGV4ZXIuZ3JhbW1hcixcclxuICAgICAgICAgIGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMgPSBDb21tb25MZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMuY29uY2F0KFtcclxuICAgICAgICAgICAgV2hpdGVzcGFjZVRva2VuLnR5cGVcclxuICAgICAgICAgIF0pO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBiYXNpY0xleGVyID0gbmV3IEJhc2ljTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEJhc2ljTGV4ZXIuZ3JhbW1hcixcclxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0xleGVyO1xyXG5cclxuQmFzaWNMZXhlci5ncmFtbWFyID0gZ3JhbW1hcjtcclxuIl19