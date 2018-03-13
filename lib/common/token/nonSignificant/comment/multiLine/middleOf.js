'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../../../types'),
    MultiLineCommentToken = require('../../comment/multiLine');

var multiLineCommentType = types.multiLineCommentType;

var MiddleOfMultiLineCommentToken = function (_MultiLineCommentToke) {
  _inherits(MiddleOfMultiLineCommentToken, _MultiLineCommentToke);

  function MiddleOfMultiLineCommentToken() {
    _classCallCheck(this, MiddleOfMultiLineCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfMultiLineCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfMultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfMultiLineCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return _get(MiddleOfMultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(MiddleOfMultiLineCommentToken.prototype), 'clone', this).call(this, MiddleOfMultiLineCommentToken, startPosition, endPosition);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      return MultiLineCommentToken.fromContent(MiddleOfMultiLineCommentToken, content);
    }
  }]);

  return MiddleOfMultiLineCommentToken;
}(MultiLineCommentToken);

var type = multiLineCommentType; ///

Object.assign(MiddleOfMultiLineCommentToken, {
  type: type
});

module.exports = MiddleOfMultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2YuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiTXVsdGlMaW5lQ29tbWVudFRva2VuIiwibXVsdGlMaW5lQ29tbWVudFR5cGUiLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNvbnRlbnQiLCJmcm9tQ29udGVudCIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxtQkFBUixDQUFkO0FBQUEsSUFDTUMsd0JBQXdCRCxRQUFRLHlCQUFSLENBRDlCOztJQUdRRSxvQixHQUF5QkgsSyxDQUF6Qkcsb0I7O0lBRUZDLDZCOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlQyxXLEVBQWE7QUFBRSxpS0FBbUJGLDZCQUFuQixFQUFrREMsYUFBbEQsRUFBaUVDLFdBQWpFO0FBQWdGOzs7Z0NBRWpHQyxPLEVBQVM7QUFBRSxhQUFPTCxzQkFBc0JNLFdBQXRCLENBQWtDSiw2QkFBbEMsRUFBaUVHLE9BQWpFLENBQVA7QUFBbUY7Ozs7RUFIdkVMLHFCOztBQU01QyxJQUFNTyxPQUFPTixvQkFBYixDLENBQW9DOztBQUVwQ08sT0FBT0MsTUFBUCxDQUFjUCw2QkFBZCxFQUE2QztBQUMzQ0ssUUFBTUE7QUFEcUMsQ0FBN0M7O0FBSUFHLE9BQU9DLE9BQVAsR0FBaUJULDZCQUFqQiIsImZpbGUiOiJtaWRkbGVPZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi90eXBlcycpLFxuICAgICAgTXVsdGlMaW5lQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbWVudC9tdWx0aUxpbmUnKTtcblxuY29uc3QgeyBtdWx0aUxpbmVDb21tZW50VHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTXVsdGlMaW5lQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gTXVsdGlMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuXG5jb25zdCB0eXBlID0gbXVsdGlMaW5lQ29tbWVudFR5cGU7ICAvLy9cblxuT2JqZWN0LmFzc2lnbihNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwge1xuICB0eXBlOiB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbjtcbiJdfQ==