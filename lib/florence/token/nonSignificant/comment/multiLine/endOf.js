'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../../common/types'),
    NonSignificantToken = require('../../../../../common/token/nonSignificant');

var endOfMultiLineCommentType = types.endOfMultiLineCommentType;

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

var type = endOfMultiLineCommentType,
    ///
regularExpression = /^###/;

Object.assign(EndOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = EndOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZi5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInJlcXVpcmUiLCJOb25TaWduaWZpY2FudFRva2VuIiwiZW5kT2ZNdWx0aUxpbmVDb21tZW50VHlwZSIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaW5Db21tZW50IiwiY29udGVudCIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSw2QkFBUixDQUFkO0FBQUEsSUFDTUMsc0JBQXNCRCxRQUFRLDRDQUFSLENBRDVCOztJQUdRRSx5QixHQUE4QkgsSyxDQUE5QkcseUI7O0lBRUZDLDBCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSwySkFBbUJGLDBCQUFuQixFQUErQ0MsYUFBL0MsRUFBOERDLFdBQTlEO0FBQTZFOzs7a0NBRW5HO0FBQ1osVUFBTUMsWUFBWSxLQUFsQjs7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7OzswQkFFWUMsTyxFQUFTO0FBQUUsYUFBT04sb0JBQW9CTyxLQUFwQixDQUEwQkwsMEJBQTFCLEVBQXNESSxPQUF0RCxDQUFQO0FBQXdFOzs7Z0NBRTdFQSxPLEVBQVM7QUFBRSxhQUFPTixvQkFBb0JRLFdBQXBCLENBQWdDTiwwQkFBaEMsRUFBNERJLE9BQTVELENBQVA7QUFBOEU7Ozs7RUFYckVOLG1COztBQWN6QyxJQUFNUyxPQUFPUix5QkFBYjtBQUFBLElBQXlDO0FBQ25DUyxvQkFBb0IsTUFEMUI7O0FBR0FDLE9BQU9DLE1BQVAsQ0FBY1YsMEJBQWQsRUFBMEM7QUFDeENPLFlBRHdDO0FBRXhDQztBQUZ3QyxDQUExQzs7QUFLQUcsT0FBT0MsT0FBUCxHQUFpQlosMEJBQWpCIiwiZmlsZSI6ImVuZE9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi90eXBlcycpLFxuICAgICAgTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudCcpO1xuXG5jb25zdCB7IGVuZE9mTXVsdGlMaW5lQ29tbWVudFR5cGUgfSA9IHR5cGVzO1xuXG5jbGFzcyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50KCkge1xuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gZW5kT2ZNdWx0aUxpbmVDb21tZW50VHlwZSwgIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXiMjIy87XG5cbk9iamVjdC5hc3NpZ24oRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuIl19