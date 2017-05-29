'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('../../../util'),
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
      var sanitisedContent = util.sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      html = '<span class="comment">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return CommentToken;
}(NonSignificantToken);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJDb21tZW50VG9rZW4iLCJjb21tZW50VG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxpbmUiLCJnZXRMaW5lIiwiY29tbWVudFRva2VuQ29udGVudCIsImZyb21Db250ZW50QW5kTGluZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNsb25lIiwidG9rZW4iLCJDbGFzcyIsInNhbml0aXNlZENvbnRlbnQiLCJzYW5pdGlzZUNvbnRlbnQiLCJpbm5lckhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLGVBQVIsQ0FBYjtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSxtQkFBUixDQUQ1Qjs7SUFHTUUsWTs7Ozs7Ozs7Ozs7MEJBQ0VDLFksRUFBYztBQUNsQixVQUFJQyxVQUFVLEtBQUtDLFVBQUwsRUFBZDs7QUFFQSxVQUFNQyxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01DLHNCQUFzQkwsYUFBYUUsVUFBYixFQUQ1Qjs7QUFHQUQsaUJBQVdJLG1CQUFYOztBQUVBTCxxQkFBZUQsYUFBYU8sa0JBQWIsQ0FBZ0NMLE9BQWhDLEVBQXlDRSxJQUF6QyxDQUFmLENBUmtCLENBUThDOztBQUVoRSxhQUFPSCxZQUFQO0FBQ0Q7OzswQkFFS08sYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPVCxhQUFhVSxLQUFiLENBQW1CLElBQW5CLEVBQXlCRixhQUF6QixFQUF3Q0MsV0FBeEMsRUFBcURULFlBQXJELENBQVA7QUFBNEU7OzswQkFFbkdXLEssRUFBT0gsYSxFQUFlQyxXLEVBQW1DO0FBQUEsVUFBdEJHLEtBQXNCLHVFQUFkWixZQUFjO0FBQUUsYUFBT0Qsb0JBQW9CVyxLQUFwQixDQUEwQkMsS0FBMUIsRUFBaUNILGFBQWpDLEVBQWdEQyxXQUFoRCxFQUE2REcsS0FBN0QsQ0FBUDtBQUE0RTs7O3VDQUUxSFYsTyxFQUFTRSxJLEVBQTRCO0FBQUEsVUFBdEJRLEtBQXNCLHVFQUFkWixZQUFjO0FBQUUsYUFBT0Qsb0JBQW9CUSxrQkFBcEIsQ0FBdUNMLE9BQXZDLEVBQWdERSxJQUFoRCxFQUFzRFEsS0FBdEQsQ0FBUDtBQUFzRTs7O29DQUVoSFYsTyxFQUFTO0FBQzlCLFVBQU1XLG1CQUFtQmhCLEtBQUtpQixlQUFMLENBQXFCWixPQUFyQixDQUF6QjtBQUFBLFVBQ01hLFlBQVlGLGdCQURsQjtBQUFBLFVBQ29DO0FBQzlCRyx3Q0FBZ0NELFNBQWhDLFlBRk47O0FBSUEsYUFBT0MsSUFBUDtBQUNEOzs7O0VBMUJ3QmpCLG1COztBQTZCM0JrQixPQUFPQyxPQUFQLEdBQWlCbEIsWUFBakIiLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwnKSxcbiAgICAgIE5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9ub25TaWduaWZpY2FudCcpO1xuXG5jbGFzcyBDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgbWVyZ2UoY29tbWVudFRva2VuKSB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICBcbiAgICBjb25zdCBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgICAgY29tbWVudFRva2VuQ29udGVudCA9IGNvbW1lbnRUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ICs9IGNvbW1lbnRUb2tlbkNvbnRlbnQ7XG5cbiAgICBjb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpOyAgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENsYXNzID0gQ29tbWVudFRva2VuKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ2xhc3MpIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzID0gQ29tbWVudFRva2VuKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyk7IH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdXRpbC5zYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cImNvbW1lbnRcIj4ke2lubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VuO1xuIl19