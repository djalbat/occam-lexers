'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    NonSignificantToken = require('../../../../token/nonSignificant');

var commentType = types.commentType;

var MiddleOfMultiLineCommentToken = function (_NonSignificantToken) {
  _inherits(MiddleOfMultiLineCommentToken, _NonSignificantToken);

  function MiddleOfMultiLineCommentToken() {
    _classCallCheck(this, MiddleOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(MiddleOfMultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(MiddleOfMultiLineCommentToken.prototype), 'clone', this).call(this, MiddleOfMultiLineCommentToken, startPosition, endPosition);
    }
  }, {
    key: 'isInComment',
    value: function isInComment() {
      var inComment = true;

      return inComment;
    }
  }], [{
    key: 'match',
    value: function match(content) {
      return NonSignificantToken.match(MiddleOfMultiLineCommentToken, content);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(MiddleOfMultiLineCommentToken, content);
    }
  }]);

  return MiddleOfMultiLineCommentToken;
}(NonSignificantToken);

var type = commentType,
    ///
regularExpression = /^.*/;

Object.assign(MiddleOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = MiddleOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImNvbW1lbnRUeXBlIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJpbkNvbW1lbnQiLCJjb250ZW50IiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLG1CQUFSLENBQWQ7QUFBQSxJQUNNQyxzQkFBc0JELFFBQVEsa0NBQVIsQ0FENUI7O0lBR1FFLFcsR0FBZ0JILEssQ0FBaEJHLFc7O0lBRUZDLDZCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxpS0FBbUJGLDZCQUFuQixFQUFrREMsYUFBbEQsRUFBaUVDLFdBQWpFO0FBQWdGOzs7a0NBRXRHO0FBQ1osVUFBTUMsWUFBWSxJQUFsQjs7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7OzswQkFFWUMsTyxFQUFTO0FBQUUsYUFBT04sb0JBQW9CTyxLQUFwQixDQUEwQkwsNkJBQTFCLEVBQXlESSxPQUF6RCxDQUFQO0FBQTJFOzs7Z0NBRWhGQSxPLEVBQVM7QUFBRSxhQUFPTixvQkFBb0JRLFdBQXBCLENBQWdDTiw2QkFBaEMsRUFBK0RJLE9BQS9ELENBQVA7QUFBaUY7Ozs7RUFYckVOLG1COztBQWM1QyxJQUFNUyxPQUFPUixXQUFiO0FBQUEsSUFBMkI7QUFDckJTLG9CQUFvQixLQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjViw2QkFBZCxFQUE2QztBQUMzQ08sWUFEMkM7QUFFM0NDO0FBRjJDLENBQTdDOztBQUtBRyxPQUFPQyxPQUFQLEdBQWlCWiw2QkFBakIiLCJmaWxlIjoibWlkZGxlT2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vdHlwZXMnKSxcbiAgICAgIE5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGNvbW1lbnRUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc0luQ29tbWVudCgpIHtcbiAgICBjb25zdCBpbkNvbW1lbnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gY29tbWVudFR5cGUsICAvLy9cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gL14uKi87XG5cbk9iamVjdC5hc3NpZ24oTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuIl19