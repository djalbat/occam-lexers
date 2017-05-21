'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    util = require('../util'),
    Rules = require('./rules'),
    Context = require('./context'),
    SignificantToken = require('./token/significant');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content) {
      var firstLineIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Context();

      var contents = content.split(/\n/),
          lines = this.linesFromContents(contents, firstLineIndex, context);

      return lines;
    }
  }, {
    key: 'linesFromContents',
    value: function linesFromContents(contents, firstLineIndex, context) {
      var lines = [];

      var index = firstLineIndex,
          content = contents[index];

      while (content !== undefined) {
        var length = index - firstLineIndex,
            terminate = context.shouldTerminate(length);

        if (terminate) {
          break;
        }

        var line = this.Line.fromContent(content, context, this.rules);

        lines.push(line);

        content = contents[++index];
      }

      return lines;
    }
  }], [{
    key: 'rulesFromGrammar',
    value: function rulesFromGrammar(grammar) {
      return Rules.fromGrammar(grammar);
    }
  }, {
    key: 'significantTokenTypesFromGrammar',
    value: function significantTokenTypesFromGrammar(grammar) {
      var significantTokenTypes = Object.keys(SignificantToken.types);

      var grammarTypes = grammar.map(function (grammarEntry) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJ1dGlsIiwiUnVsZXMiLCJDb250ZXh0IiwiU2lnbmlmaWNhbnRUb2tlbiIsIkNvbW1vbkxleGVyIiwicnVsZXMiLCJjb250ZW50IiwiZmlyc3RMaW5lSW5kZXgiLCJjb250ZXh0IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudHMiLCJpbmRleCIsInVuZGVmaW5lZCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNob3VsZFRlcm1pbmF0ZSIsImxpbmUiLCJmcm9tQ29udGVudCIsInB1c2giLCJncmFtbWFyIiwiZnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJPYmplY3QiLCJrZXlzIiwidHlwZXMiLCJncmFtbWFyVHlwZXMiLCJtYXAiLCJncmFtbWFyRW50cnkiLCJ0eXBlIiwidHlwZUZyb21HcmFtbWFyRW50cnkiLCJncmFtbWFyVHlwZSIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsU0FBUixDQURiO0FBQUEsSUFFTUUsUUFBUUYsUUFBUSxTQUFSLENBRmQ7QUFBQSxJQUdNRyxVQUFVSCxRQUFRLFdBQVIsQ0FIaEI7QUFBQSxJQUlNSSxtQkFBbUJKLFFBQVEscUJBQVIsQ0FKekI7O0lBTU1LLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQlAsSUFBbkIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS08sS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS1AsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7cUNBRWdCUSxPLEVBQXNEO0FBQUEsVUFBN0NDLGNBQTZDLHVFQUE1QixDQUE0QjtBQUFBLFVBQXpCQyxPQUF5Qix1RUFBZixJQUFJTixPQUFKLEVBQWU7O0FBQ3JFLFVBQU1PLFdBQVdILFFBQVFJLEtBQVIsQ0FBYyxJQUFkLENBQWpCO0FBQUEsVUFDTUMsUUFBUSxLQUFLQyxpQkFBTCxDQUF1QkgsUUFBdkIsRUFBaUNGLGNBQWpDLEVBQWlEQyxPQUFqRCxDQURkOztBQUdBLGFBQU9HLEtBQVA7QUFDRDs7O3NDQUVpQkYsUSxFQUFVRixjLEVBQWdCQyxPLEVBQVM7QUFDbkQsVUFBTUcsUUFBUSxFQUFkOztBQUVBLFVBQUlFLFFBQVFOLGNBQVo7QUFBQSxVQUNJRCxVQUFVRyxTQUFTSSxLQUFULENBRGQ7O0FBR0EsYUFBT1AsWUFBWVEsU0FBbkIsRUFBOEI7QUFDNUIsWUFBTUMsU0FBU0YsUUFBUU4sY0FBdkI7QUFBQSxZQUNNUyxZQUFZUixRQUFRUyxlQUFSLENBQXdCRixNQUF4QixDQURsQjs7QUFHQSxZQUFJQyxTQUFKLEVBQWU7QUFDYjtBQUNEOztBQUVELFlBQU1FLE9BQU8sS0FBS3BCLElBQUwsQ0FBVXFCLFdBQVYsQ0FBc0JiLE9BQXRCLEVBQStCRSxPQUEvQixFQUF3QyxLQUFLSCxLQUE3QyxDQUFiOztBQUVBTSxjQUFNUyxJQUFOLENBQVdGLElBQVg7O0FBRUFaLGtCQUFVRyxTQUFTLEVBQUVJLEtBQVgsQ0FBVjtBQUNEOztBQUVELGFBQU9GLEtBQVA7QUFDRDs7O3FDQUV1QlUsTyxFQUFTO0FBQUUsYUFBT3BCLE1BQU1xQixXQUFOLENBQWtCRCxPQUFsQixDQUFQO0FBQW9DOzs7cURBRS9CQSxPLEVBQVM7QUFDL0MsVUFBS0Usd0JBQXdCQyxPQUFPQyxJQUFQLENBQVl0QixpQkFBaUJ1QixLQUE3QixDQUE3Qjs7QUFFQSxVQUFNQyxlQUFlTixRQUFRTyxHQUFSLENBQVksVUFBU0MsWUFBVCxFQUF1QjtBQUNoRCxZQUFNQyxPQUFPOUIsS0FBSytCLG9CQUFMLENBQTBCRixZQUExQixDQUFiO0FBQUEsWUFDTUcsY0FBY0YsSUFEcEIsQ0FEZ0QsQ0FFckI7O0FBRTNCLGVBQU9FLFdBQVA7QUFDRCxPQUxjLENBQXJCOztBQU9BVCw4QkFBd0JBLHNCQUFzQlUsTUFBdEIsQ0FBNkJOLFlBQTdCLENBQXhCLENBVitDLENBVXFCOztBQUVwRSxhQUFPSixxQkFBUDtBQUNEOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQi9CLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxyXG4gICAgICBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9zaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCA9IDAsIGNvbnRleHQgPSBuZXcgQ29udGV4dCgpKSB7XHJcbiAgICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgICAgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgaW5kZXggPSBmaXJzdExpbmVJbmRleCwgICAgXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRzW2luZGV4XTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGluZGV4IC0gZmlyc3RMaW5lSW5kZXgsXHJcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IGNvbnRleHQuc2hvdWxkVGVybWluYXRlKGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLkxpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgdGhpcy5ydWxlcyk7XHJcblxyXG4gICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHsgcmV0dXJuIFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICBsZXQgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IE9iamVjdC5rZXlzKFNpZ25pZmljYW50VG9rZW4udHlwZXMpO1xyXG4gICAgXHJcbiAgICBjb25zdCBncmFtbWFyVHlwZXMgPSBncmFtbWFyLm1hcChmdW5jdGlvbihncmFtbWFyRW50cnkpIHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSxcclxuICAgICAgICAgICAgICAgICAgZ3JhbW1hclR5cGUgPSB0eXBlOyAgLy8vXHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGdyYW1tYXJUeXBlO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChncmFtbWFyVHlwZXMpOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19