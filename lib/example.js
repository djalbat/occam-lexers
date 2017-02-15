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
    value: function updateTokens(lexer, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      try {
        var contentTextAreaValue = contentTextArea.getValue(),
            content = contentTextAreaValue,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRBcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWEiLCJ0b2tlbnNUZXh0QXJlYSIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIkV4YW1wbGUiLCJoYW5kbGVyIiwib24iLCJsZXhlciIsImZpcnN0TGluZUluZGV4IiwibWluaW11bUxpbmVzTGVuZ3RoIiwicHJldmlvdXNMaW5lSW5Db21tZW50IiwiZm9sbG93aW5nTGluZUluQ29tbWVudCIsImNvbnRlbnRUZXh0QXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJjb250ZW50IiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudHMiLCJodG1scyIsInJlZHVjZSIsImxpbmUiLCJpbmRleCIsImxpbmVIVE1MIiwiZ2V0SFRNTCIsImxpbmVOdW1iZXIiLCJodG1sIiwidG9rZW5zVGV4dEFyZWFIVE1MIiwicmVtb3ZlQ2xhc3MiLCJlcnJvciIsImFkZENsYXNzIiwiY2xlYXJUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxlQUFlRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVJRSxXQUFXSCxPQUFPRyxRQUZ0QjtBQUFBLElBR0lDLGtCQUFrQkYsYUFBYUUsZUFIbkM7QUFBQSxJQUlJQyxtQkFBbUJILGFBQWFHLGdCQUpwQzs7QUFNQSxJQUFJQyxxQkFBcUIsYUFBekI7QUFBQSxJQUNJQywwQkFBMEIsa0JBRDlCO0FBQUEsSUFFSUMseUJBQXlCLGlCQUY3QjtBQUFBLElBR0lDLGtCQUFrQixJQUFJTixRQUFKLENBQWFJLHVCQUFiLENBSHRCO0FBQUEsSUFJSUcsaUJBQWlCLElBQUlQLFFBQUosQ0FBYUssc0JBQWIsQ0FKckI7QUFBQSxJQUtJRyxhQUFhLElBQUlQLGVBQUosQ0FBb0JFLGtCQUFwQixDQUxqQjtBQUFBLElBTUlNLGtCQUFrQlAsaUJBQWlCUSxRQUFqQixDQUEwQkQsZUFOaEQ7O0FBUUEsSUFBSVAsZ0JBQUosQ0FBcUIseUJBQXJCLEVBQWdETyxlQUFoRCxFQUFpRUQsVUFBakU7O0lBRU1HLE87Ozs7Ozs7MkNBQzBCQyxPLEVBQVM7QUFDckNOLHNCQUFnQk8sRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEJELE9BQTVCO0FBQ0Q7OztpQ0FFbUJFLEssRUFBT0MsYyxFQUFnQkMsa0IsRUFBb0JDLHFCLEVBQXVCQyxzQixFQUF3QjtBQUM1RyxVQUFJO0FBQ0YsWUFBSUMsdUJBQXVCYixnQkFBZ0JjLFFBQWhCLEVBQTNCO0FBQUEsWUFDSUMsVUFBVUYsb0JBRGQ7QUFBQSxZQUNxQztBQUNqQ0csbUJBQVdELFFBQVFFLEtBQVIsQ0FBYyxJQUFkLENBRmY7QUFBQSxZQUdJQyxRQUFRVixNQUFNVyxpQkFBTixDQUF3QkgsUUFBeEIsRUFBa0NQLGNBQWxDLEVBQWtEQyxrQkFBbEQsRUFBc0VDLHFCQUF0RSxFQUE2RkMsc0JBQTdGLENBSFo7QUFBQSxZQUlJUSxRQUFRRixNQUFNRyxNQUFOLENBQWEsVUFBU0QsS0FBVCxFQUFnQkUsSUFBaEIsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ2hELGNBQUlDLFdBQVdGLEtBQUtHLE9BQUwsRUFBZjtBQUFBLGNBQ0lDLGFBQWFILFFBQVEsQ0FEekI7QUFBQSxjQUVJSSxPQUFVRCxVQUFWLFVBQXlCRixRQUY3Qjs7QUFJQUosbUJBQVNPLElBQVQ7O0FBRUEsaUJBQU9QLEtBQVA7QUFDRCxTQVJPLEVBUUwsRUFSSyxDQUpaO0FBQUEsWUFhSVEscUJBQXFCUixLQWJ6QixDQURFLENBYytCOztBQUVqQ25CLHVCQUFlMEIsSUFBZixDQUFvQkMsa0JBQXBCOztBQUVBNUIsd0JBQWdCNkIsV0FBaEIsQ0FBNEIsT0FBNUI7QUFDRCxPQW5CRCxDQW1CRSxPQUFPQyxLQUFQLEVBQWM7QUFDZDlCLHdCQUFnQitCLFFBQWhCLENBQXlCLE9BQXpCOztBQUVBMUIsZ0JBQVEyQixXQUFSO0FBQ0Q7QUFDRjs7O2tDQUVvQjtBQUNuQixVQUFJSixxQkFBcUIsRUFBekI7O0FBRUEzQixxQkFBZTBCLElBQWYsQ0FBb0JDLGtCQUFwQjtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQjdCLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBlYXN5dWlsYXlvdXQgPSByZXF1aXJlKCdlYXN5dWktbGF5b3V0JyksXG4gICAgVGV4dEFyZWEgPSBlYXN5dWkuVGV4dEFyZWEsXG4gICAgU2l6ZWFibGVFbGVtZW50ID0gZWFzeXVpbGF5b3V0LlNpemVhYmxlRWxlbWVudCxcbiAgICBWZXJ0aWNhbFNwbGl0dGVyID0gZWFzeXVpbGF5b3V0LlZlcnRpY2FsU3BsaXR0ZXI7XG5cbnZhciBsZWZ0Q29sdW1uU2VsZWN0b3IgPSAnI2xlZnRDb2x1bW4nLFxuICAgIGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2NvbnRlbnQnLFxuICAgIHRva2Vuc1RleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICBjb250ZW50VGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoY29udGVudFRleHRBcmVhU2VsZWN0b3IpLFxuICAgIHRva2Vuc1RleHRBcmVhID0gbmV3IFRleHRBcmVhKHRva2Vuc1RleHRBcmVhU2VsZWN0b3IpLFxuICAgIGxlZnRDb2x1bW4gPSBuZXcgU2l6ZWFibGVFbGVtZW50KGxlZnRDb2x1bW5TZWxlY3RvciksXG4gICAgVE9fVEhFX1JJR0hUX09GID0gVmVydGljYWxTcGxpdHRlci5zaXR1YXRlZC5UT19USEVfUklHSFRfT0Y7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgY29udGVudFRleHRBcmVhT25LZXlVcChoYW5kbGVyKSB7XG4gICAgY29udGVudFRleHRBcmVhLm9uKCdrZXl1cCcsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRva2VucyhsZXhlciwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBjb250ZW50VGV4dEFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dEFyZWFWYWx1ZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXG4gICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSxcbiAgICAgICAgICBodG1scyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbihodG1scywgbGluZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBsaW5lSFRNTCA9IGxpbmUuZ2V0SFRNTCgpLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXIgPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgaHRtbCA9IGAke2xpbmVOdW1iZXJ9OiAke2xpbmVIVE1MfWA7XG5cbiAgICAgICAgICAgIGh0bWxzICs9IGh0bWw7XG5cbiAgICAgICAgICAgIHJldHVybiBodG1scztcbiAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgdG9rZW5zVGV4dEFyZWFIVE1MID0gaHRtbHM7ICAvLy9cblxuICAgICAgdG9rZW5zVGV4dEFyZWEuaHRtbCh0b2tlbnNUZXh0QXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dEFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0QXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgRXhhbXBsZS5jbGVhclRva2VucygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclRva2VucygpIHtcbiAgICB2YXIgdG9rZW5zVGV4dEFyZWFIVE1MID0gJyc7XG5cbiAgICB0b2tlbnNUZXh0QXJlYS5odG1sKHRva2Vuc1RleHRBcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIl19