'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line');

var Lexer = function () {
  function Lexer() {
    _classCallCheck(this, Lexer);
  }

  _createClass(Lexer, null, [{
    key: 'tokensFromContent',
    value: function tokensFromContent(content, context) {
      var lines = linesFromContent(content, context),
          tokens = lines.reduce(function (tokens, line) {
        var lineTokens = line.getTokens();

        tokens = tokens.concat(lineTokens);

        return tokens;
      }, []);

      return tokens;
    }
  }]);

  return Lexer;
}();

module.exports = Lexer;

function linesFromContent(content, context) {
  var contents = content.split(/\n/),
      lines = contents.map(function (content) {
    var line = Line.fromContent(content, context);

    return line;
  });

  return lines;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwiTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInJlZHVjZSIsImxpbmUiLCJsaW5lVG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbnRlbnRzIiwic3BsaXQiLCJtYXAiLCJmcm9tQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYOztJQUVNQyxLOzs7Ozs7O3NDQUNxQkMsTyxFQUFTQyxPLEVBQVM7QUFDekMsVUFBSUMsUUFBUUMsaUJBQWlCSCxPQUFqQixFQUEwQkMsT0FBMUIsQ0FBWjtBQUFBLFVBQ0lHLFNBQVNGLE1BQU1HLE1BQU4sQ0FBYSxVQUFTRCxNQUFULEVBQWlCRSxJQUFqQixFQUF1QjtBQUMzQyxZQUFJQyxhQUFhRCxLQUFLRSxTQUFMLEVBQWpCOztBQUVBSixpQkFBU0EsT0FBT0ssTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsZUFBT0gsTUFBUDtBQUNELE9BTlEsRUFNTixFQU5NLENBRGI7O0FBU0EsYUFBT0EsTUFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQlosS0FBakI7O0FBRUEsU0FBU0ksZ0JBQVQsQ0FBMEJILE9BQTFCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUMxQyxNQUFJVyxXQUFXWixRQUFRYSxLQUFSLENBQWMsSUFBZCxDQUFmO0FBQUEsTUFDSVgsUUFBUVUsU0FBU0UsR0FBVCxDQUFhLFVBQVNkLE9BQVQsRUFBa0I7QUFDckMsUUFBSU0sT0FBT1QsS0FBS2tCLFdBQUwsQ0FBaUJmLE9BQWpCLEVBQTBCQyxPQUExQixDQUFYOztBQUVBLFdBQU9LLElBQVA7QUFDRCxHQUpPLENBRFo7O0FBT0EsU0FBT0osS0FBUDtBQUNEIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKTtcclxuXHJcbmNsYXNzIExleGVyIHtcclxuICBzdGF0aWMgdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgdmFyIGxpbmVzID0gbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSxcclxuICAgICAgICB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XHJcbiAgICAgICAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VuczsgICAgXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExleGVyO1xyXG5cclxuZnVuY3Rpb24gbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgdmFyIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICB2YXIgbGluZSA9IExpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICB9KTtcclxuXHJcbiAgcmV0dXJuIGxpbmVzO1xyXG59XHJcbiJdfQ==