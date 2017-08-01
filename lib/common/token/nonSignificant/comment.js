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
    value: function fromContentAndLine(Class, content, line) {
      if (line === undefined) {
        line = content;
        content = Class;
        Class = CommentToken;
      }

      var sanitisedContent = tokenUtil.sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      html = '<span class="comment">' + innerHTML + '</span>',
          commentToken = new Class(content, line, html);

      return commentToken;
    }
  }]);

  return CommentToken;
}(NonSignificantToken);

module.exports = CommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC5qcyJdLCJuYW1lcyI6WyJ0b2tlblV0aWwiLCJyZXF1aXJlIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkNvbW1lbnRUb2tlbiIsImNvbW1lbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGluZSIsImdldExpbmUiLCJjb21tZW50VG9rZW5Db250ZW50IiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJDbGFzcyIsInRva2VuIiwidW5kZWZpbmVkIiwic2FuaXRpc2VkQ29udGVudCIsInNhbml0aXNlQ29udGVudCIsImlubmVySFRNTCIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEscUJBQVIsQ0FBbEI7QUFBQSxJQUNNQyxzQkFBc0JELFFBQVEsbUJBQVIsQ0FENUI7O0lBR01FLFk7Ozs7Ozs7Ozs7OzBCQUNFQyxZLEVBQWM7QUFDbEIsVUFBSUMsVUFBVSxLQUFLQyxVQUFMLEVBQWQ7O0FBRUEsVUFBTUMsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxzQkFBc0JMLGFBQWFFLFVBQWIsRUFENUI7O0FBR0FELGlCQUFXSSxtQkFBWDs7QUFFQUwscUJBQWVELGFBQWFPLGtCQUFiLENBQWdDTCxPQUFoQyxFQUF5Q0UsSUFBekMsQ0FBZixDQVJrQixDQVE4Qzs7QUFFaEUsYUFBT0gsWUFBUDtBQUNEOzs7MEJBRUtPLGEsRUFBZUMsVyxFQUFhO0FBQUUsYUFBT1QsYUFBYVUsS0FBYixDQUFtQlYsWUFBbkIsRUFBaUMsSUFBakMsRUFBdUNRLGFBQXZDLEVBQXNEQyxXQUF0RCxDQUFQO0FBQTRFOzs7NEJBRTFDO0FBQUEsVUFBekRFLEtBQXlELHVFQUFqRFgsWUFBaUQ7QUFBQSxVQUFuQ1ksS0FBbUM7QUFBQSxVQUE1QkosYUFBNEI7QUFBQSxVQUFiQyxXQUFhO0FBQUUsYUFBT1Ysb0JBQW9CVyxLQUFwQixDQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDSixhQUF4QyxFQUF1REMsV0FBdkQsQ0FBUDtBQUE0RTs7O3VDQUUxSEUsSyxFQUFPVCxPLEVBQVNFLEksRUFBTTtBQUM5QyxVQUFJQSxTQUFTUyxTQUFiLEVBQXdCO0FBQ3RCVCxlQUFPRixPQUFQO0FBQ0FBLGtCQUFVUyxLQUFWO0FBQ0FBLGdCQUFRWCxZQUFSO0FBQ0Q7O0FBRUQsVUFBTWMsbUJBQW1CakIsVUFBVWtCLGVBQVYsQ0FBMEJiLE9BQTFCLENBQXpCO0FBQUEsVUFDTWMsWUFBWUYsZ0JBRGxCO0FBQUEsVUFDb0M7QUFDOUJHLHdDQUFnQ0QsU0FBaEMsWUFGTjtBQUFBLFVBR01mLGVBQWUsSUFBSVUsS0FBSixDQUFVVCxPQUFWLEVBQW1CRSxJQUFuQixFQUF5QmEsSUFBekIsQ0FIckI7O0FBS0EsYUFBT2hCLFlBQVA7QUFDRDs7OztFQS9Cd0JGLG1COztBQWtDM0JtQixPQUFPQyxPQUFQLEdBQWlCbkIsWUFBakIiLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdG9rZW5VdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC90b2tlbicpLFxuICAgICAgTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL25vblNpZ25pZmljYW50Jyk7XG5cbmNsYXNzIENvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBtZXJnZShjb21tZW50VG9rZW4pIHtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIFxuICAgIGNvbnN0IGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgICBjb21tZW50VG9rZW5Db250ZW50ID0gY29tbWVudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgKz0gY29tbWVudFRva2VuQ29udGVudDtcblxuICAgIGNvbW1lbnRUb2tlbiA9IENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7ICAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKENvbW1lbnRUb2tlbiwgdGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzID0gQ29tbWVudFRva2VuLCB0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUoQ2xhc3MsIHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUpIHtcbiAgICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsaW5lID0gY29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBDbGFzcztcbiAgICAgIENsYXNzID0gQ29tbWVudFRva2VuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdG9rZW5VdGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiY29tbWVudFwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sKTtcblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW47XG4iXX0=