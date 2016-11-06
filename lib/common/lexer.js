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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsInV0aWwiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsImNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJiaW5kIiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInJlZHVjZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiLCJncmFtbWFyIiwiZnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJlbnRyeSIsInR5cGUiLCJ0eXBlRnJvbUVudHJ5Iiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxRQUFRRCxRQUFRLFNBQVIsQ0FEWjtBQUFBLElBRUlFLE9BQU9GLFFBQVEsU0FBUixDQUZYOztJQUlNRyxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUJMLElBQW5CLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtLLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3FDQUVnQk0sTyxFQUFTQyxPLEVBQVM7QUFDakMsVUFBSUMsV0FBV0YsUUFBUUcsS0FBUixDQUFjLElBQWQsQ0FBZjtBQUFBLFVBQ0lDLFFBQVFGLFNBQVNHLEdBQVQsQ0FBYSxVQUFTTCxPQUFULEVBQWtCO0FBQ3JDLFlBQUlNLE9BQU8sS0FBS1osSUFBTCxDQUFVYSxXQUFWLENBQXNCUCxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0MsS0FBS0YsS0FBN0MsQ0FBWDs7QUFFQSxlQUFPTyxJQUFQO0FBQ0QsT0FKb0IsQ0FJbkJFLElBSm1CLENBSWQsSUFKYyxDQUFiLENBRFo7O0FBT0EsYUFBT0osS0FBUDtBQUNEOzs7c0NBRWlCSixPLEVBQVM7QUFDekIsVUFBSUksUUFBUSxLQUFLSyxnQkFBTCxDQUFzQlQsT0FBdEIsQ0FBWjtBQUFBLFVBQ0lVLFNBQVNOLE1BQU1PLE1BQU4sQ0FBYSxVQUFTRCxNQUFULEVBQWlCSixJQUFqQixFQUF1QjtBQUMzQyxZQUFJTSxhQUFhTixLQUFLTyxTQUFMLEVBQWpCOztBQUVBSCxpQkFBU0EsT0FBT0ksTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsZUFBT0YsTUFBUDtBQUNELE9BTlEsRUFNTixFQU5NLENBRGI7O0FBU0EsYUFBT0EsTUFBUDtBQUNEOzs7cUNBRXVCSyxPLEVBQVM7QUFBRSxhQUFPbkIsTUFBTW9CLFdBQU4sQ0FBa0JELE9BQWxCLENBQVA7QUFBb0M7OzswQ0FFMUNBLE8sRUFBUztBQUNwQyxVQUFJRSx3QkFBd0JGLFFBQVFWLEdBQVIsQ0FBWSxVQUFTYSxLQUFULEVBQWdCO0FBQ3RELFlBQUlDLE9BQU90QixLQUFLdUIsYUFBTCxDQUFtQkYsS0FBbkIsQ0FBWDtBQUFBLFlBQ0lHLHVCQUF1QkYsSUFEM0IsQ0FEc0QsQ0FFcEI7O0FBRWxDLGVBQU9FLG9CQUFQO0FBQ0QsT0FMMkIsQ0FBNUI7O0FBT0EsYUFBT0oscUJBQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJ6QixXQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIHZhciBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICAgIHZhciBsaW5lID0gdGhpcy5MaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHRoaXMucnVsZXMpO1xyXG4gIFxyXG4gICAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbiAgXHJcbiAgdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCkge1xyXG4gICAgdmFyIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxyXG4gICAgICAgIHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcclxuICAgICAgICAgIHZhciBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdG9rZW5zOyAgICBcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikgeyByZXR1cm4gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlcyhncmFtbWFyKSB7XHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZW50cnkpIHtcclxuICAgICAgdmFyIHR5cGUgPSB1dGlsLnR5cGVGcm9tRW50cnkoZW50cnkpLFxyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSB0eXBlOyAgLy8vXHJcblxyXG4gICAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19