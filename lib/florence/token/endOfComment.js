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
    key: 'toPosition',
    value: function toPosition(position) {
      return CommentToken.toPosition(this, position, EndOfCommentToken);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      return CommentToken.fromPosition(this, position, EndOfCommentToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var endOfCommentToken = null,
          matches = content.match(/^\*\//);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        endOfCommentToken = CommentToken.fromContentAndLine(content, line, EndOfCommentToken);
      }

      return endOfCommentToken;
    }
  }, {
    key: 'position',
    value: function position(content) {
      var position = content.search(/\*\//);

      return position;
    }
  }]);

  return EndOfCommentToken;
}(CommentToken);

module.exports = EndOfCommentToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9lbmRPZkNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudFRva2VuIiwicmVxdWlyZSIsIkVuZE9mQ29tbWVudFRva2VuIiwicG9zaXRpb24iLCJ0b1Bvc2l0aW9uIiwiZnJvbVBvc2l0aW9uIiwiY29udGVudCIsImxpbmUiLCJlbmRPZkNvbW1lbnRUb2tlbiIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsImZyb21Db250ZW50QW5kTGluZSIsInNlYXJjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLDRCQUFSLENBQW5COztJQUVNQyxpQjs7Ozs7Ozs7Ozs7K0JBQ09DLFEsRUFBVTtBQUFFLGFBQU9ILGFBQWFJLFVBQWIsQ0FBd0IsSUFBeEIsRUFBOEJELFFBQTlCLEVBQXdDRCxpQkFBeEMsQ0FBUDtBQUFtRTs7O2lDQUU3RUMsUSxFQUFVO0FBQUUsYUFBT0gsYUFBYUssWUFBYixDQUEwQixJQUExQixFQUFnQ0YsUUFBaEMsRUFBMENELGlCQUExQyxDQUFQO0FBQXFFOzs7dUNBRXBFSSxPLEVBQVNDLEksRUFBTTtBQUN2QyxVQUFJQyxvQkFBb0IsSUFBeEI7QUFBQSxVQUNJQyxVQUFVSCxRQUFRSSxLQUFSLENBQWMsT0FBZCxDQURkOztBQUdBLFVBQUlELE9BQUosRUFBYTtBQUNYLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7O0FBRUFILGtCQUFVSyxVQUFWLENBSFcsQ0FHVzs7QUFFdEJILDRCQUFvQlIsYUFBYWEsa0JBQWIsQ0FBZ0NQLE9BQWhDLEVBQXlDQyxJQUF6QyxFQUErQ0wsaUJBQS9DLENBQXBCO0FBQ0Q7O0FBRUQsYUFBT00saUJBQVA7QUFDRDs7OzZCQUVlRixPLEVBQVM7QUFDdkIsVUFBSUgsV0FBV0csUUFBUVEsTUFBUixDQUFlLE1BQWYsQ0FBZjs7QUFFQSxhQUFPWCxRQUFQO0FBQ0Q7Ozs7RUF4QjZCSCxZOztBQTJCaENlLE9BQU9DLE9BQVAsR0FBaUJkLGlCQUFqQjs7QUFFQSxTQUFTVSxLQUFULENBQWVLLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJlbmRPZkNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4vY29tbWVudCcpO1xuXG5jbGFzcyBFbmRPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIHRvUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi50b1Bvc2l0aW9uKHRoaXMsIHBvc2l0aW9uLCBFbmRPZkNvbW1lbnRUb2tlbikgfVxuXG4gIGZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmZyb21Qb3NpdGlvbih0aGlzLCBwb3NpdGlvbiwgRW5kT2ZDb21tZW50VG9rZW4pIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICB2YXIgZW5kT2ZDb21tZW50VG9rZW4gPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXlxcKlxcLy8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgZW5kT2ZDb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIEVuZE9mQ29tbWVudFRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZDb21tZW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb24oY29udGVudCkge1xuICAgIHZhciBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9cXCpcXC8vKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==