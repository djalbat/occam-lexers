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
      return CommentToken.clone(CommentToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CommentToken;
      var token = arguments[1];
      var startPosition = arguments[2];
      var endPosition = arguments[3];
      return NonSignificantToken.clone(Class, token, startPosition, endPosition);
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CommentToken;
      var content = arguments[1];
      var line = arguments[2];
      return NonSignificantToken.fromContentAndLine(Class, content, line);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC5qcyJdLCJuYW1lcyI6WyJ0b2tlblV0aWwiLCJyZXF1aXJlIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGluZSIsImdldExpbmUiLCJjb21tZW50VG9rZW5Db250ZW50IiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJDbGFzcyIsInRva2VuIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsImlubmVySFRNTCIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEscUJBQVIsQ0FBbEI7QUFBQSxJQUNNQyxzQkFBc0JELFFBQVEsbUJBQVIsQ0FENUI7O0lBR01FLFk7Ozs7Ozs7Ozs7OzBCQUNFQyxZLEVBQWM7QUFDbEIsVUFBSUMsVUFBVSxLQUFLQyxVQUFMLEVBQWQ7O0FBRUEsVUFBTUMsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxzQkFBc0JMLGFBQWFFLFVBQWIsRUFENUI7O0FBR0FELGlCQUFXSSxtQkFBWDs7QUFFQUwscUJBQWVELGFBQWFPLGtCQUFiLENBQWdDTCxPQUFoQyxFQUF5Q0UsSUFBekMsQ0FBZixDQVJrQixDQVE4Qzs7QUFFaEUsYUFBT0gsWUFBUDtBQUNEOzs7MEJBRUtPLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT1QsYUFBYVUsS0FBYixDQUFtQlYsWUFBbkIsRUFBaUMsSUFBakMsRUFBdUNRLGFBQXZDLEVBQXNEQyxXQUF0RCxDQUFQO0FBQTRFOzs7NEJBRTFDO0FBQUEsVUFBekRFLEtBQXlELHVFQUFqRFgsWUFBaUQ7QUFBQSxVQUFuQ1ksS0FBbUM7QUFBQSxVQUE1QkosYUFBNEI7QUFBQSxVQUFiQyxXQUFhO0FBQUUsYUFBT1Ysb0JBQW9CVyxLQUFwQixDQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDSixhQUF4QyxFQUF1REMsV0FBdkQsQ0FBUDtBQUE0RTs7O3lDQUVyRjtBQUFBLFVBQXJDRSxLQUFxQyx1RUFBN0JYLFlBQTZCO0FBQUEsVUFBZkUsT0FBZTtBQUFBLFVBQU5FLElBQU07QUFBRSxhQUFPTCxvQkFBb0JRLGtCQUFwQixDQUF1Q0ksS0FBdkMsRUFBOENULE9BQTlDLEVBQXVERSxJQUF2RCxDQUFQO0FBQXNFOzs7b0NBRWhIRixPLEVBQVM7QUFDOUIsVUFBTVcsbUJBQW1CaEIsVUFBVWlCLGVBQVYsQ0FBMEJaLE9BQTFCLENBQXpCO0FBQUEsVUFDTWEsWUFBWUYsZ0JBRGxCO0FBQUEsVUFDb0M7QUFDOUJHLHdDQUFnQ0QsU0FBaEMsWUFGTjs7QUFJQSxhQUFPQyxJQUFQO0FBQ0Q7Ozs7RUExQndCakIsbUI7O0FBNkIzQmtCLE9BQU9DLE9BQVAsR0FBaUJsQixZQUFqQiIsImZpbGUiOiJjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0b2tlblV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL3Rva2VuJyksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIG1lcmdlKGNvbW1lbnRUb2tlbikge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgXG4gICAgY29uc3QgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbkNvbnRlbnQgPSBjb21tZW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCArPSBjb21tZW50VG9rZW5Db250ZW50O1xuXG4gICAgY29tbWVudFRva2VuID0gQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4uY2xvbmUoQ29tbWVudFRva2VuLCB0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MgPSBDb21tZW50VG9rZW4sIHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5jbG9uZShDbGFzcywgdG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShDbGFzcyA9IENvbW1lbnRUb2tlbiwgY29udGVudCwgbGluZSkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUpOyB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHRva2VuVXRpbC5zYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cImNvbW1lbnRcIj4ke2lubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VuO1xuIl19