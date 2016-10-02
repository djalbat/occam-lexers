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

var FlorenceExample = function () {
    function FlorenceExample() {
        _classCallCheck(this, FlorenceExample);
    }

    _createClass(FlorenceExample, null, [{
        key: 'run',
        value: function run() {}
    }]);

    return FlorenceExample;
}();

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbG9yZW5jZUV4YW1wbGUuanMiXSwibmFtZXMiOlsiZWFzeVVJIiwicmVxdWlyZSIsImVhc3lVSUxheW91dCIsIlRleHRBcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImxlZnRDb2x1bW5TZWxlY3RvciIsImlucHV0VGV4dEFyZWFTZWxlY3RvciIsInRva2Vuc1RleHRBcmVhU2VsZWN0b3IiLCJpbnB1dFRleHRBcmVhIiwidG9rZW5zVGV4dEFyZWEiLCJsZWZ0Q29sdW1uIiwiVE9fVEhFX1JJR0hUX09GIiwic2l0dWF0ZWQiLCJGbG9yZW5jZUV4YW1wbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxlQUFlRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVJRSxXQUFXSCxPQUFPRyxRQUZ0QjtBQUFBLElBR0lDLGtCQUFrQkYsYUFBYUUsZUFIbkM7QUFBQSxJQUlJQyxtQkFBbUJILGFBQWFHLGdCQUpwQzs7QUFNQSxJQUFJQyxxQkFBcUIsYUFBekI7QUFBQSxJQUNJQyx3QkFBd0IsZ0JBRDVCO0FBQUEsSUFFSUMseUJBQXlCLGlCQUY3QjtBQUFBLElBR0lDLGdCQUFnQixJQUFJTixRQUFKLENBQWFJLHFCQUFiLENBSHBCO0FBQUEsSUFJSUcsaUJBQWlCLElBQUlQLFFBQUosQ0FBYUssc0JBQWIsQ0FKckI7QUFBQSxJQUtJRyxhQUFhLElBQUlQLGVBQUosQ0FBb0JFLGtCQUFwQixDQUxqQjtBQUFBLElBTUlNLGtCQUFrQlAsaUJBQWlCUSxRQUFqQixDQUEwQkQsZUFOaEQ7O0FBUUEsSUFBSVAsZ0JBQUosQ0FBcUIseUJBQXJCLEVBQWdETyxlQUFoRCxFQUFpRUQsVUFBakU7O0lBRU1HLGU7Ozs7Ozs7OEJBQ1MsQ0FFWjs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJGLGVBQWpCIiwiZmlsZSI6ImZsb3JlbmNlRXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3lVSSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIGVhc3lVSUxheW91dCA9IHJlcXVpcmUoJ2Vhc3l1aS1sYXlvdXQnKSxcbiAgICBUZXh0QXJlYSA9IGVhc3lVSS5UZXh0QXJlYSxcbiAgICBTaXplYWJsZUVsZW1lbnQgPSBlYXN5VUlMYXlvdXQuU2l6ZWFibGVFbGVtZW50LFxuICAgIFZlcnRpY2FsU3BsaXR0ZXIgPSBlYXN5VUlMYXlvdXQuVmVydGljYWxTcGxpdHRlcjtcblxudmFyIGxlZnRDb2x1bW5TZWxlY3RvciA9ICcjbGVmdENvbHVtbicsXG4gICAgaW5wdXRUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2lucHV0JyxcbiAgICB0b2tlbnNUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI3Rva2VucycsXG4gICAgaW5wdXRUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShpbnB1dFRleHRBcmVhU2VsZWN0b3IpLFxuICAgIHRva2Vuc1RleHRBcmVhID0gbmV3IFRleHRBcmVhKHRva2Vuc1RleHRBcmVhU2VsZWN0b3IpLFxuICAgIGxlZnRDb2x1bW4gPSBuZXcgU2l6ZWFibGVFbGVtZW50KGxlZnRDb2x1bW5TZWxlY3RvciksXG4gICAgVE9fVEhFX1JJR0hUX09GID0gVmVydGljYWxTcGxpdHRlci5zaXR1YXRlZC5UT19USEVfUklHSFRfT0Y7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiJdfQ==