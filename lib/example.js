'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout'),
    Textarea = easy.Textarea,
    options = easylayout.options,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextareaSelector = 'textArea#content',
    tokensTextareaSelector = 'textArea#tokens',
    contentTextarea = new Textarea(contentTextareaSelector),
    tokensTextarea = new Textarea(tokensTextareaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = options.situated.TO_THE_RIGHT_OF;

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
        contents = content.split(/\n/),
            lines = lexer.linesFromContents(contents, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwib3B0aW9ucyIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWEiLCJ0b2tlbnNUZXh0YXJlYSIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIkV4YW1wbGUiLCJoYW5kbGVyIiwib24iLCJsZXhlciIsImZpcnN0TGluZUluZGV4IiwibWluaW11bUxpbmVzTGVuZ3RoIiwicHJldmlvdXNMaW5lSW5Db21tZW50IiwiZm9sbG93aW5nTGluZUluQ29tbWVudCIsImNvbnRlbnRUZXh0YXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJjb250ZW50IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudHMiLCJodG1scyIsInJlZHVjZSIsImxpbmUiLCJpbmRleCIsImxpbmVIVE1MIiwiZ2V0SFRNTCIsImxpbmVOdW1iZXIiLCJodG1sIiwidG9rZW5zVGV4dGFyZWFIVE1MIiwicmVtb3ZlQ2xhc3MiLCJlcnJvciIsImFkZENsYXNzIiwiY2xlYXJUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxNQUFSLENBQVg7QUFBQSxJQUNJQyxhQUFhRCxRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVJRSxXQUFXSCxLQUFLRyxRQUZwQjtBQUFBLElBR0lDLFVBQVVGLFdBQVdFLE9BSHpCO0FBQUEsSUFJSUMsa0JBQWtCSCxXQUFXRyxlQUpqQztBQUFBLElBS0lDLG1CQUFtQkosV0FBV0ksZ0JBTGxDOztBQU9BLElBQUlDLHFCQUFxQixhQUF6QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQyx5QkFBeUIsaUJBRjdCO0FBQUEsSUFHSUMsa0JBQWtCLElBQUlQLFFBQUosQ0FBYUssdUJBQWIsQ0FIdEI7QUFBQSxJQUlJRyxpQkFBaUIsSUFBSVIsUUFBSixDQUFhTSxzQkFBYixDQUpyQjtBQUFBLElBS0lHLGFBQWEsSUFBSVAsZUFBSixDQUFvQkUsa0JBQXBCLENBTGpCO0FBQUEsSUFNSU0sa0JBQWtCVCxRQUFRVSxRQUFSLENBQWlCRCxlQU52Qzs7QUFRQSxJQUFJUCxnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RPLGVBQWhELEVBQWlFRCxVQUFqRTs7SUFFTUcsTzs7Ozs7OzsyQ0FDMEJDLE8sRUFBUztBQUNyQ04sc0JBQWdCTyxFQUFoQixDQUFtQixPQUFuQixFQUE0QkQsT0FBNUI7QUFDRDs7O2lDQUVtQkUsSyxFQUFPQyxjLEVBQWdCQyxrQixFQUFvQkMscUIsRUFBdUJDLHNCLEVBQXdCO0FBQzVHLFVBQUk7QUFDRixZQUFJQyx1QkFBdUJiLGdCQUFnQmMsUUFBaEIsRUFBM0I7QUFBQSxZQUNJQyxVQUFVRixvQkFEZDtBQUFBLFlBQ3FDO0FBQ2pDRyxtQkFBV0QsUUFBUUUsS0FBUixDQUFjLElBQWQsQ0FGZjtBQUFBLFlBR0lDLFFBQVFWLE1BQU1XLGlCQUFOLENBQXdCSCxRQUF4QixFQUFrQ1AsY0FBbEMsRUFBa0RDLGtCQUFsRCxFQUFzRUMscUJBQXRFLEVBQTZGQyxzQkFBN0YsQ0FIWjtBQUFBLFlBSUlRLFFBQVFGLE1BQU1HLE1BQU4sQ0FBYSxVQUFTRCxLQUFULEVBQWdCRSxJQUFoQixFQUFzQkMsS0FBdEIsRUFBNkI7QUFDaEQsY0FBSUMsV0FBV0YsS0FBS0csT0FBTCxFQUFmO0FBQUEsY0FDSUMsYUFBYUgsUUFBUSxDQUR6QjtBQUFBLGNBRUlJLE9BQVVELFVBQVYsVUFBeUJGLFFBRjdCOztBQUlBSixtQkFBU08sSUFBVDs7QUFFQSxpQkFBT1AsS0FBUDtBQUNELFNBUk8sRUFRTCxFQVJLLENBSlo7QUFBQSxZQWFJUSxxQkFBcUJSLEtBYnpCLENBREUsQ0FjK0I7O0FBRWpDbkIsdUJBQWUwQixJQUFmLENBQW9CQyxrQkFBcEI7O0FBRUE1Qix3QkFBZ0I2QixXQUFoQixDQUE0QixPQUE1QjtBQUNELE9BbkJELENBbUJFLE9BQU9DLEtBQVAsRUFBYztBQUNkOUIsd0JBQWdCK0IsUUFBaEIsQ0FBeUIsT0FBekI7O0FBRUExQixnQkFBUTJCLFdBQVI7QUFDRDtBQUNGOzs7a0NBRW9CO0FBQ25CLFVBQUlKLHFCQUFxQixFQUF6Qjs7QUFFQTNCLHFCQUFlMEIsSUFBZixDQUFvQkMsa0JBQXBCO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCN0IsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0JyksXG4gICAgVGV4dGFyZWEgPSBlYXN5LlRleHRhcmVhLFxuICAgIG9wdGlvbnMgPSBlYXN5bGF5b3V0Lm9wdGlvbnMsXG4gICAgU2l6ZWFibGVFbGVtZW50ID0gZWFzeWxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3lsYXlvdXQuVmVydGljYWxTcGxpdHRlcjtcblxudmFyIGxlZnRDb2x1bW5TZWxlY3RvciA9ICcjbGVmdENvbHVtbicsXG4gICAgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjY29udGVudCcsXG4gICAgdG9rZW5zVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSN0b2tlbnMnLFxuICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgdG9rZW5zVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEodG9rZW5zVGV4dGFyZWFTZWxlY3RvciksXG4gICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICBUT19USEVfUklHSFRfT0YgPSBvcHRpb25zLnNpdHVhdGVkLlRPX1RIRV9SSUdIVF9PRjtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBjb250ZW50VGV4dGFyZWFPbktleVVwKGhhbmRsZXIpIHtcbiAgICBjb250ZW50VGV4dGFyZWEub24oJ2tleXVwJywgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9rZW5zKGxleGVyLCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAgLy8vXG4gICAgICAgICAgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcbiAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxuICAgICAgICAgIGh0bWxzID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKGh0bWxzLCBsaW5lLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGxpbmVIVE1MID0gbGluZS5nZXRIVE1MKCksXG4gICAgICAgICAgICAgICAgbGluZU51bWJlciA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICBodG1sID0gYCR7bGluZU51bWJlcn06ICR7bGluZUhUTUx9YDtcblxuICAgICAgICAgICAgaHRtbHMgKz0gaHRtbDtcblxuICAgICAgICAgICAgcmV0dXJuIGh0bWxzO1xuICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICB0b2tlbnNUZXh0YXJlYUhUTUwgPSBodG1sczsgIC8vL1xuXG4gICAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyVG9rZW5zKCkge1xuICAgIHZhciB0b2tlbnNUZXh0YXJlYUhUTUwgPSAnJztcblxuICAgIHRva2Vuc1RleHRhcmVhLmh0bWwodG9rZW5zVGV4dGFyZWFIVE1MKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=