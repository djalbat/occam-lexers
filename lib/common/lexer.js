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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsInV0aWwiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsImNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJiaW5kIiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsImdyYW1tYXIiLCJmcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImVudHJ5IiwidHlwZSIsInR5cGVGcm9tRW50cnkiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJsaW5lVG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxRQUFRRCxRQUFRLFNBQVIsQ0FEWjtBQUFBLElBRUlFLE9BQU9GLFFBQVEsU0FBUixDQUZYOztJQUlNRyxXO0FBQ0osdUJBQVlDLEtBQVosRUFBbUJMLElBQW5CLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtLLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O3FDQUVnQk0sTyxFQUFTQyxPLEVBQVM7QUFDakMsVUFBSUMsV0FBV0YsUUFBUUcsS0FBUixDQUFjLElBQWQsQ0FBZjtBQUFBLFVBQ0lDLFFBQVFGLFNBQVNHLEdBQVQsQ0FBYSxVQUFTTCxPQUFULEVBQWtCO0FBQ3JDLFlBQUlNLE9BQU8sS0FBS1osSUFBTCxDQUFVYSxXQUFWLENBQXNCUCxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0MsS0FBS0YsS0FBN0MsQ0FBWDs7QUFFQSxlQUFPTyxJQUFQO0FBQ0QsT0FKb0IsQ0FJbkJFLElBSm1CLENBSWQsSUFKYyxDQUFiLENBRFo7O0FBT0EsYUFBT0osS0FBUDtBQUNEOzs7c0NBRWlCSixPLEVBQVM7QUFDekIsVUFBSUksUUFBUSxLQUFLSyxnQkFBTCxDQUFzQlQsT0FBdEIsQ0FBWjtBQUFBLFVBQ0lVLFNBQVNDLGdCQUFnQlAsS0FBaEIsQ0FEYjs7QUFHQSxhQUFPTSxNQUFQO0FBQ0Q7OztxQ0FFdUJFLE8sRUFBUztBQUFFLGFBQU9oQixNQUFNaUIsV0FBTixDQUFrQkQsT0FBbEIsQ0FBUDtBQUFvQzs7OzZDQUV2Q0EsTyxFQUFTO0FBQ3ZDLFVBQUlFLHdCQUF3QkYsUUFBUVAsR0FBUixDQUFZLFVBQVNVLEtBQVQsRUFBZ0I7QUFDdEQsWUFBSUMsT0FBT25CLEtBQUtvQixhQUFMLENBQW1CRixLQUFuQixDQUFYO0FBQUEsWUFDSUcsdUJBQXVCRixJQUQzQixDQURzRCxDQUVwQjs7QUFFbEMsZUFBT0Usb0JBQVA7QUFDRCxPQUwyQixDQUE1Qjs7QUFPQSxhQUFPSixxQkFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnRCLFdBQWpCOztBQUVBLFNBQVNhLGVBQVQsQ0FBeUJQLEtBQXpCLEVBQWdDO0FBQzlCLE1BQUlNLFNBQVNOLE1BQU1pQixNQUFOLENBQWEsVUFBU1gsTUFBVCxFQUFpQkosSUFBakIsRUFBdUI7QUFDL0MsUUFBSWdCLGFBQWFoQixLQUFLaUIsU0FBTCxFQUFqQjs7QUFFQWIsYUFBU0EsT0FBT2MsTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsV0FBT1osTUFBUDtBQUNELEdBTlksRUFNVixFQU5VLENBQWI7O0FBUUEsU0FBT0EsTUFBUDtBQUNEIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgIFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcywgTGluZSkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5MaW5lID0gTGluZTtcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgdmFyIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoZnVuY3Rpb24oY29udGVudCkge1xyXG4gICAgICAgICAgdmFyIGxpbmUgPSB0aGlzLkxpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgdGhpcy5ydWxlcyk7XHJcbiAgXHJcbiAgICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gIFxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuICBcclxuICB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XHJcbiAgICB2YXIgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRva2VuczsgICAgXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcnVsZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7IHJldHVybiBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKTsgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKGdyYW1tYXIpIHtcclxuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyLm1hcChmdW5jdGlvbihlbnRyeSkge1xyXG4gICAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21FbnRyeShlbnRyeSksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHR5cGU7ICAvLy9cclxuXHJcbiAgICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG5cclxuZnVuY3Rpb24gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XHJcbiAgdmFyIHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcclxuICAgIHZhciBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcclxuXHJcbiAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gdG9rZW5zO1xyXG59XHJcbiJdfQ==