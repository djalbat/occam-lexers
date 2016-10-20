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
      terminalSymbolsRegExpPattern = keywordSymbolsRegExpPattern + '|' + specialSymbolsRegExpPattern; ///

      return terminalSymbolsRegExpPattern;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJjb250ZXh0IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibWFwIiwibGluZSIsImZyb21Db250ZW50IiwiYmluZCIsImxpbmVzRnJvbUNvbnRlbnQiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJsaW5lVG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uY2F0IiwiZ3JhbW1hciIsImtleXdvcmRTeW1ib2xzUmVnRXhwIiwiZmluZFJlZ0V4cEZyb21UeXBlIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzb3VyY2UiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsT0FBT0QsUUFBUSxTQUFSLENBRFg7O0lBR01FLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQkosSUFBbkIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0ksS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0osSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7cUNBRWdCSyxPLEVBQVNDLE8sRUFBUztBQUNqQyxVQUFJQyxXQUFXRixRQUFRRyxLQUFSLENBQWMsSUFBZCxDQUFmO0FBQUEsVUFDSUMsUUFBUUYsU0FBU0csR0FBVCxDQUFhLFVBQVNMLE9BQVQsRUFBa0I7QUFDckMsWUFBSU0sT0FBTyxLQUFLWCxJQUFMLENBQVVZLFdBQVYsQ0FBc0JQLE9BQXRCLEVBQStCQyxPQUEvQixFQUF3QyxLQUFLRixLQUE3QyxDQUFYOztBQUVBLGVBQU9PLElBQVA7QUFDRCxPQUpvQixDQUluQkUsSUFKbUIsQ0FJZCxJQUpjLENBQWIsQ0FEWjs7QUFPQSxhQUFPSixLQUFQO0FBQ0Q7OztzQ0FFaUJKLE8sRUFBUztBQUN6QixVQUFJSSxRQUFRLEtBQUtLLGdCQUFMLENBQXNCVCxPQUF0QixDQUFaO0FBQUEsVUFDSVUsU0FBU04sTUFBTU8sTUFBTixDQUFhLFVBQVNELE1BQVQsRUFBaUJKLElBQWpCLEVBQXVCO0FBQzNDLFlBQUlNLGFBQWFOLEtBQUtPLFNBQUwsRUFBakI7O0FBRUFILGlCQUFTQSxPQUFPSSxNQUFQLENBQWNGLFVBQWQsQ0FBVDs7QUFFQSxlQUFPRixNQUFQO0FBQ0QsT0FOUSxFQU1OLEVBTk0sQ0FEYjs7QUFTQSxhQUFPQSxNQUFQO0FBQ0Q7OztpREFFNEJLLE8sRUFBUztBQUNwQyxVQUFJQyx1QkFBdUJuQixLQUFLb0Isa0JBQUwsQ0FBd0JGLE9BQXhCLEVBQWlDLFNBQWpDLENBQTNCO0FBQUEsVUFDSUcsdUJBQXVCckIsS0FBS29CLGtCQUFMLENBQXdCRixPQUF4QixFQUFpQyxTQUFqQyxDQUQzQjtBQUFBLFVBRUlJLDhCQUE4QkgscUJBQXFCSSxNQUZ2RDtBQUFBLFVBRWdFO0FBQzVEQyxvQ0FBOEJILHFCQUFxQkUsTUFIdkQ7QUFBQSxVQUdnRTtBQUM1REUscUNBQWtDSCwyQkFBbEMsU0FBaUVFLDJCQUpyRSxDQURvQyxDQUtnRTs7QUFFcEcsYUFBT0MsNEJBQVA7QUFDRDs7Ozs7O0FBSUhDLE9BQU9DLE9BQVAsR0FBaUIxQixXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICB2YXIgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICBsaW5lcyA9IGNvbnRlbnRzLm1hcChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICB2YXIgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuICBcclxuICAgICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG4gIFxyXG4gIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpIHtcclxuICAgIHZhciBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcclxuICAgICAgICB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XHJcbiAgICAgICAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VuczsgICAgXHJcbiAgfVxyXG5cclxuICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKGdyYW1tYXIpIHtcclxuICAgIHZhciBrZXl3b3JkU3ltYm9sc1JlZ0V4cCA9IHV0aWwuZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsICdrZXl3b3JkJyksXHJcbiAgICAgICAgc3BlY2lhbFN5bWJvbHNSZWdFeHAgPSB1dGlsLmZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCAnc3BlY2lhbCcpLFxyXG4gICAgICAgIGtleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGtleXdvcmRTeW1ib2xzUmVnRXhwLnNvdXJjZSwgIC8vL1xyXG4gICAgICAgIHNwZWNpYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHNwZWNpYWxTeW1ib2xzUmVnRXhwLnNvdXJjZSwgIC8vL1xyXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBgJHtrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm59fCR7c3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJufWA7IC8vL1xyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==