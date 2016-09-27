'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyUI = require('easyui'),
    easyUILayout = require('easyui-layout'),
    TextArea = easyUI.TextArea,
    SizeableElement = easyUILayout.SizeableElement,
    VerticalSplitter = easyUILayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    inputTextAreaSelector = 'textArea#input',
    tokensTextAreaSelector = 'textArea#tokens',
    inputTextArea = new TextArea(inputTextAreaSelector),
    tokensTextArea = new TextArea(tokensTextAreaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var FlorenceLexerExample = function () {
    function FlorenceLexerExample() {
        _classCallCheck(this, FlorenceLexerExample);
    }

    _createClass(FlorenceLexerExample, null, [{
        key: 'run',
        value: function run() {}
    }]);

    return FlorenceLexerExample;
}();

module.exports = FlorenceLexerExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbG9yZW5jZUxleGVyRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJlYXN5VUkiLCJyZXF1aXJlIiwiZWFzeVVJTGF5b3V0IiwiVGV4dEFyZWEiLCJTaXplYWJsZUVsZW1lbnQiLCJWZXJ0aWNhbFNwbGl0dGVyIiwibGVmdENvbHVtblNlbGVjdG9yIiwiaW5wdXRUZXh0QXJlYVNlbGVjdG9yIiwidG9rZW5zVGV4dEFyZWFTZWxlY3RvciIsImlucHV0VGV4dEFyZWEiLCJ0b2tlbnNUZXh0QXJlYSIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIkZsb3JlbmNlTGV4ZXJFeGFtcGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFSUUsV0FBV0gsT0FBT0csUUFGdEI7QUFBQSxJQUdJQyxrQkFBa0JGLGFBQWFFLGVBSG5DO0FBQUEsSUFJSUMsbUJBQW1CSCxhQUFhRyxnQkFKcEM7O0FBTUEsSUFBSUMscUJBQXFCLGFBQXpCO0FBQUEsSUFDSUMsd0JBQXdCLGdCQUQ1QjtBQUFBLElBRUlDLHlCQUF5QixpQkFGN0I7QUFBQSxJQUdJQyxnQkFBZ0IsSUFBSU4sUUFBSixDQUFhSSxxQkFBYixDQUhwQjtBQUFBLElBSUlHLGlCQUFpQixJQUFJUCxRQUFKLENBQWFLLHNCQUFiLENBSnJCO0FBQUEsSUFLSUcsYUFBYSxJQUFJUCxlQUFKLENBQW9CRSxrQkFBcEIsQ0FMakI7QUFBQSxJQU1JTSxrQkFBa0JQLGlCQUFpQlEsUUFBakIsQ0FBMEJELGVBTmhEOztBQVFBLElBQUlQLGdCQUFKLENBQXFCLHlCQUFyQixFQUFnRE8sZUFBaEQsRUFBaUVELFVBQWpFOztJQUVNRyxvQjs7Ozs7Ozs4QkFDUyxDQUVaOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQkYsb0JBQWpCIiwiZmlsZSI6ImZsb3JlbmNlTGV4ZXJFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeVVJID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgZWFzeVVJTGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgIFRleHRBcmVhID0gZWFzeVVJLlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3lVSUxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3lVSUxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBpbnB1dFRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjaW5wdXQnLFxuICAgIHRva2Vuc1RleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICBpbnB1dFRleHRBcmVhID0gbmV3IFRleHRBcmVhKGlucHV0VGV4dEFyZWFTZWxlY3RvciksXG4gICAgdG9rZW5zVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEodG9rZW5zVGV4dEFyZWFTZWxlY3RvciksXG4gICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICBUT19USEVfUklHSFRfT0YgPSBWZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkLlRPX1RIRV9SSUdIVF9PRjtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgRmxvcmVuY2VMZXhlckV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyRXhhbXBsZTtcbiJdfQ==