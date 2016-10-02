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

  _createClass(Lexer, null, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkNvbnRleHQiLCJncmFtbWFyIiwiUnVsZXMiLCJydWxlcyIsImZyb21HcmFtbWFyIiwiTGV4ZXIiLCJjb250ZW50IiwiY29udGV4dCIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lcyIsIm1hcCIsImxpbmUiLCJmcm9tQ29udGVudCIsImxpbmVzRnJvbUNvbnRlbnQiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJsaW5lVG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsVUFBVUQsUUFBUSxXQUFSLENBRGQ7QUFBQSxJQUVJRSxVQUFVRixRQUFRLFdBQVIsQ0FGZDtBQUFBLElBR0lHLFFBQVFILFFBQVEsaUJBQVIsQ0FIWjs7QUFLQSxJQUFJSSxRQUFRRCxNQUFNRSxXQUFOLENBQWtCSCxPQUFsQixDQUFaOztJQUVNSSxLOzs7Ozs7O3FDQUNvQkMsTyxFQUFTQyxPLEVBQVM7QUFDeENBLGdCQUFVQSxXQUFXLElBQUlQLE9BQUosQ0FBWSxLQUFaLENBQXJCLENBRHdDLENBQ0U7O0FBRTFDLFVBQUlRLFdBQVdGLFFBQVFHLEtBQVIsQ0FBYyxJQUFkLENBQWY7QUFBQSxVQUNJQyxRQUFRRixTQUFTRyxHQUFULENBQWEsVUFBU0wsT0FBVCxFQUFrQjtBQUNyQyxZQUFJTSxPQUFPZCxLQUFLZSxXQUFMLENBQWlCUCxPQUFqQixFQUEwQkMsT0FBMUIsRUFBbUNKLEtBQW5DLENBQVg7O0FBRUEsZUFBT1MsSUFBUDtBQUNELE9BSk8sQ0FEWjs7QUFPQSxhQUFPRixLQUFQO0FBQ0Q7OztzQ0FFd0JKLE8sRUFBU0MsTyxFQUFTO0FBQ3pDLFVBQUlHLFFBQVFMLE1BQU1TLGdCQUFOLENBQXVCUixPQUF2QixFQUFnQ0MsT0FBaEMsQ0FBWjtBQUFBLFVBQ0lRLFNBQVNMLE1BQU1NLE1BQU4sQ0FBYSxVQUFTRCxNQUFULEVBQWlCSCxJQUFqQixFQUF1QjtBQUMzQyxZQUFJSyxhQUFhTCxLQUFLTSxTQUFMLEVBQWpCOztBQUVBSCxpQkFBU0EsT0FBT0ksTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsZUFBT0YsTUFBUDtBQUNELE9BTlEsRUFNTixFQU5NLENBRGI7O0FBU0EsYUFBT0EsTUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQmhCLEtBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcclxuICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyk7XHJcblxyXG52YXIgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKTtcclxuXHJcbmNsYXNzIExleGVyIHtcclxuICBzdGF0aWMgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBuZXcgQ29udGV4dChmYWxzZSk7ICAvLy9cclxuXHJcbiAgICB2YXIgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICBsaW5lcyA9IGNvbnRlbnRzLm1hcChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICB2YXIgbGluZSA9IExpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0b2tlbnNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICB2YXIgbGluZXMgPSBMZXhlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpLFxyXG4gICAgICAgIHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcclxuICAgICAgICAgIHZhciBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExleGVyO1xyXG4iXX0=