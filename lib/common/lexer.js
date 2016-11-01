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
      return Rules.fromGrammar(grammar);
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
  }, {
    key: 'significantTokenTypes',
    value: function significantTokenTypes(grammar) {
      var significantTokenTypes = grammar.map(function (entry) {
        var type = util.typeFromEntry(entry),
            significantTokenType = type; ///

        return significantTokenType;
      });

      return significantTokenTypes;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsInV0aWwiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsImNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJiaW5kIiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInJlZHVjZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiLCJncmFtbWFyIiwiZnJvbUdyYW1tYXIiLCJrZXl3b3JkU3ltYm9sc1JlZ0V4cCIsImZpbmRSZWdFeHBGcm9tVHlwZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwia2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic291cmNlIiwic3BlY2lhbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwicmVwbGFjZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJlbnRyeSIsInR5cGUiLCJ0eXBlRnJvbUVudHJ5Iiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxRQUFRRCxRQUFRLFNBQVIsQ0FEWjtBQUFBLElBRUlFLE9BQU9GLFFBQVEsU0FBUixDQUZYOztJQUlNRyxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUJMLElBQW5CLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtLLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3FDQUVnQk0sTyxFQUFTQyxPLEVBQVM7QUFDakMsVUFBSUMsV0FBV0YsUUFBUUcsS0FBUixDQUFjLElBQWQsQ0FBZjtBQUFBLFVBQ0lDLFFBQVFGLFNBQVNHLEdBQVQsQ0FBYSxVQUFTTCxPQUFULEVBQWtCO0FBQ3JDLFlBQUlNLE9BQU8sS0FBS1osSUFBTCxDQUFVYSxXQUFWLENBQXNCUCxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0MsS0FBS0YsS0FBN0MsQ0FBWDs7QUFFQSxlQUFPTyxJQUFQO0FBQ0QsT0FKb0IsQ0FJbkJFLElBSm1CLENBSWQsSUFKYyxDQUFiLENBRFo7O0FBT0EsYUFBT0osS0FBUDtBQUNEOzs7c0NBRWlCSixPLEVBQVM7QUFDekIsVUFBSUksUUFBUSxLQUFLSyxnQkFBTCxDQUFzQlQsT0FBdEIsQ0FBWjtBQUFBLFVBQ0lVLFNBQVNOLE1BQU1PLE1BQU4sQ0FBYSxVQUFTRCxNQUFULEVBQWlCSixJQUFqQixFQUF1QjtBQUMzQyxZQUFJTSxhQUFhTixLQUFLTyxTQUFMLEVBQWpCOztBQUVBSCxpQkFBU0EsT0FBT0ksTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsZUFBT0YsTUFBUDtBQUNELE9BTlEsRUFNTixFQU5NLENBRGI7O0FBU0EsYUFBT0EsTUFBUDtBQUNEOzs7cUNBRXVCSyxPLEVBQVM7QUFBRSxhQUFPbkIsTUFBTW9CLFdBQU4sQ0FBa0JELE9BQWxCLENBQVA7QUFBb0M7OztpREFFbkNBLE8sRUFBUztBQUMzQyxVQUFJRSx1QkFBdUJwQixLQUFLcUIsa0JBQUwsQ0FBd0JILE9BQXhCLEVBQWlDLFNBQWpDLENBQTNCO0FBQUEsVUFDSUksdUJBQXVCdEIsS0FBS3FCLGtCQUFMLENBQXdCSCxPQUF4QixFQUFpQyxTQUFqQyxDQUQzQjtBQUFBLFVBRUlLLDhCQUE4QkgscUJBQXFCSSxNQUZ2RDtBQUFBLFVBRWdFO0FBQzVEQyxvQ0FBOEJILHFCQUFxQkUsTUFBckIsQ0FBNEJFLE9BQTVCLENBQW9DLGNBQXBDLEVBQW9ELEVBQXBELEVBQXdEQSxPQUF4RCxDQUFnRSxXQUFoRSxFQUE2RSxFQUE3RSxDQUhsQztBQUFBLFVBR3FIO0FBQ2pIQyxxQ0FBa0NKLDJCQUFsQyxTQUFpRUUsMkJBSnJFOztBQU1BLGFBQU9FLDRCQUFQO0FBQ0Q7OzswQ0FFNEJULE8sRUFBUztBQUNwQyxVQUFJVSx3QkFBd0JWLFFBQVFWLEdBQVIsQ0FBWSxVQUFTcUIsS0FBVCxFQUFnQjtBQUN0RCxZQUFJQyxPQUFPOUIsS0FBSytCLGFBQUwsQ0FBbUJGLEtBQW5CLENBQVg7QUFBQSxZQUNJRyx1QkFBdUJGLElBRDNCLENBRHNELENBRXBCOztBQUVsQyxlQUFPRSxvQkFBUDtBQUNELE9BTDJCLENBQTVCOztBQU9BLGFBQU9KLHFCQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCakMsV0FBakIiLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICB2YXIgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICBsaW5lcyA9IGNvbnRlbnRzLm1hcChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICB2YXIgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuICBcclxuICAgICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG4gIFxyXG4gIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpIHtcclxuICAgIHZhciBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcclxuICAgICAgICB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XHJcbiAgICAgICAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VuczsgICAgXHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHsgcmV0dXJuIFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKGdyYW1tYXIpIHtcclxuICAgIHZhciBrZXl3b3JkU3ltYm9sc1JlZ0V4cCA9IHV0aWwuZmluZFJlZ0V4cEZyb21UeXBlKGdyYW1tYXIsICdrZXl3b3JkJyksXHJcbiAgICAgICAgc3BlY2lhbFN5bWJvbHNSZWdFeHAgPSB1dGlsLmZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCAnc3BlY2lhbCcpLFxyXG4gICAgICAgIGtleXdvcmRTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGtleXdvcmRTeW1ib2xzUmVnRXhwLnNvdXJjZSwgIC8vL1xyXG4gICAgICAgIHNwZWNpYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHNwZWNpYWxTeW1ib2xzUmVnRXhwLnNvdXJjZS5yZXBsYWNlKC9eKD86XFxeXFwoXFw/OikvLCAnJykucmVwbGFjZSgvKD86XFwpXFwkKSQvLCAnJyksICAvLy9cclxuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gYCR7a2V5d29yZFN5bWJvbHNSZWdFeHBQYXR0ZXJufXwke3NwZWNpYWxTeW1ib2xzUmVnRXhwUGF0dGVybn1gO1xyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlcyhncmFtbWFyKSB7XHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZW50cnkpIHtcclxuICAgICAgdmFyIHR5cGUgPSB1dGlsLnR5cGVGcm9tRW50cnkoZW50cnkpLFxyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSB0eXBlOyAgLy8vXHJcblxyXG4gICAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19