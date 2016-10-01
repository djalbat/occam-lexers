'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    grammar = require('./grammar'),
    Rules = require('../common/rules');

var rules = Rules.fromGrammar(grammar);

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
    var line = Line.fromContent(content, context, rules);

    return line;
  });

  return lines;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwiZ3JhbW1hciIsIlJ1bGVzIiwicnVsZXMiLCJmcm9tR3JhbW1hciIsIkxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnQiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb250ZW50cyIsInNwbGl0IiwibWFwIiwiZnJvbUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLFVBQVVELFFBQVEsV0FBUixDQURkO0FBQUEsSUFFSUUsUUFBUUYsUUFBUSxpQkFBUixDQUZaOztBQUlBLElBQUlHLFFBQVFELE1BQU1FLFdBQU4sQ0FBa0JILE9BQWxCLENBQVo7O0lBRU1JLEs7Ozs7Ozs7c0NBQ3FCQyxPLEVBQVNDLE8sRUFBUztBQUN6QyxVQUFJQyxRQUFRQyxpQkFBaUJILE9BQWpCLEVBQTBCQyxPQUExQixDQUFaO0FBQUEsVUFDSUcsU0FBU0YsTUFBTUcsTUFBTixDQUFhLFVBQVNELE1BQVQsRUFBaUJFLElBQWpCLEVBQXVCO0FBQzNDLFlBQUlDLGFBQWFELEtBQUtFLFNBQUwsRUFBakI7O0FBRUFKLGlCQUFTQSxPQUFPSyxNQUFQLENBQWNGLFVBQWQsQ0FBVDs7QUFFQSxlQUFPSCxNQUFQO0FBQ0QsT0FOUSxFQU1OLEVBTk0sQ0FEYjs7QUFTQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCWixLQUFqQjs7QUFFQSxTQUFTSSxnQkFBVCxDQUEwQkgsT0FBMUIsRUFBbUNDLE9BQW5DLEVBQTRDO0FBQzFDLE1BQUlXLFdBQVdaLFFBQVFhLEtBQVIsQ0FBYyxJQUFkLENBQWY7QUFBQSxNQUNJWCxRQUFRVSxTQUFTRSxHQUFULENBQWEsVUFBU2QsT0FBVCxFQUFrQjtBQUNyQyxRQUFJTSxPQUFPYixLQUFLc0IsV0FBTCxDQUFpQmYsT0FBakIsRUFBMEJDLE9BQTFCLEVBQW1DSixLQUFuQyxDQUFYOztBQUVBLFdBQU9TLElBQVA7QUFDRCxHQUpPLENBRFo7O0FBT0EsU0FBT0osS0FBUDtBQUNEIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyk7XHJcblxyXG52YXIgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKTtcclxuXHJcbmNsYXNzIExleGVyIHtcclxuICBzdGF0aWMgdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgdmFyIGxpbmVzID0gbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSxcclxuICAgICAgICB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XHJcbiAgICAgICAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VuczsgICAgXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExleGVyO1xyXG5cclxuZnVuY3Rpb24gbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgdmFyIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICB2YXIgbGluZSA9IExpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgfSk7XHJcblxyXG4gIHJldHVybiBsaW5lcztcclxufVxyXG4iXX0=