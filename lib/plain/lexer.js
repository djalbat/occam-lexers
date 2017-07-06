'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlainLine = require('./line'),
    entries = require('./entries'),
    Rules = require('../common/rules'),
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
      var rules = Rules.fromEntries(entries),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wbGFpbi9sZXhlci5qcyJdLCJuYW1lcyI6WyJQbGFpbkxpbmUiLCJyZXF1aXJlIiwiZW50cmllcyIsIlJ1bGVzIiwiQ29tbW9uTGV4ZXIiLCJQbGFpbkxleGVyIiwicnVsZXMiLCJmcm9tRW50cmllcyIsInBsYWluTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsUUFBUixDQUFsQjtBQUFBLElBQ01DLFVBQVVELFFBQVEsV0FBUixDQURoQjtBQUFBLElBRU1FLFFBQVFGLFFBQVEsaUJBQVIsQ0FGZDtBQUFBLElBR01HLGNBQWNILFFBQVEsaUJBQVIsQ0FIcEI7O0lBS01JLFU7Ozs7Ozs7Ozs7O2dDQUNlSCxPLEVBQVM7QUFDMUIsVUFBTUksUUFBUUgsTUFBTUksV0FBTixDQUFrQkwsT0FBbEIsQ0FBZDtBQUFBLFVBQ01NLGFBQWEsSUFBSUgsVUFBSixDQUFlQyxLQUFmLEVBQXNCTixTQUF0QixDQURuQjs7QUFHQSxhQUFPUSxVQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsYUFBYUgsV0FBV0UsV0FBWCxDQUF1QkwsT0FBdkIsQ0FBbkI7O0FBRUEsYUFBT00sVUFBUDtBQUNEOzs7O0VBWnNCSixXOztBQWV6QkssT0FBT0MsT0FBUCxHQUFpQkwsVUFBakI7O0FBRUFBLFdBQVdILE9BQVgsR0FBcUJBLE9BQXJCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgUGxhaW5MaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIFBsYWluTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBwbGFpbkxleGVyID0gbmV3IFBsYWluTGV4ZXIocnVsZXMsIFBsYWluTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIHBsYWluTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBwbGFpbkxleGVyID0gUGxhaW5MZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gcGxhaW5MZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxhaW5MZXhlcjtcclxuXHJcblBsYWluTGV4ZXIuZW50cmllcyA9IGVudHJpZXM7XHJcbiJdfQ==