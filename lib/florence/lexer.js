'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    FlorenceLine = require('./line'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, null, [{
    key: 'fromCombinedCustomGrammarsLexicalPattern',
    value: function fromCombinedCustomGrammarsLexicalPattern(combinedCustomGrammarsLexicalPattern) {
      var custom = combinedCustomGrammarsLexicalPattern,
          ///
      customGrammarEntry = {
        custom: custom
      },
          customGrammarRule = CommonLexer.ruleFromEntry(customGrammarEntry),
          rules = CommonLexer.rulesFromEntries(entries);

      rules.addRule(customGrammarRule);

      var florenceLexer = new FlorenceLexer(rules, FlorenceLine);

      return florenceLexer;
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = CommonLexer.rulesFromEntries(entries),
          florenceLexer = new FlorenceLexer(rules, FlorenceLine);

      return florenceLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var florenceLexer = FlorenceLexer.fromEntries(entries);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

FlorenceLexer.entries = entries;

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkZsb3JlbmNlTGluZSIsIkNvbW1vbkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybiIsImN1c3RvbSIsImN1c3RvbUdyYW1tYXJFbnRyeSIsImN1c3RvbUdyYW1tYXJSdWxlIiwicnVsZUZyb21FbnRyeSIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllcyIsImFkZFJ1bGUiLCJmbG9yZW5jZUxleGVyIiwiZnJvbUVudHJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsUUFBUixDQURyQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsaUJBQVIsQ0FGcEI7O0lBSU1HLGE7Ozs7Ozs7Ozs7OzZEQUM0Q0Msb0MsRUFBc0M7QUFDcEYsVUFBTUMsU0FBU0Qsb0NBQWY7QUFBQSxVQUFxRDtBQUMvQ0UsMkJBQXFCO0FBQ25CRCxnQkFBUUE7QUFEVyxPQUQzQjtBQUFBLFVBSU1FLG9CQUFxQkwsWUFBWU0sYUFBWixDQUEwQkYsa0JBQTFCLENBSjNCO0FBQUEsVUFLTUcsUUFBUVAsWUFBWVEsZ0JBQVosQ0FBNkJYLE9BQTdCLENBTGQ7O0FBT0FVLFlBQU1FLE9BQU4sQ0FBY0osaUJBQWQ7O0FBRUEsVUFBTUssZ0JBQWdCLElBQUlULGFBQUosQ0FBa0JNLEtBQWxCLEVBQXlCUixZQUF6QixDQUF0Qjs7QUFFQSxhQUFPVyxhQUFQO0FBQ0Q7OztnQ0FFa0JiLE8sRUFBUztBQUMxQixVQUFNVSxRQUFRUCxZQUFZUSxnQkFBWixDQUE2QlgsT0FBN0IsQ0FBZDtBQUFBLFVBQ01hLGdCQUFnQixJQUFJVCxhQUFKLENBQWtCTSxLQUFsQixFQUF5QlIsWUFBekIsQ0FEdEI7O0FBR0EsYUFBT1csYUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGdCQUFnQlQsY0FBY1UsV0FBZCxDQUEwQmQsT0FBMUIsQ0FBdEI7O0FBRUEsYUFBT2EsYUFBUDtBQUNEOzs7O0VBM0J5QlYsVzs7QUE4QjVCQyxjQUFjSixPQUFkLEdBQXdCQSxPQUF4Qjs7QUFFQWUsT0FBT0MsT0FBUCxHQUFpQlosYUFBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIEZsb3JlbmNlTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybihjb21iaW5lZEN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4pIHtcclxuICAgIGNvbnN0IGN1c3RvbSA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybiwgLy8vXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyRW50cnkgPSB7XHJcbiAgICAgICAgICAgIGN1c3RvbTogY3VzdG9tXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY3VzdG9tR3JhbW1hclJ1bGUgPSAgQ29tbW9uTGV4ZXIucnVsZUZyb21FbnRyeShjdXN0b21HcmFtbWFyRW50cnkpLFxyXG4gICAgICAgICAgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJ1bGVzLmFkZFJ1bGUoY3VzdG9tR3JhbW1hclJ1bGUpO1xyXG5cclxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgRmxvcmVuY2VMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIEZsb3JlbmNlTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbkZsb3JlbmNlTGV4ZXIuZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcblxyXG4iXX0=