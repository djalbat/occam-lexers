'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('../common/tokens/comment'),
    StringTokens = require('../common/tokens/string'),
    WhitespaceTokens = require('../common/tokens/whitespace');

var Line = function (_CommonLine) {
      _inherits(Line, _CommonLine);

      function Line() {
            _classCallCheck(this, Line);

            return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
      }

      _createClass(Line, null, [{
            key: 'fromContent',
            value: function fromContent(content, context, rules) {
                  return _get(Line.__proto__ || Object.getPrototypeOf(Line), 'fromContent', this).call(this, Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens);
            }
      }]);

      return Line;
}(CommonLine);

module.exports = Line;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvbGluZS5qcyJdLCJuYW1lcyI6WyJDb21tb25MaW5lIiwicmVxdWlyZSIsIkNvbW1lbnRUb2tlbnMiLCJTdHJpbmdUb2tlbnMiLCJXaGl0ZXNwYWNlVG9rZW5zIiwiTGluZSIsImNvbnRlbnQiLCJjb250ZXh0IiwicnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxnQkFBUixDQUFuQjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSwwQkFBUixDQUR0QjtBQUFBLElBRU1FLGVBQWVGLFFBQVEseUJBQVIsQ0FGckI7QUFBQSxJQUdNRyxtQkFBbUJILFFBQVEsNkJBQVIsQ0FIekI7O0lBS01JLEk7Ozs7Ozs7Ozs7O3dDQUNlQyxPLEVBQVNDLE8sRUFBU0MsSyxFQUFPO0FBQUUsNkdBQXlCSCxJQUF6QixFQUErQkMsT0FBL0IsRUFBd0NDLE9BQXhDLEVBQWlEQyxLQUFqRCxFQUF3RE4sYUFBeEQsRUFBdUVDLFlBQXZFLEVBQXFGQyxnQkFBckY7QUFBeUc7Ozs7RUFEdElKLFU7O0FBSW5CUyxPQUFPQyxPQUFQLEdBQWlCTCxJQUFqQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgU3RyaW5nVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9zdHJpbmcnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgTGluZSBleHRlbmRzIENvbW1vbkxpbmUge1xyXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBydWxlcykgeyByZXR1cm4gc3VwZXIuZnJvbUNvbnRlbnQoTGluZSwgY29udGVudCwgY29udGV4dCwgcnVsZXMsIENvbW1lbnRUb2tlbnMsIFN0cmluZ1Rva2VucywgV2hpdGVzcGFjZVRva2Vucyk7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iXX0=