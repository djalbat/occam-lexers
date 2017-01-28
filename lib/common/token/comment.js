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
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(this, startPosition, endPosition, CommentToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token, startPosition, endPosition, Class) {
      return Token.clone(token, startPosition, endPosition, Class);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vY29tbWVudC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxpbmUiLCJnZXRMaW5lIiwiY29tbWVudFRva2VuQ29udGVudCIsImZyb21Db250ZW50QW5kTGluZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwidG9rZW4iLCJDbGFzcyIsImlubmVySFRNTCIsInNhbml0aXNlSFRNTCIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsb0JBQVIsQ0FBWjs7SUFFTUMsWTs7Ozs7Ozs7Ozs7MEJBQ0VDLFksRUFBYztBQUNsQixVQUFJQyxVQUFVLEtBQUtDLFVBQUwsRUFBZDtBQUFBLFVBQ0lDLE9BQU8sS0FBS0MsT0FBTCxFQURYO0FBQUEsVUFFSUMsc0JBQXNCTCxhQUFhRSxVQUFiLEVBRjFCOztBQUlBRCxpQkFBV0ksbUJBQVg7O0FBRUFMLHFCQUFlRCxhQUFhTyxrQkFBYixDQUFnQ0wsT0FBaEMsRUFBeUNFLElBQXpDLENBQWYsQ0FQa0IsQ0FPOEM7O0FBRWhFLGFBQU9ILFlBQVA7QUFDRDs7OzBCQUVLTyxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9ULGFBQWFVLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUJGLGFBQXpCLEVBQXdDQyxXQUF4QyxFQUFxRFQsWUFBckQsQ0FBUDtBQUE0RTs7OzBCQUVuR1csSyxFQUFPSCxhLEVBQWVDLFcsRUFBYUcsSyxFQUFPO0FBQUUsYUFBT2QsTUFBTVksS0FBTixDQUFZQyxLQUFaLEVBQW1CSCxhQUFuQixFQUFrQ0MsV0FBbEMsRUFBK0NHLEtBQS9DLENBQVA7QUFBK0Q7Ozt1Q0FFOUZWLE8sRUFBU0UsSSxFQUE0QjtBQUFBLFVBQXRCUSxLQUFzQix1RUFBZFosWUFBYztBQUFFLGFBQU9GLE1BQU1TLGtCQUFOLENBQXlCTCxPQUF6QixFQUFrQ0UsSUFBbEMsRUFBd0NRLEtBQXhDLENBQVA7QUFBd0Q7OztvQ0FFbEdWLE8sRUFBUztBQUM5QixVQUFJVyxZQUFZWCxPQUFoQjs7QUFFQVcsa0JBQVlmLE1BQU1nQixZQUFOLENBQW1CRCxTQUFuQixDQUFaLENBSDhCLENBR2M7O0FBRTVDLFVBQUlFLGtDQUFnQ0YsU0FBaEMsWUFBSjs7QUFFQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs7RUEzQndCakIsSzs7QUE4QjNCa0IsT0FBT0MsT0FBUCxHQUFpQmpCLFlBQWpCIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbicpO1xuXG5jbGFzcyBDb21tZW50VG9rZW4gZXh0ZW5kcyBUb2tlbiB7XG4gIG1lcmdlKGNvbW1lbnRUb2tlbikge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgY29tbWVudFRva2VuQ29udGVudCA9IGNvbW1lbnRUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ICs9IGNvbW1lbnRUb2tlbkNvbnRlbnQ7XG5cbiAgICBjb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpOyAgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENsYXNzKSB7IHJldHVybiBUb2tlbi5jbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENsYXNzKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MgPSBDb21tZW50VG9rZW4pIHsgcmV0dXJuIFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyk7IH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgaW5uZXJIVE1MID0gY29udGVudDtcblxuICAgIGlubmVySFRNTCA9IFRva2VuLnNhbml0aXNlSFRNTChpbm5lckhUTUwpOyAgLy8vXG5cbiAgICB2YXIgaHRtbCA9IGA8c3BhbiBjbGFzcz1cImNvbW1lbnRcIj4ke2lubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VuO1xuIl19