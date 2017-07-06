'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlainLine = require('./line'),
    entries = require('./entries'),
    CommonLexer = require('../common/lexer');

var PlainLexer = function (_CommonLexer) {
  _inherits(PlainLexer, _CommonLexer);

  function PlainLexer() {
    _classCallCheck(this, PlainLexer);

    return _possibleConstructorReturn(this, (PlainLexer.__proto__ || Object.getPrototypeOf(PlainLexer)).apply(this, arguments));
  }

  _createClass(PlainLexer, null, [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = CommonLexer.rulesFromEntries(entries),
          plainLexer = new PlainLexer(rules, PlainLine);

      return plainLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var plainLexer = PlainLexer.fromEntries(entries);

      return plainLexer;
    }
  }]);

  return PlainLexer;
}(CommonLexer);

module.exports = PlainLexer;

PlainLexer.entries = entries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wbGFpbi9sZXhlci5qcyJdLCJuYW1lcyI6WyJQbGFpbkxpbmUiLCJyZXF1aXJlIiwiZW50cmllcyIsIkNvbW1vbkxleGVyIiwiUGxhaW5MZXhlciIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllcyIsInBsYWluTGV4ZXIiLCJmcm9tRW50cmllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxRQUFSLENBQWxCO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxXQUFSLENBRGhCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxpQkFBUixDQUZwQjs7SUFJTUcsVTs7Ozs7Ozs7Ozs7Z0NBQ2VGLE8sRUFBUztBQUMxQixVQUFNRyxRQUFRRixZQUFZRyxnQkFBWixDQUE2QkosT0FBN0IsQ0FBZDtBQUFBLFVBQ01LLGFBQWEsSUFBSUgsVUFBSixDQUFlQyxLQUFmLEVBQXNCTCxTQUF0QixDQURuQjs7QUFHQSxhQUFPTyxVQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsYUFBYUgsV0FBV0ksV0FBWCxDQUF1Qk4sT0FBdkIsQ0FBbkI7O0FBRUEsYUFBT0ssVUFBUDtBQUNEOzs7O0VBWnNCSixXOztBQWV6Qk0sT0FBT0MsT0FBUCxHQUFpQk4sVUFBakI7O0FBRUFBLFdBQVdGLE9BQVgsR0FBcUJBLE9BQXJCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgUGxhaW5MaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIFBsYWluTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIHBsYWluTGV4ZXIgPSBuZXcgUGxhaW5MZXhlcihydWxlcywgUGxhaW5MaW5lKTtcclxuXHJcbiAgICByZXR1cm4gcGxhaW5MZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHBsYWluTGV4ZXIgPSBQbGFpbkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBwbGFpbkxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGFpbkxleGVyO1xyXG5cclxuUGxhaW5MZXhlci5lbnRyaWVzID0gZW50cmllcztcclxuIl19