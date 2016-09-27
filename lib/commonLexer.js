'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonLexer = function () {
  function CommonLexer() {
    _classCallCheck(this, CommonLexer);

    this.lines = undefined; ///
  }

  _createClass(CommonLexer, [{
    key: 'updateLines',
    value: function updateLines(content, previousLineIsInMultiLineComment, Line) {
      if (content === '') {
        this.lines = [];
      } else {
        var contents = content.split(/\n/);

        this.lines = contents.map(function (content) {
          var line = Line.fromContent(content, previousLineIsInMultiLineComment),
              previousLine = line; ///

          previousLineIsInMultiLineComment = previousLine ? previousLine.isInMultiLineComment() : false;

          return line;
        });
      }

      var lastLineIsInMultiLineComment = previousLineIsInMultiLineComment;

      return lastLineIsInMultiLineComment;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb21tb25MZXhlci5qcyJdLCJuYW1lcyI6WyJDb21tb25MZXhlciIsImxpbmVzIiwidW5kZWZpbmVkIiwiY29udGVudCIsInByZXZpb3VzTGluZUlzSW5NdWx0aUxpbmVDb21tZW50IiwiTGluZSIsImNvbnRlbnRzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJwcmV2aW91c0xpbmUiLCJpc0luTXVsdGlMaW5lQ29tbWVudCIsImxhc3RMaW5lSXNJbk11bHRpTGluZUNvbW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFc7QUFDSix5QkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYUMsU0FBYixDQURZLENBQ1k7QUFDekI7Ozs7Z0NBRVdDLE8sRUFBU0MsZ0MsRUFBa0NDLEksRUFBTTtBQUMzRCxVQUFJRixZQUFZLEVBQWhCLEVBQW9CO0FBQ2xCLGFBQUtGLEtBQUwsR0FBYSxFQUFiO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSUssV0FBV0gsUUFBUUksS0FBUixDQUFjLElBQWQsQ0FBZjs7QUFFQSxhQUFLTixLQUFMLEdBQWFLLFNBQVNFLEdBQVQsQ0FBYSxVQUFTTCxPQUFULEVBQWtCO0FBQzFDLGNBQUlNLE9BQU9KLEtBQUtLLFdBQUwsQ0FBaUJQLE9BQWpCLEVBQTBCQyxnQ0FBMUIsQ0FBWDtBQUFBLGNBQ0lPLGVBQWVGLElBRG5CLENBRDBDLENBRWpCOztBQUV6QkwsNkNBQW1DTyxlQUFlQSxhQUFhQyxvQkFBYixFQUFmLEdBQXFELEtBQXhGOztBQUVBLGlCQUFPSCxJQUFQO0FBQ0QsU0FQWSxDQUFiO0FBUUQ7O0FBRUQsVUFBSUksK0JBQStCVCxnQ0FBbkM7O0FBRUEsYUFBT1MsNEJBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJmLFdBQWpCIiwiZmlsZSI6ImNvbW1vbkxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5saW5lcyA9IHVuZGVmaW5lZDsgLy8vXHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaW5lcyhjb250ZW50LCBwcmV2aW91c0xpbmVJc0luTXVsdGlMaW5lQ29tbWVudCwgTGluZSkge1xyXG4gICAgaWYgKGNvbnRlbnQgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubGluZXMgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pO1xyXG5cclxuICAgICAgdGhpcy5saW5lcyA9IGNvbnRlbnRzLm1hcChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgdmFyIGxpbmUgPSBMaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIHByZXZpb3VzTGluZUlzSW5NdWx0aUxpbmVDb21tZW50KSxcclxuICAgICAgICAgICAgcHJldmlvdXNMaW5lID0gbGluZTsgLy8vXHJcblxyXG4gICAgICAgIHByZXZpb3VzTGluZUlzSW5NdWx0aUxpbmVDb21tZW50ID0gcHJldmlvdXNMaW5lID8gcHJldmlvdXNMaW5lLmlzSW5NdWx0aUxpbmVDb21tZW50KCkgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsYXN0TGluZUlzSW5NdWx0aUxpbmVDb21tZW50ID0gcHJldmlvdXNMaW5lSXNJbk11bHRpTGluZUNvbW1lbnQ7XHJcbiAgICBcclxuICAgIHJldHVybiBsYXN0TGluZUlzSW5NdWx0aUxpbmVDb21tZW50O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19