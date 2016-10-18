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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxpbmUiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbnMiLCJOb25TaWduaWZpY2FudFRva2VucyIsIkxpbmUiLCJjb250ZW50IiwiY29udGV4dCIsInJ1bGVzIiwibGluZSIsIm5vblNpZ25pZmljYW50VG9rZW5zT3JTaWduaWZpY2FudENvbnRlbnQiLCJwYXNzIiwidG9rZW5zIiwic2V0VG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxhQUFhQyxRQUFRLGdCQUFSLENBQWpCO0FBQUEsSUFDSUMsb0JBQW9CRCxRQUFRLDZCQUFSLENBRHhCO0FBQUEsSUFFSUUsdUJBQXVCRixRQUFRLHdCQUFSLENBRjNCOztJQUlNRyxJOzs7Ozs7Ozs7OztvQ0FDZUMsTyxFQUFTQyxPLEVBQVNDLEssRUFBTztBQUMxQyxnQkFBSUMsT0FBTyxJQUFJSixJQUFKLEVBQVg7QUFBQSxnQkFDSUssMkNBQTJDTixxQkFBcUJPLElBQXJCLENBQTBCTCxPQUExQixFQUFtQ0MsT0FBbkMsRUFBNENFLElBQTVDLENBRC9DO0FBQUEsZ0JBRUlHLFNBQVNULGtCQUFrQlEsSUFBbEIsQ0FBdUJELHdDQUF2QixFQUFpRUQsSUFBakUsRUFBdUVELEtBQXZFLENBRmI7O0FBSUFDLGlCQUFLSSxTQUFMLENBQWVELE1BQWY7O0FBRUEsbUJBQU9ILElBQVA7QUFDRDs7OztFQVRnQlIsVTs7QUFZbkJhLE9BQU9DLE9BQVAsR0FBaUJWLElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICBTaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9zaWduaWZpY2FudFRva2VucycpLFxyXG4gICAgTm9uU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL25vblNpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzKSB7XHJcbiAgICB2YXIgbGluZSA9IG5ldyBMaW5lKCksXHJcbiAgICAgICAgbm9uU2lnbmlmaWNhbnRUb2tlbnNPclNpZ25pZmljYW50Q29udGVudCA9IE5vblNpZ25pZmljYW50VG9rZW5zLnBhc3MoY29udGVudCwgY29udGV4dCwgbGluZSksXHJcbiAgICAgICAgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyhub25TaWduaWZpY2FudFRva2Vuc09yU2lnbmlmaWNhbnRDb250ZW50LCBsaW5lLCBydWxlcyk7XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIl19