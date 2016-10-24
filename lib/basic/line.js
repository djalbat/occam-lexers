'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
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
                tokens = _get(Line.__proto__ || Object.getPrototypeOf(Line), 'tokensFromContent', this).call(this, content, context, line, rules, NonSignificantTokens);

            line.setTokens(tokens);

            return line;
        }
    }]);

    return Line;
}(CommonLine);

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxpbmUiLCJyZXF1aXJlIiwiTm9uU2lnbmlmaWNhbnRUb2tlbnMiLCJMaW5lIiwiY29udGVudCIsImNvbnRleHQiLCJydWxlcyIsImxpbmUiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSxnQkFBUixDQUFqQjtBQUFBLElBQ0lDLHVCQUF1QkQsUUFBUSx3QkFBUixDQUQzQjs7SUFHTUUsSTs7Ozs7Ozs7Ozs7b0NBQ2VDLE8sRUFBU0MsTyxFQUFTQyxLLEVBQU87QUFDMUMsZ0JBQUlDLE9BQU8sSUFBSUosSUFBSixFQUFYO0FBQUEsZ0JBQ0lLLG1HQUFpQ0osT0FBakMsRUFBMENDLE9BQTFDLEVBQW1ERSxJQUFuRCxFQUF5REQsS0FBekQsRUFBZ0VKLG9CQUFoRSxDQURKOztBQUdBSyxpQkFBS0UsU0FBTCxDQUFlRCxNQUFmOztBQUVBLG1CQUFPRCxJQUFQO0FBQ0Q7Ozs7RUFSZ0JQLFU7O0FBV25CVSxPQUFPQyxPQUFQLEdBQWlCUixJQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgTm9uU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL25vblNpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzKSB7XHJcbiAgICB2YXIgbGluZSA9IG5ldyBMaW5lKCksXHJcbiAgICAgICAgdG9rZW5zID0gc3VwZXIudG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgbGluZSwgcnVsZXMsIE5vblNpZ25pZmljYW50VG9rZW5zKTtcclxuXHJcbiAgICBsaW5lLnNldFRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iXX0=