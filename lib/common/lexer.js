'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    Rules = require('./rules'),
    Context = require('./context');

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
      return Rules.fromGrammar(grammar);
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbnRleHQiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsImZpcnN0TGluZUluZGV4IiwiY29udGV4dCIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnRzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJ0ZXJtaW5hdGUiLCJzaG91bGRUZXJtaW5hdGUiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJwdXNoIiwiZ3JhbW1hciIsImZyb21HcmFtbWFyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxTQUFSLENBRGQ7QUFBQSxJQUVNRSxVQUFVRixRQUFRLFdBQVIsQ0FGaEI7O0lBSU1HLFc7QUFDSix1QkFBWUMsS0FBWixFQUFtQkwsSUFBbkIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0ssS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0wsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7cUNBRWdCTSxPLEVBQXNEO0FBQUEsVUFBN0NDLGNBQTZDLHVFQUE1QixDQUE0QjtBQUFBLFVBQXpCQyxPQUF5Qix1RUFBZixJQUFJTCxPQUFKLEVBQWU7O0FBQ3JFLFVBQU1NLFdBQVdILFFBQVFJLEtBQVIsQ0FBYyxJQUFkLENBQWpCO0FBQUEsVUFDTUMsUUFBUSxLQUFLQyxpQkFBTCxDQUF1QkgsUUFBdkIsRUFBaUNGLGNBQWpDLEVBQWlEQyxPQUFqRCxDQURkOztBQUdBLGFBQU9HLEtBQVA7QUFDRDs7O3NDQUVpQkYsUSxFQUFVRixjLEVBQWdCQyxPLEVBQVM7QUFDbkQsVUFBTUcsUUFBUSxFQUFkOztBQUVBLFVBQUlFLFFBQVFOLGNBQVo7QUFBQSxVQUNJRCxVQUFVRyxTQUFTSSxLQUFULENBRGQ7O0FBR0EsYUFBT1AsWUFBWVEsU0FBbkIsRUFBOEI7QUFDNUIsWUFBTUMsU0FBU0YsUUFBUU4sY0FBdkI7QUFBQSxZQUNNUyxZQUFZUixRQUFRUyxlQUFSLENBQXdCRixNQUF4QixDQURsQjs7QUFHQSxZQUFJQyxTQUFKLEVBQWU7QUFDYjtBQUNEOztBQUVELFlBQU1FLE9BQU8sS0FBS2xCLElBQUwsQ0FBVW1CLFdBQVYsQ0FBc0JiLE9BQXRCLEVBQStCRSxPQUEvQixFQUF3QyxLQUFLSCxLQUE3QyxDQUFiOztBQUVBTSxjQUFNUyxJQUFOLENBQVdGLElBQVg7O0FBRUFaLGtCQUFVRyxTQUFTLEVBQUVJLEtBQVgsQ0FBVjtBQUNEOztBQUVELGFBQU9GLEtBQVA7QUFDRDs7O3FDQUV1QlUsTyxFQUFTO0FBQUUsYUFBT25CLE1BQU1vQixXQUFOLENBQWtCRCxPQUFsQixDQUFQO0FBQW9DOzs7cURBRS9CQSxPLEVBQVM7QUFBRSxhQUFPbkIsTUFBTW9CLFdBQU4sQ0FBa0JELE9BQWxCLENBQVA7QUFBb0M7Ozs7OztBQUd6RkUsT0FBT0MsT0FBUCxHQUFpQnBCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCA9IDAsIGNvbnRleHQgPSBuZXcgQ29udGV4dCgpKSB7XHJcbiAgICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgICAgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgaW5kZXggPSBmaXJzdExpbmVJbmRleCwgICAgXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRzW2luZGV4XTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGluZGV4IC0gZmlyc3RMaW5lSW5kZXgsXHJcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IGNvbnRleHQuc2hvdWxkVGVybWluYXRlKGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLkxpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgdGhpcy5ydWxlcyk7XHJcblxyXG4gICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHsgcmV0dXJuIFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7IHJldHVybiBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=