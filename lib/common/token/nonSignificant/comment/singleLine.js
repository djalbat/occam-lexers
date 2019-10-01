'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../types'),
    NonSignificantToken = require('../../../token/nonSignificant');

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
    regularExpression = /^\/\/.*/;

Object.assign(SingleLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = SingleLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIk5vblNpZ25pZmljYW50VG9rZW4iLCJjb21tZW50VHlwZSIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJpbkNvbW1lbnQiLCJjb250ZW50IiwibWF0Y2giLCJmcm9tQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGdCQUFSLENBQWQ7QUFBQSxJQUNNQyxzQkFBc0JELFFBQVEsK0JBQVIsQ0FENUI7O0lBR1FFLFcsR0FBZ0JILEssQ0FBaEJHLFc7O0lBRUZDLHNCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxtSkFBbUJGLHNCQUFuQixFQUEyQ0MsYUFBM0MsRUFBMERDLFdBQTFEO0FBQXlFOzs7a0NBRS9GO0FBQ1osVUFBTUMsWUFBWSxLQUFsQjs7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7OzswQkFFWUMsTyxFQUFTO0FBQUUsYUFBT04sb0JBQW9CTyxLQUFwQixDQUEwQkwsc0JBQTFCLEVBQWtESSxPQUFsRCxDQUFQO0FBQW9FOzs7Z0NBRXpFQSxPLEVBQVM7QUFBRSxhQUFPTixvQkFBb0JRLFdBQXBCLENBQWdDTixzQkFBaEMsRUFBd0RJLE9BQXhELENBQVA7QUFBMEU7Ozs7RUFYckVOLG1COztBQWNyQyxJQUFNUyxPQUFPUixXQUFiO0FBQUEsSUFDTVMsb0JBQW9CLFNBRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNWLHNCQUFkLEVBQXNDO0FBQ3BDTyxZQURvQztBQUVwQ0M7QUFGb0MsQ0FBdEM7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJaLHNCQUFqQiIsImZpbGUiOiJzaW5nbGVMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3R5cGVzJyksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBjb21tZW50VHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKFNpbmdsZUxpbmVDb21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50KCkge1xuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKFNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IGNvbW1lbnRUeXBlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcL1xcLy4qLztcblxuT2JqZWN0LmFzc2lnbihTaW5nbGVMaW5lQ29tbWVudFRva2VuLCB7XG4gIHR5cGUsXG4gIHJlZ3VsYXJFeHByZXNzaW9uXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaW5nbGVMaW5lQ29tbWVudFRva2VuO1xuIl19