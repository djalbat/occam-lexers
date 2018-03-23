'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    SingleLineCommentToken = require('../../comment/singleLine');

var middleOfSingleLineCommentType = types.middleOfSingleLineCommentType;

var MiddleOfSingleLineCommentToken = function (_SingleLineCommentTok) {
  _inherits(MiddleOfSingleLineCommentToken, _SingleLineCommentTok);

  function MiddleOfSingleLineCommentToken() {
    _classCallCheck(this, MiddleOfSingleLineCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfSingleLineCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfSingleLineCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfSingleLineCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(MiddleOfSingleLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(MiddleOfSingleLineCommentToken.prototype), 'clone', this).call(this, MiddleOfSingleLineCommentToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return SingleLineCommentToken.fromContent(MiddleOfSingleLineCommentToken, content);
    }
  }]);

  return MiddleOfSingleLineCommentToken;
}(SingleLineCommentToken);

var type = middleOfSingleLineCommentType;

Object.assign(MiddleOfSingleLineCommentToken, {
  type: type
});

module.exports = MiddleOfSingleLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lL21pZGRsZU9mLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJtaWRkbGVPZlNpbmdsZUxpbmVDb21tZW50VHlwZSIsIk1pZGRsZU9mU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNvbnRlbnQiLCJmcm9tQ29udGVudCIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxtQkFBUixDQUFkO0FBQUEsSUFDTUMseUJBQXlCRCxRQUFRLDBCQUFSLENBRC9COztJQUdRRSw2QixHQUFrQ0gsSyxDQUFsQ0csNkI7O0lBRUZDLDhCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxtS0FBbUJGLDhCQUFuQixFQUFtREMsYUFBbkQsRUFBa0VDLFdBQWxFO0FBQWlGOzs7Z0NBRWxHQyxPLEVBQVM7QUFBRSxhQUFPTCx1QkFBdUJNLFdBQXZCLENBQW1DSiw4QkFBbkMsRUFBbUVHLE9BQW5FLENBQVA7QUFBcUY7Ozs7RUFIeEVMLHNCOztBQU03QyxJQUFNTyxPQUFPTiw2QkFBYjs7QUFFQU8sT0FBT0MsTUFBUCxDQUFjUCw4QkFBZCxFQUE4QztBQUM1Q0ssUUFBTUE7QUFEc0MsQ0FBOUM7O0FBSUFHLE9BQU9DLE9BQVAsR0FBaUJULDhCQUFqQiIsImZpbGUiOiJtaWRkbGVPZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi90eXBlcycpLFxuICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1lbnQvc2luZ2xlTGluZScpO1xuXG5jb25zdCB7IG1pZGRsZU9mU2luZ2xlTGluZUNvbW1lbnRUeXBlIH0gPSB0eXBlcztcblxuY2xhc3MgTWlkZGxlT2ZTaW5nbGVMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBzdXBlci5jbG9uZShNaWRkbGVPZlNpbmdsZUxpbmVDb21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaW5nbGVMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KE1pZGRsZU9mU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cblxuY29uc3QgdHlwZSA9IG1pZGRsZU9mU2luZ2xlTGluZUNvbW1lbnRUeXBlO1xuXG5PYmplY3QuYXNzaWduKE1pZGRsZU9mU2luZ2xlTGluZUNvbW1lbnRUb2tlbiwge1xuICB0eXBlOiB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNaWRkbGVPZlNpbmdsZUxpbmVDb21tZW50VG9rZW47XG4iXX0=