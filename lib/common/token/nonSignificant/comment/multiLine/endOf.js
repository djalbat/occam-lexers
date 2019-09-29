'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    NonSignificantToken = require('../../../../token/nonSignificant');

var commentType = types.commentType;

var EndOfMultiLineCommentToken = function (_NonSignificantToken) {
  _inherits(EndOfMultiLineCommentToken, _NonSignificantToken);

  function EndOfMultiLineCommentToken() {
    _classCallCheck(this, EndOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (EndOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(EndOfMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(EndOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(EndOfMultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(EndOfMultiLineCommentToken.prototype), 'clone', this).call(this, EndOfMultiLineCommentToken, startPosition, endPosition);
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
      return NonSignificantToken.match(EndOfMultiLineCommentToken, content);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(content) {
      return NonSignificantToken.fromContent(EndOfMultiLineCommentToken, content);
    }
  }]);

  return EndOfMultiLineCommentToken;
}(NonSignificantToken);

var type = commentType,
    ///
regularExpression = /^.*\*\//;

Object.assign(EndOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EndOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2YuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsImNvbW1lbnRUeXBlIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJpbkNvbW1lbnQiLCJjb250ZW50IiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLG1CQUFSLENBQWQ7QUFBQSxJQUNNQyxzQkFBc0JELFFBQVEsa0NBQVIsQ0FENUI7O0lBR1FFLFcsR0FBZ0JILEssQ0FBaEJHLFc7O0lBRUZDLDBCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSwySkFBbUJGLDBCQUFuQixFQUErQ0MsYUFBL0MsRUFBOERDLFdBQTlEO0FBQTZFOzs7a0NBRW5HO0FBQ1osVUFBTUMsWUFBWSxLQUFsQjs7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7OzswQkFFWUMsTyxFQUFTO0FBQUUsYUFBT04sb0JBQW9CTyxLQUFwQixDQUEwQkwsMEJBQTFCLEVBQXNESSxPQUF0RCxDQUFQO0FBQXdFOzs7Z0NBRTdFQSxPLEVBQVM7QUFBRSxhQUFPTixvQkFBb0JRLFdBQXBCLENBQWdDTiwwQkFBaEMsRUFBNERJLE9BQTVELENBQVA7QUFBOEU7Ozs7RUFYckVOLG1COztBQWN6QyxJQUFNUyxPQUFPUixXQUFiO0FBQUEsSUFBMkI7QUFDckJTLG9CQUFvQixTQUQxQjs7QUFHQUMsT0FBT0MsTUFBUCxDQUFjViwwQkFBZCxFQUEwQztBQUN4Q08sWUFEd0M7QUFFeENDO0FBRndDLENBQTFDOztBQUtBRyxPQUFPQyxPQUFQLEdBQWlCWiwwQkFBakIiLCJmaWxlIjoiZW5kT2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vdHlwZXMnKSxcbiAgICAgIE5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi8uLi8uLi90b2tlbi9ub25TaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGNvbW1lbnRUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc0luQ29tbWVudCgpIHtcbiAgICBjb25zdCBpbkNvbW1lbnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgbWF0Y2goY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5tYXRjaChFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IGNvbW1lbnRUeXBlLCAgLy8vXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eLipcXCpcXC8vO1xuXG5PYmplY3QuYXNzaWduKEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbjtcbiJdfQ==