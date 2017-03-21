'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout'),
    TextArea = easy.TextArea,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;

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
    value: function updateTokens(lexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      try {
        var contentTextAreaValue = contentTextArea.getValue(),
            content = contentTextAreaValue,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRBcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImxlZnRDb2x1bW5TZWxlY3RvciIsImNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yIiwidG9rZW5zVGV4dEFyZWFTZWxlY3RvciIsImNvbnRlbnRUZXh0QXJlYSIsInRva2Vuc1RleHRBcmVhIiwibGVmdENvbHVtbiIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiRXhhbXBsZSIsImhhbmRsZXIiLCJvbiIsImxleGVyIiwiZmlyc3RMaW5lSW5kZXgiLCJtaW5pbXVtTGluZXNMZW5ndGgiLCJwcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJmb2xsb3dpbmdMaW5lSW5Db21tZW50IiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsImh0bWxzIiwicmVkdWNlIiwibGluZSIsImluZGV4IiwibGluZUhUTUwiLCJnZXRIVE1MIiwibGluZU51bWJlciIsImh0bWwiLCJ0b2tlbnNUZXh0QXJlYUhUTUwiLCJyZW1vdmVDbGFzcyIsImVycm9yIiwiYWRkQ2xhc3MiLCJjbGVhclRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLE1BQVIsQ0FBWDtBQUFBLElBQ0lDLGFBQWFELFFBQVEsYUFBUixDQURqQjtBQUFBLElBRUlFLFdBQVdILEtBQUtHLFFBRnBCO0FBQUEsSUFHSUMsa0JBQWtCRixXQUFXRSxlQUhqQztBQUFBLElBSUlDLG1CQUFtQkgsV0FBV0csZ0JBSmxDOztBQU1BLElBQUlDLHFCQUFxQixhQUF6QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQyx5QkFBeUIsaUJBRjdCO0FBQUEsSUFHSUMsa0JBQWtCLElBQUlOLFFBQUosQ0FBYUksdUJBQWIsQ0FIdEI7QUFBQSxJQUlJRyxpQkFBaUIsSUFBSVAsUUFBSixDQUFhSyxzQkFBYixDQUpyQjtBQUFBLElBS0lHLGFBQWEsSUFBSVAsZUFBSixDQUFvQkUsa0JBQXBCLENBTGpCO0FBQUEsSUFNSU0sa0JBQWtCUCxpQkFBaUJRLFFBQWpCLENBQTBCRCxlQU5oRDs7QUFRQSxJQUFJUCxnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RPLGVBQWhELEVBQWlFRCxVQUFqRTs7SUFFTUcsTzs7Ozs7OzsyQ0FDMEJDLE8sRUFBUztBQUNyQ04sc0JBQWdCTyxFQUFoQixDQUFtQixPQUFuQixFQUE0QkQsT0FBNUI7QUFDRDs7O2lDQUVtQkUsSyxFQUFPQyxjLEVBQWdCQyxrQixFQUFvQkMscUIsRUFBdUJDLHNCLEVBQXdCO0FBQzVHLFVBQUk7QUFDRixZQUFJQyx1QkFBdUJiLGdCQUFnQmMsUUFBaEIsRUFBM0I7QUFBQSxZQUNJQyxVQUFVRixvQkFEZDtBQUFBLFlBQ3FDO0FBQ2pDRyxtQkFBV0QsUUFBUUUsS0FBUixDQUFjLElBQWQsQ0FGZjtBQUFBLFlBR0lDLFFBQVFWLE1BQU1XLGlCQUFOLENBQXdCSCxRQUF4QixFQUFrQ1AsY0FBbEMsRUFBa0RDLGtCQUFsRCxFQUFzRUMscUJBQXRFLEVBQTZGQyxzQkFBN0YsQ0FIWjtBQUFBLFlBSUlRLFFBQVFGLE1BQU1HLE1BQU4sQ0FBYSxVQUFTRCxLQUFULEVBQWdCRSxJQUFoQixFQUFzQkMsS0FBdEIsRUFBNkI7QUFDaEQsY0FBSUMsV0FBV0YsS0FBS0csT0FBTCxFQUFmO0FBQUEsY0FDSUMsYUFBYUgsUUFBUSxDQUR6QjtBQUFBLGNBRUlJLE9BQVVELFVBQVYsVUFBeUJGLFFBRjdCOztBQUlBSixtQkFBU08sSUFBVDs7QUFFQSxpQkFBT1AsS0FBUDtBQUNELFNBUk8sRUFRTCxFQVJLLENBSlo7QUFBQSxZQWFJUSxxQkFBcUJSLEtBYnpCLENBREUsQ0FjK0I7O0FBRWpDbkIsdUJBQWUwQixJQUFmLENBQW9CQyxrQkFBcEI7O0FBRUE1Qix3QkFBZ0I2QixXQUFoQixDQUE0QixPQUE1QjtBQUNELE9BbkJELENBbUJFLE9BQU9DLEtBQVAsRUFBYztBQUNkOUIsd0JBQWdCK0IsUUFBaEIsQ0FBeUIsT0FBekI7O0FBRUExQixnQkFBUTJCLFdBQVI7QUFDRDtBQUNGOzs7a0NBRW9CO0FBQ25CLFVBQUlKLHFCQUFxQixFQUF6Qjs7QUFFQTNCLHFCQUFlMEIsSUFBZixDQUFvQkMsa0JBQXBCO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCN0IsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0JyksXG4gICAgVGV4dEFyZWEgPSBlYXN5LlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3lsYXlvdXQuU2l6ZWFibGVFbGVtZW50LFxuICAgIFZlcnRpY2FsU3BsaXR0ZXIgPSBlYXN5bGF5b3V0LlZlcnRpY2FsU3BsaXR0ZXI7XG5cbnZhciBsZWZ0Q29sdW1uU2VsZWN0b3IgPSAnI2xlZnRDb2x1bW4nLFxuICAgIGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2NvbnRlbnQnLFxuICAgIHRva2Vuc1RleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICBjb250ZW50VGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoY29udGVudFRleHRBcmVhU2VsZWN0b3IpLFxuICAgIHRva2Vuc1RleHRBcmVhID0gbmV3IFRleHRBcmVhKHRva2Vuc1RleHRBcmVhU2VsZWN0b3IpLFxuICAgIGxlZnRDb2x1bW4gPSBuZXcgU2l6ZWFibGVFbGVtZW50KGxlZnRDb2x1bW5TZWxlY3RvciksXG4gICAgVE9fVEhFX1JJR0hUX09GID0gVmVydGljYWxTcGxpdHRlci5zaXR1YXRlZC5UT19USEVfUklHSFRfT0Y7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgY29udGVudFRleHRBcmVhT25LZXlVcChoYW5kbGVyKSB7XG4gICAgY29udGVudFRleHRBcmVhLm9uKCdrZXl1cCcsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRva2VucyhsZXhlciwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBjb250ZW50VGV4dEFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dEFyZWFWYWx1ZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXG4gICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcbiAgICAgICAgICBodG1scyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbihodG1scywgbGluZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBsaW5lSFRNTCA9IGxpbmUuZ2V0SFRNTCgpLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXIgPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgaHRtbCA9IGAke2xpbmVOdW1iZXJ9OiAke2xpbmVIVE1MfWA7XG5cbiAgICAgICAgICAgIGh0bWxzICs9IGh0bWw7XG5cbiAgICAgICAgICAgIHJldHVybiBodG1scztcbiAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgdG9rZW5zVGV4dEFyZWFIVE1MID0gaHRtbHM7ICAvLy9cblxuICAgICAgdG9rZW5zVGV4dEFyZWEuaHRtbCh0b2tlbnNUZXh0QXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dEFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0QXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgRXhhbXBsZS5jbGVhclRva2VucygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclRva2VucygpIHtcbiAgICB2YXIgdG9rZW5zVGV4dEFyZWFIVE1MID0gJyc7XG5cbiAgICB0b2tlbnNUZXh0QXJlYS5odG1sKHRva2Vuc1RleHRBcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIl19