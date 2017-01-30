'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentTokens = require('./commentTokens'),
    CommonLine = require('../common/line'),
    StringTokens = require('../common/stringTokens'),
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
            return _get(Line.__proto__ || Object.getPrototypeOf(Line), 'fromContentAndNumber', this).call(this, Line, content, number, context, rules, CommentTokens, StringTokens, WhitespaceTokens);
        }
    }]);

    return Line;
}(CommonLine);

module.exports = Line;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9saW5lLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRUb2tlbnMiLCJyZXF1aXJlIiwiQ29tbW9uTGluZSIsIlN0cmluZ1Rva2VucyIsIldoaXRlc3BhY2VUb2tlbnMiLCJMaW5lIiwiY29udGVudCIsIm51bWJlciIsImNvbnRleHQiLCJydWxlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxnQkFBZ0JDLFFBQVEsaUJBQVIsQ0FBcEI7QUFBQSxJQUNJQyxhQUFhRCxRQUFRLGdCQUFSLENBRGpCO0FBQUEsSUFFSUUsZUFBZUYsUUFBUSx3QkFBUixDQUZuQjtBQUFBLElBR0lHLG1CQUFtQkgsUUFBUSw0QkFBUixDQUh2Qjs7SUFLTUksSTs7Ozs7Ozs7Ozs7NkNBQ3dCQyxPLEVBQVNDLE0sRUFBUUMsTyxFQUFTQyxLLEVBQU87QUFBRSxnSEFBa0NKLElBQWxDLEVBQXdDQyxPQUF4QyxFQUFpREMsTUFBakQsRUFBeURDLE9BQXpELEVBQWtFQyxLQUFsRSxFQUF5RVQsYUFBekUsRUFBd0ZHLFlBQXhGLEVBQXNHQyxnQkFBdEc7QUFBMEg7Ozs7RUFEeEtGLFU7O0FBSW5CUSxPQUFPQyxPQUFQLEdBQWlCTixJQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL2NvbW1lbnRUb2tlbnMnKSxcclxuICAgIENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgU3RyaW5nVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3N0cmluZ1Rva2VucycpLFxyXG4gICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi93aGl0ZXNwYWNlVG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50QW5kTnVtYmVyKGNvbnRlbnQsIG51bWJlciwgY29udGV4dCwgcnVsZXMpIHsgcmV0dXJuIHN1cGVyLmZyb21Db250ZW50QW5kTnVtYmVyKExpbmUsIGNvbnRlbnQsIG51bWJlciwgY29udGV4dCwgcnVsZXMsIENvbW1lbnRUb2tlbnMsIFN0cmluZ1Rva2VucywgV2hpdGVzcGFjZVRva2Vucyk7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iXX0=