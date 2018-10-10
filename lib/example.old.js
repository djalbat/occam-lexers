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
    afterSizeableElement = true,
    verticalSplitter = new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

verticalSplitter.initialise();

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
      // try {
      var entriesTextareaValue = entriesTextarea.getValue(),
          contentTextareaValue = contentTextarea.getValue(),
          entries = JSON.parse(entriesTextareaValue),
          lexer = Lexer.fromEntries(entries),
          content = contentTextareaValue,
          ///
      tokens = lexer.tokenise(content);

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
      // } catch (error) {
      //   contentTextarea.addClass('error');
      //
      //   Example.clearTokens();
      // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLm9sZC5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImVhc3lsYXlvdXQiLCJUZXh0YXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJ2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsImVudHJpZXNUZXh0YXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRhcmVhU2VsZWN0b3IiLCJ0b2tlbnNUZXh0YXJlYVNlbGVjdG9yIiwic2l6ZWFibGVFbGVtZW50IiwiZW50cmllc1RleHRhcmVhIiwiY29udGVudFRleHRhcmVhIiwidG9rZW5zVGV4dGFyZWEiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInZlcnRpY2FsU3BsaXR0ZXIiLCJpbml0aWFsaXNlIiwiRXhhbXBsZSIsImVudHJpZXMiLCJMZXhlciIsImVudHJpZXNUZXh0QXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib24iLCJ1cGRhdGVUb2tlbnMiLCJlbnRyaWVzVGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJwYXJzZSIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJsaW5lTnVtYmVyIiwicHJldmlvdXNUb2tlbiIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsImZpbGVQYXRoIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsInRva2Vuc1RleHRhcmVhSFRNTCIsInJlbW92ZUNsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxh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QkFBZXlCLElBQWYsQ0FBb0JRLGtCQUFwQjtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQi9CLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUub2xkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeWxheW91dDtcblxuY29uc3QgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgZW50cmllc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjZW50cmllcycsXG4gICAgICBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICAgIHRva2Vuc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgZW50cmllc1RleHRhcmVhID0gbmV3IFRleHRhcmVhKGVudHJpZXNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICB0b2tlbnNUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYSh0b2tlbnNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlLFxuICAgICAgdmVydGljYWxTcGxpdHRlciA9IG5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbnZlcnRpY2FsU3BsaXR0ZXIuaW5pdGlhbGlzZSgpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bihlbnRyaWVzLCBMZXhlcikge1xuICAgIGNvbnN0IGVudHJpZXNUZXh0QXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBlbnRyaWVzVGV4dGFyZWEuc2V0VmFsdWUoZW50cmllc1RleHRBcmVhVmFsdWUpO1xuXG4gICAgZW50cmllc1RleHRhcmVhLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVUb2tlbnMoTGV4ZXIpOyBcbiAgICB9KTtcblxuICAgIGNvbnRlbnRUZXh0YXJlYS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKExleGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb2tlbnMoTGV4ZXIpIHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgZW50cmllc1RleHRhcmVhVmFsdWUgPSBlbnRyaWVzVGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gSlNPTi5wYXJzZShlbnRyaWVzVGV4dGFyZWFWYWx1ZSksXG4gICAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgICAgbGV0IGxpbmVOdW1iZXIgPSAxLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW4gPSBudWxsO1xuXG4gICAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xuICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IG51bGwsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdG9rZW5IVE1MID0gdG9rZW4uYXNIVE1MKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgICBpZiAocHJldmlvdXNUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcblxuICAgICAgICAgICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW47XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICAgIHRva2Vuc1RleHRhcmVhSFRNTCA9IGh0bWw7ICAvLy9cblxuICAgICAgdG9rZW5zVGV4dGFyZWEuaHRtbCh0b2tlbnNUZXh0YXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAvL1xuICAgIC8vICAgRXhhbXBsZS5jbGVhclRva2VucygpO1xuICAgIC8vIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclRva2VucygpIHtcbiAgICBjb25zdCB0b2tlbnNUZXh0YXJlYUhUTUwgPSAnJztcblxuICAgIHRva2Vuc1RleHRhcmVhLmh0bWwodG9rZW5zVGV4dGFyZWFIVE1MKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=