'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var CommentToken = function (_Token) {
  _inherits(CommentToken, _Token);

  function CommentToken() {
    _classCallCheck(this, CommentToken);

    return _possibleConstructorReturn(this, (CommentToken.__proto__ || Object.getPrototypeOf(CommentToken)).apply(this, arguments));
  }

  _createClass(CommentToken, [{
    key: 'merge',
    value: function merge(commentToken) {
      var content = this.getContent(),
          line = this.getLine(),
          commentTokenContent = commentToken.getContent();

      content += commentTokenContent;

      commentToken = CommentToken.fromContentAndLine(content, line); ///

      return commentToken;
    }
  }, {
    key: 'toPosition',
    value: function toPosition(position) {
      return CommentToken.toPosition(this, position);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      return CommentToken.fromPosition(this, position);
    }
  }], [{
    key: 'toPosition',
    value: function toPosition(token, position) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CommentToken;
      return Token.toPosition(token, position, Class);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(token, position) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CommentToken;
      return Token.fromPosition(token, position, Class);
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CommentToken;
      return Token.fromContentAndLine(content, line, Class);
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var innerHTML = content;

      innerHTML = Token.sanitiseHTML(innerHTML); ///

      var html = '<span class="comment">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return CommentToken;
}(Token);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vY29tbWVudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxpbmUiLCJnZXRMaW5lIiwiY29tbWVudFRva2VuQ29udGVudCIsImZyb21Db250ZW50QW5kTGluZSIsInBvc2l0aW9uIiwidG9Qb3NpdGlvbiIsImZyb21Qb3NpdGlvbiIsInRva2VuIiwiQ2xhc3MiLCJpbm5lckhUTUwiLCJzYW5pdGlzZUhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLG9CQUFSLENBQVo7O0lBRU1DLFk7Ozs7Ozs7Ozs7OzBCQUNFQyxZLEVBQWM7QUFDbEIsVUFBSUMsVUFBVSxLQUFLQyxVQUFMLEVBQWQ7QUFBQSxVQUNJQyxPQUFPLEtBQUtDLE9BQUwsRUFEWDtBQUFBLFVBRUlDLHNCQUFzQkwsYUFBYUUsVUFBYixFQUYxQjs7QUFJQUQsaUJBQVdJLG1CQUFYOztBQUVBTCxxQkFBZUQsYUFBYU8sa0JBQWIsQ0FBZ0NMLE9BQWhDLEVBQXlDRSxJQUF6QyxDQUFmLENBUGtCLENBTzhDOztBQUVoRSxhQUFPSCxZQUFQO0FBQ0Q7OzsrQkFFVU8sUSxFQUFVO0FBQUUsYUFBT1IsYUFBYVMsVUFBYixDQUF3QixJQUF4QixFQUE4QkQsUUFBOUIsQ0FBUDtBQUFnRDs7O2lDQUUxREEsUSxFQUFVO0FBQUUsYUFBT1IsYUFBYVUsWUFBYixDQUEwQixJQUExQixFQUFnQ0YsUUFBaEMsQ0FBUDtBQUFrRDs7OytCQUV6REcsSyxFQUFPSCxRLEVBQWdDO0FBQUEsVUFBdEJJLEtBQXNCLHVFQUFkWixZQUFjO0FBQUUsYUFBT0YsTUFBTVcsVUFBTixDQUFpQkUsS0FBakIsRUFBd0JILFFBQXhCLEVBQWtDSSxLQUFsQyxDQUFQO0FBQWlEOzs7aUNBRXhGRCxLLEVBQU9ILFEsRUFBZ0M7QUFBQSxVQUF0QkksS0FBc0IsdUVBQWRaLFlBQWM7QUFBRSxhQUFPRixNQUFNWSxZQUFOLENBQW1CQyxLQUFuQixFQUEwQkgsUUFBMUIsRUFBb0NJLEtBQXBDLENBQVA7QUFBbUQ7Ozt1Q0FFdEZWLE8sRUFBU0UsSSxFQUE0QjtBQUFBLFVBQXRCUSxLQUFzQix1RUFBZFosWUFBYztBQUFFLGFBQU9GLE1BQU1TLGtCQUFOLENBQXlCTCxPQUF6QixFQUFrQ0UsSUFBbEMsRUFBd0NRLEtBQXhDLENBQVA7QUFBd0Q7OztvQ0FFbEdWLE8sRUFBUztBQUM5QixVQUFJVyxZQUFZWCxPQUFoQjs7QUFFQVcsa0JBQVlmLE1BQU1nQixZQUFOLENBQW1CRCxTQUFuQixDQUFaLENBSDhCLENBR2M7O0FBRTVDLFVBQUlFLGtDQUFnQ0YsU0FBaEMsWUFBSjs7QUFFQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs7RUEvQndCakIsSzs7QUFrQzNCa0IsT0FBT0MsT0FBUCxHQUFpQmpCLFlBQWpCIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbicpO1xuXG5jbGFzcyBDb21tZW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIG1lcmdlKGNvbW1lbnRUb2tlbikge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgY29tbWVudFRva2VuQ29udGVudCA9IGNvbW1lbnRUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ICs9IGNvbW1lbnRUb2tlbkNvbnRlbnQ7XG5cbiAgICBjb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpOyAgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgdG9Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLnRvUG9zaXRpb24odGhpcywgcG9zaXRpb24pIH1cblxuICBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tUG9zaXRpb24odGhpcywgcG9zaXRpb24pIH1cblxuICBzdGF0aWMgdG9Qb3NpdGlvbih0b2tlbiwgcG9zaXRpb24sIENsYXNzID0gQ29tbWVudFRva2VuKSB7IHJldHVybiBUb2tlbi50b1Bvc2l0aW9uKHRva2VuLCBwb3NpdGlvbiwgQ2xhc3MpIH1cblxuICBzdGF0aWMgZnJvbVBvc2l0aW9uKHRva2VuLCBwb3NpdGlvbiwgQ2xhc3MgPSBDb21tZW50VG9rZW4pIHsgcmV0dXJuIFRva2VuLmZyb21Qb3NpdGlvbih0b2tlbiwgcG9zaXRpb24sIENsYXNzKSB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IENvbW1lbnRUb2tlbikgeyByZXR1cm4gVG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzKTsgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBpbm5lckhUTUwgPSBjb250ZW50O1xuXG4gICAgaW5uZXJIVE1MID0gVG9rZW4uc2FuaXRpc2VIVE1MKGlubmVySFRNTCk7ICAvLy9cblxuICAgIHZhciBodG1sID0gYDxzcGFuIGNsYXNzPVwiY29tbWVudFwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW47XG4iXX0=