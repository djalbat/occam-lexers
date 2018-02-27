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
        tokens = lexer.tokensFromContent(content);

        var lineNumber = 1,
            previousToken = null;

        var html = tokens.reduce(function (html, token) {
          var filePath = null,
              ///
          tokenHTML = token.asHTML(filePath);

          if (previousToken === null) {
            html += lineNumber++ + ': ';
          } else {
            var previousTokenEndOfLineToken = previousToken.isEndOfLineToken();

            if (previousTokenEndOfLineToken) {
              html += lineNumber++ + ': ';
            }
          }

          html += tokenHTML;

          previousToken = token;

          return html;
        }, ''),
            tokensTextareaHTML = html; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsInNpemVhYmxlRWxlbWVudFNlbGVjdG9yIiwiZW50cmllc1RleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnQiLCJlbnRyaWVzVGV4dGFyZWEiLCJjb250ZW50VGV4dGFyZWEiLCJ0b2tlbnNUZXh0YXJlYSIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImVudHJpZXMiLCJMZXhlciIsImVudHJpZXNUZXh0QXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib24iLCJ1cGRhdGVUb2tlbnMiLCJlbnRyaWVzVGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJwYXJzZSIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJsaW5lTnVtYmVyIiwicHJldmlvdXNUb2tlbiIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsImZpbGVQYXRoIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsInRva2Vuc1RleHRhcmVhSFRNTCIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsImNsZWFyVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdNLElBQUVFLFFBQUYsR0FBZUgsSUFBZixDQUFFRyxRQUFGO0FBQUEsSUFDRUMsZUFERixHQUN3Q0YsVUFEeEMsQ0FDRUUsZUFERjtBQUFBLElBQ21CQyxnQkFEbkIsR0FDd0NILFVBRHhDLENBQ21CRyxnQkFEbkI7OztBQUdOLElBQU1DLDJCQUEyQixtQkFBakM7QUFBQSxJQUNNQywwQkFBMEIsa0JBRGhDO0FBQUEsSUFFTUMsMEJBQTBCLGtCQUZoQztBQUFBLElBR01DLDBCQUEwQixrQkFIaEM7QUFBQSxJQUlNQyx5QkFBeUIsaUJBSi9CO0FBQUEsSUFLTUMsa0JBQWtCLElBQUlQLGVBQUosQ0FBb0JHLHVCQUFwQixDQUx4QjtBQUFBLElBTU1LLGtCQUFrQixJQUFJVCxRQUFKLENBQWFLLHVCQUFiLENBTnhCO0FBQUEsSUFPTUssa0JBQWtCLElBQUlWLFFBQUosQ0FBYU0sdUJBQWIsQ0FQeEI7QUFBQSxJQVFNSyxpQkFBaUIsSUFBSVgsUUFBSixDQUFhTyxzQkFBYixDQVJ2QjtBQUFBLElBU01LLHdCQUF3QixLQVQ5QjtBQUFBLElBVU1DLHVCQUF1QixJQVY3Qjs7QUFZQSxJQUFJWCxnQkFBSixDQUFxQkMsd0JBQXJCLEVBQStDUyxxQkFBL0MsRUFBc0VDLG9CQUF0RTs7SUFFTUMsTzs7Ozs7Ozt3QkFDT0MsTyxFQUFTQyxLLEVBQU87QUFDekIsVUFBTUMsdUJBQXVCQyxLQUFLQyxTQUFMLENBQWVKLE9BQWYsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsQ0FBN0I7O0FBRUFOLHNCQUFnQlcsUUFBaEIsQ0FBeUJILG9CQUF6Qjs7QUFFQVIsc0JBQWdCWSxFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFXO0FBQ3JDUCxnQkFBUVEsWUFBUixDQUFxQk4sS0FBckI7QUFDRCxPQUZEOztBQUlBTixzQkFBZ0JXLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDckNQLGdCQUFRUSxZQUFSLENBQXFCTixLQUFyQjtBQUNELE9BRkQ7QUFHRDs7O2lDQUVtQkEsSyxFQUFPO0FBQ3pCLFVBQUk7QUFDRixZQUFNTyx1QkFBdUJkLGdCQUFnQmUsUUFBaEIsRUFBN0I7QUFBQSxZQUNNQyx1QkFBdUJmLGdCQUFnQmMsUUFBaEIsRUFEN0I7QUFBQSxZQUVNVCxVQUFVRyxLQUFLUSxLQUFMLENBQVdILG9CQUFYLENBRmhCO0FBQUEsWUFHTUksUUFBUVgsTUFBTVksV0FBTixDQUFrQmIsT0FBbEIsQ0FIZDtBQUFBLFlBSU1jLFVBQVVKLG9CQUpoQjtBQUFBLFlBSXVDO0FBQ2pDSyxpQkFBU0gsTUFBTUksaUJBQU4sQ0FBd0JGLE9BQXhCLENBTGY7O0FBT0EsWUFBSUcsYUFBYSxDQUFqQjtBQUFBLFlBQ0lDLGdCQUFnQixJQURwQjs7QUFHQSxZQUFNQyxPQUFPSixPQUFPSyxNQUFQLENBQWMsVUFBU0QsSUFBVCxFQUFlRSxLQUFmLEVBQXNCO0FBQ3pDLGNBQU1DLFdBQVcsSUFBakI7QUFBQSxjQUF3QjtBQUNsQkMsc0JBQVlGLE1BQU1HLE1BQU4sQ0FBYUYsUUFBYixDQURsQjs7QUFHQSxjQUFJSixrQkFBa0IsSUFBdEIsRUFBNEI7QUFDMUJDLG9CQUFXRixZQUFYO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsZ0JBQU1RLDhCQUE4QlAsY0FBY1EsZ0JBQWQsRUFBcEM7O0FBRUEsZ0JBQUlELDJCQUFKLEVBQWlDO0FBQy9CTixzQkFBV0YsWUFBWDtBQUNEO0FBQ0Y7O0FBRURFLGtCQUFRSSxTQUFSOztBQUVBTCwwQkFBZ0JHLEtBQWhCOztBQUVBLGlCQUFPRixJQUFQO0FBQ0QsU0FuQk0sRUFtQkosRUFuQkksQ0FBYjtBQUFBLFlBb0JNUSxxQkFBcUJSLElBcEIzQixDQVhFLENBK0JnQzs7QUFFbEN2Qix1QkFBZXVCLElBQWYsQ0FBb0JRLGtCQUFwQjs7QUFFQWhDLHdCQUFnQmlDLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0QsT0FwQ0QsQ0FvQ0UsT0FBT0MsS0FBUCxFQUFjO0FBQ2RsQyx3QkFBZ0JtQyxRQUFoQixDQUF5QixPQUF6Qjs7QUFFQS9CLGdCQUFRZ0MsV0FBUjtBQUNEO0FBQ0Y7OztrQ0FFb0I7QUFDbkIsVUFBTUoscUJBQXFCLEVBQTNCOztBQUVBL0IscUJBQWV1QixJQUFmLENBQW9CUSxrQkFBcEI7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJsQyxPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeWxheW91dDtcblxuY29uc3QgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgZW50cmllc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjZW50cmllcycsXG4gICAgICBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICAgIHRva2Vuc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgZW50cmllc1RleHRhcmVhID0gbmV3IFRleHRhcmVhKGVudHJpZXNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICB0b2tlbnNUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYSh0b2tlbnNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bihlbnRyaWVzLCBMZXhlcikge1xuICAgIGNvbnN0IGVudHJpZXNUZXh0QXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBlbnRyaWVzVGV4dGFyZWEuc2V0VmFsdWUoZW50cmllc1RleHRBcmVhVmFsdWUpO1xuXG4gICAgZW50cmllc1RleHRhcmVhLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVUb2tlbnMoTGV4ZXIpOyBcbiAgICB9KTtcblxuICAgIGNvbnRlbnRUZXh0YXJlYS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKExleGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb2tlbnMoTGV4ZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZW50cmllc1RleHRhcmVhVmFsdWUgPSBlbnRyaWVzVGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gSlNPTi5wYXJzZShlbnRyaWVzVGV4dGFyZWFWYWx1ZSksXG4gICAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbnNGcm9tQ29udGVudChjb250ZW50KTtcblxuICAgICAgbGV0IGxpbmVOdW1iZXIgPSAxLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW4gPSBudWxsO1xuXG4gICAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xuICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IG51bGwsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdG9rZW5IVE1MID0gdG9rZW4uYXNIVE1MKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgICBpZiAocHJldmlvdXNUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcblxuICAgICAgICAgICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW47XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICAgIHRva2Vuc1RleHRhcmVhSFRNTCA9IGh0bWw7ICAvLy9cblxuICAgICAgdG9rZW5zVGV4dGFyZWEuaHRtbCh0b2tlbnNUZXh0YXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgRXhhbXBsZS5jbGVhclRva2VucygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclRva2VucygpIHtcbiAgICBjb25zdCB0b2tlbnNUZXh0YXJlYUhUTUwgPSAnJztcblxuICAgIHRva2Vuc1RleHRhcmVhLmh0bWwodG9rZW5zVGV4dGFyZWFIVE1MKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=