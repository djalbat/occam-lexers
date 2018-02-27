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
      return _get(EndOfCommentToken.prototype.__proto__ || Object.getPrototypeOf(EndOfCommentToken.prototype), 'clone', this).call(this, startPosition, endPosition);
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

  return EndOfCommentToken;
}(CommentToken);

var regularExpression = /\*\//;

Object.assign(EndOfCommentToken, {
  regularExpression: regularExpression
});

module.exports = EndOfCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZi5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiRW5kT2ZDb21tZW50VG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwiZnJvbUNvbnRlbnQiLCJmcm9tV2l0aGluQ29udGVudCIsInBvc2l0aW9uV2l0aGluQ29udGVudCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsWUFBUixDQUFyQjs7SUFFTUMsaUI7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLHlJQUFtQkQsYUFBbkIsRUFBa0NDLFdBQWxDO0FBQWlEOzs7Z0NBRWxFQyxPLEVBQVM7QUFBRSxhQUFPTCxhQUFhTSxXQUFiLENBQXlCRCxPQUF6QixDQUFQO0FBQTJDOzs7c0NBRWhEQSxPLEVBQVM7QUFBRSxhQUFPTCxhQUFhTyxpQkFBYixDQUErQkYsT0FBL0IsQ0FBUDtBQUFpRDs7OzBDQUV4REEsTyxFQUFTO0FBQUUsYUFBT0wsYUFBYVEscUJBQWIsQ0FBbUNILE9BQW5DLENBQVA7QUFBcUQ7Ozs7RUFQL0RMLFk7O0FBVWhDLElBQU1TLG9CQUFvQixNQUExQjs7QUFFQUMsT0FBT0MsTUFBUCxDQUFjVCxpQkFBZCxFQUFpQztBQUMvQk8scUJBQW1CQTtBQURZLENBQWpDOztBQUlBRyxPQUFPQyxPQUFQLEdBQWlCWCxpQkFBakIiLCJmaWxlIjoiZW5kT2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1lbnQnKTtcblxuY2xhc3MgRW5kT2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChjb250ZW50KSB7IHJldHVybiBDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnQoY29udGVudCk7IH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7IH1cbn1cblxuY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSAvXFwqXFwvLztcblxuT2JqZWN0LmFzc2lnbihFbmRPZkNvbW1lbnRUb2tlbiwge1xuICByZWd1bGFyRXhwcmVzc2lvbjogcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mQ29tbWVudFRva2VuO1xuIl19