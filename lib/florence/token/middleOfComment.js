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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9taWRkbGVPZkNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIk1pZGRsZU9mQ29tbWVudFRva2VuIiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwibGluZSIsImdldExpbmUiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbiIsImNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsNEJBQVIsQ0FBbkI7O0lBRU1DLG9COzs7Ozs7Ozs7Ozs0QkFDSTtBQUNOLFVBQUlDLFNBQVMsS0FBS0MsU0FBTCxFQUFiO0FBQUEsVUFDSUMsT0FBTyxLQUFLQyxPQUFMLEVBRFg7QUFBQSxVQUVJQyx1QkFBdUIsSUFBSUwsb0JBQUosQ0FBeUJDLE1BQXpCLEVBQWlDRSxJQUFqQyxDQUYzQjs7QUFJQSxhQUFPRSxvQkFBUDtBQUNEOzs7Z0NBRWtCQyxPLEVBQVNILEksRUFBTTtBQUNoQyxVQUFJRixTQUFTSyxPQUFiO0FBQUEsVUFBc0I7QUFDbEJELDZCQUF1QixJQUFJTCxvQkFBSixDQUF5QkMsTUFBekIsRUFBaUNFLElBQWpDLENBRDNCOztBQUdBLGFBQU9FLG9CQUFQO0FBQ0Q7Ozs7RUFkZ0NQLFk7O0FBaUJuQ1MsT0FBT0MsT0FBUCxHQUFpQlIsb0JBQWpCIiwiZmlsZSI6Im1pZGRsZU9mQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbi9jb21tZW50Jyk7XG5cbmNsYXNzIE1pZGRsZU9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgbWlkZGxlT2ZDb21tZW50VG9rZW4gPSBuZXcgTWlkZGxlT2ZDb21tZW50VG9rZW4oc3RyaW5nLCBsaW5lKTtcblxuICAgIHJldHVybiBtaWRkbGVPZkNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsaW5lKSB7XG4gICAgdmFyIHN0cmluZyA9IGNvbnRlbnQsIC8vL1xuICAgICAgICBtaWRkbGVPZkNvbW1lbnRUb2tlbiA9IG5ldyBNaWRkbGVPZkNvbW1lbnRUb2tlbihzdHJpbmcsIGxpbmUpO1xuXG4gICAgcmV0dXJuIG1pZGRsZU9mQ29tbWVudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlkZGxlT2ZDb21tZW50VG9rZW47XG5cbiJdfQ==