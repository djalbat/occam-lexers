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
    key: 'fromCustomEntry',
    value: function fromCustomEntry(customEntry) {
      var rules = CommonLexer.rulesFromEntries(entries),
          customRule = CommonLexer.ruleFromEntry(customEntry);

      rules.addRule(customRule);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImVudHJpZXMiLCJDb250ZXh0IiwiQ29tbW9uTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiY29udGVudCIsImZpcnN0TGluZUluZGV4IiwibWluaW11bUxpbmVzTGVuZ3RoIiwicHJldmlvdXNMaW5lSW5Db21tZW50IiwiZm9sbG93aW5nTGluZUluQ29tbWVudCIsImNvbnRleHQiLCJsaW5lcyIsImN1c3RvbUVudHJ5IiwicnVsZXMiLCJydWxlc0Zyb21FbnRyaWVzIiwiY3VzdG9tUnVsZSIsInJ1bGVGcm9tRW50cnkiLCJhZGRSdWxlIiwiZmxvcmVuY2VMZXhlciIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxXQUFSLENBRGhCO0FBQUEsSUFFTUUsVUFBVUYsUUFBUSxtQkFBUixDQUZoQjtBQUFBLElBR01HLGNBQWNILFFBQVEsaUJBQVIsQ0FIcEI7O0lBS01JLGE7Ozs7Ozs7Ozs7O3FDQUNhQyxPLEVBQVNDLGMsRUFBZ0JDLGtCLEVBQW9CQyxxQixFQUF1QkMsc0IsRUFBd0I7QUFDM0csVUFBTUMsVUFBVSxJQUFJUixPQUFKLENBQVlLLGtCQUFaLEVBQWdDQyxxQkFBaEMsRUFBdURDLHNCQUF2RCxDQUFoQjtBQUFBLFVBQ01FLHVJQUErQk4sT0FBL0IsRUFBd0NDLGNBQXhDLEVBQXdESSxPQUF4RCxDQUROOztBQUdBLGFBQU9DLEtBQVA7QUFDRDs7O29DQUVzQkMsVyxFQUFhO0FBQ2xDLFVBQU1DLFFBQVFWLFlBQVlXLGdCQUFaLENBQTZCYixPQUE3QixDQUFkO0FBQUEsVUFDTWMsYUFBY1osWUFBWWEsYUFBWixDQUEwQkosV0FBMUIsQ0FEcEI7O0FBR0FDLFlBQU1JLE9BQU4sQ0FBY0YsVUFBZDs7QUFFQSxVQUFNRyxnQkFBZ0IsSUFBSWQsYUFBSixDQUFrQlMsS0FBbEIsRUFBeUJkLElBQXpCLENBQXRCOztBQUVBLGFBQU9tQixhQUFQO0FBQ0Q7OztnQ0FFa0JqQixPLEVBQVM7QUFDMUIsVUFBTVksUUFBUVYsWUFBWVcsZ0JBQVosQ0FBNkJiLE9BQTdCLENBQWQ7QUFBQSxVQUNNaUIsZ0JBQWdCLElBQUlkLGFBQUosQ0FBa0JTLEtBQWxCLEVBQXlCZCxJQUF6QixDQUR0Qjs7QUFHQSxhQUFPbUIsYUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGdCQUFnQmQsY0FBY2UsV0FBZCxDQUEwQmxCLE9BQTFCLENBQXRCOztBQUVBLGFBQU9pQixhQUFQO0FBQ0Q7Ozs7RUE5QnlCZixXOztBQWlDNUJpQixPQUFPQyxPQUFQLEdBQWlCakIsYUFBakI7O0FBRUFBLGNBQWNILE9BQWQsR0FBd0JBLE9BQXhCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIENvbnRleHQgPSByZXF1aXJlKCcuLi9jb21tb24vY29udGV4dCcpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcclxuICAgICAgICAgIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21DdXN0b21FbnRyeShjdXN0b21FbnRyeSkge1xyXG4gICAgY29uc3QgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgY3VzdG9tUnVsZSA9ICBDb21tb25MZXhlci5ydWxlRnJvbUVudHJ5KGN1c3RvbUVudHJ5KTtcclxuXHJcbiAgICBydWxlcy5hZGRSdWxlKGN1c3RvbVJ1bGUpO1xyXG5cclxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG5cclxuRmxvcmVuY2VMZXhlci5lbnRyaWVzID0gZW50cmllcztcclxuIl19