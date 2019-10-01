'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../common/types'),
    NonSignificantToken = require('../../../../common/token/nonSignificant');

var commentType = types.commentType;

var SingleLineCommentToken = function (_NonSignificantToken) {
  _inherits(SingleLineCommentToken, _NonSignificantToken);

  function SingleLineCommentToken() {
    _classCallCheck(this, SingleLineCommentToken);

    return _possibleConstructorReturn(this, (SingleLineCommentToken.__proto__ || Object.getPrototypeOf(SingleLineCommentToken)).apply(this, arguments));
  }

  _createClass(SingleLineCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(SingleLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(SingleLineCommentToken.prototype), 'clone', this).call(this, SingleLineCommentToken, startPosition, endPosition);
    }
  }, {
    key: 'isInComment',
    value: function isInComment() {
      var inComment = false;

      return inComment;
    }
  }], [{
    key: 'match',
    value: function match(content) {
      return NonSignificantToken.match(SingleLineCommentToken, content);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(SingleLineCommentToken, content);
    }
  }]);

  return SingleLineCommentToken;
}(NonSignificantToken);

var type = commentType,
    regularExpression = /^#.*/;

Object.assign(SingleLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = SingleLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmUuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImNvbW1lbnRUeXBlIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImluQ29tbWVudCIsImNvbnRlbnQiLCJtYXRjaCIsImZyb21Db250ZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsMEJBQVIsQ0FBZDtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSx5Q0FBUixDQUQ1Qjs7SUFHUUUsVyxHQUFnQkgsSyxDQUFoQkcsVzs7SUFFRkMsc0I7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWVDLFcsRUFBYTtBQUFFLG1KQUFtQkYsc0JBQW5CLEVBQTJDQyxhQUEzQyxFQUEwREMsV0FBMUQ7QUFBeUU7OztrQ0FFL0Y7QUFDWixVQUFNQyxZQUFZLEtBQWxCOztBQUVBLGFBQU9BLFNBQVA7QUFDRDs7OzBCQUVZQyxPLEVBQVM7QUFBRSxhQUFPTixvQkFBb0JPLEtBQXBCLENBQTBCTCxzQkFBMUIsRUFBa0RJLE9BQWxELENBQVA7QUFBb0U7OztnQ0FFekVBLE8sRUFBUztBQUFFLGFBQU9OLG9CQUFvQlEsV0FBcEIsQ0FBZ0NOLHNCQUFoQyxFQUF3REksT0FBeEQsQ0FBUDtBQUEwRTs7OztFQVhyRU4sbUI7O0FBY3JDLElBQU1TLE9BQU9SLFdBQWI7QUFBQSxJQUNNUyxvQkFBb0IsTUFEMUI7O0FBR0FDLE9BQU9DLE1BQVAsQ0FBY1Ysc0JBQWQsRUFBc0M7QUFDcENPLFlBRG9DO0FBRXBDQztBQUZvQyxDQUF0Qzs7QUFLQUcsT0FBT0MsT0FBUCxHQUFpQlosc0JBQWpCIiwiZmlsZSI6InNpbmdsZUxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vY29tbW9uL3R5cGVzJyksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50Jyk7XG5cbmNvbnN0IHsgY29tbWVudFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBTaW5nbGVMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc0luQ29tbWVudCgpIHtcbiAgICBjb25zdCBpbkNvbW1lbnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KFNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG59XG5cbmNvbnN0IHR5cGUgPSBjb21tZW50VHlwZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL14jLiovO1xuXG5PYmplY3QuYXNzaWduKFNpbmdsZUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbmdsZUxpbmVDb21tZW50VG9rZW47XG4iXX0=