'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
      return _get(StartOfCommentToken.prototype.__proto__ || Object.getPrototypeOf(StartOfCommentToken.prototype), 'clone', this).call(this, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return CommentToken.fromContent(content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(content) {
      return CommentToken.fromWithinContent(content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      return CommentToken.positionWithinContent(content);
    }
  }]);

  return StartOfCommentToken;
}(CommentToken);

var regularExpression = /\/\*/;

Object.assign(StartOfCommentToken, {
  regularExpression: regularExpression
});

module.exports = StartOfCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zdGFydE9mLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRUb2tlbiIsInJlcXVpcmUiLCJTdGFydE9mQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY29udGVudCIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLFlBQVIsQ0FBckI7O0lBRU1DLG1COzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSw2SUFBbUJELGFBQW5CLEVBQWtDQyxXQUFsQztBQUFpRDs7O2dDQUVsRUMsTyxFQUFTO0FBQUUsYUFBT0wsYUFBYU0sV0FBYixDQUF5QkQsT0FBekIsQ0FBUDtBQUEyQzs7O3NDQUVoREEsTyxFQUFTO0FBQUUsYUFBT0wsYUFBYU8saUJBQWIsQ0FBK0JGLE9BQS9CLENBQVA7QUFBaUQ7OzswQ0FFeERBLE8sRUFBUztBQUFFLGFBQU9MLGFBQWFRLHFCQUFiLENBQW1DSCxPQUFuQyxDQUFQO0FBQXFEOzs7O0VBUDdETCxZOztBQVVsQyxJQUFNUyxvQkFBb0IsTUFBMUI7O0FBRUFDLE9BQU9DLE1BQVAsQ0FBY1QsbUJBQWQsRUFBbUM7QUFDakNPLHFCQUFtQkE7QUFEYyxDQUFuQzs7QUFJQUcsT0FBT0MsT0FBUCxHQUFpQlgsbUJBQWpCIiwiZmlsZSI6InN0YXJ0T2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1lbnQnKTtcblxuY2xhc3MgU3RhcnRPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudChjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTsgfVxufVxuXG5jb25zdCByZWd1bGFyRXhwcmVzc2lvbiA9IC9cXC9cXCovO1xuXG5PYmplY3QuYXNzaWduKFN0YXJ0T2ZDb21tZW50VG9rZW4sIHtcbiAgcmVndWxhckV4cHJlc3Npb246IHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFydE9mQ29tbWVudFRva2VuO1xuIl19