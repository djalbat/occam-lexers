'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/comment');

var EndOfCommentToken = function (_CommentToken) {
  _inherits(EndOfCommentToken, _CommentToken);

  function EndOfCommentToken() {
    _classCallCheck(this, EndOfCommentToken);

    return _possibleConstructorReturn(this, (EndOfCommentToken.__proto__ || Object.getPrototypeOf(EndOfCommentToken)).apply(this, arguments));
  }

  _createClass(EndOfCommentToken, null, [{
    key: 'position',
    value: function position(content) {
      var position = content.search(/\*\//);

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content, line) {
      var endOfCommentToken = null,
          matches = content.match(/^(\*\/)/);

      if (matches) {
        var firstMatch = first(matches),
            str = firstMatch; ///

        endOfCommentToken = new EndOfCommentToken(str, line);
      }

      return endOfCommentToken;
    }
  }]);

  return EndOfCommentToken;
}(CommentToken);

module.exports = EndOfCommentToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9lbmRPZkNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIkVuZE9mQ29tbWVudFRva2VuIiwiY29udGVudCIsInBvc2l0aW9uIiwic2VhcmNoIiwibGluZSIsImVuZE9mQ29tbWVudFRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0Iiwic3RyIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsNEJBQVIsQ0FBbkI7O0lBRU1DLGlCOzs7Ozs7Ozs7Ozs2QkFDWUMsTyxFQUFTO0FBQ3ZCLFVBQUlDLFdBQVdELFFBQVFFLE1BQVIsQ0FBZSxNQUFmLENBQWY7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7Z0NBRWtCRCxPLEVBQVNHLEksRUFBTTtBQUNoQyxVQUFJQyxvQkFBb0IsSUFBeEI7QUFBQSxVQUNJQyxVQUFVTCxRQUFRTSxLQUFSLENBQWMsU0FBZCxDQURkOztBQUdBLFVBQUlELE9BQUosRUFBYTtBQUNYLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxZQUNJSSxNQUFNRixVQURWLENBRFcsQ0FFVzs7QUFFdEJILDRCQUFvQixJQUFJTCxpQkFBSixDQUFzQlUsR0FBdEIsRUFBMkJOLElBQTNCLENBQXBCO0FBQ0Q7O0FBRUQsYUFBT0MsaUJBQVA7QUFDRDs7OztFQW5CNkJQLFk7O0FBc0JoQ2EsT0FBT0MsT0FBUCxHQUFpQlosaUJBQWpCOztBQUVBLFNBQVNTLEtBQVQsQ0FBZUksS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImVuZE9mQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbi9jb21tZW50Jyk7XG5cbmNsYXNzIEVuZE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgc3RhdGljIHBvc2l0aW9uKGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXFwqXFwvLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGluZSkge1xuICAgIHZhciBlbmRPZkNvbW1lbnRUb2tlbiA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eKFxcKlxcLykvKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgIHN0ciA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBlbmRPZkNvbW1lbnRUb2tlbiA9IG5ldyBFbmRPZkNvbW1lbnRUb2tlbihzdHIsIGxpbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkNvbW1lbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==