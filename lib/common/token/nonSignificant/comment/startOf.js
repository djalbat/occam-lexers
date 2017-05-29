'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var StartOfCommentToken = function (_CommentToken) {
  _inherits(StartOfCommentToken, _CommentToken);

  function StartOfCommentToken() {
    _classCallCheck(this, StartOfCommentToken);

    return _possibleConstructorReturn(this, (StartOfCommentToken.__proto__ || Object.getPrototypeOf(StartOfCommentToken)).apply(this, arguments));
  }

  _createClass(StartOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(this, startPosition, endPosition, StartOfCommentToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      return CommentToken.fromContentAndLine(content, line, StartOfCommentToken);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var startOfCommentToken = null;

      var matches = content.match(/^\/\*/);

      if (matches) {
        var firstMatch = first(matches);

        content = firstMatch; ///

        startOfCommentToken = StartOfCommentToken.fromContentAndLine(content, line);
      }

      return startOfCommentToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zdGFydE9mLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRUb2tlbiIsInJlcXVpcmUiLCJTdGFydE9mQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJjb250ZW50IiwibGluZSIsImZyb21Db250ZW50QW5kTGluZSIsInN0YXJ0T2ZDb21tZW50VG9rZW4iLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJwb3NpdGlvbiIsInNlYXJjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLFlBQVIsQ0FBckI7O0lBRU1DLG1COzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxhQUFPSixhQUFhSyxLQUFiLENBQW1CLElBQW5CLEVBQXlCRixhQUF6QixFQUF3Q0MsV0FBeEMsRUFBcURGLG1CQUFyRCxDQUFQO0FBQW1GOzs7dUNBRTdGSSxPLEVBQVNDLEksRUFBTTtBQUFFLGFBQU9QLGFBQWFRLGtCQUFiLENBQWdDRixPQUFoQyxFQUF5Q0MsSUFBekMsRUFBK0NMLG1CQUEvQyxDQUFQO0FBQTZFOzs7NkNBRXhGSSxPLEVBQVNDLEksRUFBTTtBQUM3QyxVQUFJRSxzQkFBc0IsSUFBMUI7O0FBRUEsVUFBTUMsVUFBVUosUUFBUUssS0FBUixDQUFjLE9BQWQsQ0FBaEI7O0FBRUEsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBTUUsYUFBYUMsTUFBTUgsT0FBTixDQUFuQjs7QUFFQUosa0JBQVVNLFVBQVYsQ0FIVyxDQUdXOztBQUV0QkgsOEJBQXNCUCxvQkFBb0JNLGtCQUFwQixDQUF1Q0YsT0FBdkMsRUFBZ0RDLElBQWhELENBQXRCO0FBQ0Q7O0FBRUQsYUFBT0UsbUJBQVA7QUFDRDs7OzBDQUU0QkgsTyxFQUFTO0FBQ3BDLFVBQU1RLFdBQVdSLFFBQVFTLE1BQVIsQ0FBZSxNQUFmLENBQWpCOztBQUVBLGFBQU9ELFFBQVA7QUFDRDs7OztFQXpCK0JkLFk7O0FBNEJsQ2dCLE9BQU9DLE9BQVAsR0FBaUJmLG1CQUFqQjs7QUFFQSxTQUFTVyxLQUFULENBQWVLLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJzdGFydE9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIFN0YXJ0T2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBTdGFydE9mQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkgeyByZXR1cm4gQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBTdGFydE9mQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCBzdGFydE9mQ29tbWVudFRva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXlxcL1xcKi8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdGFydE9mQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXFwvXFwqLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFydE9mQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==