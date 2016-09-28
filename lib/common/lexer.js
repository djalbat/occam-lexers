'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonLexer = function () {
  function CommonLexer() {
    _classCallCheck(this, CommonLexer);
  }

  _createClass(CommonLexer, null, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, context, Line) {
      var previousLineIsInMultiLineComment = context.isPreviousLineInMultiLineComment();

      if (content === '') {
        return [];
      }

      var contents = content.split(/\n/),
          lines = contents.map(function (content) {
        var line = Line.fromContent(content, previousLineIsInMultiLineComment),
            previousLine = line; ///

        previousLineIsInMultiLineComment = previousLine ? previousLine.isInMultiLineComment() : false;

        return line;
      });

      context.setPreviousLineInMultiLineComment(previousLineIsInMultiLineComment);

      return lines;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiQ29tbW9uTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsIkxpbmUiLCJwcmV2aW91c0xpbmVJc0luTXVsdGlMaW5lQ29tbWVudCIsImlzUHJldmlvdXNMaW5lSW5NdWx0aUxpbmVDb21tZW50IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibWFwIiwibGluZSIsImZyb21Db250ZW50IiwicHJldmlvdXNMaW5lIiwiaXNJbk11bHRpTGluZUNvbW1lbnQiLCJzZXRQcmV2aW91c0xpbmVJbk11bHRpTGluZUNvbW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFc7Ozs7Ozs7cUNBQ29CQyxPLEVBQVNDLE8sRUFBU0MsSSxFQUFNO0FBQzlDLFVBQUlDLG1DQUFtQ0YsUUFBUUcsZ0NBQVIsRUFBdkM7O0FBRUEsVUFBSUosWUFBWSxFQUFoQixFQUFvQjtBQUNsQixlQUFPLEVBQVA7QUFDRDs7QUFFRCxVQUFJSyxXQUFXTCxRQUFRTSxLQUFSLENBQWMsSUFBZCxDQUFmO0FBQUEsVUFDSUMsUUFBUUYsU0FBU0csR0FBVCxDQUFhLFVBQVNSLE9BQVQsRUFBa0I7QUFDekMsWUFBSVMsT0FBT1AsS0FBS1EsV0FBTCxDQUFpQlYsT0FBakIsRUFBMEJHLGdDQUExQixDQUFYO0FBQUEsWUFDSVEsZUFBZUYsSUFEbkIsQ0FEeUMsQ0FFaEI7O0FBRXpCTiwyQ0FBbUNRLGVBQWVBLGFBQWFDLG9CQUFiLEVBQWYsR0FBcUQsS0FBeEY7O0FBRUEsZUFBT0gsSUFBUDtBQUNELE9BUFcsQ0FEWjs7QUFVQVIsY0FBUVksaUNBQVIsQ0FBMENWLGdDQUExQzs7QUFFQSxhQUFPSSxLQUFQO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCaEIsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgTGluZSkge1xyXG4gICAgdmFyIHByZXZpb3VzTGluZUlzSW5NdWx0aUxpbmVDb21tZW50ID0gY29udGV4dC5pc1ByZXZpb3VzTGluZUluTXVsdGlMaW5lQ29tbWVudCgpO1xyXG4gICAgXHJcbiAgICBpZiAoY29udGVudCA9PT0gJycpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgdmFyIGxpbmUgPSBMaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIHByZXZpb3VzTGluZUlzSW5NdWx0aUxpbmVDb21tZW50KSxcclxuICAgICAgICAgIHByZXZpb3VzTGluZSA9IGxpbmU7IC8vL1xyXG5cclxuICAgICAgcHJldmlvdXNMaW5lSXNJbk11bHRpTGluZUNvbW1lbnQgPSBwcmV2aW91c0xpbmUgPyBwcmV2aW91c0xpbmUuaXNJbk11bHRpTGluZUNvbW1lbnQoKSA6IGZhbHNlO1xyXG5cclxuICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250ZXh0LnNldFByZXZpb3VzTGluZUluTXVsdGlMaW5lQ29tbWVudChwcmV2aW91c0xpbmVJc0luTXVsdGlMaW5lQ29tbWVudCk7XHJcbiAgICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==