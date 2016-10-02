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
                tokens;

            tokens = NonSignificantTokens.pass(content, context, line);

            tokens = SignificantTokens.pass(tokens, line, rules);

            line.setTokens(tokens);

            return line;
        }
    }]);

    return Line;
}(CommonLine);

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxpbmUiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbnMiLCJOb25TaWduaWZpY2FudFRva2VucyIsIkxpbmUiLCJjb250ZW50IiwiY29udGV4dCIsInJ1bGVzIiwibGluZSIsInRva2VucyIsInBhc3MiLCJzZXRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGFBQWFDLFFBQVEsZ0JBQVIsQ0FBakI7QUFBQSxJQUNJQyxvQkFBb0JELFFBQVEsNkJBQVIsQ0FEeEI7QUFBQSxJQUVJRSx1QkFBdUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0lBSU1HLEk7Ozs7Ozs7Ozs7O29DQUNlQyxPLEVBQVNDLE8sRUFBU0MsSyxFQUFPO0FBQzFDLGdCQUFJQyxPQUFPLElBQUlKLElBQUosRUFBWDtBQUFBLGdCQUNJSyxNQURKOztBQUdBQSxxQkFBU04scUJBQXFCTyxJQUFyQixDQUEwQkwsT0FBMUIsRUFBbUNDLE9BQW5DLEVBQTRDRSxJQUE1QyxDQUFUOztBQUVBQyxxQkFBU1Asa0JBQWtCUSxJQUFsQixDQUF1QkQsTUFBdkIsRUFBK0JELElBQS9CLEVBQXFDRCxLQUFyQyxDQUFUOztBQUVBQyxpQkFBS0csU0FBTCxDQUFlRixNQUFmOztBQUVBLG1CQUFPRCxJQUFQO0FBQ0Q7Ozs7RUFaZ0JSLFU7O0FBZW5CWSxPQUFPQyxPQUFQLEdBQWlCVCxJQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vc2lnbmlmaWNhbnRUb2tlbnMnKSxcclxuICAgIE5vblNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi9ub25TaWduaWZpY2FudFRva2VucycpO1xyXG5cclxuY2xhc3MgTGluZSBleHRlbmRzIENvbW1vbkxpbmUge1xyXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBydWxlcykge1xyXG4gICAgdmFyIGxpbmUgPSBuZXcgTGluZSgpLFxyXG4gICAgICAgIHRva2VucztcclxuXHJcbiAgICB0b2tlbnMgPSBOb25TaWduaWZpY2FudFRva2Vucy5wYXNzKGNvbnRlbnQsIGNvbnRleHQsIGxpbmUpO1xyXG5cclxuICAgIHRva2VucyA9IFNpZ25pZmljYW50VG9rZW5zLnBhc3ModG9rZW5zLCBsaW5lLCBydWxlcyk7XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIl19