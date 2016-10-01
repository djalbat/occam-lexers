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
    multilineCommentDepth = 0,
        gallinaContext = new GallinaContext(multilineCommentDepth),
        context = gallinaContext,
        ///
    tokens = GallinaLexer.tokensFromContent(content, context),
        tokensHTML = tokens.reduce(function (tokensHTML, token) {
        var tokenHTML = token.getHTML();

        tokensHTML += tokenHTML;

        return tokensHTML;
    }, ''),
        tokensTextAreaHTML = tokensHTML; ///

    tokensTextArea.html(tokensTextAreaHTML);
}

module.exports = GallinaLexerExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hTGV4ZXJFeGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3lVSSIsInJlcXVpcmUiLCJlYXN5VUlMYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRBcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWEiLCJ0b2tlbnNUZXh0QXJlYSIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIkdhbGxpbmFMZXhlciIsIkdhbGxpbmFDb250ZXh0IiwiR2FsbGluYUxleGVyRXhhbXBsZSIsIm9uQ2hhbmdlIiwidXBkYXRlVG9rZW5zIiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJtdWx0aWxpbmVDb21tZW50RGVwdGgiLCJnYWxsaW5hQ29udGV4dCIsImNvbnRleHQiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsInRva2Vuc0hUTUwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuSFRNTCIsImdldEhUTUwiLCJ0b2tlbnNUZXh0QXJlYUhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFSUUsV0FBV0gsT0FBT0csUUFGdEI7QUFBQSxJQUdJQyxrQkFBa0JGLGFBQWFFLGVBSG5DO0FBQUEsSUFJSUMsbUJBQW1CSCxhQUFhRyxnQkFKcEM7O0FBTUEsSUFBSUMscUJBQXFCLGFBQXpCO0FBQUEsSUFDSUMsMEJBQTBCLGtCQUQ5QjtBQUFBLElBRUlDLHlCQUF5QixpQkFGN0I7QUFBQSxJQUdJQyxrQkFBa0IsSUFBSU4sUUFBSixDQUFhSSx1QkFBYixDQUh0QjtBQUFBLElBSUlHLGlCQUFpQixJQUFJUCxRQUFKLENBQWFLLHNCQUFiLENBSnJCO0FBQUEsSUFLSUcsYUFBYSxJQUFJUCxlQUFKLENBQW9CRSxrQkFBcEIsQ0FMakI7QUFBQSxJQU1JTSxrQkFBa0JQLGlCQUFpQlEsUUFBakIsQ0FBMEJELGVBTmhEOztBQVFBLElBQUlQLGdCQUFKLENBQXFCLHlCQUFyQixFQUFnRE8sZUFBaEQsRUFBaUVELFVBQWpFOztBQUVBLElBQUlHLGVBQWViLFFBQVEseUJBQVIsQ0FBbkI7QUFBQSxJQUNJYyxpQkFBaUJkLFFBQVEsMkJBQVIsQ0FEckI7O0lBR01lLG1COzs7Ozs7OzhCQUNTO0FBQ1hQLDRCQUFnQlEsUUFBaEIsQ0FBeUIsWUFBVztBQUNsQ0M7QUFDRCxhQUZEO0FBR0Y7Ozs7OztBQUdGLFNBQVNBLFlBQVQsR0FBd0I7QUFDdEIsUUFBSUMsdUJBQXVCVixnQkFBZ0JXLFFBQWhCLEVBQTNCO0FBQUEsUUFDSUMsVUFBVUYsb0JBRGQ7QUFBQSxRQUNxQztBQUNqQ0csNEJBQXdCLENBRjVCO0FBQUEsUUFHSUMsaUJBQWlCLElBQUlSLGNBQUosQ0FBbUJPLHFCQUFuQixDQUhyQjtBQUFBLFFBSUlFLFVBQVVELGNBSmQ7QUFBQSxRQUk4QjtBQUMxQkUsYUFBU1gsYUFBYVksaUJBQWIsQ0FBK0JMLE9BQS9CLEVBQXdDRyxPQUF4QyxDQUxiO0FBQUEsUUFNSUcsYUFBYUYsT0FBT0csTUFBUCxDQUFjLFVBQVNELFVBQVQsRUFBcUJFLEtBQXJCLEVBQTRCO0FBQ3JELFlBQUlDLFlBQVlELE1BQU1FLE9BQU4sRUFBaEI7O0FBRUFKLHNCQUFjRyxTQUFkOztBQUVBLGVBQU9ILFVBQVA7QUFDRCxLQU5ZLEVBTVYsRUFOVSxDQU5qQjtBQUFBLFFBYUlLLHFCQUFxQkwsVUFiekIsQ0FEc0IsQ0FjZ0I7O0FBRXRDakIsbUJBQWV1QixJQUFmLENBQW9CRCxrQkFBcEI7QUFDRDs7QUFFREUsT0FBT0MsT0FBUCxHQUFpQm5CLG1CQUFqQiIsImZpbGUiOiJnYWxsaW5hTGV4ZXJFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeVVJID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgZWFzeVVJTGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgIFRleHRBcmVhID0gZWFzeVVJLlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3lVSUxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3lVSUxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBjb250ZW50VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICB0b2tlbnNUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI3Rva2VucycsXG4gICAgY29udGVudFRleHRBcmVhID0gbmV3IFRleHRBcmVhKGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICB0b2tlbnNUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYSh0b2tlbnNUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgIFRPX1RIRV9SSUdIVF9PRiA9IFZlcnRpY2FsU3BsaXR0ZXIuc2l0dWF0ZWQuVE9fVEhFX1JJR0hUX09GO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcignLmxlZnQudmVydGljYWwuc3BsaXR0ZXInLCBUT19USEVfUklHSFRfT0YsIGxlZnRDb2x1bW4pO1xuXG52YXIgR2FsbGluYUxleGVyID0gcmVxdWlyZSgnLi4vLi4vZXM2L2dhbGxpbmEvbGV4ZXInKSxcbiAgICBHYWxsaW5hQ29udGV4dCA9IHJlcXVpcmUoJy4uLy4uL2VzNi9nYWxsaW5hL2NvbnRleHQnKTtcblxuY2xhc3MgR2FsbGluYUxleGVyRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29udGVudFRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlVG9rZW5zKCk7XG4gICAgfSk7XG4gfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVUb2tlbnMoKSB7XG4gIHZhciBjb250ZW50VGV4dEFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0QXJlYVZhbHVlLCAgLy8vXG4gICAgICBtdWx0aWxpbmVDb21tZW50RGVwdGggPSAwLFxuICAgICAgZ2FsbGluYUNvbnRleHQgPSBuZXcgR2FsbGluYUNvbnRleHQobXVsdGlsaW5lQ29tbWVudERlcHRoKSxcbiAgICAgIGNvbnRleHQgPSBnYWxsaW5hQ29udGV4dCwgLy8vXG4gICAgICB0b2tlbnMgPSBHYWxsaW5hTGV4ZXIudG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCksXG4gICAgICB0b2tlbnNIVE1MID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbih0b2tlbnNIVE1MLCB0b2tlbikge1xuICAgICAgICB2YXIgdG9rZW5IVE1MID0gdG9rZW4uZ2V0SFRNTCgpO1xuICAgICAgICBcbiAgICAgICAgdG9rZW5zSFRNTCArPSB0b2tlbkhUTUw7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdG9rZW5zSFRNTDtcbiAgICAgIH0sICcnKSxcbiAgICAgIHRva2Vuc1RleHRBcmVhSFRNTCA9IHRva2Vuc0hUTUw7ICAvLy9cblxuICB0b2tlbnNUZXh0QXJlYS5odG1sKHRva2Vuc1RleHRBcmVhSFRNTCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGluYUxleGVyRXhhbXBsZTtcbiJdfQ==