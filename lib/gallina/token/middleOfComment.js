'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      var string = this.getString(),
          line = this.getLine(),
          middleOfCommentToken = new MiddleOfCommentToken(string, line);

      return middleOfCommentToken;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, line) {
      var string = content,
          ///
      middleOfCommentToken = new MiddleOfCommentToken(string, line);

      return middleOfCommentToken;
    }
  }]);

  return MiddleOfCommentToken;
}(CommentToken);

module.exports = MiddleOfCommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9nYWxsaW5hL3Rva2VuL21pZGRsZU9mQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJzdHJpbmciLCJnZXRTdHJpbmciLCJsaW5lIiwiZ2V0TGluZSIsIm1pZGRsZU9mQ29tbWVudFRva2VuIiwiY29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSw0QkFBUixDQUFuQjs7SUFFTUMsb0I7Ozs7Ozs7Ozs7OzRCQUNJO0FBQ04sVUFBSUMsU0FBUyxLQUFLQyxTQUFMLEVBQWI7QUFBQSxVQUNJQyxPQUFPLEtBQUtDLE9BQUwsRUFEWDtBQUFBLFVBRUlDLHVCQUF1QixJQUFJTCxvQkFBSixDQUF5QkMsTUFBekIsRUFBaUNFLElBQWpDLENBRjNCOztBQUlBLGFBQU9FLG9CQUFQO0FBQ0Q7OztnQ0FFa0JDLE8sRUFBU0gsSSxFQUFNO0FBQ2hDLFVBQUlGLFNBQVNLLE9BQWI7QUFBQSxVQUFzQjtBQUNsQkQsNkJBQXVCLElBQUlMLG9CQUFKLENBQXlCQyxNQUF6QixFQUFpQ0UsSUFBakMsQ0FEM0I7O0FBR0EsYUFBT0Usb0JBQVA7QUFDRDs7OztFQWRnQ1AsWTs7QUFpQm5DUyxPQUFPQyxPQUFQLEdBQWlCUixvQkFBakIiLCJmaWxlIjoibWlkZGxlT2ZDb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuL2NvbW1lbnQnKTtcblxuY2xhc3MgTWlkZGxlT2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICBtaWRkbGVPZkNvbW1lbnRUb2tlbiA9IG5ldyBNaWRkbGVPZkNvbW1lbnRUb2tlbihzdHJpbmcsIGxpbmUpO1xuXG4gICAgcmV0dXJuIG1pZGRsZU9mQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgc3RyaW5nID0gY29udGVudCwgLy8vXG4gICAgICAgIG1pZGRsZU9mQ29tbWVudFRva2VuID0gbmV3IE1pZGRsZU9mQ29tbWVudFRva2VuKHN0cmluZywgbGluZSk7XG5cbiAgICByZXR1cm4gbWlkZGxlT2ZDb21tZW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNaWRkbGVPZkNvbW1lbnRUb2tlbjtcblxuIl19