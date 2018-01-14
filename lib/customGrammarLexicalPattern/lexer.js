'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    CustomGrammarLexicalPatternLine = require('../customGrammarLexicalPattern/line');

var CustomGrammarLexicalPatternLexer = function (_CommonLexer) {
  _inherits(CustomGrammarLexicalPatternLexer, _CommonLexer);

  function CustomGrammarLexicalPatternLexer() {
    _classCallCheck(this, CustomGrammarLexicalPatternLexer);

    return _possibleConstructorReturn(this, (CustomGrammarLexicalPatternLexer.__proto__ || Object.getPrototypeOf(CustomGrammarLexicalPatternLexer)).apply(this, arguments));
  }

  _createClass(CustomGrammarLexicalPatternLexer, null, [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = CommonLexer.rulesFromEntries(entries),
          customGrammarLexicalPatternLexer = new CustomGrammarLexicalPatternLexer(rules, CustomGrammarLexicalPatternLine);

      return customGrammarLexicalPatternLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var customGrammarLexicalPatternLexer = CustomGrammarLexicalPatternLexer.fromEntries(entries);

      return customGrammarLexicalPatternLexer;
    }
  }]);

  return CustomGrammarLexicalPatternLexer;
}(CommonLexer);

module.exports = CustomGrammarLexicalPatternLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJDb21tb25MZXhlciIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxpbmUiLCJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllcyIsImN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIiwiZnJvbUVudHJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxrQ0FBa0NGLFFBQVEscUNBQVIsQ0FGeEM7O0lBSU1HLGdDOzs7Ozs7Ozs7OztnQ0FDZUosTyxFQUFTO0FBQzFCLFVBQU1LLFFBQVFILFlBQVlJLGdCQUFaLENBQTZCTixPQUE3QixDQUFkO0FBQUEsVUFDTU8sbUNBQW1DLElBQUlILGdDQUFKLENBQXFDQyxLQUFyQyxFQUE0Q0YsK0JBQTVDLENBRHpDOztBQUdBLGFBQU9JLGdDQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsbUNBQW1DSCxpQ0FBaUNJLFdBQWpDLENBQTZDUixPQUE3QyxDQUF6Qzs7QUFFQSxhQUFPTyxnQ0FBUDtBQUNEOzs7O0VBWjRDTCxXOztBQWUvQ08sT0FBT0MsT0FBUCxHQUFpQk4sZ0NBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MaW5lID0gcmVxdWlyZSgnLi4vY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuL2xpbmUnKTtcclxuXHJcbmNsYXNzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciA9IG5ldyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlcihydWxlcywgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIgPSBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyO1xyXG4iXX0=