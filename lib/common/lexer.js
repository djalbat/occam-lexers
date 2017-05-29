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
      return Rules.significantTokenTypesFromGrammar(grammar);
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlcyIsIkNvbnRleHQiLCJDb21tb25MZXhlciIsInJ1bGVzIiwiY29udGVudCIsImZpcnN0TGluZUluZGV4IiwiY29udGV4dCIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnRzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJ0ZXJtaW5hdGUiLCJzaG91bGRUZXJtaW5hdGUiLCJsaW5lIiwiZnJvbUNvbnRlbnQiLCJwdXNoIiwiZ3JhbW1hciIsImZyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLFNBQVIsQ0FEZDtBQUFBLElBRU1FLFVBQVVGLFFBQVEsV0FBUixDQUZoQjs7SUFJTUcsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CTCxJQUFuQixFQUF5QjtBQUFBOztBQUN2QixTQUFLSyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLTCxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztxQ0FFZ0JNLE8sRUFBc0Q7QUFBQSxVQUE3Q0MsY0FBNkMsdUVBQTVCLENBQTRCO0FBQUEsVUFBekJDLE9BQXlCLHVFQUFmLElBQUlMLE9BQUosRUFBZTs7QUFDckUsVUFBTU0sV0FBV0gsUUFBUUksS0FBUixDQUFjLElBQWQsQ0FBakI7QUFBQSxVQUNNQyxRQUFRLEtBQUtDLGlCQUFMLENBQXVCSCxRQUF2QixFQUFpQ0YsY0FBakMsRUFBaURDLE9BQWpELENBRGQ7O0FBR0EsYUFBT0csS0FBUDtBQUNEOzs7c0NBRWlCRixRLEVBQVVGLGMsRUFBZ0JDLE8sRUFBUztBQUNuRCxVQUFNRyxRQUFRLEVBQWQ7O0FBRUEsVUFBSUUsUUFBUU4sY0FBWjtBQUFBLFVBQ0lELFVBQVVHLFNBQVNJLEtBQVQsQ0FEZDs7QUFHQSxhQUFPUCxZQUFZUSxTQUFuQixFQUE4QjtBQUM1QixZQUFNQyxTQUFTRixRQUFRTixjQUF2QjtBQUFBLFlBQ01TLFlBQVlSLFFBQVFTLGVBQVIsQ0FBd0JGLE1BQXhCLENBRGxCOztBQUdBLFlBQUlDLFNBQUosRUFBZTtBQUNiO0FBQ0Q7O0FBRUQsWUFBTUUsT0FBTyxLQUFLbEIsSUFBTCxDQUFVbUIsV0FBVixDQUFzQmIsT0FBdEIsRUFBK0JFLE9BQS9CLEVBQXdDLEtBQUtILEtBQTdDLENBQWI7O0FBRUFNLGNBQU1TLElBQU4sQ0FBV0YsSUFBWDs7QUFFQVosa0JBQVVHLFNBQVMsRUFBRUksS0FBWCxDQUFWO0FBQ0Q7O0FBRUQsYUFBT0YsS0FBUDtBQUNEOzs7cUNBRXVCVSxPLEVBQVM7QUFBRSxhQUFPbkIsTUFBTW9CLFdBQU4sQ0FBa0JELE9BQWxCLENBQVA7QUFBb0M7OztxREFFL0JBLE8sRUFBUztBQUFFLGFBQU9uQixNQUFNcUIsZ0NBQU4sQ0FBdUNGLE9BQXZDLENBQVA7QUFBeUQ7Ozs7OztBQUc5R0csT0FBT0MsT0FBUCxHQUFpQnJCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4vcnVsZXMnKSxcclxuICAgICAgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpO1xyXG5cclxuY2xhc3MgQ29tbW9uTGV4ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBMaW5lKSB7XHJcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XHJcbiAgICB0aGlzLkxpbmUgPSBMaW5lO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCA9IDAsIGNvbnRleHQgPSBuZXcgQ29udGV4dCgpKSB7XHJcbiAgICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgICAgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgaW5kZXggPSBmaXJzdExpbmVJbmRleCwgICAgXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRzW2luZGV4XTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGluZGV4IC0gZmlyc3RMaW5lSW5kZXgsXHJcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IGNvbnRleHQuc2hvdWxkVGVybWluYXRlKGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLkxpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgdGhpcy5ydWxlcyk7XHJcblxyXG4gICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHsgcmV0dXJuIFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7IHJldHVybiBSdWxlcy5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbkxleGVyO1xyXG4iXX0=