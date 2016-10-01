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
    key: 'linesFromContent',
    value: function linesFromContent(content, context) {
      var contents = content.split(/\n/),
          lines = contents.map(function (content) {
        var line = Line.fromContent(content, context, rules);

        return line;
      });

      return lines;
    }
  }, {
    key: 'tokensFromContent',
    value: function tokensFromContent(content, context) {
      var lines = Lexer.linesFromContent(content, context),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwiZ3JhbW1hciIsIlJ1bGVzIiwicnVsZXMiLCJmcm9tR3JhbW1hciIsIkxleGVyIiwiY29udGVudCIsImNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJsaW5lc0Zyb21Db250ZW50IiwidG9rZW5zIiwicmVkdWNlIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLFVBQVVELFFBQVEsV0FBUixDQURkO0FBQUEsSUFFSUUsUUFBUUYsUUFBUSxpQkFBUixDQUZaOztBQUlBLElBQUlHLFFBQVFELE1BQU1FLFdBQU4sQ0FBa0JILE9BQWxCLENBQVo7O0lBRU1JLEs7Ozs7Ozs7cUNBQ29CQyxPLEVBQVNDLE8sRUFBUztBQUN4QyxVQUFJQyxXQUFXRixRQUFRRyxLQUFSLENBQWMsSUFBZCxDQUFmO0FBQUEsVUFDSUMsUUFBUUYsU0FBU0csR0FBVCxDQUFhLFVBQVNMLE9BQVQsRUFBa0I7QUFDckMsWUFBSU0sT0FBT2IsS0FBS2MsV0FBTCxDQUFpQlAsT0FBakIsRUFBMEJDLE9BQTFCLEVBQW1DSixLQUFuQyxDQUFYOztBQUVBLGVBQU9TLElBQVA7QUFDRCxPQUpPLENBRFo7O0FBT0EsYUFBT0YsS0FBUDtBQUNEOzs7c0NBRXdCSixPLEVBQVNDLE8sRUFBUztBQUN6QyxVQUFJRyxRQUFRTCxNQUFNUyxnQkFBTixDQUF1QlIsT0FBdkIsRUFBZ0NDLE9BQWhDLENBQVo7QUFBQSxVQUNJUSxTQUFTTCxNQUFNTSxNQUFOLENBQWEsVUFBU0QsTUFBVCxFQUFpQkgsSUFBakIsRUFBdUI7QUFDM0MsWUFBSUssYUFBYUwsS0FBS00sU0FBTCxFQUFqQjs7QUFFQUgsaUJBQVNBLE9BQU9JLE1BQVAsQ0FBY0YsVUFBZCxDQUFUOztBQUVBLGVBQU9GLE1BQVA7QUFDRCxPQU5RLEVBTU4sRUFOTSxDQURiOztBQVNBLGFBQU9BLE1BQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJoQixLQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpO1xyXG5cclxudmFyIHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XHJcblxyXG5jbGFzcyBMZXhlciB7XHJcbiAgc3RhdGljIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgdmFyIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoZnVuY3Rpb24oY29udGVudCkge1xyXG4gICAgICAgICAgdmFyIGxpbmUgPSBMaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzKTtcclxuICBcclxuICAgICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICAgIH0pO1xyXG4gIFxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgdmFyIGxpbmVzID0gTGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSxcclxuICAgICAgICB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XHJcbiAgICAgICAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VuczsgICAgXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExleGVyO1xyXG5cclxuIl19