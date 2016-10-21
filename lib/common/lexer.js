'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    util = require('../util');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, context) {
      var contents = content.split(/\n/),
          lines = contents.map(function (content) {
        var line = this.Line.fromContent(content, context, this.rules);

        return line;
      }.bind(this));

      return lines;
    }
  }, {
    key: 'tokensFromContent',
    value: function tokensFromContent(content) {
      var lines = this.linesFromContent(content),
          tokens = lines.reduce(function (tokens, line) {
        var lineTokens = line.getTokens();

        tokens = tokens.concat(lineTokens);

        return tokens;
      }, []);

      return tokens;
    }
  }, {
    key: 'terminalSymbolsRegExpPattern',
    value: function terminalSymbolsRegExpPattern(grammar) {
      var keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
          specialSymbolsRegExp = util.findRegExpFromType(grammar, 'special'),
          keywordSymbolsRegExpPattern = keywordSymbolsRegExp.source,
          ///
      specialSymbolsRegExpPattern = specialSymbolsRegExp.source,
          ///
      terminalSymbolsRegExpPattern = keywordSymbolsRegExpPattern + '|' + specialSymbolsRegExpPattern;

      return terminalSymbolsRegExpPattern;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJjb250ZXh0IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibWFwIiwibGluZSIsImZyb21Db250ZW50IiwiYmluZCIsImxpbmVzRnJvbUNvbnRlbnQiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJsaW5lVG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uY2F0IiwiZ3JhbW1hciIsImtleXdvcmRTeW1ib2xzUmVnRXhwIiwiZmluZFJlZ0V4cEZyb21UeXBlIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzb3VyY2UiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7O0lBR01FLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQkosSUFBbkIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0ksS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0osSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7cUNBRWdCSyxPLEVBQVNDLE8sRUFBUztBQUNqQyxVQUFJQyxXQUFXRixRQUFRRyxLQUFSLENBQWMsSUFBZCxDQUFmO0FBQUEsVUFDSUMsUUFBUUYsU0FBU0csR0FBVCxDQUFhLFVBQVNMLE9BQVQsRUFBa0I7QUFDckMsWUFBSU0sT0FBTyxLQUFLWCxJQUFMLENBQVVZLFdBQVYsQ0FBc0JQLE9BQXRCLEVBQStCQyxPQUEvQixFQUF3QyxLQUFLRixLQUE3QyxDQUFYOztBQUVBLGVBQU9PLElBQVA7QUFDRCxPQUpvQixDQUluQkUsSUFKbUIsQ0FJZCxJQUpjLENBQWIsQ0FEWjs7QUFPQSxhQUFPSixLQUFQO0FBQ0Q7OztzQ0FFaUJKLE8sRUFBUztBQUN6QixVQUFJSSxRQUFRLEtBQUtLLGdCQUFMLENBQXNCVCxPQUF0QixDQUFaO0FBQUEsVUFDSVUsU0FBU04sTUFBTU8sTUFBTixDQUFhLFVBQVNELE1BQVQsRUFBaUJKLElBQWpCLEVBQXVCO0FBQzNDLFlBQUlNLGFBQWFOLEtBQUtPLFNBQUwsRUFBakI7O0FBRUFILGlCQUFTQSxPQUFPSSxNQUFQLENBQWNGLFVBQWQsQ0FBVDs7QUFFQSxlQUFPRixNQUFQO0FBQ0QsT0FOUSxFQU1OLEVBTk0sQ0FEYjs7QUFTQSxhQUFPQSxNQUFQO0FBQ0Q7OztpREFFNEJLLE8sRUFBUztBQUNwQyxVQUFJQyx1QkFBdUJuQixLQUFLb0Isa0JBQUwsQ0FBd0JGLE9BQXhCLEVBQWlDLFNBQWpDLENBQTNCO0FBQUEsVUFDSUcsdUJBQXVCckIsS0FBS29CLGtCQUFMLENBQXdCRixPQUF4QixFQUFpQyxTQUFqQyxDQUQzQjtBQUFBLFVBRUlJLDhCQUE4QkgscUJBQXFCSSxNQUZ2RDtBQUFBLFVBRWdFO0FBQzVEQyxvQ0FBOEJILHFCQUFxQkUsTUFIdkQ7QUFBQSxVQUdnRTtBQUM1REUscUNBQWtDSCwyQkFBbEMsU0FBaUVFLDJCQUpyRTs7QUFNQSxhQUFPQyw0QkFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjFCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIHZhciBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICAgIHZhciBsaW5lID0gdGhpcy5MaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHRoaXMucnVsZXMpO1xyXG4gIFxyXG4gICAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbiAgXHJcbiAgdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCkge1xyXG4gICAgdmFyIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxyXG4gICAgICAgIHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcclxuICAgICAgICAgIHZhciBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdG9rZW5zOyAgICBcclxuICB9XHJcblxyXG4gIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oZ3JhbW1hcikge1xyXG4gICAgdmFyIGtleXdvcmRTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ2tleXdvcmQnKSxcclxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cCA9IHV0aWwuZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsICdzcGVjaWFsJyksXHJcbiAgICAgICAga2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0ga2V5d29yZFN5bWJvbHNSZWdFeHAuc291cmNlLCAgLy8vXHJcbiAgICAgICAgc3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gc3BlY2lhbFN5bWJvbHNSZWdFeHAuc291cmNlLCAgLy8vXHJcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGAke2tleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVybn18JHtzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm59YDtcclxuXHJcbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==