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
      // try {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsInNpemVhYmxlRWxlbWVudFNlbGVjdG9yIiwiZW50cmllc1RleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnQiLCJlbnRyaWVzVGV4dGFyZWEiLCJjb250ZW50VGV4dGFyZWEiLCJ0b2tlbnNUZXh0YXJlYSIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImVudHJpZXMiLCJMZXhlciIsImVudHJpZXNUZXh0QXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib24iLCJ1cGRhdGVUb2tlbnMiLCJlbnRyaWVzVGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJwYXJzZSIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJsaW5lTnVtYmVyIiwicHJldmlvdXNUb2tlbiIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsImZpbGVQYXRoIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsInRva2Vuc1RleHRhcmVhSFRNTCIsInJlbW92ZUNsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdNLElBQUVFLFFBQUYs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LCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lsYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lsYXlvdXQ7XG5cbmNvbnN0IHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciA9ICcjdmVydGljYWxTcGxpdHRlcicsXG4gICAgICBzaXplYWJsZUVsZW1lbnRTZWxlY3RvciA9ICcjc2l6ZWFibGVFbGVtZW50JyxcbiAgICAgIGVudHJpZXNUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2VudHJpZXMnLFxuICAgICAgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjY29udGVudCcsXG4gICAgICB0b2tlbnNUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI3Rva2VucycsXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGVudHJpZXNUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShlbnRyaWVzVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBjb250ZW50VGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoY29udGVudFRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgdG9rZW5zVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEodG9rZW5zVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIodmVydGljYWxTcGxpdHRlclNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50KTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oZW50cmllcywgTGV4ZXIpIHtcbiAgICBjb25zdCBlbnRyaWVzVGV4dEFyZWFWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGVudHJpZXMsIG51bGwsICcgICcpO1xuXG4gICAgZW50cmllc1RleHRhcmVhLnNldFZhbHVlKGVudHJpZXNUZXh0QXJlYVZhbHVlKTtcblxuICAgIGVudHJpZXNUZXh0YXJlYS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKExleGVyKTsgXG4gICAgfSk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhMZXhlcik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9rZW5zKExleGVyKSB7XG4gICAgLy8gdHJ5IHtcbiAgICAgIGNvbnN0IGVudHJpZXNUZXh0YXJlYVZhbHVlID0gZW50cmllc1RleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgZW50cmllcyA9IEpTT04ucGFyc2UoZW50cmllc1RleHRhcmVhVmFsdWUpLFxuICAgICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICAgIGxldCBsaW5lTnVtYmVyID0gMSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuID0gbnVsbDtcblxuICAgICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBudWxsLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTChmaWxlUGF0aCk7XG5cbiAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgICAgICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XG5cbiAgICAgICAgICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2VuO1xuICBcbiAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgICB0b2tlbnNUZXh0YXJlYUhUTUwgPSBodG1sOyAgLy8vXG5cbiAgICAgIHRva2Vuc1RleHRhcmVhLmh0bWwodG9rZW5zVGV4dGFyZWFIVE1MKTtcblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgLy9cbiAgICAvLyAgIEV4YW1wbGUuY2xlYXJUb2tlbnMoKTtcbiAgICAvLyB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIl19