'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tokenUtil = require('../../../util/token'),
    NonSignificantToken = require('../nonSignificant');

var CommentToken = function (_NonSignificantToken) {
  _inherits(CommentToken, _NonSignificantToken);

  function CommentToken() {
    _classCallCheck(this, CommentToken);

    return _possibleConstructorReturn(this, (CommentToken.__proto__ || Object.getPrototypeOf(CommentToken)).apply(this, arguments));
  }

  _createClass(CommentToken, [{
    key: 'merge',
    value: function merge(commentToken) {
      var content = this.getContent();

      var line = this.getLine(),
          commentTokenContent = commentToken.getContent();

      content += commentTokenContent;

      commentToken = CommentToken.fromContentAndLine(content, line); ///

      return commentToken;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(this, startPosition, endPosition, CommentToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token, startPosition, endPosition) {
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : CommentToken;
      return NonSignificantToken.clone(token, startPosition, endPosition, Class);
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CommentToken;
      return NonSignificantToken.fromContentAndLine(content, line, Class);
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var sanitisedContent = tokenUtil.sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      html = '<span class="comment">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return CommentToken;
}(NonSignificantToken);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC5qcyJdLCJuYW1lcyI6WyJ0b2tlblV0aWwiLCJyZXF1aXJlIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGluZSIsImdldExpbmUiLCJjb21tZW50VG9rZW5Db250ZW50IiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJ0b2tlbiIsIkNsYXNzIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsImlubmVySFRNTCIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEscUJBQVIsQ0FBbEI7QUFBQSxJQUNNQyxzQkFBc0JELFFBQVEsbUJBQVIsQ0FENUI7O0lBR01FLFk7Ozs7Ozs7Ozs7OzBCQUNFQyxZLEVBQWM7QUFDbEIsVUFBSUMsVUFBVSxLQUFLQyxVQUFMLEVBQWQ7O0FBRUEsVUFBTUMsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxzQkFBc0JMLGFBQWFFLFVBQWIsRUFENUI7O0FBR0FELGlCQUFXSSxtQkFBWDs7QUFFQUwscUJBQWVELGFBQWFPLGtCQUFiLENBQWdDTCxPQUFoQyxFQUF5Q0UsSUFBekMsQ0FBZixDQVJrQixDQVE4Qzs7QUFFaEUsYUFBT0gsWUFBUDtBQUNEOzs7MEJBRUtPLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT1QsYUFBYVUsS0FBYixDQUFtQixJQUFuQixFQUF5QkYsYUFBekIsRUFBd0NDLFdBQXhDLEVBQXFEVCxZQUFyRCxDQUFQO0FBQTRFOzs7MEJBRW5HVyxLLEVBQU9ILGEsRUFBZUMsVyxFQUFtQztBQUFBLFVBQXRCRyxLQUFzQix1RUFBZFosWUFBYztBQUFFLGFBQU9ELG9CQUFvQlcsS0FBcEIsQ0FBMEJDLEtBQTFCLEVBQWlDSCxhQUFqQyxFQUFnREMsV0FBaEQsRUFBNkRHLEtBQTdELENBQVA7QUFBNEU7Ozt1Q0FFMUhWLE8sRUFBU0UsSSxFQUE0QjtBQUFBLFVBQXRCUSxLQUFzQix1RUFBZFosWUFBYztBQUFFLGFBQU9ELG9CQUFvQlEsa0JBQXBCLENBQXVDTCxPQUF2QyxFQUFnREUsSUFBaEQsRUFBc0RRLEtBQXRELENBQVA7QUFBc0U7OztvQ0FFaEhWLE8sRUFBUztBQUM5QixVQUFNVyxtQkFBbUJoQixVQUFVaUIsZUFBVixDQUEwQlosT0FBMUIsQ0FBekI7QUFBQSxVQUNNYSxZQUFZRixnQkFEbEI7QUFBQSxVQUNvQztBQUM5Qkcsd0NBQWdDRCxTQUFoQyxZQUZOOztBQUlBLGFBQU9DLElBQVA7QUFDRDs7OztFQTFCd0JqQixtQjs7QUE2QjNCa0IsT0FBT0MsT0FBUCxHQUFpQmxCLFlBQWpCIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHRva2VuVXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvdG9rZW4nKSxcbiAgICAgIE5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9ub25TaWduaWZpY2FudCcpO1xuXG5jbGFzcyBDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgbWVyZ2UoY29tbWVudFRva2VuKSB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICBcbiAgICBjb25zdCBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgICAgY29tbWVudFRva2VuQ29udGVudCA9IGNvbW1lbnRUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ICs9IGNvbW1lbnRUb2tlbkNvbnRlbnQ7XG5cbiAgICBjb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpOyAgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENsYXNzID0gQ29tbWVudFRva2VuKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ2xhc3MpIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzID0gQ29tbWVudFRva2VuKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyk7IH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdG9rZW5VdGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiY29tbWVudFwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW47XG4iXX0=