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
          tokens = tokensFromLines(lines);

      return tokens;
    }
  }], [{
    key: 'rulesFromGrammar',
    value: function rulesFromGrammar(grammar) {
      return Rules.fromGrammar(grammar);
    }
  }, {
    key: 'getSignificantTokenTypes',
    value: function getSignificantTokenTypes(grammar) {
      var significantTokenTypes = grammar.map(function (entry) {
        var type = util.typeFromEntry(entry),
            significantTokenType = type; ///

        return significantTokenType;
      });

      significantTokenTypes.unshift('string'); ///

      return significantTokenTypes;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;

function tokensFromLines(lines) {
  var tokens = lines.reduce(function (tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsInV0aWwiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsImNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJiaW5kIiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsImdyYW1tYXIiLCJmcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImVudHJ5IiwidHlwZSIsInR5cGVGcm9tRW50cnkiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsInVuc2hpZnQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsUUFBUUQsUUFBUSxTQUFSLENBRFo7QUFBQSxJQUVJRSxPQUFPRixRQUFRLFNBQVIsQ0FGWDs7SUFJTUcsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CTCxJQUFuQixFQUF5QjtBQUFBOztBQUN2QixTQUFLSyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLTCxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztxQ0FFZ0JNLE8sRUFBU0MsTyxFQUFTO0FBQ2pDLFVBQUlDLFdBQVdGLFFBQVFHLEtBQVIsQ0FBYyxJQUFkLENBQWY7QUFBQSxVQUNJQyxRQUFRRixTQUFTRyxHQUFULENBQWEsVUFBU0wsT0FBVCxFQUFrQjtBQUNyQyxZQUFJTSxPQUFPLEtBQUtaLElBQUwsQ0FBVWEsV0FBVixDQUFzQlAsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDLEtBQUtGLEtBQTdDLENBQVg7O0FBRUEsZUFBT08sSUFBUDtBQUNELE9BSm9CLENBSW5CRSxJQUptQixDQUlkLElBSmMsQ0FBYixDQURaOztBQU9BLGFBQU9KLEtBQVA7QUFDRDs7O3NDQUVpQkosTyxFQUFTO0FBQ3pCLFVBQUlJLFFBQVEsS0FBS0ssZ0JBQUwsQ0FBc0JULE9BQXRCLENBQVo7QUFBQSxVQUNJVSxTQUFTQyxnQkFBZ0JQLEtBQWhCLENBRGI7O0FBR0EsYUFBT00sTUFBUDtBQUNEOzs7cUNBRXVCRSxPLEVBQVM7QUFBRSxhQUFPaEIsTUFBTWlCLFdBQU4sQ0FBa0JELE9BQWxCLENBQVA7QUFBb0M7Ozs2Q0FFdkNBLE8sRUFBUztBQUN2QyxVQUFJRSx3QkFBd0JGLFFBQVFQLEdBQVIsQ0FBWSxVQUFTVSxLQUFULEVBQWdCO0FBQ3RELFlBQUlDLE9BQU9uQixLQUFLb0IsYUFBTCxDQUFtQkYsS0FBbkIsQ0FBWDtBQUFBLFlBQ0lHLHVCQUF1QkYsSUFEM0IsQ0FEc0QsQ0FFcEI7O0FBRWxDLGVBQU9FLG9CQUFQO0FBQ0QsT0FMMkIsQ0FBNUI7O0FBT0FKLDRCQUFzQkssT0FBdEIsQ0FBOEIsUUFBOUIsRUFSdUMsQ0FRRzs7QUFFMUMsYUFBT0wscUJBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJ2QixXQUFqQjs7QUFFQSxTQUFTYSxlQUFULENBQXlCUCxLQUF6QixFQUFnQztBQUM5QixNQUFJTSxTQUFTTixNQUFNa0IsTUFBTixDQUFhLFVBQVNaLE1BQVQsRUFBaUJKLElBQWpCLEVBQXVCO0FBQy9DLFFBQUlpQixhQUFhakIsS0FBS2tCLFNBQUwsRUFBakI7O0FBRUFkLGFBQVNBLE9BQU9lLE1BQVAsQ0FBY0YsVUFBZCxDQUFUOztBQUVBLFdBQU9iLE1BQVA7QUFDRCxHQU5ZLEVBTVYsRUFOVSxDQUFiOztBQVFBLFNBQU9BLE1BQVA7QUFDRCIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIHZhciBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICAgIHZhciBsaW5lID0gdGhpcy5MaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHRoaXMucnVsZXMpO1xyXG4gIFxyXG4gICAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbiAgXHJcbiAgdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCkge1xyXG4gICAgdmFyIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxyXG4gICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyk7XHJcbiAgICBcclxuICAgIHJldHVybiB0b2tlbnM7ICAgIFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikgeyByZXR1cm4gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIGdldFNpZ25pZmljYW50VG9rZW5UeXBlcyhncmFtbWFyKSB7XHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZW50cnkpIHtcclxuICAgICAgdmFyIHR5cGUgPSB1dGlsLnR5cGVGcm9tRW50cnkoZW50cnkpLFxyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSB0eXBlOyAgLy8vXHJcblxyXG4gICAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaWduaWZpY2FudFRva2VuVHlwZXMudW5zaGlmdCgnc3RyaW5nJyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xyXG4gIHZhciB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XHJcbiAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHRva2VucztcclxufVxyXG4iXX0=