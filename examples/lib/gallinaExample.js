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

var GallinaExample = function () {
    function GallinaExample() {
        _classCallCheck(this, GallinaExample);
    }

    _createClass(GallinaExample, null, [{
        key: 'run',
        value: function run() {
            contentTextArea.onChange(function () {
                updateTokens();
            });
        }
    }]);

    return GallinaExample;
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

module.exports = GallinaExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJlYXN5VUkiLCJyZXF1aXJlIiwiZWFzeVVJTGF5b3V0IiwiVGV4dEFyZWEiLCJTaXplYWJsZUVsZW1lbnQiLCJWZXJ0aWNhbFNwbGl0dGVyIiwibGVmdENvbHVtblNlbGVjdG9yIiwiY29udGVudFRleHRBcmVhU2VsZWN0b3IiLCJ0b2tlbnNUZXh0QXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRBcmVhIiwidG9rZW5zVGV4dEFyZWEiLCJsZWZ0Q29sdW1uIiwiVE9fVEhFX1JJR0hUX09GIiwic2l0dWF0ZWQiLCJHYWxsaW5hTGV4ZXIiLCJHYWxsaW5hQ29udGV4dCIsIkdhbGxpbmFFeGFtcGxlIiwib25DaGFuZ2UiLCJ1cGRhdGVUb2tlbnMiLCJjb250ZW50VGV4dEFyZWFWYWx1ZSIsImdldFZhbHVlIiwiY29udGVudCIsImNvbW1lbnREZXB0aCIsImdhbGxpbmFDb250ZXh0IiwiY29udGV4dCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudCIsImxpbmVzSFRNTCIsInJlZHVjZSIsImxpbmUiLCJsaW5lSFRNTCIsImdldEhUTUwiLCJ0b2tlbnNIVE1MIiwidG9rZW5zVGV4dEFyZWFIVE1MIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLGVBQWVELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRUlFLFdBQVdILE9BQU9HLFFBRnRCO0FBQUEsSUFHSUMsa0JBQWtCRixhQUFhRSxlQUhuQztBQUFBLElBSUlDLG1CQUFtQkgsYUFBYUcsZ0JBSnBDOztBQU1BLElBQUlDLHFCQUFxQixhQUF6QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQyx5QkFBeUIsaUJBRjdCO0FBQUEsSUFHSUMsa0JBQWtCLElBQUlOLFFBQUosQ0FBYUksdUJBQWIsQ0FIdEI7QUFBQSxJQUlJRyxpQkFBaUIsSUFBSVAsUUFBSixDQUFhSyxzQkFBYixDQUpyQjtBQUFBLElBS0lHLGFBQWEsSUFBSVAsZUFBSixDQUFvQkUsa0JBQXBCLENBTGpCO0FBQUEsSUFNSU0sa0JBQWtCUCxpQkFBaUJRLFFBQWpCLENBQTBCRCxlQU5oRDs7QUFRQSxJQUFJUCxnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RPLGVBQWhELEVBQWlFRCxVQUFqRTs7QUFFQSxJQUFJRyxlQUFlYixRQUFRLHlCQUFSLENBQW5CO0FBQUEsSUFDSWMsaUJBQWlCZCxRQUFRLDJCQUFSLENBRHJCOztJQUdNZSxjOzs7Ozs7OzhCQUNTO0FBQ1hQLDRCQUFnQlEsUUFBaEIsQ0FBeUIsWUFBVztBQUNsQ0M7QUFDRCxhQUZEO0FBR0Y7Ozs7OztBQUdGLFNBQVNBLFlBQVQsR0FBd0I7QUFDdEIsUUFBSUMsdUJBQXVCVixnQkFBZ0JXLFFBQWhCLEVBQTNCO0FBQUEsUUFDSUMsVUFBVUYsb0JBRGQ7QUFBQSxRQUNxQztBQUNqQ0csbUJBQWUsQ0FGbkI7QUFBQSxRQUdJQyxpQkFBaUIsSUFBSVIsY0FBSixDQUFtQk8sWUFBbkIsQ0FIckI7QUFBQSxRQUlJRSxVQUFVRCxjQUpkO0FBQUEsUUFJOEI7QUFDMUJFLFlBQVFYLGFBQWFZLGdCQUFiLENBQThCTCxPQUE5QixFQUF1Q0csT0FBdkMsQ0FMWjtBQUFBLFFBTUlHLFlBQVlGLE1BQU1HLE1BQU4sQ0FBYSxVQUFTRCxTQUFULEVBQW9CRSxJQUFwQixFQUEwQjtBQUNqRCxZQUFJQyxXQUFXRCxLQUFLRSxPQUFMLEVBQWY7O0FBRUFKLHFCQUFhRyxRQUFiOztBQUVBLGVBQU9ILFNBQVA7QUFDRCxLQU5XLEVBTVQsRUFOUyxDQU5oQjtBQUFBLFFBYUlLLGFBQWFMLFNBYmpCO0FBQUEsUUFhNEI7QUFDeEJNLHlCQUFxQkQsVUFkekIsQ0FEc0IsQ0FlZ0I7O0FBRXRDdEIsbUJBQWV3QixJQUFmLENBQW9CRCxrQkFBcEI7QUFDRDs7QUFFREUsT0FBT0MsT0FBUCxHQUFpQnBCLGNBQWpCIiwiZmlsZSI6ImdhbGxpbmFFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeVVJID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgZWFzeVVJTGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgIFRleHRBcmVhID0gZWFzeVVJLlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3lVSUxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3lVSUxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBjb250ZW50VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICB0b2tlbnNUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI3Rva2VucycsXG4gICAgY29udGVudFRleHRBcmVhID0gbmV3IFRleHRBcmVhKGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICB0b2tlbnNUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYSh0b2tlbnNUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgIFRPX1RIRV9SSUdIVF9PRiA9IFZlcnRpY2FsU3BsaXR0ZXIuc2l0dWF0ZWQuVE9fVEhFX1JJR0hUX09GO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcignLmxlZnQudmVydGljYWwuc3BsaXR0ZXInLCBUT19USEVfUklHSFRfT0YsIGxlZnRDb2x1bW4pO1xuXG52YXIgR2FsbGluYUxleGVyID0gcmVxdWlyZSgnLi4vLi4vZXM2L2dhbGxpbmEvbGV4ZXInKSxcbiAgICBHYWxsaW5hQ29udGV4dCA9IHJlcXVpcmUoJy4uLy4uL2VzNi9nYWxsaW5hL2NvbnRleHQnKTtcblxuY2xhc3MgR2FsbGluYUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnRlbnRUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZVRva2VucygpO1xuICAgIH0pO1xuIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9rZW5zKCkge1xuICB2YXIgY29udGVudFRleHRBcmVhVmFsdWUgPSBjb250ZW50VGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dEFyZWFWYWx1ZSwgIC8vL1xuICAgICAgY29tbWVudERlcHRoID0gMCxcbiAgICAgIGdhbGxpbmFDb250ZXh0ID0gbmV3IEdhbGxpbmFDb250ZXh0KGNvbW1lbnREZXB0aCksXG4gICAgICBjb250ZXh0ID0gZ2FsbGluYUNvbnRleHQsIC8vL1xuICAgICAgbGluZXMgPSBHYWxsaW5hTGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0KSxcbiAgICAgIGxpbmVzSFRNTCA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbihsaW5lc0hUTUwsIGxpbmUpIHtcbiAgICAgICAgdmFyIGxpbmVIVE1MID0gbGluZS5nZXRIVE1MKCk7XG5cbiAgICAgICAgbGluZXNIVE1MICs9IGxpbmVIVE1MO1xuXG4gICAgICAgIHJldHVybiBsaW5lc0hUTUw7XG4gICAgICB9LCAnJyksXG4gICAgICB0b2tlbnNIVE1MID0gbGluZXNIVE1MLCAvLy9cbiAgICAgIHRva2Vuc1RleHRBcmVhSFRNTCA9IHRva2Vuc0hUTUw7ICAvLy9cblxuICB0b2tlbnNUZXh0QXJlYS5odG1sKHRva2Vuc1RleHRBcmVhSFRNTCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGluYUV4YW1wbGU7XG4iXX0=