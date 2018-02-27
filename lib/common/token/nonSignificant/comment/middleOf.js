'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var MiddleOfCommentToken = function (_CommentToken) {
  _inherits(MiddleOfCommentToken, _CommentToken);

  function MiddleOfCommentToken() {
    _classCallCheck(this, MiddleOfCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(MiddleOfCommentToken.prototype.__proto__ || Object.getPrototypeOf(MiddleOfCommentToken.prototype), 'clone', this).call(this, MiddleOfCommentToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content, length) {
      content = content.substr(0, length); ///

      var commentToken = CommentToken.fromContent(MiddleOfCommentToken, content),
          middleOfCommentToken = commentToken; ///

      return middleOfCommentToken;
    }
  }]);

  return MiddleOfCommentToken;
}(CommentToken);

var type = 'comment';

Object.assign(MiddleOfCommentToken, {
  type: type
});

module.exports = MiddleOfCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9taWRkbGVPZi5qcyJdLCJuYW1lcyI6WyJDb21tZW50VG9rZW4iLCJyZXF1aXJlIiwiTWlkZGxlT2ZDb21tZW50VG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJjb250ZW50IiwibGVuZ3RoIiwic3Vic3RyIiwiY29tbWVudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJtaWRkbGVPZkNvbW1lbnRUb2tlbiIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxZQUFSLENBQXJCOztJQUVNQyxvQjs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsK0lBQW1CRixvQkFBbkIsRUFBeUNDLGFBQXpDLEVBQXdEQyxXQUF4RDtBQUF1RTs7O2dDQUV4RkMsTyxFQUFTQyxNLEVBQVE7QUFDbENELGdCQUFVQSxRQUFRRSxNQUFSLENBQWUsQ0FBZixFQUFrQkQsTUFBbEIsQ0FBVixDQURrQyxDQUNJOztBQUV0QyxVQUFNRSxlQUFlUixhQUFhUyxXQUFiLENBQXlCUCxvQkFBekIsRUFBK0NHLE9BQS9DLENBQXJCO0FBQUEsVUFDTUssdUJBQXVCRixZQUQ3QixDQUhrQyxDQUlVOztBQUU1QyxhQUFPRSxvQkFBUDtBQUNEOzs7O0VBVmdDVixZOztBQWFuQyxJQUFNVyxPQUFPLFNBQWI7O0FBRUFDLE9BQU9DLE1BQVAsQ0FBY1gsb0JBQWQsRUFBb0M7QUFDbENTLFFBQU1BO0FBRDRCLENBQXBDOztBQUlBRyxPQUFPQyxPQUFQLEdBQWlCYixvQkFBakIiLCJmaWxlIjoibWlkZGxlT2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1lbnQnKTtcblxuY2xhc3MgTWlkZGxlT2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoTWlkZGxlT2ZDb21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsZW5ndGgpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHIoMCwgbGVuZ3RoKTsgIC8vL1xuXG4gICAgY29uc3QgY29tbWVudFRva2VuID0gQ29tbWVudFRva2VuLmZyb21Db250ZW50KE1pZGRsZU9mQ29tbWVudFRva2VuLCBjb250ZW50KSxcbiAgICAgICAgICBtaWRkbGVPZkNvbW1lbnRUb2tlbiA9IGNvbW1lbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIG1pZGRsZU9mQ29tbWVudFRva2VuO1xuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnY29tbWVudCc7XG5cbk9iamVjdC5hc3NpZ24oTWlkZGxlT2ZDb21tZW50VG9rZW4sIHtcbiAgdHlwZTogdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWlkZGxlT2ZDb21tZW50VG9rZW47XG4iXX0=