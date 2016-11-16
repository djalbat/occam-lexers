'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/comment');

var MiddleOfCommentToken = function (_CommentToken) {
  _inherits(MiddleOfCommentToken, _CommentToken);

  function MiddleOfCommentToken() {
    _classCallCheck(this, MiddleOfCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfCommentToken, [{
    key: 'clone',
    value: function clone() {
      return _get(MiddleOfCommentToken.prototype.__proto__ || Object.getPrototypeOf(MiddleOfCommentToken.prototype), 'clone', this).call(this, MiddleOfCommentToken);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, line, middleOfCommentTokenLength) {
      var middleOfCommentTokenContent = content.substring(0, middleOfCommentTokenLength);

      content = middleOfCommentTokenContent; ///

      var middleOfCommentToken = new MiddleOfCommentToken(content, line);

      return middleOfCommentToken;
    }
  }]);

  return MiddleOfCommentToken;
}(CommentToken);

module.exports = MiddleOfCommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL21pZGRsZU9mQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJjb250ZW50IiwibGluZSIsIm1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoIiwibWlkZGxlT2ZDb21tZW50VG9rZW5Db250ZW50Iiwic3Vic3RyaW5nIiwibWlkZGxlT2ZDb21tZW50VG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSw0QkFBUixDQUFuQjs7SUFFTUMsb0I7Ozs7Ozs7Ozs7OzRCQUNJO0FBQUUsK0lBQW1CQSxvQkFBbkI7QUFBMkM7OztnQ0FFbENDLE8sRUFBU0MsSSxFQUFNQywwQixFQUE0QjtBQUM1RCxVQUFJQyw4QkFBOEJILFFBQVFJLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJGLDBCQUFyQixDQUFsQzs7QUFFQUYsZ0JBQVVHLDJCQUFWLENBSDRELENBR3BCOztBQUV4QyxVQUFJRSx1QkFBdUIsSUFBSU4sb0JBQUosQ0FBeUJDLE9BQXpCLEVBQWtDQyxJQUFsQyxDQUEzQjs7QUFFQSxhQUFPSSxvQkFBUDtBQUNEOzs7O0VBWGdDUixZOztBQWNuQ1MsT0FBT0MsT0FBUCxHQUFpQlIsb0JBQWpCIiwiZmlsZSI6Im1pZGRsZU9mQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbi9jb21tZW50Jyk7XG5cbmNsYXNzIE1pZGRsZU9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShNaWRkbGVPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpIHtcbiAgICB2YXIgbWlkZGxlT2ZDb21tZW50VG9rZW5Db250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xuXG4gICAgY29udGVudCA9IG1pZGRsZU9mQ29tbWVudFRva2VuQ29udGVudDsgIC8vL1xuXG4gICAgdmFyIG1pZGRsZU9mQ29tbWVudFRva2VuID0gbmV3IE1pZGRsZU9mQ29tbWVudFRva2VuKGNvbnRlbnQsIGxpbmUpO1xuXG4gICAgcmV0dXJuIG1pZGRsZU9mQ29tbWVudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlkZGxlT2ZDb21tZW50VG9rZW47XG4iXX0=