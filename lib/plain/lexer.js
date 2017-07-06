'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlainLine = require('./line'),
    entries = require('./entries'),
    Context = require('../common/context'),
    CommonLexer = require('../common/lexer');

var PlainLexer = function (_CommonLexer) {
  _inherits(PlainLexer, _CommonLexer);

  function PlainLexer() {
    _classCallCheck(this, PlainLexer);

    return _possibleConstructorReturn(this, (PlainLexer.__proto__ || Object.getPrototypeOf(PlainLexer)).apply(this, arguments));
  }

  _createClass(PlainLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      var context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = _get(PlainLexer.prototype.__proto__ || Object.getPrototypeOf(PlainLexer.prototype), 'linesFromContent', this).call(this, content, firstLineIndex, context);

      return lines;
    }
  }], [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wbGFpbi9sZXhlci5qcyJdLCJuYW1lcyI6WyJQbGFpbkxpbmUiLCJyZXF1aXJlIiwiZW50cmllcyIsIkNvbnRleHQiLCJDb21tb25MZXhlciIsIlBsYWluTGV4ZXIiLCJjb250ZW50IiwiZmlyc3RMaW5lSW5kZXgiLCJtaW5pbXVtTGluZXNMZW5ndGgiLCJwcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJmb2xsb3dpbmdMaW5lSW5Db21tZW50IiwiY29udGV4dCIsImxpbmVzIiwicnVsZXMiLCJydWxlc0Zyb21FbnRyaWVzIiwicGxhaW5MZXhlciIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsUUFBUixDQUFsQjtBQUFBLElBQ01DLFVBQVVELFFBQVEsV0FBUixDQURoQjtBQUFBLElBRU1FLFVBQVVGLFFBQVEsbUJBQVIsQ0FGaEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGlCQUFSLENBSHBCOztJQUtNSSxVOzs7Ozs7Ozs7OztxQ0FDYUMsTyxFQUFTQyxjLEVBQWdCQyxrQixFQUFvQkMscUIsRUFBdUJDLHNCLEVBQXdCO0FBQzNHLFVBQU1DLFVBQVUsSUFBSVIsT0FBSixDQUFZSyxrQkFBWixFQUFnQ0MscUJBQWhDLEVBQXVEQyxzQkFBdkQsQ0FBaEI7QUFBQSxVQUNNRSxpSUFBK0JOLE9BQS9CLEVBQXdDQyxjQUF4QyxFQUF3REksT0FBeEQsQ0FETjs7QUFHQSxhQUFPQyxLQUFQO0FBQ0Q7OztnQ0FFa0JWLE8sRUFBUztBQUMxQixVQUFNVyxRQUFRVCxZQUFZVSxnQkFBWixDQUE2QlosT0FBN0IsQ0FBZDtBQUFBLFVBQ01hLGFBQWEsSUFBSVYsVUFBSixDQUFlUSxLQUFmLEVBQXNCYixTQUF0QixDQURuQjs7QUFHQSxhQUFPZSxVQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsYUFBYVYsV0FBV1csV0FBWCxDQUF1QmQsT0FBdkIsQ0FBbkI7O0FBRUEsYUFBT2EsVUFBUDtBQUNEOzs7O0VBbkJzQlgsVzs7QUFzQnpCYSxPQUFPQyxPQUFQLEdBQWlCYixVQUFqQjs7QUFFQUEsV0FBV0gsT0FBWCxHQUFxQkEsT0FBckIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBQbGFpbkxpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi4vY29tbW9uL2NvbnRleHQnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIFBsYWluTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dChtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCksXHJcbiAgICAgICAgICBsaW5lcyA9IHN1cGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXgsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXHJcbiAgICAgICAgICBwbGFpbkxleGVyID0gbmV3IFBsYWluTGV4ZXIocnVsZXMsIFBsYWluTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIHBsYWluTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBwbGFpbkxleGVyID0gUGxhaW5MZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcclxuXHJcbiAgICByZXR1cm4gcGxhaW5MZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxhaW5MZXhlcjtcclxuXHJcblBsYWluTGV4ZXIuZW50cmllcyA9IGVudHJpZXM7XHJcbiJdfQ==