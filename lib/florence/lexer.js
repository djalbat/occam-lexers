'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    Context = require('../common/context'),
    FlorenceLine = require('./line'),
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
    key: 'fromCustomGrammarsLexicalPattern',
    value: function fromCustomGrammarsLexicalPattern(customGrammarsLexicalPattern) {
      var custom = customGrammarsLexicalPattern,
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

module.exports = FlorenceLexer;

FlorenceLexer.entries = entries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIiwicmVxdWlyZSIsIkNvbnRleHQiLCJGbG9yZW5jZUxpbmUiLCJDb21tb25MZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJjb250ZW50IiwiZmlyc3RMaW5lSW5kZXgiLCJtaW5pbXVtTGluZXNMZW5ndGgiLCJwcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJmb2xsb3dpbmdMaW5lSW5Db21tZW50IiwiY29udGV4dCIsImxpbmVzIiwiY3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybiIsImN1c3RvbSIsImN1c3RvbUdyYW1tYXJFbnRyeSIsImN1c3RvbUdyYW1tYXJSdWxlIiwicnVsZUZyb21FbnRyeSIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllcyIsImFkZFJ1bGUiLCJmbG9yZW5jZUxleGVyIiwiZnJvbUVudHJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxtQkFBUixDQURoQjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsUUFBUixDQUZyQjtBQUFBLElBR01HLGNBQWNILFFBQVEsaUJBQVIsQ0FIcEI7O0lBS01JLGE7Ozs7Ozs7Ozs7O3FDQUNhQyxPLEVBQVNDLGMsRUFBZ0JDLGtCLEVBQW9CQyxxQixFQUF1QkMsc0IsRUFBd0I7QUFDM0csVUFBTUMsVUFBVSxJQUFJVCxPQUFKLENBQVlNLGtCQUFaLEVBQWdDQyxxQkFBaEMsRUFBdURDLHNCQUF2RCxDQUFoQjtBQUFBLFVBQ01FLHVJQUErQk4sT0FBL0IsRUFBd0NDLGNBQXhDLEVBQXdESSxPQUF4RCxDQUROOztBQUdBLGFBQU9DLEtBQVA7QUFDRDs7O3FEQUV1Q0MsNEIsRUFBOEI7QUFDcEUsVUFBTUMsU0FBU0QsNEJBQWY7QUFBQSxVQUE2QztBQUN2Q0UsMkJBQXFCO0FBQ25CRCxnQkFBUUE7QUFEVyxPQUQzQjtBQUFBLFVBSU1FLG9CQUFxQlosWUFBWWEsYUFBWixDQUEwQkYsa0JBQTFCLENBSjNCO0FBQUEsVUFLTUcsUUFBUWQsWUFBWWUsZ0JBQVosQ0FBNkJuQixPQUE3QixDQUxkOztBQU9Ba0IsWUFBTUUsT0FBTixDQUFjSixpQkFBZDs7QUFFQSxVQUFNSyxnQkFBZ0IsSUFBSWhCLGFBQUosQ0FBa0JhLEtBQWxCLEVBQXlCZixZQUF6QixDQUF0Qjs7QUFFQSxhQUFPa0IsYUFBUDtBQUNEOzs7Z0NBRWtCckIsTyxFQUFTO0FBQzFCLFVBQU1rQixRQUFRZCxZQUFZZSxnQkFBWixDQUE2Qm5CLE9BQTdCLENBQWQ7QUFBQSxVQUNNcUIsZ0JBQWdCLElBQUloQixhQUFKLENBQWtCYSxLQUFsQixFQUF5QmYsWUFBekIsQ0FEdEI7O0FBR0EsYUFBT2tCLGFBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQSxnQkFBZ0JoQixjQUFjaUIsV0FBZCxDQUEwQnRCLE9BQTFCLENBQXRCOztBQUVBLGFBQU9xQixhQUFQO0FBQ0Q7Ozs7RUFsQ3lCakIsVzs7QUFxQzVCbUIsT0FBT0MsT0FBUCxHQUFpQm5CLGFBQWpCOztBQUVBQSxjQUFjTCxPQUFkLEdBQXdCQSxPQUF4QiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29udGV4dCA9IHJlcXVpcmUoJy4uL2NvbW1vbi9jb250ZXh0JyksXHJcbiAgICAgIEZsb3JlbmNlTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcclxuICAgICAgICAgIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21DdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuKGN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4pIHtcclxuICAgIGNvbnN0IGN1c3RvbSA9IGN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4sIC8vL1xyXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckVudHJ5ID0ge1xyXG4gICAgICAgICAgICBjdXN0b206IGN1c3RvbVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJSdWxlID0gIENvbW1vbkxleGVyLnJ1bGVGcm9tRW50cnkoY3VzdG9tR3JhbW1hckVudHJ5KSxcclxuICAgICAgICAgIHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICBydWxlcy5hZGRSdWxlKGN1c3RvbUdyYW1tYXJSdWxlKTtcclxuXHJcbiAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIEZsb3JlbmNlTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBGbG9yZW5jZUxpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcblxyXG5GbG9yZW5jZUxleGVyLmVudHJpZXMgPSBlbnRyaWVzO1xyXG4iXX0=