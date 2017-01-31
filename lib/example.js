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
    key: 'contentTextAreaOnKeyUp',
    value: function contentTextAreaOnKeyUp(handler) {
      contentTextArea.on('keyup', handler);
    }
  }, {
    key: 'updateTokens',
    value: function updateTokens(lexer, lineNumber, minimumLinesLength, previousLineInComment, followingLineInComment) {
      var contentTextAreaValue = contentTextArea.getValue(),
          content = contentTextAreaValue,
          ///
      contents = content.split(/\n/),
          lines = lexer.linesFromContents(contents, lineNumber, minimumLinesLength, previousLineInComment, followingLineInComment),
          htmls = lines.reduce(function (htmls, line) {
        var lineHTML = line.getHTML(),
            lineNumber = line.getNumber(),
            html = lineNumber + ': ' + lineHTML;

        htmls += html;

        return htmls;
      }, ''),
          tokensTextAreaHTML = htmls; ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRBcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWEiLCJ0b2tlbnNUZXh0QXJlYSIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIkV4YW1wbGUiLCJoYW5kbGVyIiwib24iLCJsZXhlciIsImxpbmVOdW1iZXIiLCJtaW5pbXVtTGluZXNMZW5ndGgiLCJwcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJmb2xsb3dpbmdMaW5lSW5Db21tZW50IiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsImh0bWxzIiwicmVkdWNlIiwibGluZSIsImxpbmVIVE1MIiwiZ2V0SFRNTCIsImdldE51bWJlciIsImh0bWwiLCJ0b2tlbnNUZXh0QXJlYUhUTUwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxlQUFlRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVJRSxXQUFXSCxPQUFPRyxRQUZ0QjtBQUFBLElBR0lDLGtCQUFrQkYsYUFBYUUsZUFIbkM7QUFBQSxJQUlJQyxtQkFBbUJILGFBQWFHLGdCQUpwQzs7QUFNQSxJQUFJQyxxQkFBcUIsYUFBekI7QUFBQSxJQUNJQywwQkFBMEIsa0JBRDlCO0FBQUEsSUFFSUMseUJBQXlCLGlCQUY3QjtBQUFBLElBR0lDLGtCQUFrQixJQUFJTixRQUFKLENBQWFJLHVCQUFiLENBSHRCO0FBQUEsSUFJSUcsaUJBQWlCLElBQUlQLFFBQUosQ0FBYUssc0JBQWIsQ0FKckI7QUFBQSxJQUtJRyxhQUFhLElBQUlQLGVBQUosQ0FBb0JFLGtCQUFwQixDQUxqQjtBQUFBLElBTUlNLGtCQUFrQlAsaUJBQWlCUSxRQUFqQixDQUEwQkQsZUFOaEQ7O0FBUUEsSUFBSVAsZ0JBQUosQ0FBcUIseUJBQXJCLEVBQWdETyxlQUFoRCxFQUFpRUQsVUFBakU7O0lBRU1HLE87Ozs7Ozs7MkNBQzBCQyxPLEVBQVM7QUFDckNOLHNCQUFnQk8sRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEJELE9BQTVCO0FBQ0Q7OztpQ0FFbUJFLEssRUFBT0MsVSxFQUFZQyxrQixFQUFvQkMscUIsRUFBdUJDLHNCLEVBQXdCO0FBQ3hHLFVBQUlDLHVCQUF1QmIsZ0JBQWdCYyxRQUFoQixFQUEzQjtBQUFBLFVBQ0lDLFVBQVVGLG9CQURkO0FBQUEsVUFDcUM7QUFDakNHLGlCQUFXRCxRQUFRRSxLQUFSLENBQWMsSUFBZCxDQUZmO0FBQUEsVUFHSUMsUUFBUVYsTUFBTVcsaUJBQU4sQ0FBd0JILFFBQXhCLEVBQWtDUCxVQUFsQyxFQUE4Q0Msa0JBQTlDLEVBQWtFQyxxQkFBbEUsRUFBeUZDLHNCQUF6RixDQUhaO0FBQUEsVUFJSVEsUUFBUUYsTUFBTUcsTUFBTixDQUFhLFVBQVNELEtBQVQsRUFBZ0JFLElBQWhCLEVBQXNCO0FBQ3pDLFlBQUlDLFdBQVdELEtBQUtFLE9BQUwsRUFBZjtBQUFBLFlBQ0lmLGFBQWFhLEtBQUtHLFNBQUwsRUFEakI7QUFBQSxZQUVJQyxPQUFVakIsVUFBVixVQUF5QmMsUUFGN0I7O0FBSUFILGlCQUFTTSxJQUFUOztBQUVBLGVBQU9OLEtBQVA7QUFDRCxPQVJPLEVBUUwsRUFSSyxDQUpaO0FBQUEsVUFhSU8scUJBQXFCUCxLQWJ6QixDQUR3RyxDQWN2RTs7QUFFakNuQixxQkFBZXlCLElBQWYsQ0FBb0JDLGtCQUFwQjtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQUlBLHFCQUFxQixFQUF6Qjs7QUFFQTFCLHFCQUFleUIsSUFBZixDQUFvQkMsa0JBQXBCO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCeEIsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIGVhc3l1aWxheW91dCA9IHJlcXVpcmUoJ2Vhc3l1aS1sYXlvdXQnKSxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYSxcbiAgICBTaXplYWJsZUVsZW1lbnQgPSBlYXN5dWlsYXlvdXQuU2l6ZWFibGVFbGVtZW50LFxuICAgIFZlcnRpY2FsU3BsaXR0ZXIgPSBlYXN5dWlsYXlvdXQuVmVydGljYWxTcGxpdHRlcjtcblxudmFyIGxlZnRDb2x1bW5TZWxlY3RvciA9ICcjbGVmdENvbHVtbicsXG4gICAgY29udGVudFRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjY29udGVudCcsXG4gICAgdG9rZW5zVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSN0b2tlbnMnLFxuICAgIGNvbnRlbnRUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShjb250ZW50VGV4dEFyZWFTZWxlY3RvciksXG4gICAgdG9rZW5zVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEodG9rZW5zVGV4dEFyZWFTZWxlY3RvciksXG4gICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICBUT19USEVfUklHSFRfT0YgPSBWZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkLlRPX1RIRV9SSUdIVF9PRjtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBjb250ZW50VGV4dEFyZWFPbktleVVwKGhhbmRsZXIpIHtcbiAgICBjb250ZW50VGV4dEFyZWEub24oJ2tleXVwJywgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9rZW5zKGxleGVyLCBsaW5lTnVtYmVyLCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xuICAgIHZhciBjb250ZW50VGV4dEFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRBcmVhVmFsdWUsICAvLy9cbiAgICAgICAgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcbiAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgbGluZU51bWJlciwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxuICAgICAgICBodG1scyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbihodG1scywgbGluZSkge1xuICAgICAgICAgIHZhciBsaW5lSFRNTCA9IGxpbmUuZ2V0SFRNTCgpLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyID0gbGluZS5nZXROdW1iZXIoKSxcbiAgICAgICAgICAgICAgaHRtbCA9IGAke2xpbmVOdW1iZXJ9OiAke2xpbmVIVE1MfWA7XG5cbiAgICAgICAgICBodG1scyArPSBodG1sO1xuXG4gICAgICAgICAgcmV0dXJuIGh0bWxzO1xuICAgICAgICB9LCAnJyksXG4gICAgICAgIHRva2Vuc1RleHRBcmVhSFRNTCA9IGh0bWxzOyAgLy8vXG5cbiAgICB0b2tlbnNUZXh0QXJlYS5odG1sKHRva2Vuc1RleHRBcmVhSFRNTCk7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJUb2tlbnMoKSB7XG4gICAgdmFyIHRva2Vuc1RleHRBcmVhSFRNTCA9ICcnO1xuXG4gICAgdG9rZW5zVGV4dEFyZWEuaHRtbCh0b2tlbnNUZXh0QXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==