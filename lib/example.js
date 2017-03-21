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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwib3B0aW9ucyIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWEiLCJ0b2tlbnNUZXh0YXJlYSIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIkV4YW1wbGUiLCJoYW5kbGVyIiwib24iLCJsZXhlciIsImZpcnN0TGluZUluZGV4IiwibWluaW11bUxpbmVzTGVuZ3RoIiwicHJldmlvdXNMaW5lSW5Db21tZW50IiwiZm9sbG93aW5nTGluZUluQ29tbWVudCIsImNvbnRlbnRUZXh0YXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJjb250ZW50IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudHMiLCJodG1scyIsInJlZHVjZSIsImxpbmUiLCJpbmRleCIsImxpbmVIVE1MIiwiZ2V0SFRNTCIsImxpbmVOdW1iZXIiLCJodG1sIiwidG9rZW5zVGV4dGFyZWFIVE1MIiwicmVtb3ZlQ2xhc3MiLCJlcnJvciIsImFkZENsYXNzIiwiY2xlYXJUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7QUFBQSxJQUVNRSxXQUFXSCxLQUFLRyxRQUZ0QjtBQUFBLElBR01DLFVBQVVGLFdBQVdFLE9BSDNCO0FBQUEsSUFJTUMsa0JBQWtCSCxXQUFXRyxlQUpuQztBQUFBLElBS01DLG1CQUFtQkosV0FBV0ksZ0JBTHBDOztBQU9BLElBQU1DLHFCQUFxQixhQUEzQjtBQUFBLElBQ01DLDBCQUEwQixrQkFEaEM7QUFBQSxJQUVNQyx5QkFBeUIsaUJBRi9CO0FBQUEsSUFHTUMsa0JBQWtCLElBQUlQLFFBQUosQ0FBYUssdUJBQWIsQ0FIeEI7QUFBQSxJQUlNRyxpQkFBaUIsSUFBSVIsUUFBSixDQUFhTSxzQkFBYixDQUp2QjtBQUFBLElBS01HLGFBQWEsSUFBSVAsZUFBSixDQUFvQkUsa0JBQXBCLENBTG5CO0FBQUEsSUFNTU0sa0JBQWtCVCxRQUFRVSxRQUFSLENBQWlCRCxlQU56Qzs7QUFRQSxJQUFJUCxnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RPLGVBQWhELEVBQWlFRCxVQUFqRTs7SUFFTUcsTzs7Ozs7OzsyQ0FDMEJDLE8sRUFBUztBQUNyQ04sc0JBQWdCTyxFQUFoQixDQUFtQixPQUFuQixFQUE0QkQsT0FBNUI7QUFDRDs7O2lDQUVtQkUsSyxFQUFPQyxjLEVBQWdCQyxrQixFQUFvQkMscUIsRUFBdUJDLHNCLEVBQXdCO0FBQzVHLFVBQUk7QUFDRixZQUFNQyx1QkFBdUJiLGdCQUFnQmMsUUFBaEIsRUFBN0I7QUFBQSxZQUNNQyxVQUFVRixvQkFEaEI7QUFBQSxZQUN1QztBQUNqQ0csbUJBQVdELFFBQVFFLEtBQVIsQ0FBYyxJQUFkLENBRmpCO0FBQUEsWUFHTUMsUUFBUVYsTUFBTVcsaUJBQU4sQ0FBd0JILFFBQXhCLEVBQWtDUCxjQUFsQyxFQUFrREMsa0JBQWxELEVBQXNFQyxxQkFBdEUsRUFBNkZDLHNCQUE3RixDQUhkO0FBQUEsWUFJTVEsUUFBUUYsTUFBTUcsTUFBTixDQUFhLFVBQVNELEtBQVQsRUFBZ0JFLElBQWhCLEVBQXNCQyxLQUF0QixFQUE2QjtBQUNoRCxjQUFNQyxXQUFXRixLQUFLRyxPQUFMLEVBQWpCO0FBQUEsY0FDTUMsYUFBYUgsUUFBUSxDQUQzQjtBQUFBLGNBRU1JLE9BQVVELFVBQVYsVUFBeUJGLFFBRi9COztBQUlBSixtQkFBU08sSUFBVDs7QUFFQSxpQkFBT1AsS0FBUDtBQUNELFNBUk8sRUFRTCxFQVJLLENBSmQ7QUFBQSxZQWFNUSxxQkFBcUJSLEtBYjNCLENBREUsQ0FjaUM7O0FBRW5DbkIsdUJBQWUwQixJQUFmLENBQW9CQyxrQkFBcEI7O0FBRUE1Qix3QkFBZ0I2QixXQUFoQixDQUE0QixPQUE1QjtBQUNELE9BbkJELENBbUJFLE9BQU9DLEtBQVAsRUFBYztBQUNkOUIsd0JBQWdCK0IsUUFBaEIsQ0FBeUIsT0FBekI7O0FBRUExQixnQkFBUTJCLFdBQVI7QUFDRDtBQUNGOzs7a0NBRW9CO0FBQ25CLFVBQU1KLHFCQUFxQixFQUEzQjs7QUFFQTNCLHFCQUFlMEIsSUFBZixDQUFvQkMsa0JBQXBCO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCN0IsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lsYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpLFxuICAgICAgVGV4dGFyZWEgPSBlYXN5LlRleHRhcmVhLFxuICAgICAgb3B0aW9ucyA9IGVhc3lsYXlvdXQub3B0aW9ucyxcbiAgICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3lsYXlvdXQuU2l6ZWFibGVFbGVtZW50LFxuICAgICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3lsYXlvdXQuVmVydGljYWxTcGxpdHRlcjtcblxuY29uc3QgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2NvbnRlbnQnLFxuICAgICAgdG9rZW5zVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSN0b2tlbnMnLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHRva2Vuc1RleHRhcmVhID0gbmV3IFRleHRhcmVhKHRva2Vuc1RleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICAgIFRPX1RIRV9SSUdIVF9PRiA9IG9wdGlvbnMuc2l0dWF0ZWQuVE9fVEhFX1JJR0hUX09GO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcignLmxlZnQudmVydGljYWwuc3BsaXR0ZXInLCBUT19USEVfUklHSFRfT0YsIGxlZnRDb2x1bW4pO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIGNvbnRlbnRUZXh0YXJlYU9uS2V5VXAoaGFuZGxlcikge1xuICAgIGNvbnRlbnRUZXh0YXJlYS5vbigna2V5dXAnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb2tlbnMobGV4ZXIsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAgLy8vXG4gICAgICAgICAgICBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxuICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcbiAgICAgICAgICAgIGh0bWxzID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKGh0bWxzLCBsaW5lLCBpbmRleCkge1xuICAgICAgICAgICAgICBjb25zdCBsaW5lSFRNTCA9IGxpbmUuZ2V0SFRNTCgpLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBodG1sID0gYCR7bGluZU51bWJlcn06ICR7bGluZUhUTUx9YDtcbiAgXG4gICAgICAgICAgICAgIGh0bWxzICs9IGh0bWw7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gaHRtbHM7XG4gICAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgICB0b2tlbnNUZXh0YXJlYUhUTUwgPSBodG1sczsgIC8vL1xuXG4gICAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2Vuc1RleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgdG9rZW5zVGV4dGFyZWEuaHRtbCh0b2tlbnNUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==