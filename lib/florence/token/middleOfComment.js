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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9taWRkbGVPZkNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIk1pZGRsZU9mQ29tbWVudFRva2VuIiwiY29udGVudCIsImxpbmUiLCJzdHJpbmciLCJtaWRkbGVPZkNvbW1lbnRUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSw0QkFBUixDQUFuQjs7SUFFTUMsb0I7Ozs7Ozs7Ozs7O2dDQUNlQyxPLEVBQVNDLEksRUFBTTtBQUNoQyxVQUFJQyxTQUFTRixPQUFiO0FBQUEsVUFBc0I7QUFDbEJHLDZCQUF1QixJQUFJSixvQkFBSixDQUF5QkcsTUFBekIsRUFBaUNELElBQWpDLENBRDNCOztBQUdBLGFBQU9FLG9CQUFQO0FBQ0Q7Ozs7RUFOZ0NOLFk7O0FBU25DTyxPQUFPQyxPQUFQLEdBQWlCTixvQkFBakIiLCJmaWxlIjoibWlkZGxlT2ZDb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuL2NvbW1lbnQnKTtcblxuY2xhc3MgTWlkZGxlT2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzdHJpbmcgPSBjb250ZW50LCAvLy9cbiAgICAgICAgbWlkZGxlT2ZDb21tZW50VG9rZW4gPSBuZXcgTWlkZGxlT2ZDb21tZW50VG9rZW4oc3RyaW5nLCBsaW5lKTtcblxuICAgIHJldHVybiBtaWRkbGVPZkNvbW1lbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pZGRsZU9mQ29tbWVudFRva2VuO1xuXG4iXX0=