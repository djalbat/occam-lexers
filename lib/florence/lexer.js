'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules');

var rules = Rules.fromGrammar(grammar);

var Lexer = function () {
  function Lexer() {
    _classCallCheck(this, Lexer);
  }

  _createClass(Lexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, context) {
      context = context || new Context(false); ///

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
      var lines = this.linesFromContent(content, context),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJydWxlcyIsImZyb21HcmFtbWFyIiwiTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lcyIsIm1hcCIsImxpbmUiLCJmcm9tQ29udGVudCIsImxpbmVzRnJvbUNvbnRlbnQiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJsaW5lVG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsVUFBVUQsUUFBUSxXQUFSLENBRGQ7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLFFBQVFILFFBQVEsaUJBQVIsQ0FIWjs7QUFLQSxJQUFJSSxRQUFRRCxNQUFNRSxXQUFOLENBQWtCSCxPQUFsQixDQUFaOztJQUVNSSxLOzs7Ozs7O3FDQUNhQyxPLEVBQVNDLE8sRUFBUztBQUNqQ0EsZ0JBQVVBLFdBQVcsSUFBSVAsT0FBSixDQUFZLEtBQVosQ0FBckIsQ0FEaUMsQ0FDUzs7QUFFMUMsVUFBSVEsV0FBV0YsUUFBUUcsS0FBUixDQUFjLElBQWQsQ0FBZjtBQUFBLFVBQ0lDLFFBQVFGLFNBQVNHLEdBQVQsQ0FBYSxVQUFTTCxPQUFULEVBQWtCO0FBQ3JDLFlBQUlNLE9BQU9kLEtBQUtlLFdBQUwsQ0FBaUJQLE9BQWpCLEVBQTBCQyxPQUExQixFQUFtQ0osS0FBbkMsQ0FBWDs7QUFFQSxlQUFPUyxJQUFQO0FBQ0QsT0FKTyxDQURaOztBQU9BLGFBQU9GLEtBQVA7QUFDRDs7O3NDQUVpQkosTyxFQUFTQyxPLEVBQVM7QUFDbEMsVUFBSUcsUUFBUSxLQUFLSSxnQkFBTCxDQUFzQlIsT0FBdEIsRUFBK0JDLE9BQS9CLENBQVo7QUFBQSxVQUNJUSxTQUFTTCxNQUFNTSxNQUFOLENBQWEsVUFBU0QsTUFBVCxFQUFpQkgsSUFBakIsRUFBdUI7QUFDM0MsWUFBSUssYUFBYUwsS0FBS00sU0FBTCxFQUFqQjs7QUFFQUgsaUJBQVNBLE9BQU9JLE1BQVAsQ0FBY0YsVUFBZCxDQUFUOztBQUVBLGVBQU9GLE1BQVA7QUFDRCxPQU5RLEVBTU4sRUFOTSxDQURiOztBQVNBLGFBQU9BLE1BQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJoQixLQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXHJcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpO1xyXG5cclxudmFyIHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XHJcblxyXG5jbGFzcyBMZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dChmYWxzZSk7ICAvLy9cclxuXHJcbiAgICB2YXIgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICBsaW5lcyA9IGNvbnRlbnRzLm1hcChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICB2YXIgbGluZSA9IExpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIHZhciBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSxcclxuICAgICAgICB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XHJcbiAgICAgICAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMZXhlcjtcclxuIl19