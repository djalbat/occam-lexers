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
    value: function toPosition(position) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CommentToken;
      return Token.toPosition(this, position, Class);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CommentToken;
      return Token.fromPosition(this, position, Class);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vY29tbWVudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxpbmUiLCJnZXRMaW5lIiwiY29tbWVudFRva2VuQ29udGVudCIsImZyb21Db250ZW50QW5kTGluZSIsInBvc2l0aW9uIiwidG9Qb3NpdGlvbiIsImZyb21Qb3NpdGlvbiIsIkNsYXNzIiwiaW5uZXJIVE1MIiwic2FuaXRpc2VIVE1MIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxvQkFBUixDQUFaOztJQUVNQyxZOzs7Ozs7Ozs7OzswQkFDRUMsWSxFQUFjO0FBQ2xCLFVBQUlDLFVBQVUsS0FBS0MsVUFBTCxFQUFkO0FBQUEsVUFDSUMsT0FBTyxLQUFLQyxPQUFMLEVBRFg7QUFBQSxVQUVJQyxzQkFBc0JMLGFBQWFFLFVBQWIsRUFGMUI7O0FBSUFELGlCQUFXSSxtQkFBWDs7QUFFQUwscUJBQWVELGFBQWFPLGtCQUFiLENBQWdDTCxPQUFoQyxFQUF5Q0UsSUFBekMsQ0FBZixDQVBrQixDQU84Qzs7QUFFaEUsYUFBT0gsWUFBUDtBQUNEOzs7K0JBRVVPLFEsRUFBVTtBQUFFLGFBQU9SLGFBQWFTLFVBQWIsQ0FBd0IsSUFBeEIsRUFBOEJELFFBQTlCLENBQVA7QUFBZ0Q7OztpQ0FFMURBLFEsRUFBVTtBQUFFLGFBQU9SLGFBQWFVLFlBQWIsQ0FBMEIsSUFBMUIsRUFBZ0NGLFFBQWhDLENBQVA7QUFBa0Q7OzsrQkFFekRBLFEsRUFBZ0M7QUFBQSxVQUF0QkcsS0FBc0IsdUVBQWRYLFlBQWM7QUFBRSxhQUFPRixNQUFNVyxVQUFOLENBQWlCLElBQWpCLEVBQXVCRCxRQUF2QixFQUFpQ0csS0FBakMsQ0FBUDtBQUFnRDs7O2lDQUVoRkgsUSxFQUFnQztBQUFBLFVBQXRCRyxLQUFzQix1RUFBZFgsWUFBYztBQUFFLGFBQU9GLE1BQU1ZLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUJGLFFBQXpCLEVBQW1DRyxLQUFuQyxDQUFQO0FBQWtEOzs7dUNBRTlFVCxPLEVBQVNFLEksRUFBNEI7QUFBQSxVQUF0Qk8sS0FBc0IsdUVBQWRYLFlBQWM7QUFBRSxhQUFPRixNQUFNUyxrQkFBTixDQUF5QkwsT0FBekIsRUFBa0NFLElBQWxDLEVBQXdDTyxLQUF4QyxDQUFQO0FBQXdEOzs7b0NBRWxHVCxPLEVBQVM7QUFDOUIsVUFBSVUsWUFBWVYsT0FBaEI7O0FBRUFVLGtCQUFZZCxNQUFNZSxZQUFOLENBQW1CRCxTQUFuQixDQUFaLENBSDhCLENBR2M7O0FBRTVDLFVBQUlFLGtDQUFnQ0YsU0FBaEMsWUFBSjs7QUFFQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs7RUEvQndCaEIsSzs7QUFrQzNCaUIsT0FBT0MsT0FBUCxHQUFpQmhCLFlBQWpCIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbicpO1xuXG5jbGFzcyBDb21tZW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIG1lcmdlKGNvbW1lbnRUb2tlbikge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgY29tbWVudFRva2VuQ29udGVudCA9IGNvbW1lbnRUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ICs9IGNvbW1lbnRUb2tlbkNvbnRlbnQ7XG5cbiAgICBjb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpOyAgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgdG9Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLnRvUG9zaXRpb24odGhpcywgcG9zaXRpb24pIH1cblxuICBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tUG9zaXRpb24odGhpcywgcG9zaXRpb24pIH1cblxuICBzdGF0aWMgdG9Qb3NpdGlvbihwb3NpdGlvbiwgQ2xhc3MgPSBDb21tZW50VG9rZW4pIHsgcmV0dXJuIFRva2VuLnRvUG9zaXRpb24odGhpcywgcG9zaXRpb24sIENsYXNzKSB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbiwgQ2xhc3MgPSBDb21tZW50VG9rZW4pIHsgcmV0dXJuIFRva2VuLmZyb21Qb3NpdGlvbih0aGlzLCBwb3NpdGlvbiwgQ2xhc3MpIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzID0gQ29tbWVudFRva2VuKSB7IHJldHVybiBUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpOyB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIGlubmVySFRNTCA9IGNvbnRlbnQ7XG5cbiAgICBpbm5lckhUTUwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaW5uZXJIVE1MKTsgIC8vL1xuXG4gICAgdmFyIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCJjb21tZW50XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbjtcbiJdfQ==