'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line');

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
      terminalSymbolsRegExpPattern = keywordSymbolsRegExpPattern + '|' + specialSymbolsRegExpPattern; ///

      return terminalSymbolsRegExpPattern;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsImNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJiaW5kIiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInJlZHVjZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiLCJncmFtbWFyIiwia2V5d29yZFN5bWJvbHNSZWdFeHAiLCJ1dGlsIiwiZmluZFJlZ0V4cEZyb21UeXBlIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzb3VyY2UiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYOztJQUVNQyxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUJILElBQW5CLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtHLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3FDQUVnQkksTyxFQUFTQyxPLEVBQVM7QUFDakMsVUFBSUMsV0FBV0YsUUFBUUcsS0FBUixDQUFjLElBQWQsQ0FBZjtBQUFBLFVBQ0lDLFFBQVFGLFNBQVNHLEdBQVQsQ0FBYSxVQUFTTCxPQUFULEVBQWtCO0FBQ3JDLFlBQUlNLE9BQU8sS0FBS1YsSUFBTCxDQUFVVyxXQUFWLENBQXNCUCxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0MsS0FBS0YsS0FBN0MsQ0FBWDs7QUFFQSxlQUFPTyxJQUFQO0FBQ0QsT0FKb0IsQ0FJbkJFLElBSm1CLENBSWQsSUFKYyxDQUFiLENBRFo7O0FBT0EsYUFBT0osS0FBUDtBQUNEOzs7c0NBRWlCSixPLEVBQVM7QUFDekIsVUFBSUksUUFBUSxLQUFLSyxnQkFBTCxDQUFzQlQsT0FBdEIsQ0FBWjtBQUFBLFVBQ0lVLFNBQVNOLE1BQU1PLE1BQU4sQ0FBYSxVQUFTRCxNQUFULEVBQWlCSixJQUFqQixFQUF1QjtBQUMzQyxZQUFJTSxhQUFhTixLQUFLTyxTQUFMLEVBQWpCOztBQUVBSCxpQkFBU0EsT0FBT0ksTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsZUFBT0YsTUFBUDtBQUNELE9BTlEsRUFNTixFQU5NLENBRGI7O0FBU0EsYUFBT0EsTUFBUDtBQUNEOzs7aURBRTRCSyxPLEVBQVM7QUFDcEMsVUFBSUMsdUJBQXVCQyxLQUFLQyxrQkFBTCxDQUF3QkgsT0FBeEIsRUFBaUMsU0FBakMsQ0FBM0I7QUFBQSxVQUNJSSx1QkFBdUJGLEtBQUtDLGtCQUFMLENBQXdCSCxPQUF4QixFQUFpQyxTQUFqQyxDQUQzQjtBQUFBLFVBRUlLLDhCQUE4QkoscUJBQXFCSyxNQUZ2RDtBQUFBLFVBRWdFO0FBQzVEQyxvQ0FBOEJILHFCQUFxQkUsTUFIdkQ7QUFBQSxVQUdnRTtBQUM1REUscUNBQWtDSCwyQkFBbEMsU0FBaUVFLDJCQUpyRSxDQURvQyxDQUtnRTs7QUFFcEcsYUFBT0MsNEJBQVA7QUFDRDs7Ozs7O0FBSUhDLE9BQU9DLE9BQVAsR0FBaUIzQixXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIHZhciBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICAgIHZhciBsaW5lID0gdGhpcy5MaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHRoaXMucnVsZXMpO1xyXG4gIFxyXG4gICAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbiAgXHJcbiAgdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCkge1xyXG4gICAgdmFyIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxyXG4gICAgICAgIHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcclxuICAgICAgICAgIHZhciBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdG9rZW5zOyAgICBcclxuICB9XHJcblxyXG4gIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oZ3JhbW1hcikge1xyXG4gICAgdmFyIGtleXdvcmRTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ2tleXdvcmQnKSxcclxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cCA9IHV0aWwuZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsICdzcGVjaWFsJyksXHJcbiAgICAgICAga2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0ga2V5d29yZFN5bWJvbHNSZWdFeHAuc291cmNlLCAgLy8vXHJcbiAgICAgICAgc3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gc3BlY2lhbFN5bWJvbHNSZWdFeHAuc291cmNlLCAgLy8vXHJcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGAke2tleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVybn18JHtzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm59YDsgLy8vXHJcblxyXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19