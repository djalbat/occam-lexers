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
        key: 'updateTokens',
        value: function updateTokens(contentTextAreaValue, lexer) {
            var content = contentTextAreaValue,
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
    }]);

    return Example;
}();

Example.contentTextArea = contentTextArea; ///

module.exports = Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRBcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWEiLCJ0b2tlbnNUZXh0QXJlYSIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIkV4YW1wbGUiLCJjb250ZW50VGV4dEFyZWFWYWx1ZSIsImxleGVyIiwiY29udGVudCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudCIsImxpbmVzSFRNTCIsInJlZHVjZSIsImxpbmUiLCJsaW5lSFRNTCIsImdldEhUTUwiLCJ0b2tlbnNUZXh0QXJlYUhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFSUUsV0FBV0gsT0FBT0csUUFGdEI7QUFBQSxJQUdJQyxrQkFBa0JGLGFBQWFFLGVBSG5DO0FBQUEsSUFJSUMsbUJBQW1CSCxhQUFhRyxnQkFKcEM7O0FBTUEsSUFBSUMscUJBQXFCLGFBQXpCO0FBQUEsSUFDSUMsMEJBQTBCLGtCQUQ5QjtBQUFBLElBRUlDLHlCQUF5QixpQkFGN0I7QUFBQSxJQUdJQyxrQkFBa0IsSUFBSU4sUUFBSixDQUFhSSx1QkFBYixDQUh0QjtBQUFBLElBSUlHLGlCQUFpQixJQUFJUCxRQUFKLENBQWFLLHNCQUFiLENBSnJCO0FBQUEsSUFLSUcsYUFBYSxJQUFJUCxlQUFKLENBQW9CRSxrQkFBcEIsQ0FMakI7QUFBQSxJQU1JTSxrQkFBa0JQLGlCQUFpQlEsUUFBakIsQ0FBMEJELGVBTmhEOztBQVFBLElBQUlQLGdCQUFKLENBQXFCLHlCQUFyQixFQUFnRE8sZUFBaEQsRUFBaUVELFVBQWpFOztJQUVNRyxPOzs7Ozs7O3FDQUNnQkMsb0IsRUFBc0JDLEssRUFBTztBQUMvQyxnQkFBSUMsVUFBVUYsb0JBQWQ7QUFBQSxnQkFBcUM7QUFDakNHLG9CQUFRRixNQUFNRyxnQkFBTixDQUF1QkYsT0FBdkIsQ0FEWjtBQUFBLGdCQUVJRyxZQUFZRixNQUFNRyxNQUFOLENBQWEsVUFBU0QsU0FBVCxFQUFvQkUsSUFBcEIsRUFBMEI7QUFDakQsb0JBQUlDLFdBQVdELEtBQUtFLE9BQUwsRUFBZjs7QUFFQUosNkJBQWFHLFFBQWI7O0FBRUEsdUJBQU9ILFNBQVA7QUFDRCxhQU5XLEVBTVQsRUFOUyxDQUZoQjtBQUFBLGdCQVNJSyxxQkFBcUJMLFNBVHpCLENBRCtDLENBVVY7O0FBRXJDViwyQkFBZWdCLElBQWYsQ0FBb0JELGtCQUFwQjtBQUNEOzs7Ozs7QUFHSFgsUUFBUUwsZUFBUixHQUEwQkEsZUFBMUIsQyxDQUE0Qzs7QUFFNUNrQixPQUFPQyxPQUFQLEdBQWlCZCxPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgZWFzeXVpbGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgIFRleHRBcmVhID0gZWFzeXVpLlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3l1aWxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3l1aWxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBjb250ZW50VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICB0b2tlbnNUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI3Rva2VucycsXG4gICAgY29udGVudFRleHRBcmVhID0gbmV3IFRleHRBcmVhKGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICB0b2tlbnNUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYSh0b2tlbnNUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgIFRPX1RIRV9SSUdIVF9PRiA9IFZlcnRpY2FsU3BsaXR0ZXIuc2l0dWF0ZWQuVE9fVEhFX1JJR0hUX09GO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcignLmxlZnQudmVydGljYWwuc3BsaXR0ZXInLCBUT19USEVfUklHSFRfT0YsIGxlZnRDb2x1bW4pO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHVwZGF0ZVRva2Vucyhjb250ZW50VGV4dEFyZWFWYWx1ZSwgbGV4ZXIpIHtcbiAgICB2YXIgY29udGVudCA9IGNvbnRlbnRUZXh0QXJlYVZhbHVlLCAgLy8vXG4gICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgbGluZXNIVE1MID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKGxpbmVzSFRNTCwgbGluZSkge1xuICAgICAgICAgIHZhciBsaW5lSFRNTCA9IGxpbmUuZ2V0SFRNTCgpO1xuXG4gICAgICAgICAgbGluZXNIVE1MICs9IGxpbmVIVE1MO1xuXG4gICAgICAgICAgcmV0dXJuIGxpbmVzSFRNTDtcbiAgICAgICAgfSwgJycpLFxuICAgICAgICB0b2tlbnNUZXh0QXJlYUhUTUwgPSBsaW5lc0hUTUw7ICAvLy9cblxuICAgIHRva2Vuc1RleHRBcmVhLmh0bWwodG9rZW5zVGV4dEFyZWFIVE1MKTtcbiAgfVxufVxuXG5FeGFtcGxlLmNvbnRlbnRUZXh0QXJlYSA9IGNvbnRlbnRUZXh0QXJlYTsgIC8vL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=