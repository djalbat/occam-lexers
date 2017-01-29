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
          lines = this.linesFromContents(contents, context);

      return lines;
    }
  }, {
    key: 'linesFromContents',
    value: function linesFromContents(contents, context) {
      var lines = contents.map(function (content) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJTaWduaWZpY2FudFRva2VuIiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJjb250ZXh0IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudHMiLCJtYXAiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJiaW5kIiwibGluZXNGcm9tQ29udGVudCIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsImdyYW1tYXIiLCJmcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIk9iamVjdCIsImtleXMiLCJ0eXBlcyIsImdyYW1tYXJUeXBlcyIsImdyYW1tYXJFbnRyeSIsInR5cGUiLCJ0eXBlRnJvbUdyYW1tYXJFbnRyeSIsImdyYW1tYXJUeXBlIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLE9BQU9ELFFBQVEsU0FBUixDQURYO0FBQUEsSUFFSUUsUUFBUUYsUUFBUSxTQUFSLENBRlo7QUFBQSxJQUdJRyxtQkFBbUJILFFBQVEscUJBQVIsQ0FIdkI7O0lBS01JLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQk4sSUFBbkIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS00sS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS04sSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7cUNBRWdCTyxPLEVBQVNDLE8sRUFBUztBQUNqQyxVQUFJQyxXQUFXRixRQUFRRyxLQUFSLENBQWMsSUFBZCxDQUFmO0FBQUEsVUFDSUMsUUFBUSxLQUFLQyxpQkFBTCxDQUF1QkgsUUFBdkIsRUFBaUNELE9BQWpDLENBRFo7O0FBR0EsYUFBT0csS0FBUDtBQUNEOzs7c0NBRWlCRixRLEVBQVVELE8sRUFBUztBQUNuQyxVQUFJRyxRQUFRRixTQUFTSSxHQUFULENBQWEsVUFBU04sT0FBVCxFQUFrQjtBQUNyQyxZQUFJTyxPQUFPLEtBQUtkLElBQUwsQ0FBVWUsV0FBVixDQUFzQlIsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDLEtBQUtGLEtBQTdDLENBQVg7O0FBRUEsZUFBT1EsSUFBUDtBQUNELE9BSm9CLENBSW5CRSxJQUptQixDQUlkLElBSmMsQ0FBYixDQUFaOztBQU1BLGFBQU9MLEtBQVA7QUFDRDs7O3NDQUVpQkosTyxFQUFTO0FBQ3pCLFVBQUlJLFFBQVEsS0FBS00sZ0JBQUwsQ0FBc0JWLE9BQXRCLENBQVo7QUFBQSxVQUNJVyxTQUFTQyxnQkFBZ0JSLEtBQWhCLENBRGI7O0FBR0EsYUFBT08sTUFBUDtBQUNEOzs7cUNBRXVCRSxPLEVBQVM7QUFBRSxhQUFPakIsTUFBTWtCLFdBQU4sQ0FBa0JELE9BQWxCLENBQVA7QUFBb0M7Ozs2Q0FFdkNBLE8sRUFBUztBQUN2QyxVQUFJRSx3QkFBd0JDLE9BQU9DLElBQVAsQ0FBWXBCLGlCQUFpQnFCLEtBQTdCLENBQTVCO0FBQUEsVUFDSUMsZUFBZU4sUUFBUVAsR0FBUixDQUFZLFVBQVNjLFlBQVQsRUFBdUI7QUFDaEQsWUFBSUMsT0FBTzFCLEtBQUsyQixvQkFBTCxDQUEwQkYsWUFBMUIsQ0FBWDtBQUFBLFlBQ0lHLGNBQWNGLElBRGxCLENBRGdELENBRXZCOztBQUV6QixlQUFPRSxXQUFQO0FBQ0QsT0FMYyxDQURuQjs7QUFRQVIsOEJBQXdCQSxzQkFBc0JTLE1BQXRCLENBQTZCTCxZQUE3QixDQUF4QixDQVR1QyxDQVM2Qjs7QUFFcEUsYUFBT0oscUJBQVA7QUFDRDs7Ozs7O0FBR0hVLE9BQU9DLE9BQVAsR0FBaUI1QixXQUFqQjs7QUFFQSxTQUFTYyxlQUFULENBQXlCUixLQUF6QixFQUFnQztBQUM5QixNQUFJTyxTQUFTUCxNQUFNdUIsTUFBTixDQUFhLFVBQVNoQixNQUFULEVBQWlCSixJQUFqQixFQUF1QjtBQUMvQyxRQUFJcUIsYUFBYXJCLEtBQUtzQixTQUFMLEVBQWpCOztBQUVBbEIsYUFBU0EsT0FBT2EsTUFBUCxDQUFjSSxVQUFkLENBQVQ7O0FBRUEsV0FBT2pCLE1BQVA7QUFDRCxHQU5ZLEVBTVYsRUFOVSxDQUFiOztBQVFBLFNBQU9BLE1BQVA7QUFDRCIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9zaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSB7XHJcbiAgICB2YXIgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGNvbnRleHQpO1xyXG4gIFxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGNvbnRleHQpIHtcclxuICAgIHZhciBsaW5lcyA9IGNvbnRlbnRzLm1hcChmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgICB2YXIgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbiAgXHJcbiAgdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCkge1xyXG4gICAgdmFyIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxyXG4gICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyk7XHJcbiAgICBcclxuICAgIHJldHVybiB0b2tlbnM7ICAgIFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikgeyByZXR1cm4gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIGdldFNpZ25pZmljYW50VG9rZW5UeXBlcyhncmFtbWFyKSB7XHJcbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gT2JqZWN0LmtleXMoU2lnbmlmaWNhbnRUb2tlbi50eXBlcyksXHJcbiAgICAgICAgZ3JhbW1hclR5cGVzID0gZ3JhbW1hci5tYXAoZnVuY3Rpb24oZ3JhbW1hckVudHJ5KSB7XHJcbiAgICAgICAgICB2YXIgdHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSxcclxuICAgICAgICAgICAgICBncmFtbWFyVHlwZSA9IHR5cGU7ICAvLy9cclxuXHJcbiAgICAgICAgICByZXR1cm4gZ3JhbW1hclR5cGU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChncmFtbWFyVHlwZXMpOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xyXG4gIHZhciB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XHJcbiAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XHJcblxyXG4gICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHRva2VucztcclxufVxyXG4iXX0=