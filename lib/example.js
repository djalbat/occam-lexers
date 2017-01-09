'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

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
    key: 'contentTextAreaOnChange',
    value: function contentTextAreaOnChange(handler) {
      contentTextArea.onChange(handler);
    }
  }, {
    key: 'updateTokens',
    value: function updateTokens(lexer) {
      var contentTextAreaValue = contentTextArea.getValue(),
          content = contentTextAreaValue,
          ///
      lines = lexer.linesFromContent(content),
          linesHTML = lines.reduce(function (linesHTML, line) {
        var lineHTML = line.getHTML();

        linesHTML += lineHTML;

        return linesHTML;
      }, ''),
          tokensTextAreaHTML = linesHTML; ///

      tokensTextArea.html(tokensTextAreaHTML);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRBcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWEiLCJ0b2tlbnNUZXh0QXJlYSIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIkV4YW1wbGUiLCJoYW5kbGVyIiwib25DaGFuZ2UiLCJsZXhlciIsImNvbnRlbnRUZXh0QXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJjb250ZW50IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50IiwibGluZXNIVE1MIiwicmVkdWNlIiwibGluZSIsImxpbmVIVE1MIiwiZ2V0SFRNTCIsInRva2Vuc1RleHRBcmVhSFRNTCIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxlQUFlRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVJRSxXQUFXSCxPQUFPRyxRQUZ0QjtBQUFBLElBR0lDLGtCQUFrQkYsYUFBYUUsZUFIbkM7QUFBQSxJQUlJQyxtQkFBbUJILGFBQWFHLGdCQUpwQzs7QUFNQSxJQUFJQyxxQkFBcUIsYUFBekI7QUFBQSxJQUNJQywwQkFBMEIsa0JBRDlCO0FBQUEsSUFFSUMseUJBQXlCLGlCQUY3QjtBQUFBLElBR0lDLGtCQUFrQixJQUFJTixRQUFKLENBQWFJLHVCQUFiLENBSHRCO0FBQUEsSUFJSUcsaUJBQWlCLElBQUlQLFFBQUosQ0FBYUssc0JBQWIsQ0FKckI7QUFBQSxJQUtJRyxhQUFhLElBQUlQLGVBQUosQ0FBb0JFLGtCQUFwQixDQUxqQjtBQUFBLElBTUlNLGtCQUFrQlAsaUJBQWlCUSxRQUFqQixDQUEwQkQsZUFOaEQ7O0FBUUEsSUFBSVAsZ0JBQUosQ0FBcUIseUJBQXJCLEVBQWdETyxlQUFoRCxFQUFpRUQsVUFBakU7O0lBRU1HLE87Ozs7Ozs7NENBQzJCQyxPLEVBQVM7QUFDdENOLHNCQUFnQk8sUUFBaEIsQ0FBeUJELE9BQXpCO0FBQ0Q7OztpQ0FFbUJFLEssRUFBTztBQUN6QixVQUFJQyx1QkFBdUJULGdCQUFnQlUsUUFBaEIsRUFBM0I7QUFBQSxVQUNJQyxVQUFVRixvQkFEZDtBQUFBLFVBQ3FDO0FBQ2pDRyxjQUFRSixNQUFNSyxnQkFBTixDQUF1QkYsT0FBdkIsQ0FGWjtBQUFBLFVBR0lHLFlBQVlGLE1BQU1HLE1BQU4sQ0FBYSxVQUFTRCxTQUFULEVBQW9CRSxJQUFwQixFQUEwQjtBQUNqRCxZQUFJQyxXQUFXRCxLQUFLRSxPQUFMLEVBQWY7O0FBRUFKLHFCQUFhRyxRQUFiOztBQUVBLGVBQU9ILFNBQVA7QUFDRCxPQU5XLEVBTVQsRUFOUyxDQUhoQjtBQUFBLFVBVUlLLHFCQUFxQkwsU0FWekIsQ0FEeUIsQ0FXWTs7QUFFckNiLHFCQUFlbUIsSUFBZixDQUFvQkQsa0JBQXBCO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBSUEscUJBQXFCLEVBQXpCOztBQUVBbEIscUJBQWVtQixJQUFmLENBQW9CRCxrQkFBcEI7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJqQixPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgZWFzeXVpbGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgIFRleHRBcmVhID0gZWFzeXVpLlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3l1aWxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3l1aWxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBjb250ZW50VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICB0b2tlbnNUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI3Rva2VucycsXG4gICAgY29udGVudFRleHRBcmVhID0gbmV3IFRleHRBcmVhKGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICB0b2tlbnNUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYSh0b2tlbnNUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgIFRPX1RIRV9SSUdIVF9PRiA9IFZlcnRpY2FsU3BsaXR0ZXIuc2l0dWF0ZWQuVE9fVEhFX1JJR0hUX09GO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcignLmxlZnQudmVydGljYWwuc3BsaXR0ZXInLCBUT19USEVfUklHSFRfT0YsIGxlZnRDb2x1bW4pO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIGNvbnRlbnRUZXh0QXJlYU9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICBjb250ZW50VGV4dEFyZWEub25DaGFuZ2UoaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9rZW5zKGxleGVyKSB7XG4gICAgdmFyIGNvbnRlbnRUZXh0QXJlYVZhbHVlID0gY29udGVudFRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dEFyZWFWYWx1ZSwgIC8vL1xuICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgIGxpbmVzSFRNTCA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbihsaW5lc0hUTUwsIGxpbmUpIHtcbiAgICAgICAgICB2YXIgbGluZUhUTUwgPSBsaW5lLmdldEhUTUwoKTtcblxuICAgICAgICAgIGxpbmVzSFRNTCArPSBsaW5lSFRNTDtcblxuICAgICAgICAgIHJldHVybiBsaW5lc0hUTUw7XG4gICAgICAgIH0sICcnKSxcbiAgICAgICAgdG9rZW5zVGV4dEFyZWFIVE1MID0gbGluZXNIVE1MOyAgLy8vXG5cbiAgICB0b2tlbnNUZXh0QXJlYS5odG1sKHRva2Vuc1RleHRBcmVhSFRNTCk7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJUb2tlbnMoKSB7XG4gICAgdmFyIHRva2Vuc1RleHRBcmVhSFRNTCA9ICcnO1xuXG4gICAgdG9rZW5zVGV4dEFyZWEuaHRtbCh0b2tlbnNUZXh0QXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==