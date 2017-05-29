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
    value: function updateTokens(lexer) {
      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue,
            ///
        lines = lexer.linesFromContent(content),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsIm9wdGlvbnMiLCJUT19USEVfUklHSFRfT0YiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWEiLCJ0b2tlbnNUZXh0YXJlYSIsImxlZnRDb2x1bW4iLCJFeGFtcGxlIiwiaGFuZGxlciIsIm9uIiwibGV4ZXIiLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwiY29udGVudCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudCIsImh0bWxzIiwicmVkdWNlIiwibGluZSIsImluZGV4IiwibGluZUhUTUwiLCJnZXRIVE1MIiwibGluZU51bWJlciIsImh0bWwiLCJ0b2tlbnNUZXh0YXJlYUhUTUwiLCJyZW1vdmVDbGFzcyIsImVycm9yIiwiYWRkQ2xhc3MiLCJjbGVhclRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHTSxJQUFFRSxRQUFGLEdBQWVILElBQWYsQ0FBRUcsUUFBRjtJQUNFQyxlLEdBQStDRixVLENBQS9DRSxlO0lBQWlCQyxnQixHQUE4QkgsVSxDQUE5QkcsZ0I7QUFBbkIsSUFBcUNDLE9BQXJDLEdBQWlESixVQUFqRCxDQUFxQ0ksT0FBckM7SUFDRUMsZSxHQUFvQkQsTyxDQUFwQkMsZTs7O0FBRVIsSUFBTUMscUJBQXFCLGFBQTNCO0FBQUEsSUFDTUMsMEJBQTBCLGtCQURoQztBQUFBLElBRU1DLHlCQUF5QixpQkFGL0I7QUFBQSxJQUdNQyxrQkFBa0IsSUFBSVIsUUFBSixDQUFhTSx1QkFBYixDQUh4QjtBQUFBLElBSU1HLGlCQUFpQixJQUFJVCxRQUFKLENBQWFPLHNCQUFiLENBSnZCO0FBQUEsSUFLTUcsYUFBYSxJQUFJVCxlQUFKLENBQW9CSSxrQkFBcEIsQ0FMbkI7O0FBT0EsSUFBSUgsZ0JBQUosQ0FBcUIseUJBQXJCLEVBQWdERSxlQUFoRCxFQUFpRU0sVUFBakU7O0lBRU1DLE87Ozs7Ozs7MkNBQzBCQyxPLEVBQVM7QUFDckNKLHNCQUFnQkssRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEJELE9BQTVCO0FBQ0Q7OztpQ0FFbUJFLEssRUFBTztBQUN6QixVQUFJO0FBQ0YsWUFBTUMsdUJBQXVCUCxnQkFBZ0JRLFFBQWhCLEVBQTdCO0FBQUEsWUFDTUMsVUFBVUYsb0JBRGhCO0FBQUEsWUFDdUM7QUFDakNHLGdCQUFRSixNQUFNSyxnQkFBTixDQUF1QkYsT0FBdkIsQ0FGZDtBQUFBLFlBR01HLFFBQVFGLE1BQU1HLE1BQU4sQ0FBYSxVQUFTRCxLQUFULEVBQWdCRSxJQUFoQixFQUFzQkMsS0FBdEIsRUFBNkI7QUFDaEQsY0FBTUMsV0FBV0YsS0FBS0csT0FBTCxFQUFqQjtBQUFBLGNBQ01DLGFBQWFILFFBQVEsQ0FEM0I7QUFBQSxjQUVNSSxPQUFVRCxVQUFWLFVBQXlCRixRQUYvQjs7QUFJQUosbUJBQVNPLElBQVQ7O0FBRUEsaUJBQU9QLEtBQVA7QUFDRCxTQVJPLEVBUUwsRUFSSyxDQUhkO0FBQUEsWUFZTVEscUJBQXFCUixLQVozQixDQURFLENBYWlDOztBQUVuQ1gsdUJBQWVrQixJQUFmLENBQW9CQyxrQkFBcEI7O0FBRUFwQix3QkFBZ0JxQixXQUFoQixDQUE0QixPQUE1QjtBQUNELE9BbEJELENBa0JFLE9BQU9DLEtBQVAsRUFBYztBQUNkdEIsd0JBQWdCdUIsUUFBaEIsQ0FBeUIsT0FBekI7O0FBRUFwQixnQkFBUXFCLFdBQVI7QUFDRDtBQUNGOzs7a0NBRW9CO0FBQ25CLFVBQU1KLHFCQUFxQixFQUEzQjs7QUFFQW5CLHFCQUFla0IsSUFBZixDQUFvQkMsa0JBQXBCO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCdkIsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lsYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIsIG9wdGlvbnMgfSA9IGVhc3lsYXlvdXQsXG4gICAgICB7IFRPX1RIRV9SSUdIVF9PRiB9ID0gb3B0aW9ucztcblxuY29uc3QgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2NvbnRlbnQnLFxuICAgICAgdG9rZW5zVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSN0b2tlbnMnLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHRva2Vuc1RleHRhcmVhID0gbmV3IFRleHRhcmVhKHRva2Vuc1RleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKTtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBjb250ZW50VGV4dGFyZWFPbktleVVwKGhhbmRsZXIpIHtcbiAgICBjb250ZW50VGV4dGFyZWEub24oJ2tleXVwJywgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9rZW5zKGxleGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWUsICAvLy9cbiAgICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIGh0bWxzID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKGh0bWxzLCBsaW5lLCBpbmRleCkge1xuICAgICAgICAgICAgICBjb25zdCBsaW5lSFRNTCA9IGxpbmUuZ2V0SFRNTCgpLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBodG1sID0gYCR7bGluZU51bWJlcn06ICR7bGluZUhUTUx9YDtcbiAgXG4gICAgICAgICAgICAgIGh0bWxzICs9IGh0bWw7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gaHRtbHM7XG4gICAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgICB0b2tlbnNUZXh0YXJlYUhUTUwgPSBodG1sczsgIC8vL1xuXG4gICAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2Vuc1RleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgdG9rZW5zVGV4dGFyZWEuaHRtbCh0b2tlbnNUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==