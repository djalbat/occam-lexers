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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2xpbmUuanMiXSwibmFtZXMiOlsiQ29tbW9uTGluZSIsInJlcXVpcmUiLCJOb25TaWduaWZpY2FudFRva2VucyIsIkxpbmUiLCJjb250ZW50IiwiY29udGV4dCIsInJ1bGVzIiwibGluZSIsInRva2VucyIsInNldFRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxhQUFhQyxRQUFRLGdCQUFSLENBQWpCO0FBQUEsSUFDSUMsdUJBQXVCRCxRQUFRLHdCQUFSLENBRDNCOztJQUdNRSxJOzs7Ozs7Ozs7OztvQ0FDZUMsTyxFQUFTQyxPLEVBQVNDLEssRUFBTztBQUMxQyxnQkFBSUMsT0FBTyxJQUFJSixJQUFKLEVBQVg7QUFBQSxnQkFDSUssbUdBQWlDSixPQUFqQyxFQUEwQ0MsT0FBMUMsRUFBbURFLElBQW5ELEVBQXlERCxLQUF6RCxFQUFnRUosb0JBQWhFLENBREo7O0FBR0FLLGlCQUFLRSxTQUFMLENBQWVELE1BQWY7O0FBRUEsbUJBQU9ELElBQVA7QUFDRDs7OztFQVJnQlAsVTs7QUFXbkJVLE9BQU9DLE9BQVAsR0FBaUJSLElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICBOb25TaWduaWZpY2FudFRva2VucyA9IHJlcXVpcmUoJy4vbm9uU2lnbmlmaWNhbnRUb2tlbnMnKTtcclxuXHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpIHtcclxuICAgIHZhciBsaW5lID0gbmV3IExpbmUoKSxcclxuICAgICAgICB0b2tlbnMgPSBzdXBlci50b2tlbnNGcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBsaW5lLCBydWxlcywgTm9uU2lnbmlmaWNhbnRUb2tlbnMpO1xyXG5cclxuICAgIGxpbmUuc2V0VG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiJdfQ==