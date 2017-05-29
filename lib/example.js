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
    grammarTextareaSelector = 'textArea#grammar',
    contentTextareaSelector = 'textArea#content',
    tokensTextareaSelector = 'textArea#tokens',
    sizeableElement = new SizeableElement(sizeableElementSelector),
    grammarTextarea = new Textarea(grammarTextareaSelector),
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
    value: function run(grammar, Lexer) {
      var grammarTextAreaValue = JSON.stringify(grammar, null, '  ');

      grammarTextarea.setValue(grammarTextAreaValue);

      grammarTextarea.on('keyup', function () {
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
        var grammarTextareaValue = grammarTextarea.getValue(),
            contentTextareaValue = contentTextarea.getValue(),
            grammar = JSON.parse(grammarTextareaValue),
            lexer = Lexer.fromGrammar(grammar),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsInNpemVhYmxlRWxlbWVudFNlbGVjdG9yIiwiZ3JhbW1hclRleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnQiLCJncmFtbWFyVGV4dGFyZWEiLCJjb250ZW50VGV4dGFyZWEiLCJ0b2tlbnNUZXh0YXJlYSIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImdyYW1tYXIiLCJMZXhlciIsImdyYW1tYXJUZXh0QXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib24iLCJ1cGRhdGVUb2tlbnMiLCJncmFtbWFyVGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJwYXJzZSIsImxleGVyIiwiZnJvbUdyYW1tYXIiLCJjb250ZW50IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50IiwiaHRtbHMiLCJyZWR1Y2UiLCJsaW5lIiwiaW5kZXgiLCJsaW5lSFRNTCIsImdldEhUTUwiLCJsaW5lTnVtYmVyIiwiaHRtbCIsInRva2Vuc1RleHRhcmVhSFRNTCIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsImNsZWFyVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdNLElBQUVFLFFBQUYsR0FBZUgsSUFBZixDQUFFRyxRQUFGO0FBQUEsSUFDRUMsZUFERixHQUN3Q0YsVUFEeEMsQ0FDRUUsZUFERjtBQUFBLElBQ21CQyxnQkFEbkIsR0FDd0NILFVBRHhDLENBQ21CRyxnQkFEbkI7OztBQUdOLElBQU1DLDJCQUEyQixtQkFBakM7QUFBQSxJQUNNQywwQkFBMEIsa0JBRGhDO0FBQUEsSUFFTUMsMEJBQTBCLGtCQUZoQztBQUFBLElBR01DLDBCQUEwQixrQkFIaEM7QUFBQSxJQUlNQyx5QkFBeUIsaUJBSi9CO0FBQUEsSUFLTUMsa0JBQWtCLElBQUlQLGVBQUosQ0FBb0JHLHVCQUFwQixDQUx4QjtBQUFBLElBTU1LLGtCQUFrQixJQUFJVCxRQUFKLENBQWFLLHVCQUFiLENBTnhCO0FBQUEsSUFPTUssa0JBQWtCLElBQUlWLFFBQUosQ0FBYU0sdUJBQWIsQ0FQeEI7QUFBQSxJQVFNSyxpQkFBaUIsSUFBSVgsUUFBSixDQUFhTyxzQkFBYixDQVJ2QjtBQUFBLElBU01LLHdCQUF3QixLQVQ5QjtBQUFBLElBVU1DLHVCQUF1QixJQVY3Qjs7QUFZQSxJQUFJWCxnQkFBSixDQUFxQkMsd0JBQXJCLEVBQStDUyxxQkFBL0MsRUFBc0VDLG9CQUF0RTs7SUFFTUMsTzs7Ozs7Ozt3QkFDT0MsTyxFQUFTQyxLLEVBQU87QUFDekIsVUFBTUMsdUJBQXVCQyxLQUFLQyxTQUFMLENBQWVKLE9BQWYsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsQ0FBN0I7O0FBRUFOLHNCQUFnQlcsUUFBaEIsQ0FBeUJILG9CQUF6Qjs7QUFFQVIsc0JBQWdCWSxFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFXO0FBQ3JDUCxnQkFBUVEsWUFBUixDQUFxQk4sS0FBckI7QUFDRCxPQUZEOztBQUlBTixzQkFBZ0JXLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDckNQLGdCQUFRUSxZQUFSLENBQXFCTixLQUFyQjtBQUNELE9BRkQ7QUFHRDs7O2lDQUVtQkEsSyxFQUFPO0FBQ3pCLFVBQUk7QUFDRixZQUFNTyx1QkFBdUJkLGdCQUFnQmUsUUFBaEIsRUFBN0I7QUFBQSxZQUNNQyx1QkFBdUJmLGdCQUFnQmMsUUFBaEIsRUFEN0I7QUFBQSxZQUVNVCxVQUFVRyxLQUFLUSxLQUFMLENBQVdILG9CQUFYLENBRmhCO0FBQUEsWUFHTUksUUFBUVgsTUFBTVksV0FBTixDQUFrQmIsT0FBbEIsQ0FIZDtBQUFBLFlBSU1jLFVBQVVKLG9CQUpoQjtBQUFBLFlBSXVDO0FBQ2pDSyxnQkFBUUgsTUFBTUksZ0JBQU4sQ0FBdUJGLE9BQXZCLENBTGQ7QUFBQSxZQU1NRyxRQUFRRixNQUFNRyxNQUFOLENBQWEsVUFBU0QsS0FBVCxFQUFnQkUsSUFBaEIsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ2hELGNBQU1DLFdBQVdGLEtBQUtHLE9BQUwsRUFBakI7QUFBQSxjQUNNQyxhQUFhSCxRQUFRLENBRDNCO0FBQUEsY0FFTUksT0FBVUQsVUFBVixVQUF5QkYsUUFGL0I7O0FBSUFKLG1CQUFTTyxJQUFUOztBQUVBLGlCQUFPUCxLQUFQO0FBQ0QsU0FSTyxFQVFMLEVBUkssQ0FOZDtBQUFBLFlBZU1RLHFCQUFxQlIsS0FmM0IsQ0FERSxDQWdCaUM7O0FBRW5DckIsdUJBQWU0QixJQUFmLENBQW9CQyxrQkFBcEI7O0FBRUE5Qix3QkFBZ0IrQixXQUFoQixDQUE0QixPQUE1QjtBQUNELE9BckJELENBcUJFLE9BQU9DLEtBQVAsRUFBYztBQUNkaEMsd0JBQWdCaUMsUUFBaEIsQ0FBeUIsT0FBekI7O0FBRUE3QixnQkFBUThCLFdBQVI7QUFDRDtBQUNGOzs7a0NBRW9CO0FBQ25CLFVBQU1KLHFCQUFxQixFQUEzQjs7QUFFQTdCLHFCQUFlNEIsSUFBZixDQUFvQkMsa0JBQXBCO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCaEMsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lsYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lsYXlvdXQ7XG5cbmNvbnN0IHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciA9ICcjdmVydGljYWxTcGxpdHRlcicsXG4gICAgICBzaXplYWJsZUVsZW1lbnRTZWxlY3RvciA9ICcjc2l6ZWFibGVFbGVtZW50JyxcbiAgICAgIGdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2dyYW1tYXInLFxuICAgICAgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjY29udGVudCcsXG4gICAgICB0b2tlbnNUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI3Rva2VucycsXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGdyYW1tYXJUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShncmFtbWFyVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBjb250ZW50VGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoY29udGVudFRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgdG9rZW5zVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEodG9rZW5zVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIodmVydGljYWxTcGxpdHRlclNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50KTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oZ3JhbW1hciwgTGV4ZXIpIHtcbiAgICBjb25zdCBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGdyYW1tYXIsIG51bGwsICcgICcpO1xuXG4gICAgZ3JhbW1hclRleHRhcmVhLnNldFZhbHVlKGdyYW1tYXJUZXh0QXJlYVZhbHVlKTtcblxuICAgIGdyYW1tYXJUZXh0YXJlYS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKExleGVyKTsgXG4gICAgfSk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVRva2VucyhMZXhlcik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9rZW5zKExleGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hclRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgZ3JhbW1hciA9IEpTT04ucGFyc2UoZ3JhbW1hclRleHRhcmVhVmFsdWUpLFxuICAgICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgIC8vL1xuICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgaHRtbHMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24oaHRtbHMsIGxpbmUsIGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGxpbmVIVE1MID0gbGluZS5nZXRIVE1MKCksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXIgPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPSBgJHtsaW5lTnVtYmVyfTogJHtsaW5lSFRNTH1gO1xuICBcbiAgICAgICAgICAgICAgaHRtbHMgKz0gaHRtbDtcbiAgXG4gICAgICAgICAgICAgIHJldHVybiBodG1scztcbiAgICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICAgIHRva2Vuc1RleHRhcmVhSFRNTCA9IGh0bWxzOyAgLy8vXG5cbiAgICAgIHRva2Vuc1RleHRhcmVhLmh0bWwodG9rZW5zVGV4dGFyZWFIVE1MKTtcblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICAgIEV4YW1wbGUuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICB0b2tlbnNUZXh0YXJlYS5odG1sKHRva2Vuc1RleHRhcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIl19