'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    Rules = require('./rules'),
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
  }], [{
    key: 'rulesFromGrammar',
    value: function rulesFromGrammar(grammar) {
      var rules = Rules.fromGrammar(grammar);

      return rules;
    }
  }, {
    key: 'terminalSymbolsRegExpPattern',
    value: function terminalSymbolsRegExpPattern(grammar) {
      var keywordSymbolsRegExp = util.findRegExpFromType(grammar, 'keyword'),
          specialSymbolsRegExp = util.findRegExpFromType(grammar, 'special'),
          keywordSymbolsRegExpPattern = keywordSymbolsRegExp.source,
          ///
      specialSymbolsRegExpPattern = specialSymbolsRegExp.source.replace(/^(?:\^\(\?:)/, '').replace(/(?:\)\$)$/, ''),
          ///
      terminalSymbolsRegExpPattern = keywordSymbolsRegExpPattern + '|' + specialSymbolsRegExpPattern;

      return terminalSymbolsRegExpPattern;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsInV0aWwiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsImNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJiaW5kIiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInJlZHVjZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiLCJncmFtbWFyIiwiZnJvbUdyYW1tYXIiLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cCIsImZpbmRSZWdFeHBGcm9tVHlwZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwia2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic291cmNlIiwic3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwicmVwbGFjZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxRQUFRRCxRQUFRLFNBQVIsQ0FEWjtBQUFBLElBRUlFLE9BQU9GLFFBQVEsU0FBUixDQUZYOztJQUlNRyxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUJMLElBQW5CLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtLLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3FDQUVnQk0sTyxFQUFTQyxPLEVBQVM7QUFDakMsVUFBSUMsV0FBV0YsUUFBUUcsS0FBUixDQUFjLElBQWQsQ0FBZjtBQUFBLFVBQ0lDLFFBQVFGLFNBQVNHLEdBQVQsQ0FBYSxVQUFTTCxPQUFULEVBQWtCO0FBQ3JDLFlBQUlNLE9BQU8sS0FBS1osSUFBTCxDQUFVYSxXQUFWLENBQXNCUCxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0MsS0FBS0YsS0FBN0MsQ0FBWDs7QUFFQSxlQUFPTyxJQUFQO0FBQ0QsT0FKb0IsQ0FJbkJFLElBSm1CLENBSWQsSUFKYyxDQUFiLENBRFo7O0FBT0EsYUFBT0osS0FBUDtBQUNEOzs7c0NBRWlCSixPLEVBQVM7QUFDekIsVUFBSUksUUFBUSxLQUFLSyxnQkFBTCxDQUFzQlQsT0FBdEIsQ0FBWjtBQUFBLFVBQ0lVLFNBQVNOLE1BQU1PLE1BQU4sQ0FBYSxVQUFTRCxNQUFULEVBQWlCSixJQUFqQixFQUF1QjtBQUMzQyxZQUFJTSxhQUFhTixLQUFLTyxTQUFMLEVBQWpCOztBQUVBSCxpQkFBU0EsT0FBT0ksTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsZUFBT0YsTUFBUDtBQUNELE9BTlEsRUFNTixFQU5NLENBRGI7O0FBU0EsYUFBT0EsTUFBUDtBQUNEOzs7cUNBRXVCSyxPLEVBQVM7QUFDL0IsVUFBSWhCLFFBQVFILE1BQU1vQixXQUFOLENBQWtCRCxPQUFsQixDQUFaOztBQUVBLGFBQU9oQixLQUFQO0FBQ0Q7OztpREFFbUNnQixPLEVBQVM7QUFDM0MsVUFBSUUsdUJBQXVCcEIsS0FBS3FCLGtCQUFMLENBQXdCSCxPQUF4QixFQUFpQyxTQUFqQyxDQUEzQjtBQUFBLFVBQ0lJLHVCQUF1QnRCLEtBQUtxQixrQkFBTCxDQUF3QkgsT0FBeEIsRUFBaUMsU0FBakMsQ0FEM0I7QUFBQSxVQUVJSyw4QkFBOEJILHFCQUFxQkksTUFGdkQ7QUFBQSxVQUVnRTtBQUM1REMsb0NBQThCSCxxQkFBcUJFLE1BQXJCLENBQTRCRSxPQUE1QixDQUFvQyxjQUFwQyxFQUFvRCxFQUFwRCxFQUF3REEsT0FBeEQsQ0FBZ0UsV0FBaEUsRUFBNkUsRUFBN0UsQ0FIbEM7QUFBQSxVQUdxSDtBQUNqSEMscUNBQWtDSiwyQkFBbEMsU0FBaUVFLDJCQUpyRTs7QUFNQSxhQUFPRSw0QkFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjVCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcywgTGluZSkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5MaW5lID0gTGluZTtcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgdmFyIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoZnVuY3Rpb24oY29udGVudCkge1xyXG4gICAgICAgICAgdmFyIGxpbmUgPSB0aGlzLkxpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgdGhpcy5ydWxlcyk7XHJcbiAgXHJcbiAgICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gIFxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuICBcclxuICB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XHJcbiAgICB2YXIgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXHJcbiAgICAgICAgdG9rZW5zID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgbGluZSkge1xyXG4gICAgICAgICAgdmFyIGxpbmVUb2tlbnMgPSBsaW5lLmdldFRva2VucygpO1xyXG5cclxuICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRva2VucztcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiB0b2tlbnM7ICAgIFxyXG4gIH1cclxuICBcclxuICBzdGF0aWMgcnVsZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICB2YXIgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKTtcclxuXHJcbiAgICByZXR1cm4gcnVsZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybihncmFtbWFyKSB7XHJcbiAgICB2YXIga2V5d29yZFN5bWJvbHNSZWdFeHAgPSB1dGlsLmZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCAna2V5d29yZCcpLFxyXG4gICAgICAgIHNwZWNpYWxTeW1ib2xzUmVnRXhwID0gdXRpbC5maW5kUmVnRXhwRnJvbVR5cGUoZ3JhbW1hciwgJ3NwZWNpYWwnKSxcclxuICAgICAgICBrZXl3b3JkU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBrZXl3b3JkU3ltYm9sc1JlZ0V4cC5zb3VyY2UsICAvLy9cclxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBzcGVjaWFsU3ltYm9sc1JlZ0V4cC5zb3VyY2UucmVwbGFjZSgvXig/OlxcXlxcKFxcPzopLywgJycpLnJlcGxhY2UoLyg/OlxcKVxcJCkkLywgJycpLCAgLy8vXHJcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGAke2tleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVybn18JHtzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm59YDtcclxuXHJcbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiJdfQ==