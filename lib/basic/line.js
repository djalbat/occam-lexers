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
        value: function fromContent(content, rules) {
            var line = new Line(),
                tokens;

            tokens = NonSignificantTokens.pass(content, line);

            tokens = SignificantTokens.pass(tokens, line, rules);

            line.setTokens(tokens);

            return line;
        }
    }]);

    return Line;
}(CommonLine);

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxpbmUiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbnMiLCJOb25TaWduaWZpY2FudFRva2VucyIsIkxpbmUiLCJjb250ZW50IiwicnVsZXMiLCJsaW5lIiwidG9rZW5zIiwicGFzcyIsInNldFRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSxnQkFBUixDQUFqQjtBQUFBLElBQ0lDLG9CQUFvQkQsUUFBUSw2QkFBUixDQUR4QjtBQUFBLElBRUlFLHVCQUF1QkYsUUFBUSx3QkFBUixDQUYzQjs7SUFJTUcsSTs7Ozs7Ozs7Ozs7b0NBQ2VDLE8sRUFBU0MsSyxFQUFPO0FBQ2pDLGdCQUFJQyxPQUFPLElBQUlILElBQUosRUFBWDtBQUFBLGdCQUNJSSxNQURKOztBQUdBQSxxQkFBU0wscUJBQXFCTSxJQUFyQixDQUEwQkosT0FBMUIsRUFBbUNFLElBQW5DLENBQVQ7O0FBRUFDLHFCQUFTTixrQkFBa0JPLElBQWxCLENBQXVCRCxNQUF2QixFQUErQkQsSUFBL0IsRUFBcUNELEtBQXJDLENBQVQ7O0FBRUFDLGlCQUFLRyxTQUFMLENBQWVGLE1BQWY7O0FBRUEsbUJBQU9ELElBQVA7QUFDRDs7OztFQVpnQlAsVTs7QUFlbkJXLE9BQU9DLE9BQVAsR0FBaUJSLElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9zaWduaWZpY2FudFRva2VucycpLFxyXG4gICAgTm9uU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL25vblNpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIHJ1bGVzKSB7XHJcbiAgICB2YXIgbGluZSA9IG5ldyBMaW5lKCksXHJcbiAgICAgICAgdG9rZW5zO1xyXG4gICAgXHJcbiAgICB0b2tlbnMgPSBOb25TaWduaWZpY2FudFRva2Vucy5wYXNzKGNvbnRlbnQsIGxpbmUpO1xyXG4gICAgXHJcbiAgICB0b2tlbnMgPSBTaWduaWZpY2FudFRva2Vucy5wYXNzKHRva2VucywgbGluZSwgcnVsZXMpO1xyXG4gICAgXHJcbiAgICBsaW5lLnNldFRva2Vucyh0b2tlbnMpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIl19