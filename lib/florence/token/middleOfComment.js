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

  _createClass(MiddleOfCommentToken, null, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9taWRkbGVPZkNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIk1pZGRsZU9mQ29tbWVudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCIsIm1pZGRsZU9mQ29tbWVudFRva2VuQ29udGVudCIsInN1YnN0cmluZyIsIm1pZGRsZU9mQ29tbWVudFRva2VuIiwiZnJvbUNvbnRlbnRBbmRMaW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLDRCQUFSLENBQW5COztJQUVNQyxvQjs7Ozs7Ozs7Ozs7dUNBQ3NCQyxPLEVBQVNDLEksRUFBTUMsMEIsRUFBNEI7QUFDbkUsVUFBSUMsOEJBQThCSCxRQUFRSSxTQUFSLENBQWtCLENBQWxCLEVBQXFCRiwwQkFBckIsQ0FBbEM7O0FBRUFGLGdCQUFVRywyQkFBVixDQUhtRSxDQUczQjs7QUFFeEMsVUFBSUUsdUJBQXVCUixhQUFhUyxrQkFBYixDQUFnQ04sT0FBaEMsRUFBeUNDLElBQXpDLEVBQStDRixvQkFBL0MsQ0FBM0I7O0FBRUEsYUFBT00sb0JBQVA7QUFDRDs7OztFQVRnQ1IsWTs7QUFZbkNVLE9BQU9DLE9BQVAsR0FBaUJULG9CQUFqQiIsImZpbGUiOiJtaWRkbGVPZkNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4vY29tbWVudCcpO1xuXG5jbGFzcyBNaWRkbGVPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpIHtcbiAgICB2YXIgbWlkZGxlT2ZDb21tZW50VG9rZW5Db250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xuXG4gICAgY29udGVudCA9IG1pZGRsZU9mQ29tbWVudFRva2VuQ29udGVudDsgIC8vL1xuXG4gICAgdmFyIG1pZGRsZU9mQ29tbWVudFRva2VuID0gQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBNaWRkbGVPZkNvbW1lbnRUb2tlbik7XG5cbiAgICByZXR1cm4gbWlkZGxlT2ZDb21tZW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNaWRkbGVPZkNvbW1lbnRUb2tlbjtcbiJdfQ==