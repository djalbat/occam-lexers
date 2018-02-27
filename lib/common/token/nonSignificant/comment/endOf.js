'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var EndOfCommentToken = function (_CommentToken) {
  _inherits(EndOfCommentToken, _CommentToken);

  function EndOfCommentToken() {
    _classCallCheck(this, EndOfCommentToken);

    return _possibleConstructorReturn(this, (EndOfCommentToken.__proto__ || Object.getPrototypeOf(EndOfCommentToken)).apply(this, arguments));
  }

  _createClass(EndOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(EndOfCommentToken.prototype.__proto__ || Object.getPrototypeOf(EndOfCommentToken.prototype), 'clone', this).call(this, EndOfCommentToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return CommentToken.fromContent(EndOfCommentToken, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return CommentToken.fromWithinContent(EndOfCommentToken, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return CommentToken.positionWithinContent(EndOfCommentToken, content);
    }
  }]);

  return EndOfCommentToken;
}(CommentToken);

var type = 'comment',
    regularExpression = /\*\//;

Object.assign(EndOfCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EndOfCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZi5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLFlBQVIsQ0FBckI7O0lBRU1DLGlCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSx5SUFBbUJGLGlCQUFuQixFQUFzQ0MsYUFBdEMsRUFBcURDLFdBQXJEO0FBQW9FOzs7Z0NBRXJGQyxPLEVBQVM7QUFBRSxhQUFPTCxhQUFhTSxXQUFiLENBQXlCSixpQkFBekIsRUFBNENHLE9BQTVDLENBQVA7QUFBOEQ7OztzQ0FFbkVBLE8sRUFBUztBQUFFLGFBQU9MLGFBQWFPLGlCQUFiLENBQStCTCxpQkFBL0IsRUFBa0RHLE9BQWxELENBQVA7QUFBb0U7OzswQ0FFM0VBLE8sRUFBUztBQUFFLGFBQU9MLGFBQWFRLHFCQUFiLENBQW1DTixpQkFBbkMsRUFBc0RHLE9BQXRELENBQVA7QUFBd0U7Ozs7RUFQbEZMLFk7O0FBVWhDLElBQU1TLE9BQU8sU0FBYjtBQUFBLElBQ01DLG9CQUFvQixNQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjVixpQkFBZCxFQUFpQztBQUMvQk8sUUFBTUEsSUFEeUI7QUFFL0JDLHFCQUFtQkE7QUFGWSxDQUFqQzs7QUFLQUcsT0FBT0MsT0FBUCxHQUFpQlosaUJBQWpCIiwiZmlsZSI6ImVuZE9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIEVuZE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gQ29tbWVudFRva2VuLmZyb21Db250ZW50KEVuZE9mQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoRW5kT2ZDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KEVuZE9mQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gJ2NvbW1lbnQnLFxuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXFwqXFwvLztcblxuT2JqZWN0LmFzc2lnbihFbmRPZkNvbW1lbnRUb2tlbiwge1xuICB0eXBlOiB0eXBlLFxuICByZWd1bGFyRXhwcmVzc2lvbjogcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mQ29tbWVudFRva2VuO1xuIl19