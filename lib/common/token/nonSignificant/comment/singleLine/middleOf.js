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
  }, {
    key: 'fromStringLiteralToken',
    value: function fromStringLiteralToken(stringLiteralToken) {
      var content = stringLiteralToken.getContent(),
          middleOfSingleLineCommentToken = MiddleOfSingleLineCommentToken.fromContent(content);

      return middleOfSingleLineCommentToken;
    }
  }]);

  return MiddleOfSingleLineCommentToken;
}(SingleLineCommentToken);

var type = middleOfSingleLineCommentType;

Object.assign(MiddleOfSingleLineCommentToken, {
  type: type
});

module.exports = MiddleOfSingleLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lL21pZGRsZU9mLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJtaWRkbGVPZlNpbmdsZUxpbmVDb21tZW50VHlwZSIsIk1pZGRsZU9mU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImNvbnRlbnQiLCJmcm9tQ29udGVudCIsInN0cmluZ0xpdGVyYWxUb2tlbiIsImdldENvbnRlbnQiLCJtaWRkbGVPZlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJ0eXBlIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsbUJBQVIsQ0FBZDtBQUFBLElBQ01DLHlCQUF5QkQsUUFBUSwwQkFBUixDQUQvQjs7SUFHUUUsNkIsR0FBa0NILEssQ0FBbENHLDZCOztJQUVGQyw4Qjs7Ozs7Ozs7Ozs7MEJBQ0VDLGEsRUFBZUMsVyxFQUFhO0FBQUUsbUtBQW1CRiw4QkFBbkIsRUFBbURDLGFBQW5ELEVBQWtFQyxXQUFsRTtBQUFpRjs7O2dDQUVsR0MsTyxFQUFTO0FBQUUsYUFBT0wsdUJBQXVCTSxXQUF2QixDQUFtQ0osOEJBQW5DLEVBQW1FRyxPQUFuRSxDQUFQO0FBQXFGOzs7MkNBRXJGRSxrQixFQUFvQjtBQUNoRCxVQUFNRixVQUFVRSxtQkFBbUJDLFVBQW5CLEVBQWhCO0FBQUEsVUFDTUMsaUNBQWlDUCwrQkFBK0JJLFdBQS9CLENBQTJDRCxPQUEzQyxDQUR2Qzs7QUFHQSxhQUFPSSw4QkFBUDtBQUNEOzs7O0VBVjBDVCxzQjs7QUFhN0MsSUFBTVUsT0FBT1QsNkJBQWI7O0FBRUFVLE9BQU9DLE1BQVAsQ0FBY1YsOEJBQWQsRUFBOEM7QUFDNUNRO0FBRDRDLENBQTlDOztBQUlBRyxPQUFPQyxPQUFQLEdBQWlCWiw4QkFBakIiLCJmaWxlIjoibWlkZGxlT2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vdHlwZXMnKSxcbiAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tZW50L3NpbmdsZUxpbmUnKTtcblxuY29uc3QgeyBtaWRkbGVPZlNpbmdsZUxpbmVDb21tZW50VHlwZSB9ID0gdHlwZXM7XG5cbmNsYXNzIE1pZGRsZU9mU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBleHRlbmRzIFNpbmdsZUxpbmVDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoTWlkZGxlT2ZTaW5nbGVMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5mcm9tQ29udGVudChNaWRkbGVPZlNpbmdsZUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmdMaXRlcmFsVG9rZW4oc3RyaW5nTGl0ZXJhbFRva2VuKSB7XG4gICAgY29uc3QgY29udGVudCA9IHN0cmluZ0xpdGVyYWxUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWlkZGxlT2ZTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gTWlkZGxlT2ZTaW5nbGVMaW5lQ29tbWVudFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIG1pZGRsZU9mU2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcbiAgfVxufVxuXG5jb25zdCB0eXBlID0gbWlkZGxlT2ZTaW5nbGVMaW5lQ29tbWVudFR5cGU7XG5cbk9iamVjdC5hc3NpZ24oTWlkZGxlT2ZTaW5nbGVMaW5lQ29tbWVudFRva2VuLCB7XG4gIHR5cGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1pZGRsZU9mU2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcbiJdfQ==