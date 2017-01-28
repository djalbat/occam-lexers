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
    key: 'toPosition',
    value: function toPosition(position) {
      return CommentToken.toPosition(this, position, MiddleOfCommentToken);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      return CommentToken.fromPosition(this, position, MiddleOfCommentToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line, middleOfCommentTokenLength) {
      var middleOfCommentTokenContent = content.substring(0, middleOfCommentTokenLength);

      content = middleOfCommentTokenContent; ///

      var middleOfCommentToken = CommentToken.fromContentAndLine(content, line, MiddleOfCommentToken);

      return middleOfCommentToken;
    }
  }]);

  return MiddleOfCommentToken;
}(CommentToken);

module.exports = MiddleOfCommentToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9taWRkbGVPZkNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIk1pZGRsZU9mQ29tbWVudFRva2VuIiwicG9zaXRpb24iLCJ0b1Bvc2l0aW9uIiwiZnJvbVBvc2l0aW9uIiwiY29udGVudCIsImxpbmUiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCIsIm1pZGRsZU9mQ29tbWVudFRva2VuQ29udGVudCIsInN1YnN0cmluZyIsIm1pZGRsZU9mQ29tbWVudFRva2VuIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLDRCQUFSLENBQW5COztJQUVNQyxvQjs7Ozs7Ozs7Ozs7K0JBQ09DLFEsRUFBVTtBQUFFLGFBQU9ILGFBQWFJLFVBQWIsQ0FBd0IsSUFBeEIsRUFBOEJELFFBQTlCLEVBQXdDRCxvQkFBeEMsQ0FBUDtBQUFzRTs7O2lDQUVoRkMsUSxFQUFVO0FBQUUsYUFBT0gsYUFBYUssWUFBYixDQUEwQixJQUExQixFQUFnQ0YsUUFBaEMsRUFBMENELG9CQUExQyxDQUFQO0FBQXdFOzs7dUNBRXZFSSxPLEVBQVNDLEksRUFBTUMsMEIsRUFBNEI7QUFDbkUsVUFBSUMsOEJBQThCSCxRQUFRSSxTQUFSLENBQWtCLENBQWxCLEVBQXFCRiwwQkFBckIsQ0FBbEM7O0FBRUFGLGdCQUFVRywyQkFBVixDQUhtRSxDQUczQjs7QUFFeEMsVUFBSUUsdUJBQXVCWCxhQUFhWSxrQkFBYixDQUFnQ04sT0FBaEMsRUFBeUNDLElBQXpDLEVBQStDTCxvQkFBL0MsQ0FBM0I7O0FBRUEsYUFBT1Msb0JBQVA7QUFDRDs7OztFQWJnQ1gsWTs7QUFnQm5DYSxPQUFPQyxPQUFQLEdBQWlCWixvQkFBakIiLCJmaWxlIjoibWlkZGxlT2ZDb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuL2NvbW1lbnQnKTtcblxuY2xhc3MgTWlkZGxlT2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICB0b1Bvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4udG9Qb3NpdGlvbih0aGlzLCBwb3NpdGlvbiwgTWlkZGxlT2ZDb21tZW50VG9rZW4pIH1cblxuICBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tUG9zaXRpb24odGhpcywgcG9zaXRpb24sIE1pZGRsZU9mQ29tbWVudFRva2VuKSB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCkge1xuICAgIHZhciBtaWRkbGVPZkNvbW1lbnRUb2tlbkNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCk7XG5cbiAgICBjb250ZW50ID0gbWlkZGxlT2ZDb21tZW50VG9rZW5Db250ZW50OyAgLy8vXG5cbiAgICB2YXIgbWlkZGxlT2ZDb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIE1pZGRsZU9mQ29tbWVudFRva2VuKTtcblxuICAgIHJldHVybiBtaWRkbGVPZkNvbW1lbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pZGRsZU9mQ29tbWVudFRva2VuO1xuIl19