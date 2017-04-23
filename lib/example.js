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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsIm9wdGlvbnMiLCJUT19USEVfUklHSFRfT0YiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWEiLCJ0b2tlbnNUZXh0YXJlYSIsImxlZnRDb2x1bW4iLCJFeGFtcGxlIiwiaGFuZGxlciIsIm9uIiwibGV4ZXIiLCJmaXJzdExpbmVJbmRleCIsIm1pbmltdW1MaW5lc0xlbmd0aCIsInByZXZpb3VzTGluZUluQ29tbWVudCIsImZvbGxvd2luZ0xpbmVJbkNvbW1lbnQiLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwiY29udGVudCIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnRzIiwiaHRtbHMiLCJyZWR1Y2UiLCJsaW5lIiwiaW5kZXgiLCJsaW5lSFRNTCIsImdldEhUTUwiLCJsaW5lTnVtYmVyIiwiaHRtbCIsInRva2Vuc1RleHRhcmVhSFRNTCIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsImNsZWFyVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdNLElBQUVFLFFBQUYsR0FBZUgsSUFBZixDQUFFRyxRQUFGO0lBQ0VDLGUsR0FBK0NGLFUsQ0FBL0NFLGU7SUFBaUJDLGdCLEdBQThCSCxVLENBQTlCRyxnQjtBQUFuQixJQUFxQ0MsT0FBckMsR0FBaURKLFVBQWpELENBQXFDSSxPQUFyQztJQUNFQyxlLEdBQW9CRCxPLENBQXBCQyxlOzs7QUFFUixJQUFNQyxxQkFBcUIsYUFBM0I7QUFBQSxJQUNNQywwQkFBMEIsa0JBRGhDO0FBQUEsSUFFTUMseUJBQXlCLGlCQUYvQjtBQUFBLElBR01DLGtCQUFrQixJQUFJUixRQUFKLENBQWFNLHVCQUFiLENBSHhCO0FBQUEsSUFJTUcsaUJBQWlCLElBQUlULFFBQUosQ0FBYU8sc0JBQWIsQ0FKdkI7QUFBQSxJQUtNRyxhQUFhLElBQUlULGVBQUosQ0FBb0JJLGtCQUFwQixDQUxuQjs7QUFPQSxJQUFJSCxnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RFLGVBQWhELEVBQWlFTSxVQUFqRTs7SUFFTUMsTzs7Ozs7OzsyQ0FDMEJDLE8sRUFBUztBQUNyQ0osc0JBQWdCSyxFQUFoQixDQUFtQixPQUFuQixFQUE0QkQsT0FBNUI7QUFDRDs7O2lDQUVtQkUsSyxFQUFPQyxjLEVBQWdCQyxrQixFQUFvQkMscUIsRUFBdUJDLHNCLEVBQXdCO0FBQzVHLFVBQUk7QUFDRixZQUFNQyx1QkFBdUJYLGdCQUFnQlksUUFBaEIsRUFBN0I7QUFBQSxZQUNNQyxVQUFVRixvQkFEaEI7QUFBQSxZQUN1QztBQUNqQ0csbUJBQVdELFFBQVFFLEtBQVIsQ0FBYyxJQUFkLENBRmpCO0FBQUEsWUFHTUMsUUFBUVYsTUFBTVcsaUJBQU4sQ0FBd0JILFFBQXhCLEVBQWtDUCxjQUFsQyxFQUFrREMsa0JBQWxELEVBQXNFQyxxQkFBdEUsRUFBNkZDLHNCQUE3RixDQUhkO0FBQUEsWUFJTVEsUUFBUUYsTUFBTUcsTUFBTixDQUFhLFVBQVNELEtBQVQsRUFBZ0JFLElBQWhCLEVBQXNCQyxLQUF0QixFQUE2QjtBQUNoRCxjQUFNQyxXQUFXRixLQUFLRyxPQUFMLEVBQWpCO0FBQUEsY0FDTUMsYUFBYUgsUUFBUSxDQUQzQjtBQUFBLGNBRU1JLE9BQVVELFVBQVYsVUFBeUJGLFFBRi9COztBQUlBSixtQkFBU08sSUFBVDs7QUFFQSxpQkFBT1AsS0FBUDtBQUNELFNBUk8sRUFRTCxFQVJLLENBSmQ7QUFBQSxZQWFNUSxxQkFBcUJSLEtBYjNCLENBREUsQ0FjaUM7O0FBRW5DakIsdUJBQWV3QixJQUFmLENBQW9CQyxrQkFBcEI7O0FBRUExQix3QkFBZ0IyQixXQUFoQixDQUE0QixPQUE1QjtBQUNELE9BbkJELENBbUJFLE9BQU9DLEtBQVAsRUFBYztBQUNkNUIsd0JBQWdCNkIsUUFBaEIsQ0FBeUIsT0FBekI7O0FBRUExQixnQkFBUTJCLFdBQVI7QUFDRDtBQUNGOzs7a0NBRW9CO0FBQ25CLFVBQU1KLHFCQUFxQixFQUEzQjs7QUFFQXpCLHFCQUFld0IsSUFBZixDQUFvQkMsa0JBQXBCO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCN0IsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lsYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIsIG9wdGlvbnMgfSA9IGVhc3lsYXlvdXQsXG4gICAgICB7IFRPX1RIRV9SSUdIVF9PRiB9ID0gb3B0aW9ucztcblxuY29uc3QgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2NvbnRlbnQnLFxuICAgICAgdG9rZW5zVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSN0b2tlbnMnLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHRva2Vuc1RleHRhcmVhID0gbmV3IFRleHRhcmVhKHRva2Vuc1RleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKTtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBjb250ZW50VGV4dGFyZWFPbktleVVwKGhhbmRsZXIpIHtcbiAgICBjb250ZW50VGV4dGFyZWEub24oJ2tleXVwJywgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9rZW5zKGxleGVyLCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgIC8vL1xuICAgICAgICAgICAgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcbiAgICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCksXG4gICAgICAgICAgICBodG1scyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbihodG1scywgbGluZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgbGluZUhUTUwgPSBsaW5lLmdldEhUTUwoKSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlciA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCA9IGAke2xpbmVOdW1iZXJ9OiAke2xpbmVIVE1MfWA7XG4gIFxuICAgICAgICAgICAgICBodG1scyArPSBodG1sO1xuICBcbiAgICAgICAgICAgICAgcmV0dXJuIGh0bWxzO1xuICAgICAgICAgICAgfSwgJycpLFxuICAgICAgICAgICAgdG9rZW5zVGV4dGFyZWFIVE1MID0gaHRtbHM7ICAvLy9cblxuICAgICAgdG9rZW5zVGV4dGFyZWEuaHRtbCh0b2tlbnNUZXh0YXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgRXhhbXBsZS5jbGVhclRva2VucygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclRva2VucygpIHtcbiAgICBjb25zdCB0b2tlbnNUZXh0YXJlYUhUTUwgPSAnJztcblxuICAgIHRva2Vuc1RleHRhcmVhLmh0bWwodG9rZW5zVGV4dGFyZWFIVE1MKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=