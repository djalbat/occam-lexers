'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    util = require('../util'),
    Rules = require('./rules'),
    SignificantToken = require('./token/significant');

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
      var significantTokenTypes = Object.keys(SignificantToken.types),
          grammarTypes = grammar.map(function (grammarEntry) {
        var type = util.typeFromGrammarEntry(grammarEntry),
            grammarType = type; ///

        return grammarType;
      });

      significantTokenTypes = significantTokenTypes.concat(grammarTypes); ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJTaWduaWZpY2FudFRva2VuIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJjb250ZXh0IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibWFwIiwibGluZSIsImZyb21Db250ZW50IiwiYmluZCIsImxpbmVzRnJvbUNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tTGluZXMiLCJncmFtbWFyIiwiZnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJPYmplY3QiLCJrZXlzIiwidHlwZXMiLCJncmFtbWFyVHlwZXMiLCJncmFtbWFyRW50cnkiLCJ0eXBlIiwidHlwZUZyb21HcmFtbWFyRW50cnkiLCJncmFtbWFyVHlwZSIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJsaW5lVG9rZW5zIiwiZ2V0VG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxPQUFPRCxRQUFRLFNBQVIsQ0FEWDtBQUFBLElBRUlFLFFBQVFGLFFBQVEsU0FBUixDQUZaO0FBQUEsSUFHSUcsbUJBQW1CSCxRQUFRLHFCQUFSLENBSHZCOztJQUtNSSxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUJOLElBQW5CLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtNLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtOLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3FDQUVnQk8sTyxFQUFTQyxPLEVBQVM7QUFDakMsVUFBSUMsV0FBV0YsUUFBUUcsS0FBUixDQUFjLElBQWQsQ0FBZjtBQUFBLFVBQ0lDLFFBQVFGLFNBQVNHLEdBQVQsQ0FBYSxVQUFTTCxPQUFULEVBQWtCO0FBQ3JDLFlBQUlNLE9BQU8sS0FBS2IsSUFBTCxDQUFVYyxXQUFWLENBQXNCUCxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0MsS0FBS0YsS0FBN0MsQ0FBWDs7QUFFQSxlQUFPTyxJQUFQO0FBQ0QsT0FKb0IsQ0FJbkJFLElBSm1CLENBSWQsSUFKYyxDQUFiLENBRFo7O0FBT0EsYUFBT0osS0FBUDtBQUNEOzs7c0NBRWlCSixPLEVBQVM7QUFDekIsVUFBSUksUUFBUSxLQUFLSyxnQkFBTCxDQUFzQlQsT0FBdEIsQ0FBWjtBQUFBLFVBQ0lVLFNBQVNDLGdCQUFnQlAsS0FBaEIsQ0FEYjs7QUFHQSxhQUFPTSxNQUFQO0FBQ0Q7OztxQ0FFdUJFLE8sRUFBUztBQUFFLGFBQU9oQixNQUFNaUIsV0FBTixDQUFrQkQsT0FBbEIsQ0FBUDtBQUFvQzs7OzZDQUV2Q0EsTyxFQUFTO0FBQ3ZDLFVBQUlFLHdCQUF3QkMsT0FBT0MsSUFBUCxDQUFZbkIsaUJBQWlCb0IsS0FBN0IsQ0FBNUI7QUFBQSxVQUNJQyxlQUFlTixRQUFRUCxHQUFSLENBQVksVUFBU2MsWUFBVCxFQUF1QjtBQUNoRCxZQUFJQyxPQUFPekIsS0FBSzBCLG9CQUFMLENBQTBCRixZQUExQixDQUFYO0FBQUEsWUFDSUcsY0FBY0YsSUFEbEIsQ0FEZ0QsQ0FFdkI7O0FBRXpCLGVBQU9FLFdBQVA7QUFDRCxPQUxjLENBRG5COztBQVFBUiw4QkFBd0JBLHNCQUFzQlMsTUFBdEIsQ0FBNkJMLFlBQTdCLENBQXhCLENBVHVDLENBUzZCOztBQUVwRSxhQUFPSixxQkFBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQjNCLFdBQWpCOztBQUVBLFNBQVNhLGVBQVQsQ0FBeUJQLEtBQXpCLEVBQWdDO0FBQzlCLE1BQUlNLFNBQVNOLE1BQU1zQixNQUFOLENBQWEsVUFBU2hCLE1BQVQsRUFBaUJKLElBQWpCLEVBQXVCO0FBQy9DLFFBQUlxQixhQUFhckIsS0FBS3NCLFNBQUwsRUFBakI7O0FBRUFsQixhQUFTQSxPQUFPYSxNQUFQLENBQWNJLFVBQWQsQ0FBVDs7QUFFQSxXQUFPakIsTUFBUDtBQUNELEdBTlksRUFNVixFQU5VLENBQWI7O0FBUUEsU0FBT0EsTUFBUDtBQUNEIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL3NpZ25pZmljYW50Jyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIHZhciBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICAgIHZhciBsaW5lID0gdGhpcy5MaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHRoaXMucnVsZXMpO1xyXG4gIFxyXG4gICAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICBcclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbiAgXHJcbiAgdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCkge1xyXG4gICAgdmFyIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxyXG4gICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyk7XHJcbiAgICBcclxuICAgIHJldHVybiB0b2tlbnM7ICAgIFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikgeyByZXR1cm4gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIGdldFNpZ25pZmljYW50VG9rZW5UeXBlcyhncmFtbWFyKSB7XHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gT2JqZWN0LmtleXMoU2lnbmlmaWNhbnRUb2tlbi50eXBlcyksXHJcbiAgICAgICAgZ3JhbW1hclR5cGVzID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZ3JhbW1hckVudHJ5KSB7XHJcbiAgICAgICAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSxcclxuICAgICAgICAgICAgICBncmFtbWFyVHlwZSA9IHR5cGU7ICAvLy9cclxuXHJcbiAgICAgICAgICByZXR1cm4gZ3JhbW1hclR5cGU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChncmFtbWFyVHlwZXMpOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xyXG4gIHZhciB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XHJcbiAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHRva2VucztcclxufVxyXG4iXX0=