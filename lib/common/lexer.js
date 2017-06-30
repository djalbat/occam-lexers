'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    Rule = require('./rule'),
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
    key: 'ruleFromEntry',
    value: function ruleFromEntry(entry) {
      return Rule.fromEntry(entry);
    }
  }, {
    key: 'rulesFromEntries',
    value: function rulesFromEntries(entries) {
      return Rules.fromEntries(entries);
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vbGV4ZXIuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJSdWxlIiwiUnVsZXMiLCJDb250ZXh0IiwiQ29tbW9uTGV4ZXIiLCJydWxlcyIsImNvbnRlbnQiLCJmaXJzdExpbmVJbmRleCIsImNvbnRleHQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsImluZGV4IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwidGVybWluYXRlIiwic2hvdWxkVGVybWluYXRlIiwibGluZSIsImZyb21Db250ZW50IiwicHVzaCIsImVudHJ5IiwiZnJvbUVudHJ5IiwiZW50cmllcyIsImZyb21FbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxRQUFSLENBRGI7QUFBQSxJQUVNRSxRQUFRRixRQUFRLFNBQVIsQ0FGZDtBQUFBLElBR01HLFVBQVVILFFBQVEsV0FBUixDQUhoQjs7SUFLTUksVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CTixJQUFuQixFQUF5QjtBQUFBOztBQUN2QixTQUFLTSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLTixJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztxQ0FFZ0JPLE8sRUFBc0Q7QUFBQSxVQUE3Q0MsY0FBNkMsdUVBQTVCLENBQTRCO0FBQUEsVUFBekJDLE9BQXlCLHVFQUFmLElBQUlMLE9BQUosRUFBZTs7QUFDckUsVUFBTU0sV0FBV0gsUUFBUUksS0FBUixDQUFjLElBQWQsQ0FBakI7QUFBQSxVQUNNQyxRQUFRLEtBQUtDLGlCQUFMLENBQXVCSCxRQUF2QixFQUFpQ0YsY0FBakMsRUFBaURDLE9BQWpELENBRGQ7O0FBR0EsYUFBT0csS0FBUDtBQUNEOzs7c0NBRWlCRixRLEVBQVVGLGMsRUFBZ0JDLE8sRUFBUztBQUNuRCxVQUFNRyxRQUFRLEVBQWQ7O0FBRUEsVUFBSUUsUUFBUU4sY0FBWjtBQUFBLFVBQ0lELFVBQVVHLFNBQVNJLEtBQVQsQ0FEZDs7QUFHQSxhQUFPUCxZQUFZUSxTQUFuQixFQUE4QjtBQUM1QixZQUFNQyxTQUFTRixRQUFRTixjQUF2QjtBQUFBLFlBQ01TLFlBQVlSLFFBQVFTLGVBQVIsQ0FBd0JGLE1BQXhCLENBRGxCOztBQUdBLFlBQUlDLFNBQUosRUFBZTtBQUNiO0FBQ0Q7O0FBRUQsWUFBTUUsT0FBTyxLQUFLbkIsSUFBTCxDQUFVb0IsV0FBVixDQUFzQmIsT0FBdEIsRUFBK0JFLE9BQS9CLEVBQXdDLEtBQUtILEtBQTdDLENBQWI7O0FBRUFNLGNBQU1TLElBQU4sQ0FBV0YsSUFBWDs7QUFFQVosa0JBQVVHLFNBQVMsRUFBRUksS0FBWCxDQUFWO0FBQ0Q7O0FBRUQsYUFBT0YsS0FBUDtBQUNEOzs7a0NBRW9CVSxLLEVBQU87QUFBRSxhQUFPcEIsS0FBS3FCLFNBQUwsQ0FBZUQsS0FBZixDQUFQO0FBQStCOzs7cUNBRXJDRSxPLEVBQVM7QUFBRSxhQUFPckIsTUFBTXNCLFdBQU4sQ0FBa0JELE9BQWxCLENBQVA7QUFBb0M7Ozs7OztBQUd6RUUsT0FBT0MsT0FBUCxHQUFpQnRCLFdBQWpCIiwiZmlsZSI6ImxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4ID0gMCwgY29udGV4dCA9IG5ldyBDb250ZXh0KCkpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgICAgICBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICBcclxuICAgIGxldCBpbmRleCA9IGZpcnN0TGluZUluZGV4LCAgICBcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gaW5kZXggLSBmaXJzdExpbmVJbmRleCxcclxuICAgICAgICAgICAgdGVybWluYXRlID0gY29udGV4dC5zaG91bGRUZXJtaW5hdGUobGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgcnVsZUZyb21FbnRyeShlbnRyeSkgeyByZXR1cm4gUnVsZS5mcm9tRW50cnkoZW50cnkpOyB9XHJcbiAgXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gUnVsZXMuZnJvbUVudHJpZXMoZW50cmllcyk7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIl19