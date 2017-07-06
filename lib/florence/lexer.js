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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImVudHJpZXMiLCJDb250ZXh0IiwiQ29tbW9uTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImZpcnN0TGluZUluZGV4IiwibWluaW11bUxpbmVzTGVuZ3RoIiwicHJldmlvdXNMaW5lSW5Db21tZW50IiwiZm9sbG93aW5nTGluZUluQ29tbWVudCIsImNvbnRleHQiLCJsaW5lcyIsImN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4iLCJjdXN0b20iLCJjdXN0b21HcmFtbWFyRW50cnkiLCJjdXN0b21HcmFtbWFyUnVsZSIsInJ1bGVGcm9tRW50cnkiLCJydWxlcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJhZGRSdWxlIiwiZmxvcmVuY2VMZXhlciIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxXQUFSLENBRGhCO0FBQUEsSUFFTUUsVUFBVUYsUUFBUSxtQkFBUixDQUZoQjtBQUFBLElBR01HLGNBQWNILFFBQVEsaUJBQVIsQ0FIcEI7O0lBS01JLGE7Ozs7Ozs7Ozs7O3FDQUNhQyxPLEVBQVNDLGMsRUFBZ0JDLGtCLEVBQW9CQyxxQixFQUF1QkMsc0IsRUFBd0I7QUFDM0csVUFBTUMsVUFBVSxJQUFJUixPQUFKLENBQVlLLGtCQUFaLEVBQWdDQyxxQkFBaEMsRUFBdURDLHNCQUF2RCxDQUFoQjtBQUFBLFVBQ01FLHVJQUErQk4sT0FBL0IsRUFBd0NDLGNBQXhDLEVBQXdESSxPQUF4RCxDQUROOztBQUdBLGFBQU9DLEtBQVA7QUFDRDs7O3FEQUV1Q0MsNEIsRUFBOEI7QUFDcEUsVUFBTUMsU0FBU0QsNEJBQWY7QUFBQSxVQUE2QztBQUN2Q0UsMkJBQXFCO0FBQ25CRCxnQkFBUUE7QUFEVyxPQUQzQjtBQUFBLFVBSU1FLG9CQUFxQlosWUFBWWEsYUFBWixDQUEwQkYsa0JBQTFCLENBSjNCO0FBQUEsVUFLTUcsUUFBUWQsWUFBWWUsZ0JBQVosQ0FBNkJqQixPQUE3QixDQUxkOztBQU9BZ0IsWUFBTUUsT0FBTixDQUFjSixpQkFBZDs7QUFFQSxVQUFNSyxnQkFBZ0IsSUFBSWhCLGFBQUosQ0FBa0JhLEtBQWxCLEVBQXlCbEIsSUFBekIsQ0FBdEI7O0FBRUEsYUFBT3FCLGFBQVA7QUFDRDs7O2dDQUVrQm5CLE8sRUFBUztBQUMxQixVQUFNZ0IsUUFBUWQsWUFBWWUsZ0JBQVosQ0FBNkJqQixPQUE3QixDQUFkO0FBQUEsVUFDTW1CLGdCQUFnQixJQUFJaEIsYUFBSixDQUFrQmEsS0FBbEIsRUFBeUJsQixJQUF6QixDQUR0Qjs7QUFHQSxhQUFPcUIsYUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGdCQUFnQmhCLGNBQWNpQixXQUFkLENBQTBCcEIsT0FBMUIsQ0FBdEI7O0FBRUEsYUFBT21CLGFBQVA7QUFDRDs7OztFQWxDeUJqQixXOztBQXFDNUJtQixPQUFPQyxPQUFQLEdBQWlCbkIsYUFBakI7O0FBRUFBLGNBQWNILE9BQWQsR0FBd0JBLE9BQXhCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbnRleHQgPSByZXF1aXJlKCcuLi9jb21tb24vY29udGV4dCcpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcclxuICAgICAgICAgIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21DdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuKGN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4pIHtcclxuICAgIGNvbnN0IGN1c3RvbSA9IGN1c3RvbUdyYW1tYXJzTGV4aWNhbFBhdHRlcm4sIC8vL1xyXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckVudHJ5ID0ge1xyXG4gICAgICAgICAgICBjdXN0b206IGN1c3RvbVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJSdWxlID0gIENvbW1vbkxleGVyLnJ1bGVGcm9tRW50cnkoY3VzdG9tR3JhbW1hckVudHJ5KSxcclxuICAgICAgICAgIHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICBydWxlcy5hZGRSdWxlKGN1c3RvbUdyYW1tYXJSdWxlKTtcclxuXHJcbiAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuXHJcbkZsb3JlbmNlTGV4ZXIuZW50cmllcyA9IGVudHJpZXM7XHJcbiJdfQ==