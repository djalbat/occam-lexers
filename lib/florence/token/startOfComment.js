'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/comment');

var StartOfCommentToken = function (_CommentToken) {
  _inherits(StartOfCommentToken, _CommentToken);

  function StartOfCommentToken() {
    _classCallCheck(this, StartOfCommentToken);

    return _possibleConstructorReturn(this, (StartOfCommentToken.__proto__ || Object.getPrototypeOf(StartOfCommentToken)).apply(this, arguments));
  }

  _createClass(StartOfCommentToken, [{
    key: 'toPosition',
    value: function toPosition(position) {
      return CommentToken.toPosition(this, position, StartOfCommentToken);
    }
  }, {
    key: 'fromPosition',
    value: function fromPosition(position) {
      return CommentToken.fromPosition(this, position, StartOfCommentToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var startOfCommentToken = null,
          matches = content.match(/^\/\*/);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        startOfCommentToken = CommentToken.fromContentAndLine(content, line, StartOfCommentToken);
      }

      return startOfCommentToken;
    }
  }, {
    key: 'position',
    value: function position(content) {
      var position = content.search(/\/\*/);

      return position;
    }
  }]);

  return StartOfCommentToken;
}(CommentToken);

module.exports = StartOfCommentToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9zdGFydE9mQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiU3RhcnRPZkNvbW1lbnRUb2tlbiIsInBvc2l0aW9uIiwidG9Qb3NpdGlvbiIsImZyb21Qb3NpdGlvbiIsImNvbnRlbnQiLCJsaW5lIiwic3RhcnRPZkNvbW1lbnRUb2tlbiIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsImZyb21Db250ZW50QW5kTGluZSIsInNlYXJjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLDRCQUFSLENBQW5COztJQUVNQyxtQjs7Ozs7Ozs7Ozs7K0JBQ09DLFEsRUFBVTtBQUFFLGFBQU9ILGFBQWFJLFVBQWIsQ0FBd0IsSUFBeEIsRUFBOEJELFFBQTlCLEVBQXdDRCxtQkFBeEMsQ0FBUDtBQUFxRTs7O2lDQUUvRUMsUSxFQUFVO0FBQUUsYUFBT0gsYUFBYUssWUFBYixDQUEwQixJQUExQixFQUFnQ0YsUUFBaEMsRUFBMENELG1CQUExQyxDQUFQO0FBQXVFOzs7dUNBRXRFSSxPLEVBQVNDLEksRUFBTTtBQUN2QyxVQUFJQyxzQkFBc0IsSUFBMUI7QUFBQSxVQUNJQyxVQUFVSCxRQUFRSSxLQUFSLENBQWMsT0FBZCxDQURkOztBQUdBLFVBQUlELE9BQUosRUFBYTtBQUNYLFlBQUlFLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7O0FBRUFILGtCQUFVSyxVQUFWLENBSFcsQ0FHVzs7QUFFdEJILDhCQUFzQlIsYUFBYWEsa0JBQWIsQ0FBZ0NQLE9BQWhDLEVBQXlDQyxJQUF6QyxFQUErQ0wsbUJBQS9DLENBQXRCO0FBQ0Q7O0FBRUQsYUFBT00sbUJBQVA7QUFDRDs7OzZCQUVlRixPLEVBQVM7QUFDdkIsVUFBSUgsV0FBV0csUUFBUVEsTUFBUixDQUFlLE1BQWYsQ0FBZjs7QUFFQSxhQUFPWCxRQUFQO0FBQ0Q7Ozs7RUF4QitCSCxZOztBQTJCbENlLE9BQU9DLE9BQVAsR0FBaUJkLG1CQUFqQjs7QUFFQSxTQUFTVSxLQUFULENBQWVLLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJzdGFydE9mQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbi9jb21tZW50Jyk7XG5cbmNsYXNzIFN0YXJ0T2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICB0b1Bvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4udG9Qb3NpdGlvbih0aGlzLCBwb3NpdGlvbiwgU3RhcnRPZkNvbW1lbnRUb2tlbikgfVxuXG4gIGZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmZyb21Qb3NpdGlvbih0aGlzLCBwb3NpdGlvbiwgU3RhcnRPZkNvbW1lbnRUb2tlbikgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIHZhciBzdGFydE9mQ29tbWVudFRva2VuID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL15cXC9cXCovKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIHN0YXJ0T2ZDb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFN0YXJ0T2ZDb21tZW50VG9rZW4pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RhcnRPZkNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbihjb250ZW50KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1xcL1xcKi8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhcnRPZkNvbW1lbnRUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=