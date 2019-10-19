'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../../common/types'),
    NonSignificantToken = require('../../../../../common/token/nonSignificant');

var middleOfMultiLineCommentType = types.middleOfMultiLineCommentType;

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

var type = middleOfMultiLineCommentType,
    ///
regularExpression = /^(?:.+?(?=###)|.+$)/;

Object.assign(MiddleOfMultiLineCommentToken, {
  type: type,
  regularExpression: regularExpression
});

module.exports = MiddleOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZi5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInJlcXVpcmUiLCJOb25TaWduaWZpY2FudFRva2VuIiwibWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VHlwZSIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaW5Db21tZW50IiwiY29udGVudCIsIm1hdGNoIiwiZnJvbUNvbnRlbnQiLCJ0eXBlIiwicmVndWxhckV4cHJlc3Npb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSw2QkFBUixDQUFkO0FBQUEsSUFDTUMsc0JBQXNCRCxRQUFRLDRDQUFSLENBRDVCOztJQUdRRSw0QixHQUFpQ0gsSyxDQUFqQ0csNEI7O0lBRUZDLDZCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxpS0FBbUJGLDZCQUFuQixFQUFrREMsYUFBbEQsRUFBaUVDLFdBQWpFO0FBQWdGOzs7a0NBRXRHO0FBQ1osVUFBTUMsWUFBWSxJQUFsQjs7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7OzswQkFFWUMsTyxFQUFTO0FBQUUsYUFBT04sb0JBQW9CTyxLQUFwQixDQUEwQkwsNkJBQTFCLEVBQXlESSxPQUF6RCxDQUFQO0FBQTJFOzs7Z0NBRWhGQSxPLEVBQVM7QUFBRSxhQUFPTixvQkFBb0JRLFdBQXBCLENBQWdDTiw2QkFBaEMsRUFBK0RJLE9BQS9ELENBQVA7QUFBaUY7Ozs7RUFYckVOLG1COztBQWM1QyxJQUFNUyxPQUFPUiw0QkFBYjtBQUFBLElBQTRDO0FBQ3RDUyxvQkFBb0IscUJBRDFCOztBQUdBQyxPQUFPQyxNQUFQLENBQWNWLDZCQUFkLEVBQTZDO0FBQzNDTyxZQUQyQztBQUUzQ0M7QUFGMkMsQ0FBN0M7O0FBS0FHLE9BQU9DLE9BQVAsR0FBaUJaLDZCQUFqQiIsImZpbGUiOiJtaWRkbGVPZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9jb21tb24vdHlwZXMnKSxcbiAgICAgIE5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY29uc3QgeyBtaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc0luQ29tbWVudCgpIHtcbiAgICBjb25zdCBpbkNvbW1lbnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGluQ29tbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gbWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VHlwZSwgIC8vL1xuICAgICAgcmVndWxhckV4cHJlc3Npb24gPSAvXig/Oi4rPyg/PSMjIyl8LiskKS87XG5cbk9iamVjdC5hc3NpZ24oTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIHtcbiAgdHlwZSxcbiAgcmVndWxhckV4cHJlc3Npb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuO1xuIl19