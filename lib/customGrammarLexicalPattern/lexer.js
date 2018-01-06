'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    CommonLexer = require('../common/lexer'),
    CustomGrammarLexicalPatternLine = require('./line');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGV4ZXIuanMiXSwibmFtZXMiOlsiZW50cmllcyIsInJlcXVpcmUiLCJDb21tb25MZXhlciIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxpbmUiLCJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllcyIsImN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIiwiZnJvbUVudHJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRSxrQ0FBa0NGLFFBQVEsUUFBUixDQUZ4Qzs7SUFJTUcsZ0M7Ozs7Ozs7Ozs7O2dDQUNlSixPLEVBQVM7QUFDMUIsVUFBTUssUUFBUUgsWUFBWUksZ0JBQVosQ0FBNkJOLE9BQTdCLENBQWQ7QUFBQSxVQUNNTyxtQ0FBbUMsSUFBSUgsZ0NBQUosQ0FBcUNDLEtBQXJDLEVBQTRDRiwrQkFBNUMsQ0FEekM7O0FBR0EsYUFBT0ksZ0NBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxtQ0FBbUNILGlDQUFpQ0ksV0FBakMsQ0FBNkNSLE9BQTdDLENBQXpDOztBQUVBLGFBQU9PLGdDQUFQO0FBQ0Q7Ozs7RUFaNENMLFc7O0FBZS9DTyxPQUFPQyxPQUFQLEdBQWlCTixnQ0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxpbmUgPSByZXF1aXJlKCcuL2xpbmUnKTtcclxuXHJcbmNsYXNzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciA9IG5ldyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlcihydWxlcywgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIgPSBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyO1xyXG4iXX0=