'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var Textarea = easy.Textarea,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;


var verticalSplitterSelector = '#verticalSplitter',
    sizeableElementSelector = '#sizeableElement',
    entriesTextareaSelector = 'textArea#entries',
    contentTextareaSelector = 'textArea#content',
    tokensTextareaSelector = 'textArea#tokens',
    sizeableElement = new SizeableElement(sizeableElementSelector),
    entriesTextarea = new Textarea(entriesTextareaSelector),
    contentTextarea = new Textarea(contentTextareaSelector),
    tokensTextarea = new Textarea(tokensTextareaSelector),
    beforeSizeableElement = false,
    afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'run',
    value: function run(entries, Lexer) {
      var entriesTextAreaValue = JSON.stringify(entries, null, '  ');

      entriesTextarea.setValue(entriesTextAreaValue);

      entriesTextarea.on('keyup', function () {
        Example.updateTokens(Lexer);
      });

      contentTextarea.on('keyup', function () {
        Example.updateTokens(Lexer);
      });
    }
  }, {
    key: 'updateTokens',
    value: function updateTokens(Lexer) {
      try {
        var entriesTextareaValue = entriesTextarea.getValue(),
            contentTextareaValue = contentTextarea.getValue(),
            entries = JSON.parse(entriesTextareaValue),
            lexer = Lexer.fromEntries(entries),
            content = contentTextareaValue,
            ///
        lines = lexer.linesFromContent(content),
            htmls = lines.reduce(function (htmls, line, index) {
          var filePath = null,
              ///
          lineHTML = line.asHTML(filePath),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsInNpemVhYmxlRWxlbWVudFNlbGVjdG9yIiwiZW50cmllc1RleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnQiLCJlbnRyaWVzVGV4dGFyZWEiLCJjb250ZW50VGV4dGFyZWEiLCJ0b2tlbnNUZXh0YXJlYSIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImVudHJpZXMiLCJMZXhlciIsImVudHJpZXNUZXh0QXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib24iLCJ1cGRhdGVUb2tlbnMiLCJlbnRyaWVzVGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJwYXJzZSIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJjb250ZW50IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50IiwiaHRtbHMiLCJyZWR1Y2UiLCJsaW5lIiwiaW5kZXgiLCJmaWxlUGF0aCIsImxpbmVIVE1MIiwiYXNIVE1MIiwibGluZU51bWJlciIsImh0bWwiLCJ0b2tlbnNUZXh0YXJlYUhUTUwiLCJyZW1vdmVDbGFzcyIsImVycm9yIiwiYWRkQ2xhc3MiLCJjbGVhclRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHTSxJQUFFRSxRQUFGLEdBQWVILElBQWYsQ0FBRUcsUUFBRjtBQUFBLElBQ0VDLGVBREYsR0FDd0NGLFVBRHhDLENBQ0VFLGVBREY7QUFBQSxJQUNtQkMsZ0JBRG5CLEdBQ3dDSCxVQUR4QyxDQUNtQkcsZ0JBRG5COzs7QUFHTixJQUFNQywyQkFBMkIsbUJBQWpDO0FBQUEsSUFDTUMsMEJBQTBCLGtCQURoQztBQUFBLElBRU1DLDBCQUEwQixrQkFGaEM7QUFBQSxJQUdNQywwQkFBMEIsa0JBSGhDO0FBQUEsSUFJTUMseUJBQXlCLGlCQUovQjtBQUFBLElBS01DLGtCQUFrQixJQUFJUCxlQUFKLENBQW9CRyx1QkFBcEIsQ0FMeEI7QUFBQSxJQU1NSyxrQkFBa0IsSUFBSVQsUUFBSixDQUFhSyx1QkFBYixDQU54QjtBQUFBLElBT01LLGtCQUFrQixJQUFJVixRQUFKLENBQWFNLHVCQUFiLENBUHhCO0FBQUEsSUFRTUssaUJBQWlCLElBQUlYLFFBQUosQ0FBYU8sc0JBQWIsQ0FSdkI7QUFBQSxJQVNNSyx3QkFBd0IsS0FUOUI7QUFBQSxJQVVNQyx1QkFBdUIsSUFWN0I7O0FBWUEsSUFBSVgsZ0JBQUosQ0FBcUJDLHdCQUFyQixFQUErQ1MscUJBQS9DLEVBQXNFQyxvQkFBdEU7O0lBRU1DLE87Ozs7Ozs7d0JBQ09DLE8sRUFBU0MsSyxFQUFPO0FBQ3pCLFVBQU1DLHVCQUF1QkMsS0FBS0MsU0FBTCxDQUFlSixPQUFmLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLENBQTdCOztBQUVBTixzQkFBZ0JXLFFBQWhCLENBQXlCSCxvQkFBekI7O0FBRUFSLHNCQUFnQlksRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBVztBQUNyQ1AsZ0JBQVFRLFlBQVIsQ0FBcUJOLEtBQXJCO0FBQ0QsT0FGRDs7QUFJQU4sc0JBQWdCVyxFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFXO0FBQ3JDUCxnQkFBUVEsWUFBUixDQUFxQk4sS0FBckI7QUFDRCxPQUZEO0FBR0Q7OztpQ0FFbUJBLEssRUFBTztBQUN6QixVQUFJO0FBQ0YsWUFBTU8sdUJBQXVCZCxnQkFBZ0JlLFFBQWhCLEVBQTdCO0FBQUEsWUFDTUMsdUJBQXVCZixnQkFBZ0JjLFFBQWhCLEVBRDdCO0FBQUEsWUFFTVQsVUFBVUcsS0FBS1EsS0FBTCxDQUFXSCxvQkFBWCxDQUZoQjtBQUFBLFlBR01JLFFBQVFYLE1BQU1ZLFdBQU4sQ0FBa0JiLE9BQWxCLENBSGQ7QUFBQSxZQUlNYyxVQUFVSixvQkFKaEI7QUFBQSxZQUl1QztBQUNqQ0ssZ0JBQVFILE1BQU1JLGdCQUFOLENBQXVCRixPQUF2QixDQUxkO0FBQUEsWUFNTUcsUUFBUUYsTUFBTUcsTUFBTixDQUFhLFVBQVNELEtBQVQsRUFBZ0JFLElBQWhCLEVBQXNCQyxLQUF0QixFQUE2QjtBQUNoRCxjQUFNQyxXQUFXLElBQWpCO0FBQUEsY0FBd0I7QUFDbEJDLHFCQUFXSCxLQUFLSSxNQUFMLENBQVlGLFFBQVosQ0FEakI7QUFBQSxjQUVNRyxhQUFhSixRQUFRLENBRjNCO0FBQUEsY0FHTUssT0FBVUQsVUFBVixVQUF5QkYsUUFIL0I7O0FBS0FMLG1CQUFTUSxJQUFUOztBQUVBLGlCQUFPUixLQUFQO0FBQ0QsU0FUTyxFQVNMLEVBVEssQ0FOZDtBQUFBLFlBZ0JNUyxxQkFBcUJULEtBaEIzQixDQURFLENBaUJpQzs7QUFFbkNyQix1QkFBZTZCLElBQWYsQ0FBb0JDLGtCQUFwQjs7QUFFQS9CLHdCQUFnQmdDLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0QsT0F0QkQsQ0FzQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RqQyx3QkFBZ0JrQyxRQUFoQixDQUF5QixPQUF6Qjs7QUFFQTlCLGdCQUFRK0IsV0FBUjtBQUNEO0FBQ0Y7OztrQ0FFb0I7QUFDbkIsVUFBTUoscUJBQXFCLEVBQTNCOztBQUVBOUIscUJBQWU2QixJQUFmLENBQW9CQyxrQkFBcEI7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJqQyxPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeWxheW91dDtcblxuY29uc3QgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgZW50cmllc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjZW50cmllcycsXG4gICAgICBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICAgIHRva2Vuc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgZW50cmllc1RleHRhcmVhID0gbmV3IFRleHRhcmVhKGVudHJpZXNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICB0b2tlbnNUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYSh0b2tlbnNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bihlbnRyaWVzLCBMZXhlcikge1xuICAgIGNvbnN0IGVudHJpZXNUZXh0QXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBlbnRyaWVzVGV4dGFyZWEuc2V0VmFsdWUoZW50cmllc1RleHRBcmVhVmFsdWUpO1xuXG4gICAgZW50cmllc1RleHRhcmVhLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVUb2tlbnMoTGV4ZXIpOyBcbiAgICB9KTtcblxuICAgIGNvbnRlbnRUZXh0YXJlYS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKExleGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb2tlbnMoTGV4ZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZW50cmllc1RleHRhcmVhVmFsdWUgPSBlbnRyaWVzVGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gSlNPTi5wYXJzZShlbnRyaWVzVGV4dGFyZWFWYWx1ZSksXG4gICAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAgLy8vXG4gICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBodG1scyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbihodG1scywgbGluZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBudWxsLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIVE1MID0gbGluZS5hc0hUTUwoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBodG1sID0gYCR7bGluZU51bWJlcn06ICR7bGluZUhUTUx9YDtcbiAgXG4gICAgICAgICAgICAgIGh0bWxzICs9IGh0bWw7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gaHRtbHM7XG4gICAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgICB0b2tlbnNUZXh0YXJlYUhUTUwgPSBodG1sczsgIC8vL1xuXG4gICAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2Vuc1RleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgdG9rZW5zVGV4dGFyZWEuaHRtbCh0b2tlbnNUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==