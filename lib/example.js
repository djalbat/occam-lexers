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
      try {
        var contentTextAreaValue = contentTextArea.getValue(),
            content = contentTextAreaValue,
            ///
        contents = content.split(/\n/),
            lines = lexer.linesFromContents(contents, lineNumber, minimumLinesLength, previousLineInComment, followingLineInComment),
            htmls = lines.reduce(function (htmls, line, index) {
          var lineHTML = line.getHTML(),
              lineNumber = index + 1,
              html = lineNumber + ': ' + lineHTML;

          htmls += html;

          return htmls;
        }, ''),
            tokensTextAreaHTML = htmls; ///

        tokensTextArea.html(tokensTextAreaHTML);

        contentTextArea.removeClass('error');
      } catch (error) {
        contentTextArea.addClass('error');

        Example.clearTokens();
      }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRBcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWEiLCJ0b2tlbnNUZXh0QXJlYSIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIkV4YW1wbGUiLCJoYW5kbGVyIiwib24iLCJsZXhlciIsImxpbmVOdW1iZXIiLCJtaW5pbXVtTGluZXNMZW5ndGgiLCJwcmV2aW91c0xpbmVJbkNvbW1lbnQiLCJmb2xsb3dpbmdMaW5lSW5Db21tZW50IiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsImh0bWxzIiwicmVkdWNlIiwibGluZSIsImluZGV4IiwibGluZUhUTUwiLCJnZXRIVE1MIiwiaHRtbCIsInRva2Vuc1RleHRBcmVhSFRNTCIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsImNsZWFyVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFSUUsV0FBV0gsT0FBT0csUUFGdEI7QUFBQSxJQUdJQyxrQkFBa0JGLGFBQWFFLGVBSG5DO0FBQUEsSUFJSUMsbUJBQW1CSCxhQUFhRyxnQkFKcEM7O0FBTUEsSUFBSUMscUJBQXFCLGFBQXpCO0FBQUEsSUFDSUMsMEJBQTBCLGtCQUQ5QjtBQUFBLElBRUlDLHlCQUF5QixpQkFGN0I7QUFBQSxJQUdJQyxrQkFBa0IsSUFBSU4sUUFBSixDQUFhSSx1QkFBYixDQUh0QjtBQUFBLElBSUlHLGlCQUFpQixJQUFJUCxRQUFKLENBQWFLLHNCQUFiLENBSnJCO0FBQUEsSUFLSUcsYUFBYSxJQUFJUCxlQUFKLENBQW9CRSxrQkFBcEIsQ0FMakI7QUFBQSxJQU1JTSxrQkFBa0JQLGlCQUFpQlEsUUFBakIsQ0FBMEJELGVBTmhEOztBQVFBLElBQUlQLGdCQUFKLENBQXFCLHlCQUFyQixFQUFnRE8sZUFBaEQsRUFBaUVELFVBQWpFOztJQUVNRyxPOzs7Ozs7OzJDQUMwQkMsTyxFQUFTO0FBQ3JDTixzQkFBZ0JPLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCRCxPQUE1QjtBQUNEOzs7aUNBRW1CRSxLLEVBQU9DLFUsRUFBWUMsa0IsRUFBb0JDLHFCLEVBQXVCQyxzQixFQUF3QjtBQUN4RyxVQUFJO0FBQ0YsWUFBSUMsdUJBQXVCYixnQkFBZ0JjLFFBQWhCLEVBQTNCO0FBQUEsWUFDSUMsVUFBVUYsb0JBRGQ7QUFBQSxZQUNxQztBQUNqQ0csbUJBQVdELFFBQVFFLEtBQVIsQ0FBYyxJQUFkLENBRmY7QUFBQSxZQUdJQyxRQUFRVixNQUFNVyxpQkFBTixDQUF3QkgsUUFBeEIsRUFBa0NQLFVBQWxDLEVBQThDQyxrQkFBOUMsRUFBa0VDLHFCQUFsRSxFQUF5RkMsc0JBQXpGLENBSFo7QUFBQSxZQUlJUSxRQUFRRixNQUFNRyxNQUFOLENBQWEsVUFBU0QsS0FBVCxFQUFnQkUsSUFBaEIsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ2hELGNBQUlDLFdBQVdGLEtBQUtHLE9BQUwsRUFBZjtBQUFBLGNBQ0loQixhQUFhYyxRQUFRLENBRHpCO0FBQUEsY0FFSUcsT0FBVWpCLFVBQVYsVUFBeUJlLFFBRjdCOztBQUlBSixtQkFBU00sSUFBVDs7QUFFQSxpQkFBT04sS0FBUDtBQUNELFNBUk8sRUFRTCxFQVJLLENBSlo7QUFBQSxZQWFJTyxxQkFBcUJQLEtBYnpCLENBREUsQ0FjK0I7O0FBRWpDbkIsdUJBQWV5QixJQUFmLENBQW9CQyxrQkFBcEI7O0FBRUEzQix3QkFBZ0I0QixXQUFoQixDQUE0QixPQUE1QjtBQUNELE9BbkJELENBbUJFLE9BQU9DLEtBQVAsRUFBYztBQUNkN0Isd0JBQWdCOEIsUUFBaEIsQ0FBeUIsT0FBekI7O0FBRUF6QixnQkFBUTBCLFdBQVI7QUFDRDtBQUNGOzs7a0NBRW9CO0FBQ25CLFVBQUlKLHFCQUFxQixFQUF6Qjs7QUFFQTFCLHFCQUFleUIsSUFBZixDQUFvQkMsa0JBQXBCO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCNUIsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIGVhc3l1aWxheW91dCA9IHJlcXVpcmUoJ2Vhc3l1aS1sYXlvdXQnKSxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYSxcbiAgICBTaXplYWJsZUVsZW1lbnQgPSBlYXN5dWlsYXlvdXQuU2l6ZWFibGVFbGVtZW50LFxuICAgIFZlcnRpY2FsU3BsaXR0ZXIgPSBlYXN5dWlsYXlvdXQuVmVydGljYWxTcGxpdHRlcjtcblxudmFyIGxlZnRDb2x1bW5TZWxlY3RvciA9ICcjbGVmdENvbHVtbicsXG4gICAgY29udGVudFRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjY29udGVudCcsXG4gICAgdG9rZW5zVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSN0b2tlbnMnLFxuICAgIGNvbnRlbnRUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShjb250ZW50VGV4dEFyZWFTZWxlY3RvciksXG4gICAgdG9rZW5zVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEodG9rZW5zVGV4dEFyZWFTZWxlY3RvciksXG4gICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICBUT19USEVfUklHSFRfT0YgPSBWZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkLlRPX1RIRV9SSUdIVF9PRjtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBjb250ZW50VGV4dEFyZWFPbktleVVwKGhhbmRsZXIpIHtcbiAgICBjb250ZW50VGV4dEFyZWEub24oJ2tleXVwJywgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9rZW5zKGxleGVyLCBsaW5lTnVtYmVyLCBtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgY29udGVudFRleHRBcmVhVmFsdWUgPSBjb250ZW50VGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRBcmVhVmFsdWUsICAvLy9cbiAgICAgICAgICBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxuICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGxpbmVOdW1iZXIsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcbiAgICAgICAgICBodG1scyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbihodG1scywgbGluZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBsaW5lSFRNTCA9IGxpbmUuZ2V0SFRNTCgpLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXIgPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgaHRtbCA9IGAke2xpbmVOdW1iZXJ9OiAke2xpbmVIVE1MfWA7XG5cbiAgICAgICAgICAgIGh0bWxzICs9IGh0bWw7XG5cbiAgICAgICAgICAgIHJldHVybiBodG1scztcbiAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgdG9rZW5zVGV4dEFyZWFIVE1MID0gaHRtbHM7ICAvLy9cblxuICAgICAgdG9rZW5zVGV4dEFyZWEuaHRtbCh0b2tlbnNUZXh0QXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dEFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0QXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgRXhhbXBsZS5jbGVhclRva2VucygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclRva2VucygpIHtcbiAgICB2YXIgdG9rZW5zVGV4dEFyZWFIVE1MID0gJyc7XG5cbiAgICB0b2tlbnNUZXh0QXJlYS5odG1sKHRva2Vuc1RleHRBcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIl19