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
          var lineHTML = line.asHTML(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsInNpemVhYmxlRWxlbWVudFNlbGVjdG9yIiwiZW50cmllc1RleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnQiLCJlbnRyaWVzVGV4dGFyZWEiLCJjb250ZW50VGV4dGFyZWEiLCJ0b2tlbnNUZXh0YXJlYSIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImVudHJpZXMiLCJMZXhlciIsImVudHJpZXNUZXh0QXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib24iLCJ1cGRhdGVUb2tlbnMiLCJlbnRyaWVzVGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJwYXJzZSIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJjb250ZW50IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50IiwiaHRtbHMiLCJyZWR1Y2UiLCJsaW5lIiwiaW5kZXgiLCJsaW5lSFRNTCIsImFzSFRNTCIsImxpbmVOdW1iZXIiLCJodG1sIiwidG9rZW5zVGV4dGFyZWFIVE1MIiwicmVtb3ZlQ2xhc3MiLCJlcnJvciIsImFkZENsYXNzIiwiY2xlYXJUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR00sSUFBRUUsUUFBRixHQUFlSCxJQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3dDRixVQUR4QyxDQUNFRSxlQURGO0FBQUEsSUFDbUJDLGdCQURuQixHQUN3Q0gsVUFEeEMsQ0FDbUJHLGdCQURuQjs7O0FBR04sSUFBTUMsMkJBQTJCLG1CQUFqQztBQUFBLElBQ01DLDBCQUEwQixrQkFEaEM7QUFBQSxJQUVNQywwQkFBMEIsa0JBRmhDO0FBQUEsSUFHTUMsMEJBQTBCLGtCQUhoQztBQUFBLElBSU1DLHlCQUF5QixpQkFKL0I7QUFBQSxJQUtNQyxrQkFBa0IsSUFBSVAsZUFBSixDQUFvQkcsdUJBQXBCLENBTHhCO0FBQUEsSUFNTUssa0JBQWtCLElBQUlULFFBQUosQ0FBYUssdUJBQWIsQ0FOeEI7QUFBQSxJQU9NSyxrQkFBa0IsSUFBSVYsUUFBSixDQUFhTSx1QkFBYixDQVB4QjtBQUFBLElBUU1LLGlCQUFpQixJQUFJWCxRQUFKLENBQWFPLHNCQUFiLENBUnZCO0FBQUEsSUFTTUssd0JBQXdCLEtBVDlCO0FBQUEsSUFVTUMsdUJBQXVCLElBVjdCOztBQVlBLElBQUlYLGdCQUFKLENBQXFCQyx3QkFBckIsRUFBK0NTLHFCQUEvQyxFQUFzRUMsb0JBQXRFOztJQUVNQyxPOzs7Ozs7O3dCQUNPQyxPLEVBQVNDLEssRUFBTztBQUN6QixVQUFNQyx1QkFBdUJDLEtBQUtDLFNBQUwsQ0FBZUosT0FBZixFQUF3QixJQUF4QixFQUE4QixJQUE5QixDQUE3Qjs7QUFFQU4sc0JBQWdCVyxRQUFoQixDQUF5Qkgsb0JBQXpCOztBQUVBUixzQkFBZ0JZLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDckNQLGdCQUFRUSxZQUFSLENBQXFCTixLQUFyQjtBQUNELE9BRkQ7O0FBSUFOLHNCQUFnQlcsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBVztBQUNyQ1AsZ0JBQVFRLFlBQVIsQ0FBcUJOLEtBQXJCO0FBQ0QsT0FGRDtBQUdEOzs7aUNBRW1CQSxLLEVBQU87QUFDekIsVUFBSTtBQUNGLFlBQU1PLHVCQUF1QmQsZ0JBQWdCZSxRQUFoQixFQUE3QjtBQUFBLFlBQ01DLHVCQUF1QmYsZ0JBQWdCYyxRQUFoQixFQUQ3QjtBQUFBLFlBRU1ULFVBQVVHLEtBQUtRLEtBQUwsQ0FBV0gsb0JBQVgsQ0FGaEI7QUFBQSxZQUdNSSxRQUFRWCxNQUFNWSxXQUFOLENBQWtCYixPQUFsQixDQUhkO0FBQUEsWUFJTWMsVUFBVUosb0JBSmhCO0FBQUEsWUFJdUM7QUFDakNLLGdCQUFRSCxNQUFNSSxnQkFBTixDQUF1QkYsT0FBdkIsQ0FMZDtBQUFBLFlBTU1HLFFBQVFGLE1BQU1HLE1BQU4sQ0FBYSxVQUFTRCxLQUFULEVBQWdCRSxJQUFoQixFQUFzQkMsS0FBdEIsRUFBNkI7QUFDaEQsY0FBTUMsV0FBV0YsS0FBS0csTUFBTCxFQUFqQjtBQUFBLGNBQ01DLGFBQWFILFFBQVEsQ0FEM0I7QUFBQSxjQUVNSSxPQUFVRCxVQUFWLFVBQXlCRixRQUYvQjs7QUFJQUosbUJBQVNPLElBQVQ7O0FBRUEsaUJBQU9QLEtBQVA7QUFDRCxTQVJPLEVBUUwsRUFSSyxDQU5kO0FBQUEsWUFlTVEscUJBQXFCUixLQWYzQixDQURFLENBZ0JpQzs7QUFFbkNyQix1QkFBZTRCLElBQWYsQ0FBb0JDLGtCQUFwQjs7QUFFQTlCLHdCQUFnQitCLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0QsT0FyQkQsQ0FxQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RoQyx3QkFBZ0JpQyxRQUFoQixDQUF5QixPQUF6Qjs7QUFFQTdCLGdCQUFROEIsV0FBUjtBQUNEO0FBQ0Y7OztrQ0FFb0I7QUFDbkIsVUFBTUoscUJBQXFCLEVBQTNCOztBQUVBN0IscUJBQWU0QixJQUFmLENBQW9CQyxrQkFBcEI7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJoQyxPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeWxheW91dDtcblxuY29uc3QgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgZW50cmllc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjZW50cmllcycsXG4gICAgICBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICAgIHRva2Vuc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgZW50cmllc1RleHRhcmVhID0gbmV3IFRleHRhcmVhKGVudHJpZXNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICB0b2tlbnNUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYSh0b2tlbnNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bihlbnRyaWVzLCBMZXhlcikge1xuICAgIGNvbnN0IGVudHJpZXNUZXh0QXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBlbnRyaWVzVGV4dGFyZWEuc2V0VmFsdWUoZW50cmllc1RleHRBcmVhVmFsdWUpO1xuXG4gICAgZW50cmllc1RleHRhcmVhLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVUb2tlbnMoTGV4ZXIpOyBcbiAgICB9KTtcblxuICAgIGNvbnRlbnRUZXh0YXJlYS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKExleGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb2tlbnMoTGV4ZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZW50cmllc1RleHRhcmVhVmFsdWUgPSBlbnRyaWVzVGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gSlNPTi5wYXJzZShlbnRyaWVzVGV4dGFyZWFWYWx1ZSksXG4gICAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAgLy8vXG4gICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBodG1scyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbihodG1scywgbGluZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgbGluZUhUTUwgPSBsaW5lLmFzSFRNTCgpLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBodG1sID0gYCR7bGluZU51bWJlcn06ICR7bGluZUhUTUx9YDtcbiAgXG4gICAgICAgICAgICAgIGh0bWxzICs9IGh0bWw7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gaHRtbHM7XG4gICAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgICB0b2tlbnNUZXh0YXJlYUhUTUwgPSBodG1sczsgIC8vL1xuXG4gICAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2Vuc1RleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgdG9rZW5zVGV4dGFyZWEuaHRtbCh0b2tlbnNUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==