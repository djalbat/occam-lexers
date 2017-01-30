'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentTokens = require('./commentTokens'),
    CommonLine = require('../common/line'),
    StringTokens = require('../common/stringTokens'),
    EndOfLineToken = require('../common/token/endOfLine'),
    WhitespaceTokens = require('../common/whitespaceTokens');

var Line = function (_CommonLine) {
    _inherits(Line, _CommonLine);

    function Line() {
        _classCallCheck(this, Line);

        return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
    }

    _createClass(Line, null, [{
        key: 'fromContentAndNumber',
        value: function fromContentAndNumber(content, number, context, rules) {
            var line = _get(Line.__proto__ || Object.getPrototypeOf(Line), 'fromContentAndNumber', this).call(this, Line, content, number, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
                endOfLineToken = EndOfLineToken.fromLine(line);

            line.pushToken(endOfLineToken);

            return line;
        }
    }]);

    return Line;
}(CommonLine);

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRUb2tlbnMiLCJyZXF1aXJlIiwiQ29tbW9uTGluZSIsIlN0cmluZ1Rva2VucyIsIkVuZE9mTGluZVRva2VuIiwiV2hpdGVzcGFjZVRva2VucyIsIkxpbmUiLCJjb250ZW50IiwibnVtYmVyIiwiY29udGV4dCIsInJ1bGVzIiwibGluZSIsImVuZE9mTGluZVRva2VuIiwiZnJvbUxpbmUiLCJwdXNoVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsZ0JBQWdCQyxRQUFRLGlCQUFSLENBQXBCO0FBQUEsSUFDSUMsYUFBYUQsUUFBUSxnQkFBUixDQURqQjtBQUFBLElBRUlFLGVBQWVGLFFBQVEsd0JBQVIsQ0FGbkI7QUFBQSxJQUdJRyxpQkFBaUJILFFBQVEsMkJBQVIsQ0FIckI7QUFBQSxJQUlJSSxtQkFBbUJKLFFBQVEsNEJBQVIsQ0FKdkI7O0lBTU1LLEk7Ozs7Ozs7Ozs7OzZDQUN3QkMsTyxFQUFTQyxNLEVBQVFDLE8sRUFBU0MsSyxFQUFPO0FBQzNELGdCQUFJQyxvR0FBa0NMLElBQWxDLEVBQXdDQyxPQUF4QyxFQUFpREMsTUFBakQsRUFBeURDLE9BQXpELEVBQWtFQyxLQUFsRSxFQUF5RVYsYUFBekUsRUFBd0ZHLFlBQXhGLEVBQXNHRSxnQkFBdEcsQ0FBSjtBQUFBLGdCQUNJTyxpQkFBaUJSLGVBQWVTLFFBQWYsQ0FBd0JGLElBQXhCLENBRHJCOztBQUdBQSxpQkFBS0csU0FBTCxDQUFlRixjQUFmOztBQUVBLG1CQUFPRCxJQUFQO0FBQ0Q7Ozs7RUFSZ0JULFU7O0FBV25CYSxPQUFPQyxPQUFQLEdBQWlCVixJQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL2NvbW1lbnRUb2tlbnMnKSxcclxuICAgIENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgU3RyaW5nVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3N0cmluZ1Rva2VucycpLFxyXG4gICAgRW5kT2ZMaW5lVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vZW5kT2ZMaW5lJyksXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3doaXRlc3BhY2VUb2tlbnMnKTtcclxuXHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmROdW1iZXIoY29udGVudCwgbnVtYmVyLCBjb250ZXh0LCBydWxlcykge1xyXG4gICAgdmFyIGxpbmUgPSBzdXBlci5mcm9tQ29udGVudEFuZE51bWJlcihMaW5lLCBjb250ZW50LCBudW1iZXIsIGNvbnRleHQsIHJ1bGVzLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpLFxyXG4gICAgICAgIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbUxpbmUobGluZSk7XHJcbiAgICBcclxuICAgIGxpbmUucHVzaFRva2VuKGVuZE9mTGluZVRva2VuKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiJdfQ==