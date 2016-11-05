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

  _createClass(EndOfCommentToken, [{
    key: 'clone',
    value: function clone() {
      var content = this.getContent(),
          line = this.getLine(),
          endOfCommentToken = new EndOfCommentToken(content, line);

      return endOfCommentToken;
    }
  }], [{
    key: 'position',
    value: function position(content) {
      var position = content.search(/\*\//);

      return position;
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content, line) {
      var endOfCommentToken = null,
          matches = content.match(/^\*\//);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        endOfCommentToken = new EndOfCommentToken(content, line);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9lbmRPZkNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIkVuZE9mQ29tbWVudFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsaW5lIiwiZ2V0TGluZSIsImVuZE9mQ29tbWVudFRva2VuIiwicG9zaXRpb24iLCJzZWFyY2giLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSw0QkFBUixDQUFuQjs7SUFFTUMsaUI7Ozs7Ozs7Ozs7OzRCQUNJO0FBQ04sVUFBSUMsVUFBVSxLQUFLQyxVQUFMLEVBQWQ7QUFBQSxVQUNJQyxPQUFPLEtBQUtDLE9BQUwsRUFEWDtBQUFBLFVBRUlDLG9CQUFvQixJQUFJTCxpQkFBSixDQUFzQkMsT0FBdEIsRUFBK0JFLElBQS9CLENBRnhCOztBQUlBLGFBQU9FLGlCQUFQO0FBQ0Q7Ozs2QkFFZUosTyxFQUFTO0FBQ3ZCLFVBQUlLLFdBQVdMLFFBQVFNLE1BQVIsQ0FBZSxNQUFmLENBQWY7O0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7Z0NBRWtCTCxPLEVBQVNFLEksRUFBTTtBQUNoQyxVQUFJRSxvQkFBb0IsSUFBeEI7QUFBQSxVQUNJRyxVQUFVUCxRQUFRUSxLQUFSLENBQWMsT0FBZCxDQURkOztBQUdBLFVBQUlELE9BQUosRUFBYTtBQUNYLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7O0FBRUFQLGtCQUFVUyxVQUFWLENBSFcsQ0FHVzs7QUFFdEJMLDRCQUFvQixJQUFJTCxpQkFBSixDQUFzQkMsT0FBdEIsRUFBK0JFLElBQS9CLENBQXBCO0FBQ0Q7O0FBRUQsYUFBT0UsaUJBQVA7QUFDRDs7OztFQTVCNkJQLFk7O0FBK0JoQ2MsT0FBT0MsT0FBUCxHQUFpQmIsaUJBQWpCOztBQUVBLFNBQVNXLEtBQVQsQ0FBZUcsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImVuZE9mQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbi9jb21tZW50Jyk7XG5cbmNsYXNzIEVuZE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICBlbmRPZkNvbW1lbnRUb2tlbiA9IG5ldyBFbmRPZkNvbW1lbnRUb2tlbihjb250ZW50LCBsaW5lKTtcblxuICAgIHJldHVybiBlbmRPZkNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbihjb250ZW50KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1xcKlxcLy8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgZW5kT2ZDb21tZW50VG9rZW4gPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXlxcKlxcLy8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgZW5kT2ZDb21tZW50VG9rZW4gPSBuZXcgRW5kT2ZDb21tZW50VG9rZW4oY29udGVudCwgbGluZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mQ29tbWVudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZDb21tZW50VG9rZW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19