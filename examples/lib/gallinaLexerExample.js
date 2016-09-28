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

var GallinaLexerExample = function () {
    function GallinaLexerExample() {
        _classCallCheck(this, GallinaLexerExample);
    }

    _createClass(GallinaLexerExample, null, [{
        key: 'run',
        value: function run() {}
    }]);

    return GallinaLexerExample;
}();

module.exports = GallinaLexerExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hTGV4ZXJFeGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3lVSSIsInJlcXVpcmUiLCJlYXN5VUlMYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJpbnB1dFRleHRBcmVhU2VsZWN0b3IiLCJ0b2tlbnNUZXh0QXJlYVNlbGVjdG9yIiwiaW5wdXRUZXh0QXJlYSIsInRva2Vuc1RleHRBcmVhIiwibGVmdENvbHVtbiIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiR2FsbGluYUxleGVyRXhhbXBsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLGVBQWVELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRUlFLFdBQVdILE9BQU9HLFFBRnRCO0FBQUEsSUFHSUMsa0JBQWtCRixhQUFhRSxlQUhuQztBQUFBLElBSUlDLG1CQUFtQkgsYUFBYUcsZ0JBSnBDOztBQU1BLElBQUlDLHFCQUFxQixhQUF6QjtBQUFBLElBQ0lDLHdCQUF3QixnQkFENUI7QUFBQSxJQUVJQyx5QkFBeUIsaUJBRjdCO0FBQUEsSUFHSUMsZ0JBQWdCLElBQUlOLFFBQUosQ0FBYUkscUJBQWIsQ0FIcEI7QUFBQSxJQUlJRyxpQkFBaUIsSUFBSVAsUUFBSixDQUFhSyxzQkFBYixDQUpyQjtBQUFBLElBS0lHLGFBQWEsSUFBSVAsZUFBSixDQUFvQkUsa0JBQXBCLENBTGpCO0FBQUEsSUFNSU0sa0JBQWtCUCxpQkFBaUJRLFFBQWpCLENBQTBCRCxlQU5oRDs7QUFRQSxJQUFJUCxnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RPLGVBQWhELEVBQWlFRCxVQUFqRTs7SUFFTUcsbUI7Ozs7Ozs7OEJBQ1MsQ0FFWjs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJGLG1CQUFqQiIsImZpbGUiOiJnYWxsaW5hTGV4ZXJFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeVVJID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgZWFzeVVJTGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgIFRleHRBcmVhID0gZWFzeVVJLlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3lVSUxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3lVSUxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBpbnB1dFRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjaW5wdXQnLFxuICAgIHRva2Vuc1RleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjdG9rZW5zJyxcbiAgICBpbnB1dFRleHRBcmVhID0gbmV3IFRleHRBcmVhKGlucHV0VGV4dEFyZWFTZWxlY3RvciksXG4gICAgdG9rZW5zVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEodG9rZW5zVGV4dEFyZWFTZWxlY3RvciksXG4gICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICBUT19USEVfUklHSFRfT0YgPSBWZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkLlRPX1RIRV9SSUdIVF9PRjtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgR2FsbGluYUxleGVyRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFMZXhlckV4YW1wbGU7XG4iXX0=