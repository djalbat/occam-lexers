'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    SpecialTokens = require('./specialTokens'),
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

            tokens = SpecialTokens.pass(tokens, line);

            tokens = SignificantTokens.pass(tokens, line);

            line.setTokens(tokens);

            return line;
        }
    }]);

    return Line;
}(CommonLine);

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xpbmUuanMiXSwibmFtZXMiOlsiQ29tbW9uTGluZSIsInJlcXVpcmUiLCJTcGVjaWFsVG9rZW5zIiwiU2lnbmlmaWNhbnRUb2tlbnMiLCJOb25TaWduaWZpY2FudFRva2VucyIsIkxpbmUiLCJjb250ZW50IiwiY29udGV4dCIsImxpbmUiLCJ0b2tlbnMiLCJwYXNzIiwic2V0VG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxhQUFhQyxRQUFRLGdCQUFSLENBQWpCO0FBQUEsSUFDSUMsZ0JBQWdCRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFSUUsb0JBQW9CRixRQUFRLHFCQUFSLENBRnhCO0FBQUEsSUFHSUcsdUJBQXVCSCxRQUFRLHdCQUFSLENBSDNCOztJQUtNSSxJOzs7Ozs7Ozs7OztvQ0FDZUMsTyxFQUFTQyxPLEVBQVM7QUFDbkMsZ0JBQUlDLE9BQU8sSUFBSUgsSUFBSixFQUFYO0FBQUEsZ0JBQ0lJLE1BREo7O0FBR0FBLHFCQUFTTCxxQkFBcUJNLElBQXJCLENBQTBCSixPQUExQixFQUFtQ0MsT0FBbkMsRUFBNENDLElBQTVDLENBQVQ7O0FBRUFDLHFCQUFTUCxjQUFjUSxJQUFkLENBQW1CRCxNQUFuQixFQUEyQkQsSUFBM0IsQ0FBVDs7QUFFQUMscUJBQVNOLGtCQUFrQk8sSUFBbEIsQ0FBdUJELE1BQXZCLEVBQStCRCxJQUEvQixDQUFUOztBQUVBQSxpQkFBS0csU0FBTCxDQUFlRixNQUFmOztBQUVBLG1CQUFPRCxJQUFQO0FBQ0Q7Ozs7RUFkZ0JSLFU7O0FBaUJuQlksT0FBT0MsT0FBUCxHQUFpQlIsSUFBakIiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBDb21tb25MaW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL2xpbmUnKSxcclxuICAgIFNwZWNpYWxUb2tlbnMgPSByZXF1aXJlKCcuL3NwZWNpYWxUb2tlbnMnKSxcclxuICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi9zaWduaWZpY2FudFRva2VucycpLFxyXG4gICAgTm9uU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL25vblNpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQpIHtcclxuICAgIHZhciBsaW5lID0gbmV3IExpbmUoKSxcclxuICAgICAgICB0b2tlbnM7XHJcbiAgICBcclxuICAgIHRva2VucyA9IE5vblNpZ25pZmljYW50VG9rZW5zLnBhc3MoY29udGVudCwgY29udGV4dCwgbGluZSk7XHJcbiAgICBcclxuICAgIHRva2VucyA9IFNwZWNpYWxUb2tlbnMucGFzcyh0b2tlbnMsIGxpbmUpO1xyXG5cclxuICAgIHRva2VucyA9IFNpZ25pZmljYW50VG9rZW5zLnBhc3ModG9rZW5zLCBsaW5lKTtcclxuICAgIFxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiJdfQ==