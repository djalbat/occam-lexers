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
      context = context || new Context(0); ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xleGVyLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwiQ29udGV4dCIsImdyYW1tYXIiLCJSdWxlcyIsInJ1bGVzIiwiZnJvbUdyYW1tYXIiLCJMZXhlciIsImNvbnRlbnQiLCJjb250ZXh0IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibWFwIiwibGluZSIsImZyb21Db250ZW50IiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInJlZHVjZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxVQUFVRCxRQUFRLFdBQVIsQ0FEZDtBQUFBLElBRUlFLFVBQVVGLFFBQVEsV0FBUixDQUZkO0FBQUEsSUFHSUcsUUFBUUgsUUFBUSxpQkFBUixDQUhaOztBQUtBLElBQUlJLFFBQVFELE1BQU1FLFdBQU4sQ0FBa0JILE9BQWxCLENBQVo7O0lBRU1JLEs7Ozs7Ozs7cUNBQ2FDLE8sRUFBU0MsTyxFQUFTO0FBQ2pDQSxnQkFBVUEsV0FBVyxJQUFJUCxPQUFKLENBQVksQ0FBWixDQUFyQixDQURpQyxDQUNLOztBQUV0QyxVQUFJUSxXQUFXRixRQUFRRyxLQUFSLENBQWMsSUFBZCxDQUFmO0FBQUEsVUFDSUMsUUFBUUYsU0FBU0csR0FBVCxDQUFhLFVBQVNMLE9BQVQsRUFBa0I7QUFDckMsWUFBSU0sT0FBT2QsS0FBS2UsV0FBTCxDQUFpQlAsT0FBakIsRUFBMEJDLE9BQTFCLEVBQW1DSixLQUFuQyxDQUFYOztBQUVBLGVBQU9TLElBQVA7QUFDRCxPQUpPLENBRFo7O0FBT0EsYUFBT0YsS0FBUDtBQUNEOzs7c0NBRWlCSixPLEVBQVNDLE8sRUFBUztBQUNsQyxVQUFJRyxRQUFRLEtBQUtJLGdCQUFMLENBQXNCUixPQUF0QixFQUErQkMsT0FBL0IsQ0FBWjtBQUFBLFVBQ0lRLFNBQVNMLE1BQU1NLE1BQU4sQ0FBYSxVQUFTRCxNQUFULEVBQWlCSCxJQUFqQixFQUF1QjtBQUMzQyxZQUFJSyxhQUFhTCxLQUFLTSxTQUFMLEVBQWpCOztBQUVBSCxpQkFBU0EsT0FBT0ksTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsZUFBT0YsTUFBUDtBQUNELE9BTlEsRUFNTixFQU5NLENBRGI7O0FBU0EsYUFBT0EsTUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQmhCLEtBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcclxuICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyk7XHJcblxyXG52YXIgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKTtcclxuXHJcbmNsYXNzIExleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IG5ldyBDb250ZXh0KDApOyAgLy8vXHJcbiAgICBcclxuICAgIHZhciBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICAgIHZhciBsaW5lID0gTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBydWxlcyk7XHJcbiAgXHJcbiAgICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgICB9KTtcclxuICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbiAgXHJcbiAgdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgdmFyIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpLFxyXG4gICAgICAgIHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcclxuICAgICAgICAgIHZhciBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdG9rZW5zOyAgICBcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGV4ZXI7XHJcblxyXG4iXX0=