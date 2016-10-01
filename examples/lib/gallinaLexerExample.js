'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyUI = require('easyui'),
    easyUILayout = require('easyui-layout'),
    TextArea = easyUI.TextArea,
    SizeableElement = easyUILayout.SizeableElement,
    VerticalSplitter = easyUILayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextAreaSelector = 'textArea#content',
    tokensTextAreaSelector = 'textArea#tokens',
    contentTextArea = new TextArea(contentTextAreaSelector),
    tokensTextArea = new TextArea(tokensTextAreaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var GallinaLexer = require('../../es6/gallina/lexer'),
    GallinaContext = require('../../es6/gallina/context');

var GallinaLexerExample = function () {
    function GallinaLexerExample() {
        _classCallCheck(this, GallinaLexerExample);
    }

    _createClass(GallinaLexerExample, null, [{
        key: 'run',
        value: function run() {
            contentTextArea.onChange(function () {
                updateTokens();
            });
        }
    }]);

    return GallinaLexerExample;
}();

function updateTokens() {
    var contentTextAreaValue = contentTextArea.getValue(),
        content = contentTextAreaValue,
        ///
    commentDepth = 0,
        gallinaContext = new GallinaContext(commentDepth),
        context = gallinaContext,
        ///
    lines = GallinaLexer.linesFromContent(content, context),
        linesHTML = lines.reduce(function (linesHTML, line) {
        var lineHTML = line.getHTML();

        linesHTML += lineHTML;

        return linesHTML;
    }, ''),
        tokensHTML = linesHTML,
        ///
    tokensTextAreaHTML = tokensHTML; ///

    tokensTextArea.html(tokensTextAreaHTML);
}

module.exports = GallinaLexerExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hTGV4ZXJFeGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3lVSSIsInJlcXVpcmUiLCJlYXN5VUlMYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRBcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWEiLCJ0b2tlbnNUZXh0QXJlYSIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIkdhbGxpbmFMZXhlciIsIkdhbGxpbmFDb250ZXh0IiwiR2FsbGluYUxleGVyRXhhbXBsZSIsIm9uQ2hhbmdlIiwidXBkYXRlVG9rZW5zIiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJjb21tZW50RGVwdGgiLCJnYWxsaW5hQ29udGV4dCIsImNvbnRleHQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnQiLCJsaW5lc0hUTUwiLCJyZWR1Y2UiLCJsaW5lIiwibGluZUhUTUwiLCJnZXRIVE1MIiwidG9rZW5zSFRNTCIsInRva2Vuc1RleHRBcmVhSFRNTCIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxlQUFlRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVJRSxXQUFXSCxPQUFPRyxRQUZ0QjtBQUFBLElBR0lDLGtCQUFrQkYsYUFBYUUsZUFIbkM7QUFBQSxJQUlJQyxtQkFBbUJILGFBQWFHLGdCQUpwQzs7QUFNQSxJQUFJQyxxQkFBcUIsYUFBekI7QUFBQSxJQUNJQywwQkFBMEIsa0JBRDlCO0FBQUEsSUFFSUMseUJBQXlCLGlCQUY3QjtBQUFBLElBR0lDLGtCQUFrQixJQUFJTixRQUFKLENBQWFJLHVCQUFiLENBSHRCO0FBQUEsSUFJSUcsaUJBQWlCLElBQUlQLFFBQUosQ0FBYUssc0JBQWIsQ0FKckI7QUFBQSxJQUtJRyxhQUFhLElBQUlQLGVBQUosQ0FBb0JFLGtCQUFwQixDQUxqQjtBQUFBLElBTUlNLGtCQUFrQlAsaUJBQWlCUSxRQUFqQixDQUEwQkQsZUFOaEQ7O0FBUUEsSUFBSVAsZ0JBQUosQ0FBcUIseUJBQXJCLEVBQWdETyxlQUFoRCxFQUFpRUQsVUFBakU7O0FBRUEsSUFBSUcsZUFBZWIsUUFBUSx5QkFBUixDQUFuQjtBQUFBLElBQ0ljLGlCQUFpQmQsUUFBUSwyQkFBUixDQURyQjs7SUFHTWUsbUI7Ozs7Ozs7OEJBQ1M7QUFDWFAsNEJBQWdCUSxRQUFoQixDQUF5QixZQUFXO0FBQ2xDQztBQUNELGFBRkQ7QUFHRjs7Ozs7O0FBR0YsU0FBU0EsWUFBVCxHQUF3QjtBQUN0QixRQUFJQyx1QkFBdUJWLGdCQUFnQlcsUUFBaEIsRUFBM0I7QUFBQSxRQUNJQyxVQUFVRixvQkFEZDtBQUFBLFFBQ3FDO0FBQ2pDRyxtQkFBZSxDQUZuQjtBQUFBLFFBR0lDLGlCQUFpQixJQUFJUixjQUFKLENBQW1CTyxZQUFuQixDQUhyQjtBQUFBLFFBSUlFLFVBQVVELGNBSmQ7QUFBQSxRQUk4QjtBQUMxQkUsWUFBUVgsYUFBYVksZ0JBQWIsQ0FBOEJMLE9BQTlCLEVBQXVDRyxPQUF2QyxDQUxaO0FBQUEsUUFNSUcsWUFBWUYsTUFBTUcsTUFBTixDQUFhLFVBQVNELFNBQVQsRUFBb0JFLElBQXBCLEVBQTBCO0FBQ2pELFlBQUlDLFdBQVdELEtBQUtFLE9BQUwsRUFBZjs7QUFFQUoscUJBQWFHLFFBQWI7O0FBRUEsZUFBT0gsU0FBUDtBQUNELEtBTlcsRUFNVCxFQU5TLENBTmhCO0FBQUEsUUFhSUssYUFBYUwsU0FiakI7QUFBQSxRQWE0QjtBQUN4Qk0seUJBQXFCRCxVQWR6QixDQURzQixDQWVnQjs7QUFFdEN0QixtQkFBZXdCLElBQWYsQ0FBb0JELGtCQUFwQjtBQUNEOztBQUVERSxPQUFPQyxPQUFQLEdBQWlCcEIsbUJBQWpCIiwiZmlsZSI6ImdhbGxpbmFMZXhlckV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5VUkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBlYXN5VUlMYXlvdXQgPSByZXF1aXJlKCdlYXN5dWktbGF5b3V0JyksXG4gICAgVGV4dEFyZWEgPSBlYXN5VUkuVGV4dEFyZWEsXG4gICAgU2l6ZWFibGVFbGVtZW50ID0gZWFzeVVJTGF5b3V0LlNpemVhYmxlRWxlbWVudCxcbiAgICBWZXJ0aWNhbFNwbGl0dGVyID0gZWFzeVVJTGF5b3V0LlZlcnRpY2FsU3BsaXR0ZXI7XG5cbnZhciBsZWZ0Q29sdW1uU2VsZWN0b3IgPSAnI2xlZnRDb2x1bW4nLFxuICAgIGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2NvbnRlbnQnLFxuICAgIHRva2Vuc1RleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICBjb250ZW50VGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoY29udGVudFRleHRBcmVhU2VsZWN0b3IpLFxuICAgIHRva2Vuc1RleHRBcmVhID0gbmV3IFRleHRBcmVhKHRva2Vuc1RleHRBcmVhU2VsZWN0b3IpLFxuICAgIGxlZnRDb2x1bW4gPSBuZXcgU2l6ZWFibGVFbGVtZW50KGxlZnRDb2x1bW5TZWxlY3RvciksXG4gICAgVE9fVEhFX1JJR0hUX09GID0gVmVydGljYWxTcGxpdHRlci5zaXR1YXRlZC5UT19USEVfUklHSFRfT0Y7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbnZhciBHYWxsaW5hTGV4ZXIgPSByZXF1aXJlKCcuLi8uLi9lczYvZ2FsbGluYS9sZXhlcicpLFxuICAgIEdhbGxpbmFDb250ZXh0ID0gcmVxdWlyZSgnLi4vLi4vZXM2L2dhbGxpbmEvY29udGV4dCcpO1xuXG5jbGFzcyBHYWxsaW5hTGV4ZXJFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBjb250ZW50VGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGVUb2tlbnMoKTtcbiAgICB9KTtcbiB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRva2VucygpIHtcbiAgdmFyIGNvbnRlbnRUZXh0QXJlYVZhbHVlID0gY29udGVudFRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICBjb250ZW50ID0gY29udGVudFRleHRBcmVhVmFsdWUsICAvLy9cbiAgICAgIGNvbW1lbnREZXB0aCA9IDAsXG4gICAgICBnYWxsaW5hQ29udGV4dCA9IG5ldyBHYWxsaW5hQ29udGV4dChjb21tZW50RGVwdGgpLFxuICAgICAgY29udGV4dCA9IGdhbGxpbmFDb250ZXh0LCAvLy9cbiAgICAgIGxpbmVzID0gR2FsbGluYUxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCksXG4gICAgICBsaW5lc0hUTUwgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24obGluZXNIVE1MLCBsaW5lKSB7XG4gICAgICAgIHZhciBsaW5lSFRNTCA9IGxpbmUuZ2V0SFRNTCgpO1xuXG4gICAgICAgIGxpbmVzSFRNTCArPSBsaW5lSFRNTDtcblxuICAgICAgICByZXR1cm4gbGluZXNIVE1MO1xuICAgICAgfSwgJycpLFxuICAgICAgdG9rZW5zSFRNTCA9IGxpbmVzSFRNTCwgLy8vXG4gICAgICB0b2tlbnNUZXh0QXJlYUhUTUwgPSB0b2tlbnNIVE1MOyAgLy8vXG5cbiAgdG9rZW5zVGV4dEFyZWEuaHRtbCh0b2tlbnNUZXh0QXJlYUhUTUwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFMZXhlckV4YW1wbGU7XG4iXX0=