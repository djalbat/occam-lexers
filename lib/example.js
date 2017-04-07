'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var Textarea = easy.Textarea,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter,
    options = easylayout.options,
    TO_THE_RIGHT_OF = options.TO_THE_RIGHT_OF;


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsIm9wdGlvbnMiLCJUT19USEVfUklHSFRfT0YiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWEiLCJ0b2tlbnNUZXh0YXJlYSIsImxlZnRDb2x1bW4iLCJFeGFtcGxlIiwiaGFuZGxlciIsIm9uIiwibGV4ZXIiLCJmaXJzdExpbmVJbmRleCIsIm1pbmltdW1MaW5lc0xlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImZvbGxvd2luZ0xpbmVJbkNvbW1lbnQiLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwiY29udGVudCIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnRzIiwiaHRtbHMiLCJyZWR1Y2UiLCJsaW5lIiwiaW5kZXgiLCJsaW5lSFRNTCIsImdldEhUTUwiLCJsaW5lTnVtYmVyIiwiaHRtbCIsInRva2Vuc1RleHRhcmVhSFRNTCIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsImNsZWFyVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdNLElBQUVFLFFBQUYsR0FBZUgsSUFBZixDQUFFRyxRQUFGO0FBQUEsSUFDRUMsZUFERixHQUNpREYsVUFEakQsQ0FDRUUsZUFERjtBQUFBLElBQ21CQyxnQkFEbkIsR0FDaURILFVBRGpELENBQ21CRyxnQkFEbkI7QUFBQSxJQUNxQ0MsT0FEckMsR0FDaURKLFVBRGpELENBQ3FDSSxPQURyQztBQUFBLElBRUVDLGVBRkYsR0FFc0JELE9BRnRCLENBRUVDLGVBRkY7OztBQUlOLElBQU1DLHFCQUFxQixhQUEzQjtBQUFBLElBQ01DLDBCQUEwQixrQkFEaEM7QUFBQSxJQUVNQyx5QkFBeUIsaUJBRi9CO0FBQUEsSUFHTUMsa0JBQWtCLElBQUlSLFFBQUosQ0FBYU0sdUJBQWIsQ0FIeEI7QUFBQSxJQUlNRyxpQkFBaUIsSUFBSVQsUUFBSixDQUFhTyxzQkFBYixDQUp2QjtBQUFBLElBS01HLGFBQWEsSUFBSVQsZUFBSixDQUFvQkksa0JBQXBCLENBTG5COztBQU9BLElBQUlILGdCQUFKLENBQXFCLHlCQUFyQixFQUFnREUsZUFBaEQsRUFBaUVNLFVBQWpFOztJQUVNQyxPOzs7Ozs7OzJDQUMwQkMsTyxFQUFTO0FBQ3JDSixzQkFBZ0JLLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCRCxPQUE1QjtBQUNEOzs7aUNBRW1CRSxLLEVBQU9DLGMsRUFBZ0JDLGtCLEVBQW9CQyxxQixFQUF1QkMsc0IsRUFBd0I7QUFDNUcsVUFBSTtBQUNGLFlBQU1DLHVCQUF1QlgsZ0JBQWdCWSxRQUFoQixFQUE3QjtBQUFBLFlBQ01DLFVBQVVGLG9CQURoQjtBQUFBLFlBQ3VDO0FBQ2pDRyxtQkFBV0QsUUFBUUUsS0FBUixDQUFjLElBQWQsQ0FGakI7QUFBQSxZQUdNQyxRQUFRVixNQUFNVyxpQkFBTixDQUF3QkgsUUFBeEIsRUFBa0NQLGNBQWxDLEVBQWtEQyxrQkFBbEQsRUFBc0VDLHFCQUF0RSxFQUE2RkMsc0JBQTdGLENBSGQ7QUFBQSxZQUlNUSxRQUFRRixNQUFNRyxNQUFOLENBQWEsVUFBU0QsS0FBVCxFQUFnQkUsSUFBaEIsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ2hELGNBQU1DLFdBQVdGLEtBQUtHLE9BQUwsRUFBakI7QUFBQSxjQUNNQyxhQUFhSCxRQUFRLENBRDNCO0FBQUEsY0FFTUksT0FBVUQsVUFBVixVQUF5QkYsUUFGL0I7O0FBSUFKLG1CQUFTTyxJQUFUOztBQUVBLGlCQUFPUCxLQUFQO0FBQ0QsU0FSTyxFQVFMLEVBUkssQ0FKZDtBQUFBLFlBYU1RLHFCQUFxQlIsS0FiM0IsQ0FERSxDQWNpQzs7QUFFbkNqQix1QkFBZXdCLElBQWYsQ0FBb0JDLGtCQUFwQjs7QUFFQTFCLHdCQUFnQjJCLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0QsT0FuQkQsQ0FtQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2Q1Qix3QkFBZ0I2QixRQUFoQixDQUF5QixPQUF6Qjs7QUFFQTFCLGdCQUFRMkIsV0FBUjtBQUNEO0FBQ0Y7OztrQ0FFb0I7QUFDbkIsVUFBTUoscUJBQXFCLEVBQTNCOztBQUVBekIscUJBQWV3QixJQUFmLENBQW9CQyxrQkFBcEI7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUI3QixPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciwgb3B0aW9ucyB9ID0gZWFzeWxheW91dCxcbiAgICAgIHsgVE9fVEhFX1JJR0hUX09GIH0gPSBvcHRpb25zO1xuXG5jb25zdCBsZWZ0Q29sdW1uU2VsZWN0b3IgPSAnI2xlZnRDb2x1bW4nLFxuICAgICAgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjY29udGVudCcsXG4gICAgICB0b2tlbnNUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI3Rva2VucycsXG4gICAgICBjb250ZW50VGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoY29udGVudFRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgdG9rZW5zVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEodG9rZW5zVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcignLmxlZnQudmVydGljYWwuc3BsaXR0ZXInLCBUT19USEVfUklHSFRfT0YsIGxlZnRDb2x1bW4pO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIGNvbnRlbnRUZXh0YXJlYU9uS2V5VXAoaGFuZGxlcikge1xuICAgIGNvbnRlbnRUZXh0YXJlYS5vbigna2V5dXAnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb2tlbnMobGV4ZXIsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAgLy8vXG4gICAgICAgICAgICBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxuICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcbiAgICAgICAgICAgIGh0bWxzID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKGh0bWxzLCBsaW5lLCBpbmRleCkge1xuICAgICAgICAgICAgICBjb25zdCBsaW5lSFRNTCA9IGxpbmUuZ2V0SFRNTCgpLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBodG1sID0gYCR7bGluZU51bWJlcn06ICR7bGluZUhUTUx9YDtcbiAgXG4gICAgICAgICAgICAgIGh0bWxzICs9IGh0bWw7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gaHRtbHM7XG4gICAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgICB0b2tlbnNUZXh0YXJlYUhUTUwgPSBodG1sczsgIC8vL1xuXG4gICAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2Vuc1RleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgdG9rZW5zVGV4dGFyZWEuaHRtbCh0b2tlbnNUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==