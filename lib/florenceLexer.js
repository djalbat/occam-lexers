'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlorenceLexerLine = require('./florenceLexer/line');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'updateLines',
    value: function updateLines(content, previousLineIsInMultiLineComment) {
      var lastLineIsInMultiLineComment = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'updateLines', this).call(this, content, previousLineIsInMultiLineComment, FlorenceLexerLine);

      return lastLineIsInMultiLineComment;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbG9yZW5jZUxleGVyLmpzIl0sIm5hbWVzIjpbIkZsb3JlbmNlTGV4ZXJMaW5lIiwicmVxdWlyZSIsIkZsb3JlbmNlTGV4ZXIiLCJjb250ZW50IiwicHJldmlvdXNMaW5lSXNJbk11bHRpTGluZUNvbW1lbnQiLCJsYXN0TGluZUlzSW5NdWx0aUxpbmVDb21tZW50IiwiQ29tbW9uTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsb0JBQW9CQyxRQUFRLHNCQUFSLENBQXhCOztJQUVNQyxhOzs7Ozs7Ozs7OztnQ0FDUUMsTyxFQUFTQyxnQyxFQUFrQztBQUNyRCxVQUFJQyx5SkFBaURGLE9BQWpELEVBQTBEQyxnQ0FBMUQsRUFBNEZKLGlCQUE1RixDQUFKOztBQUVBLGFBQU9LLDRCQUFQO0FBQ0Q7Ozs7RUFMeUJDLFc7O0FBUTVCQyxPQUFPQyxPQUFQLEdBQWlCTixhQUFqQiIsImZpbGUiOiJmbG9yZW5jZUxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIEZsb3JlbmNlTGV4ZXJMaW5lID0gcmVxdWlyZSgnLi9mbG9yZW5jZUxleGVyL2xpbmUnKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdXBkYXRlTGluZXMoY29udGVudCwgcHJldmlvdXNMaW5lSXNJbk11bHRpTGluZUNvbW1lbnQpIHtcclxuICAgIHZhciBsYXN0TGluZUlzSW5NdWx0aUxpbmVDb21tZW50ID0gc3VwZXIudXBkYXRlTGluZXMoY29udGVudCwgcHJldmlvdXNMaW5lSXNJbk11bHRpTGluZUNvbW1lbnQsIEZsb3JlbmNlTGV4ZXJMaW5lKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGxhc3RMaW5lSXNJbk11bHRpTGluZUNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlTGV4ZXI7XHJcbiJdfQ==