'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    entries = require('./entries'),
    Context = require('../common/context'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      var context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'linesFromContent', this).call(this, content, firstLineIndex, context);

      return lines;
    }
  }], [{
    key: 'fromCustomGrammarEntry',
    value: function fromCustomGrammarEntry(customGrammarEntry) {
      var rules = CommonLexer.rulesFromEntries(entries),
          customGrammarRule = CommonLexer.ruleFromEntry(customGrammarEntry);

      rules.addRule(customGrammarRule);

      var florenceLexer = new FlorenceLexer(rules, Line);

      return florenceLexer;
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = CommonLexer.rulesFromEntries(entries),
          florenceLexer = new FlorenceLexer(rules, Line);

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

module.exports = FlorenceLexer;

FlorenceLexer.entries = entries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImVudHJpZXMiLCJDb250ZXh0IiwiQ29tbW9uTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImZpcnN0TGluZUluZGV4IiwibWluaW11bUxpbmVzTGVuZ3RoIiwicHJldmlvdXNMaW5lSW5Db21tZW50IiwiZm9sbG93aW5nTGluZUluQ29tbWVudCIsImNvbnRleHQiLCJsaW5lcyIsImN1c3RvbUdyYW1tYXJFbnRyeSIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllcyIsImN1c3RvbUdyYW1tYXJSdWxlIiwicnVsZUZyb21FbnRyeSIsImFkZFJ1bGUiLCJmbG9yZW5jZUxleGVyIiwiZnJvbUVudHJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLFdBQVIsQ0FEaEI7QUFBQSxJQUVNRSxVQUFVRixRQUFRLG1CQUFSLENBRmhCO0FBQUEsSUFHTUcsY0FBY0gsUUFBUSxpQkFBUixDQUhwQjs7SUFLTUksYTs7Ozs7Ozs7Ozs7cUNBQ2FDLE8sRUFBU0MsYyxFQUFnQkMsa0IsRUFBb0JDLHFCLEVBQXVCQyxzQixFQUF3QjtBQUMzRyxVQUFNQyxVQUFVLElBQUlSLE9BQUosQ0FBWUssa0JBQVosRUFBZ0NDLHFCQUFoQyxFQUF1REMsc0JBQXZELENBQWhCO0FBQUEsVUFDTUUsdUlBQStCTixPQUEvQixFQUF3Q0MsY0FBeEMsRUFBd0RJLE9BQXhELENBRE47O0FBR0EsYUFBT0MsS0FBUDtBQUNEOzs7MkNBRTZCQyxrQixFQUFvQjtBQUNoRCxVQUFNQyxRQUFRVixZQUFZVyxnQkFBWixDQUE2QmIsT0FBN0IsQ0FBZDtBQUFBLFVBQ01jLG9CQUFxQlosWUFBWWEsYUFBWixDQUEwQkosa0JBQTFCLENBRDNCOztBQUdBQyxZQUFNSSxPQUFOLENBQWNGLGlCQUFkOztBQUVBLFVBQU1HLGdCQUFnQixJQUFJZCxhQUFKLENBQWtCUyxLQUFsQixFQUF5QmQsSUFBekIsQ0FBdEI7O0FBRUEsYUFBT21CLGFBQVA7QUFDRDs7O2dDQUVrQmpCLE8sRUFBUztBQUMxQixVQUFNWSxRQUFRVixZQUFZVyxnQkFBWixDQUE2QmIsT0FBN0IsQ0FBZDtBQUFBLFVBQ01pQixnQkFBZ0IsSUFBSWQsYUFBSixDQUFrQlMsS0FBbEIsRUFBeUJkLElBQXpCLENBRHRCOztBQUdBLGFBQU9tQixhQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsZ0JBQWdCZCxjQUFjZSxXQUFkLENBQTBCbEIsT0FBMUIsQ0FBdEI7O0FBRUEsYUFBT2lCLGFBQVA7QUFDRDs7OztFQTlCeUJmLFc7O0FBaUM1QmlCLE9BQU9DLE9BQVAsR0FBaUJqQixhQUFqQjs7QUFFQUEsY0FBY0gsT0FBZCxHQUF3QkEsT0FBeEIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29udGV4dCA9IHJlcXVpcmUoJy4uL2NvbW1vbi9jb250ZXh0JyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQobWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxyXG4gICAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJFbnRyeShjdXN0b21HcmFtbWFyRW50cnkpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJSdWxlID0gIENvbW1vbkxleGVyLnJ1bGVGcm9tRW50cnkoY3VzdG9tR3JhbW1hckVudHJ5KTtcclxuXHJcbiAgICBydWxlcy5hZGRSdWxlKGN1c3RvbUdyYW1tYXJSdWxlKTtcclxuXHJcbiAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuXHJcbkZsb3JlbmNlTGV4ZXIuZW50cmllcyA9IGVudHJpZXM7XHJcbiJdfQ==