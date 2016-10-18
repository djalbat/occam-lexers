'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    SignificantTokens = require('../common/significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

var Line = function (_CommonLine) {
    _inherits(Line, _CommonLine);

    function Line() {
        _classCallCheck(this, Line);

        return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
    }

    _createClass(Line, null, [{
        key: 'fromContent',
        value: function fromContent(content, context, rules) {
            var line = new Line(),
                nonSignificantTokensOrSignificantContent = NonSignificantTokens.pass(content, context, line),
                tokens = SignificantTokens.pass(nonSignificantTokensOrSignificantContent, line, rules);

            line.setTokens(tokens);

            return line;
        }
    }]);

    return Line;
}(CommonLine);

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xpbmUuanMiXSwibmFtZXMiOlsiQ29tbW9uTGluZSIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VucyIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJjb250ZXh0IiwicnVsZXMiLCJsaW5lIiwibm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudCIsInBhc3MiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGFBQWFDLFFBQVEsZ0JBQVIsQ0FBakI7QUFBQSxJQUNJQyxvQkFBb0JELFFBQVEsNkJBQVIsQ0FEeEI7QUFBQSxJQUVJRSx1QkFBdUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0lBSU1HLEk7Ozs7Ozs7Ozs7O29DQUNlQyxPLEVBQVNDLE8sRUFBU0MsSyxFQUFPO0FBQzFDLGdCQUFJQyxPQUFPLElBQUlKLElBQUosRUFBWDtBQUFBLGdCQUNJSywyQ0FBMkNOLHFCQUFxQk8sSUFBckIsQ0FBMEJMLE9BQTFCLEVBQW1DQyxPQUFuQyxFQUE0Q0UsSUFBNUMsQ0FEL0M7QUFBQSxnQkFFSUcsU0FBU1Qsa0JBQWtCUSxJQUFsQixDQUF1QkQsd0NBQXZCLEVBQWlFRCxJQUFqRSxFQUF1RUQsS0FBdkUsQ0FGYjs7QUFJQUMsaUJBQUtJLFNBQUwsQ0FBZUQsTUFBZjs7QUFFQSxtQkFBT0gsSUFBUDtBQUNEOzs7O0VBVGdCUixVOztBQVluQmEsT0FBT0MsT0FBUCxHQUFpQlYsSUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBDb21tb25MaW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL2xpbmUnKSxcclxuICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3NpZ25pZmljYW50VG9rZW5zJyksXHJcbiAgICBOb25TaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vbm9uU2lnbmlmaWNhbnRUb2tlbnMnKTtcclxuXHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpIHtcclxuICAgIHZhciBsaW5lID0gbmV3IExpbmUoKSxcclxuICAgICAgICBub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50ID0gTm9uU2lnbmlmaWNhbnRUb2tlbnMucGFzcyhjb250ZW50LCBjb250ZXh0LCBsaW5lKSxcclxuICAgICAgICB0b2tlbnMgPSBTaWduaWZpY2FudFRva2Vucy5wYXNzKG5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQsIGxpbmUsIHJ1bGVzKTtcclxuICAgIFxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiJdfQ==