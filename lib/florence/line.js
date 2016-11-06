'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('./commentTokens'),
    StringTokens = require('../common/stringTokens'),
    WhitespaceTokens = require('./whitespaceTokens'),
    EndOfLineToken = require('../common/token/endOfLine');

var Line = function (_CommonLine) {
    _inherits(Line, _CommonLine);

    function Line() {
        _classCallCheck(this, Line);

        return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
    }

    _createClass(Line, null, [{
        key: 'fromContent',
        value: function fromContent(content, context, rules) {
            var line = _get(Line.__proto__ || Object.getPrototypeOf(Line), 'fromContent', this).call(this, content, context, rules, Line, CommentTokens, StringTokens, WhitespaceTokens),
                endOfLineToken = EndOfLineToken.fromNothing(line);

            line.pushToken(endOfLineToken);

            return line;
        }
    }]);

    return Line;
}(CommonLine);

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxpbmUiLCJyZXF1aXJlIiwiQ29tbWVudFRva2VucyIsIlN0cmluZ1Rva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJFbmRPZkxpbmVUb2tlbiIsIkxpbmUiLCJjb250ZW50IiwiY29udGV4dCIsInJ1bGVzIiwibGluZSIsImVuZE9mTGluZVRva2VuIiwiZnJvbU5vdGhpbmciLCJwdXNoVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSxnQkFBUixDQUFqQjtBQUFBLElBQ0lDLGdCQUFnQkQsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRUlFLGVBQWVGLFFBQVEsd0JBQVIsQ0FGbkI7QUFBQSxJQUdJRyxtQkFBbUJILFFBQVEsb0JBQVIsQ0FIdkI7QUFBQSxJQUlJSSxpQkFBaUJKLFFBQVEsMkJBQVIsQ0FKckI7O0lBTU1LLEk7Ozs7Ozs7Ozs7O29DQUNlQyxPLEVBQVNDLE8sRUFBU0MsSyxFQUFPO0FBQzFDLGdCQUFJQywyRkFBeUJILE9BQXpCLEVBQWtDQyxPQUFsQyxFQUEyQ0MsS0FBM0MsRUFBa0RILElBQWxELEVBQXdESixhQUF4RCxFQUF1RUMsWUFBdkUsRUFBcUZDLGdCQUFyRixDQUFKO0FBQUEsZ0JBQ0lPLGlCQUFpQk4sZUFBZU8sV0FBZixDQUEyQkYsSUFBM0IsQ0FEckI7O0FBR0FBLGlCQUFLRyxTQUFMLENBQWVGLGNBQWY7O0FBRUEsbUJBQU9ELElBQVA7QUFDRDs7OztFQVJnQlYsVTs7QUFXbkJjLE9BQU9DLE9BQVAsR0FBaUJULElBQWpCIiwiZmlsZSI6ImxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi9jb21tZW50VG9rZW5zJyksXHJcbiAgICBTdHJpbmdUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vc3RyaW5nVG9rZW5zJyksXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi93aGl0ZXNwYWNlVG9rZW5zJyksXHJcbiAgICBFbmRPZkxpbmVUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9lbmRPZkxpbmUnKTtcclxuXHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpIHsgXHJcbiAgICB2YXIgbGluZSA9IHN1cGVyLmZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBMaW5lLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpLFxyXG4gICAgICAgIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbU5vdGhpbmcobGluZSk7XHJcbiAgICBcclxuICAgIGxpbmUucHVzaFRva2VuKGVuZE9mTGluZVRva2VuKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiJdfQ==