'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextAreaSelector = 'textArea#content',
    tokensTextAreaSelector = 'textArea#tokens',
    contentTextArea = new TextArea(contentTextAreaSelector),
    tokensTextArea = new TextArea(tokensTextAreaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'contentTextAreaOnKeyUp',
    value: function contentTextAreaOnKeyUp(handler) {
      contentTextArea.on('keyup', handler);
    }
  }, {
    key: 'updateTokens',
    value: function updateTokens(lexer, lineNumber, minimumLinesLength, previousLineInComment, followingLineInComment) {
      try {
        var contentTextAreaValue = contentTextArea.getValue(),
            content = contentTextAreaValue,
            ///
        contents = content.split(/\n/),
            lines = lexer.linesFromContents(contents, lineNumber, minimumLinesLength, previousLineInComment, followingLineInComment),
            htmls = lines.reduce(function (htmls, line) {
          var lineHTML = line.getHTML(),
              lineNumber = line.getNumber(),
              html = lineNumber + ': ' + lineHTML;

          htmls += html;

          return htmls;
        }, ''),
            tokensTextAreaHTML = htmls; ///

        tokensTextArea.html(tokensTextAreaHTML);

        contentTextArea.removeClass('error');
      } catch (error) {
        contentTextArea.addClass('error');

        Example.clearTokens();
      }
    }
  }, {
    key: 'clearTokens',
    value: function clearTokens() {
      var tokensTextAreaHTML = '';

      tokensTextArea.html(tokensTextAreaHTML);
    }
  }]);

  return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRBcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWEiLCJ0b2tlbnNUZXh0QXJlYSIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIkV4YW1wbGUiLCJoYW5kbGVyIiwib24iLCJsZXhlciIsImxpbmVOdW1iZXIiLCJtaW5pbXVtTGluZXNMZW5ndGgiLCJwcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJmb2xsb3dpbmdMaW5lSW5Db21tZW50IiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsImh0bWxzIiwicmVkdWNlIiwibGluZSIsImxpbmVIVE1MIiwiZ2V0SFRNTCIsImdldE51bWJlciIsImh0bWwiLCJ0b2tlbnNUZXh0QXJlYUhUTUwiLCJyZW1vdmVDbGFzcyIsImVycm9yIiwiYWRkQ2xhc3MiLCJjbGVhclRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLGVBQWVELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRUlFLFdBQVdILE9BQU9HLFFBRnRCO0FBQUEsSUFHSUMsa0JBQWtCRixhQUFhRSxlQUhuQztBQUFBLElBSUlDLG1CQUFtQkgsYUFBYUcsZ0JBSnBDOztBQU1BLElBQUlDLHFCQUFxQixhQUF6QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQyx5QkFBeUIsaUJBRjdCO0FBQUEsSUFHSUMsa0JBQWtCLElBQUlOLFFBQUosQ0FBYUksdUJBQWIsQ0FIdEI7QUFBQSxJQUlJRyxpQkFBaUIsSUFBSVAsUUFBSixDQUFhSyxzQkFBYixDQUpyQjtBQUFBLElBS0lHLGFBQWEsSUFBSVAsZUFBSixDQUFvQkUsa0JBQXBCLENBTGpCO0FBQUEsSUFNSU0sa0JBQWtCUCxpQkFBaUJRLFFBQWpCLENBQTBCRCxlQU5oRDs7QUFRQSxJQUFJUCxnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RPLGVBQWhELEVBQWlFRCxVQUFqRTs7SUFFTUcsTzs7Ozs7OzsyQ0FDMEJDLE8sRUFBUztBQUNyQ04sc0JBQWdCTyxFQUFoQixDQUFtQixPQUFuQixFQUE0QkQsT0FBNUI7QUFDRDs7O2lDQUVtQkUsSyxFQUFPQyxVLEVBQVlDLGtCLEVBQW9CQyxxQixFQUF1QkMsc0IsRUFBd0I7QUFDeEcsVUFBSTtBQUNGLFlBQUlDLHVCQUF1QmIsZ0JBQWdCYyxRQUFoQixFQUEzQjtBQUFBLFlBQ0lDLFVBQVVGLG9CQURkO0FBQUEsWUFDcUM7QUFDakNHLG1CQUFXRCxRQUFRRSxLQUFSLENBQWMsSUFBZCxDQUZmO0FBQUEsWUFHSUMsUUFBUVYsTUFBTVcsaUJBQU4sQ0FBd0JILFFBQXhCLEVBQWtDUCxVQUFsQyxFQUE4Q0Msa0JBQTlDLEVBQWtFQyxxQkFBbEUsRUFBeUZDLHNCQUF6RixDQUhaO0FBQUEsWUFJSVEsUUFBUUYsTUFBTUcsTUFBTixDQUFhLFVBQVNELEtBQVQsRUFBZ0JFLElBQWhCLEVBQXNCO0FBQ3pDLGNBQUlDLFdBQVdELEtBQUtFLE9BQUwsRUFBZjtBQUFBLGNBQ0lmLGFBQWFhLEtBQUtHLFNBQUwsRUFEakI7QUFBQSxjQUVJQyxPQUFVakIsVUFBVixVQUF5QmMsUUFGN0I7O0FBSUFILG1CQUFTTSxJQUFUOztBQUVBLGlCQUFPTixLQUFQO0FBQ0QsU0FSTyxFQVFMLEVBUkssQ0FKWjtBQUFBLFlBYUlPLHFCQUFxQlAsS0FiekIsQ0FERSxDQWMrQjs7QUFFakNuQix1QkFBZXlCLElBQWYsQ0FBb0JDLGtCQUFwQjs7QUFFQTNCLHdCQUFnQjRCLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0QsT0FuQkQsQ0FtQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2Q3Qix3QkFBZ0I4QixRQUFoQixDQUF5QixPQUF6Qjs7QUFFQXpCLGdCQUFRMEIsV0FBUjtBQUNEO0FBQ0Y7OztrQ0FFb0I7QUFDbkIsVUFBSUoscUJBQXFCLEVBQXpCOztBQUVBMUIscUJBQWV5QixJQUFmLENBQW9CQyxrQkFBcEI7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUI1QixPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgZWFzeXVpbGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgIFRleHRBcmVhID0gZWFzeXVpLlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3l1aWxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3l1aWxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBjb250ZW50VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICB0b2tlbnNUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI3Rva2VucycsXG4gICAgY29udGVudFRleHRBcmVhID0gbmV3IFRleHRBcmVhKGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICB0b2tlbnNUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYSh0b2tlbnNUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgIFRPX1RIRV9SSUdIVF9PRiA9IFZlcnRpY2FsU3BsaXR0ZXIuc2l0dWF0ZWQuVE9fVEhFX1JJR0hUX09GO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcignLmxlZnQudmVydGljYWwuc3BsaXR0ZXInLCBUT19USEVfUklHSFRfT0YsIGxlZnRDb2x1bW4pO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIGNvbnRlbnRUZXh0QXJlYU9uS2V5VXAoaGFuZGxlcikge1xuICAgIGNvbnRlbnRUZXh0QXJlYS5vbigna2V5dXAnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb2tlbnMobGV4ZXIsIGxpbmVOdW1iZXIsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBjb250ZW50VGV4dEFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dEFyZWFWYWx1ZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXG4gICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgbGluZU51bWJlciwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxuICAgICAgICAgIGh0bWxzID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKGh0bWxzLCBsaW5lKSB7XG4gICAgICAgICAgICB2YXIgbGluZUhUTUwgPSBsaW5lLmdldEhUTUwoKSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyID0gbGluZS5nZXROdW1iZXIoKSxcbiAgICAgICAgICAgICAgICBodG1sID0gYCR7bGluZU51bWJlcn06ICR7bGluZUhUTUx9YDtcblxuICAgICAgICAgICAgaHRtbHMgKz0gaHRtbDtcblxuICAgICAgICAgICAgcmV0dXJuIGh0bWxzO1xuICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICB0b2tlbnNUZXh0QXJlYUhUTUwgPSBodG1sczsgIC8vL1xuXG4gICAgICB0b2tlbnNUZXh0QXJlYS5odG1sKHRva2Vuc1RleHRBcmVhSFRNTCk7XG5cbiAgICAgIGNvbnRlbnRUZXh0QXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRBcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyVG9rZW5zKCkge1xuICAgIHZhciB0b2tlbnNUZXh0QXJlYUhUTUwgPSAnJztcblxuICAgIHRva2Vuc1RleHRBcmVhLmh0bWwodG9rZW5zVGV4dEFyZWFIVE1MKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=