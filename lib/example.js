'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var Textarea = easy.Textarea;
var SizeableElement = easylayout.SizeableElement;
var VerticalSplitter = easylayout.VerticalSplitter;
var options = easylayout.options;
var TO_THE_RIGHT_OF = options.TO_THE_RIGHT_OF;


var leftColumnSelector = '#leftColumn',
    contentTextareaSelector = 'textArea#content',
    tokensTextareaSelector = 'textArea#tokens',
    contentTextarea = new Textarea(contentTextareaSelector),
    tokensTextarea = new Textarea(tokensTextareaSelector),
    leftColumn = new SizeableElement(leftColumnSelector);

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'contentTextareaOnKeyUp',
    value: function contentTextareaOnKeyUp(handler) {
      contentTextarea.on('keyup', handler);
    }
  }, {
    key: 'updateTokens',
    value: function updateTokens(lexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue,
            ///
        lines = lexer.linesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment),
            htmls = lines.reduce(function (htmls, line, index) {
          var lineHTML = line.getHTML(),
              lineNumber = index + 1,
              html = lineNumber + ': ' + lineHTML;

          htmls += html;

          return htmls;
        }, ''),
            tokensTextareaHTML = htmls; ///

        tokensTextarea.html(tokensTextareaHTML);

        contentTextarea.removeClass('error');
      } catch (error) {
        contentTextarea.addClass('error');

        Example.clearTokens();
      }
    }
  }, {
    key: 'clearTokens',
    value: function clearTokens() {
      var tokensTextareaHTML = '';

      tokensTextarea.html(tokensTextareaHTML);
    }
  }]);

  return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsIm9wdGlvbnMiLCJUT19USEVfUklHSFRfT0YiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWEiLCJ0b2tlbnNUZXh0YXJlYSIsImxlZnRDb2x1bW4iLCJFeGFtcGxlIiwiaGFuZGxlciIsIm9uIiwibGV4ZXIiLCJmaXJzdExpbmVJbmRleCIsIm1pbmltdW1MaW5lc0xlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImZvbGxvd2luZ0xpbmVJbkNvbW1lbnQiLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwiY29udGVudCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudCIsImh0bWxzIiwicmVkdWNlIiwibGluZSIsImluZGV4IiwibGluZUhUTUwiLCJnZXRIVE1MIiwibGluZU51bWJlciIsImh0bWwiLCJ0b2tlbnNUZXh0YXJlYUhUTUwiLCJyZW1vdmVDbGFzcyIsImVycm9yIiwiYWRkQ2xhc3MiLCJjbGVhclRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHTSxJQUFFRSxRQUFGLEdBQWVILElBQWYsQ0FBRUcsUUFBRjtJQUNFQyxlLEdBQStDRixVLENBQS9DRSxlO0lBQWlCQyxnQixHQUE4QkgsVSxDQUE5QkcsZ0I7QUFBbkIsSUFBcUNDLE9BQXJDLEdBQWlESixVQUFqRCxDQUFxQ0ksT0FBckM7SUFDRUMsZSxHQUFvQkQsTyxDQUFwQkMsZTs7O0FBRVIsSUFBTUMscUJBQXFCLGFBQTNCO0FBQUEsSUFDTUMsMEJBQTBCLGtCQURoQztBQUFBLElBRU1DLHlCQUF5QixpQkFGL0I7QUFBQSxJQUdNQyxrQkFBa0IsSUFBSVIsUUFBSixDQUFhTSx1QkFBYixDQUh4QjtBQUFBLElBSU1HLGlCQUFpQixJQUFJVCxRQUFKLENBQWFPLHNCQUFiLENBSnZCO0FBQUEsSUFLTUcsYUFBYSxJQUFJVCxlQUFKLENBQW9CSSxrQkFBcEIsQ0FMbkI7O0FBT0EsSUFBSUgsZ0JBQUosQ0FBcUIseUJBQXJCLEVBQWdERSxlQUFoRCxFQUFpRU0sVUFBakU7O0lBRU1DLE87Ozs7Ozs7MkNBQzBCQyxPLEVBQVM7QUFDckNKLHNCQUFnQkssRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEJELE9BQTVCO0FBQ0Q7OztpQ0FFbUJFLEssRUFBT0MsYyxFQUFnQkMsa0IsRUFBb0JDLHFCLEVBQXVCQyxzQixFQUF3QjtBQUM1RyxVQUFJO0FBQ0YsWUFBTUMsdUJBQXVCWCxnQkFBZ0JZLFFBQWhCLEVBQTdCO0FBQUEsWUFDTUMsVUFBVUYsb0JBRGhCO0FBQUEsWUFDdUM7QUFDakNHLGdCQUFRUixNQUFNUyxnQkFBTixDQUF1QkYsT0FBdkIsRUFBZ0NOLGNBQWhDLEVBQWdEQyxrQkFBaEQsRUFBb0VDLHFCQUFwRSxFQUEyRkMsc0JBQTNGLENBRmQ7QUFBQSxZQUdNTSxRQUFRRixNQUFNRyxNQUFOLENBQWEsVUFBU0QsS0FBVCxFQUFnQkUsSUFBaEIsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ2hELGNBQU1DLFdBQVdGLEtBQUtHLE9BQUwsRUFBakI7QUFBQSxjQUNNQyxhQUFhSCxRQUFRLENBRDNCO0FBQUEsY0FFTUksT0FBVUQsVUFBVixVQUF5QkYsUUFGL0I7O0FBSUFKLG1CQUFTTyxJQUFUOztBQUVBLGlCQUFPUCxLQUFQO0FBQ0QsU0FSTyxFQVFMLEVBUkssQ0FIZDtBQUFBLFlBWU1RLHFCQUFxQlIsS0FaM0IsQ0FERSxDQWFpQzs7QUFFbkNmLHVCQUFlc0IsSUFBZixDQUFvQkMsa0JBQXBCOztBQUVBeEIsd0JBQWdCeUIsV0FBaEIsQ0FBNEIsT0FBNUI7QUFDRCxPQWxCRCxDQWtCRSxPQUFPQyxLQUFQLEVBQWM7QUFDZDFCLHdCQUFnQjJCLFFBQWhCLENBQXlCLE9BQXpCOztBQUVBeEIsZ0JBQVF5QixXQUFSO0FBQ0Q7QUFDRjs7O2tDQUVvQjtBQUNuQixVQUFNSixxQkFBcUIsRUFBM0I7O0FBRUF2QixxQkFBZXNCLElBQWYsQ0FBb0JDLGtCQUFwQjtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQjNCLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyLCBvcHRpb25zIH0gPSBlYXN5bGF5b3V0LFxuICAgICAgeyBUT19USEVfUklHSFRfT0YgfSA9IG9wdGlvbnM7XG5cbmNvbnN0IGxlZnRDb2x1bW5TZWxlY3RvciA9ICcjbGVmdENvbHVtbicsXG4gICAgICBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICAgIHRva2Vuc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICB0b2tlbnNUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYSh0b2tlbnNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGxlZnRDb2x1bW4gPSBuZXcgU2l6ZWFibGVFbGVtZW50KGxlZnRDb2x1bW5TZWxlY3Rvcik7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgY29udGVudFRleHRhcmVhT25LZXlVcChoYW5kbGVyKSB7XG4gICAgY29udGVudFRleHRhcmVhLm9uKCdrZXl1cCcsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRva2VucyhsZXhlciwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWUsICAvLy9cbiAgICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxuICAgICAgICAgICAgaHRtbHMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24oaHRtbHMsIGxpbmUsIGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGxpbmVIVE1MID0gbGluZS5nZXRIVE1MKCksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXIgPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPSBgJHtsaW5lTnVtYmVyfTogJHtsaW5lSFRNTH1gO1xuICBcbiAgICAgICAgICAgICAgaHRtbHMgKz0gaHRtbDtcbiAgXG4gICAgICAgICAgICAgIHJldHVybiBodG1scztcbiAgICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICAgIHRva2Vuc1RleHRhcmVhSFRNTCA9IGh0bWxzOyAgLy8vXG5cbiAgICAgIHRva2Vuc1RleHRhcmVhLmh0bWwodG9rZW5zVGV4dGFyZWFIVE1MKTtcblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICAgIEV4YW1wbGUuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIl19