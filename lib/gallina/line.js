'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    SignificantTokens = require('./significantTokens'),
    NonSignificantTokens = require('./nonSignificantTokens');

var Line = function (_CommonLine) {
    _inherits(Line, _CommonLine);

    function Line() {
        _classCallCheck(this, Line);

        return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
    }

    _createClass(Line, null, [{
        key: 'fromContent',
        value: function fromContent(content, context) {
            var line = new Line(),
                tokens;

            tokens = NonSignificantTokens.pass(content, context, line);

            tokens = SignificantTokens.pass(tokens, line);

            line.setTokens(tokens);

            return line;
        }
    }]);

    return Line;
}(CommonLine);

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xpbmUuanMiXSwibmFtZXMiOlsiQ29tbW9uTGluZSIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VucyIsIk5vblNpZ25pZmljYW50VG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJjb250ZXh0IiwibGluZSIsInRva2VucyIsInBhc3MiLCJzZXRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGFBQWFDLFFBQVEsZ0JBQVIsQ0FBakI7QUFBQSxJQUNJQyxvQkFBb0JELFFBQVEscUJBQVIsQ0FEeEI7QUFBQSxJQUVJRSx1QkFBdUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0lBSU1HLEk7Ozs7Ozs7Ozs7O29DQUNlQyxPLEVBQVNDLE8sRUFBUztBQUNuQyxnQkFBSUMsT0FBTyxJQUFJSCxJQUFKLEVBQVg7QUFBQSxnQkFDSUksTUFESjs7QUFHQUEscUJBQVNMLHFCQUFxQk0sSUFBckIsQ0FBMEJKLE9BQTFCLEVBQW1DQyxPQUFuQyxFQUE0Q0MsSUFBNUMsQ0FBVDs7QUFFQUMscUJBQVNOLGtCQUFrQk8sSUFBbEIsQ0FBdUJELE1BQXZCLEVBQStCRCxJQUEvQixDQUFUOztBQUVBQSxpQkFBS0csU0FBTCxDQUFlRixNQUFmOztBQUVBLG1CQUFPRCxJQUFQO0FBQ0Q7Ozs7RUFaZ0JQLFU7O0FBZW5CVyxPQUFPQyxPQUFQLEdBQWlCUixJQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5zJyksXHJcbiAgICBOb25TaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vbm9uU2lnbmlmaWNhbnRUb2tlbnMnKTtcclxuXHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCkge1xyXG4gICAgdmFyIGxpbmUgPSBuZXcgTGluZSgpLFxyXG4gICAgICAgIHRva2VucztcclxuICAgIFxyXG4gICAgdG9rZW5zID0gTm9uU2lnbmlmaWNhbnRUb2tlbnMucGFzcyhjb250ZW50LCBjb250ZXh0LCBsaW5lKTtcclxuICAgIFxyXG4gICAgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnMsIGxpbmUpO1xyXG4gICAgXHJcbiAgICBsaW5lLnNldFRva2Vucyh0b2tlbnMpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIl19