'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

var CustomGrammarLexicalPatternLexer = function (_CommonLexer) {
  _inherits(CustomGrammarLexicalPatternLexer, _CommonLexer);

  function CustomGrammarLexicalPatternLexer() {
    _classCallCheck(this, CustomGrammarLexicalPatternLexer);

    return _possibleConstructorReturn(this, (CustomGrammarLexicalPatternLexer.__proto__ || Object.getPrototypeOf(CustomGrammarLexicalPatternLexer)).apply(this, arguments));
  }

  _createClass(CustomGrammarLexicalPatternLexer, [{
    key: 'processEndOfLineTokens',
    value: function processEndOfLineTokens(tokensOrContents) {
      NonSignificantEndOfLineTokens.process(tokensOrContents);
    }
  }, {
    key: 'processCommentTokens',
    value: function processCommentTokens(tokensOrContents, inComment) {
      return inComment;
    }
  }, {
    key: 'processRegularExpressionTokens',
    value: function processRegularExpressionTokens(tokensOrContents) {}
  }, {
    key: 'processStringLiteralTokens',
    value: function processStringLiteralTokens(tokensOrContents) {}
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      return CommonLexer.fromNothing(CustomGrammarLexicalPatternLexer);
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries);
    }
  }]);

  return CustomGrammarLexicalPatternLexer;
}(CommonLexer);

Object.assign(CustomGrammarLexicalPatternLexer, {
  entries: entries
});

module.exports = CustomGrammarLexicalPatternLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJDb21tb25MZXhlciIsIk5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIiLCJ0b2tlbnNPckNvbnRlbnRzIiwicHJvY2VzcyIsImluQ29tbWVudCIsImZyb21Ob3RoaW5nIiwiZnJvbUVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxnQ0FBZ0NGLFFBQVEsMkNBQVIsQ0FGdEM7O0lBSU1HLGdDOzs7Ozs7Ozs7OzsyQ0FDbUJDLGdCLEVBQWtCO0FBQ3ZDRixvQ0FBOEJHLE9BQTlCLENBQXNDRCxnQkFBdEM7QUFDRDs7O3lDQUVvQkEsZ0IsRUFBa0JFLFMsRUFBVztBQUFFLGFBQU9BLFNBQVA7QUFBbUI7OzttREFFeENGLGdCLEVBQWtCLENBQUU7OzsrQ0FFeEJBLGdCLEVBQWtCLENBQUU7OztrQ0FFMUI7QUFBRSxhQUFPSCxZQUFZTSxXQUFaLENBQXdCSixnQ0FBeEIsQ0FBUDtBQUFtRTs7O2dDQUV2RUosTyxFQUFTO0FBQUUsYUFBT0UsWUFBWU8sV0FBWixDQUF3QkwsZ0NBQXhCLEVBQTBESixPQUExRCxDQUFQO0FBQTRFOzs7O0VBYjdERSxXOztBQWdCL0NRLE9BQU9DLE1BQVAsQ0FBY1AsZ0NBQWQsRUFBZ0Q7QUFDOUNKLFdBQVNBO0FBRHFDLENBQWhEOztBQUlBWSxPQUFPQyxPQUFQLEdBQWlCVCxnQ0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIE5vblNpZ25pZmljYW50RW5kT2ZMaW5lVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9lbmRPZkxpbmUvbm9uU2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHByb2Nlc3NFbmRPZkxpbmVUb2tlbnModG9rZW5zT3JDb250ZW50cykge1xyXG4gICAgTm9uU2lnbmlmaWNhbnRFbmRPZkxpbmVUb2tlbnMucHJvY2Vzcyh0b2tlbnNPckNvbnRlbnRzKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NDb21tZW50VG9rZW5zKHRva2Vuc09yQ29udGVudHMsIGluQ29tbWVudCkgeyByZXR1cm4gaW5Db21tZW50OyB9XHJcblxyXG4gIHByb2Nlc3NSZWd1bGFyRXhwcmVzc2lvblRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICBwcm9jZXNzU3RyaW5nTGl0ZXJhbFRva2Vucyh0b2tlbnNPckNvbnRlbnRzKSB7fVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyLCB7XHJcbiAgZW50cmllczogZW50cmllc1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXI7XHJcbiJdfQ==